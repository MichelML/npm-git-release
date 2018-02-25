(ns npm-git-release.core
  (:require
    [npm-git-release.ngr :refer [ngr]]
    [cljs.nodejs :as node]))

(node/enable-util-print!)

(defn -main [& args] (ngr))

(set! *main-cli-fn* -main)

