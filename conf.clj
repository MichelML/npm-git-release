(require 'cljs.repl)
(require '[cljs.build.api :refer [build watch]])
(require 'cljs.repl.node)

(defn is-repl? [first-arg] (= first-arg "--repl")) 

(defn is-watch? [first-arg] (= first-arg "--watch")) 

(defn is-test? [first-arg] (= first-arg "--test")) 

(defn is-test-watch? [first-arg] (= first-arg "--test-watch")) 

(defn test-mode? [first-arg] (or (is-test-watch? first-arg) (is-test? first-arg)))

(defn watch-mode? [first-arg] (or (is-test-watch? first-arg) (is-watch? first-arg)))

(defn get-build-type [first-arg]
  (if (watch-mode? first-arg)
    watch 
    build))

(defn get-main [first-arg]
  (if (test-mode? first-arg)
    'npm-git-release.core-test 
    'npm-git-release.core))

(defn get-output-to [first-arg] 
  (cond 
    (is-repl? first-arg) "out/main.js"
    (test-mode? first-arg) "test.js"
    :else "main.js"))

(def arg1 (first *command-line-args*))

((get-build-type arg1)
 "src"
 {:main (get-main arg1)
  :target :nodejs
  :verbose true
  :output-to (get-output-to arg1)})

(when (is-repl? arg1)
  (cljs.repl/repl 
    (cljs.repl.node/repl-env)
    :watch "src"
    :output-dir "out"))

