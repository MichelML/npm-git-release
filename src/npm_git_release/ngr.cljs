(ns npm-git-release.ngr
  (:require
    [cljs.nodejs :as node]
    [clojure.string :refer [lower-case trim]]))

(def process (node/require "process"))
(def exec-sync (.. (node/require "child_process") -execSync))

(def release-type (-> (.. process -argv) last lower-case trim))
(def cmds [(str "npm version " release-type) "git push origin master" "git push origin master --tags" "npm publish"])

(defn ngr
  "Releases the specified type of release on npm and github with the appropriate tag."
  []
  (if (some #(= % release-type) ["patch" "minor" "major"])
    (do
      (doseq [cmd cmds] (exec-sync cmd {:stdio "inherit" :shell true}))
      (println (str "\nA new " release-type " version was released successfully!"))
      (.exit process 0))
    (do
      (throw "Wrong type of release provided. You must specify a patch, minor, or major release.")
      (.exit process 1))))
