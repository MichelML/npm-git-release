(require 'cljs.repl)
(require '[cljs.build.api :refer [build watch]])
(require 'cljs.repl.node)

(defn is-repl? [first-arg] (= first-arg "--repl")) 
(defn is-watch? [first-arg] (= first-arg "--watch")) 
(defn build-or-watch [first-arg] (if (is-watch? first-arg) watch build))
(defn get-output-to [first-arg] (if (is-repl? first-arg) "out/main.js" "main.js"))

(def arg1 (first *command-line-args*))

((build-or-watch arg1)
 "src"
 {:main 'npm-git-release.core
  :target :nodejs
  :verbose true
  :output-to (get-output-to arg1)})

(when (is-repl? arg1)
  (cljs.repl/repl 
    (cljs.repl.node/repl-env)
    :watch "src"
    :output-dir "out"))

