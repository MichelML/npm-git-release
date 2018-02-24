goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/pprint.js", ['cljs.pprint'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer', 'clojure.string']);
goog.addDependency("../cljs/test.js", ['cljs.test'], ['cljs.core', 'cljs.pprint', 'clojure.string']);
goog.addDependency("../84A0198.js", ['cljs.nodejs'], ['cljs.core']);
goog.addDependency("../npm_git_release/core.js", ['npm_git_release.core'], ['cljs.core', 'cljs.test', 'cljs.nodejs', 'clojure.string']);
goog.addDependency("../AEF573C.js", ['cljs.nodejscli'], ['cljs.core', 'cljs.nodejs', 'goog.object']);
