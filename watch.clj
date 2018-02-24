(require 'cljs.build.api)

(cljs.build.api/watch 
  "src"
  {:main 'npm-git-release.core
   :target :nodejs
   :output-to "main.js"
   :verbose true})
