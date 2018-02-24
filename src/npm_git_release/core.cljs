(ns npm-git-release.core
  (:require
    [cljs.nodejs :as node]
    [clojure.string :as string]
    [cljs.test :refer-macros [deftest is testing run-tests]]
    ))

(node/enable-util-print!)

(def process (node/require "process"))
(def exec-sync (.. (node/require "child_process") -execSync))
(def string-decoder (.. (node/require "string_decoder") -StringDecoder))

(def decoder (string-decoder. "utf8"))
(def release-type (-> (.. process -argv) last string/lower-case string/trim))
(def cmds [(str "npm version " release-type) "git push origin master" "git push origin master --tags" "npm publish"])

(defn ngr
  "Releases the specified type of release on npm and git with the appropriate tag."
  []
  (if (some #(= % release-type) ["patch" "minor" "major"])
    (doseq [cmd cmds] (println (.write decoder (exec-sync cmd))))
    (do
      (throw "Wrong type of release provided. You must specify a patch, minor, or major release.")
      (.exit process 1))))

(defn -main [& args] (ngr))

(set! *main-cli-fn* -main)

