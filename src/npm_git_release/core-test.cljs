(ns npm-git-release.core-test
  (:require 
    [cljs.nodejs :as node]
    [cljs.test :refer-macros [deftest is run-tests]]))

(deftest first-test (is false))

(enable-console-print!)

(run-tests)

