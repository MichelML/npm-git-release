(require 'cljs.build.api)

(cljs.build.api/build
  "src"
  {:main 'npm-git-release.core
   :target :nodejs
   :output-to "main.js"
   :verbose true})
