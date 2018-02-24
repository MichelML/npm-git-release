// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('npm_git_release.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('cljs.test');
cljs.nodejs.enable_util_print_BANG_.call(null);
npm_git_release.core.process = cljs.nodejs.require.call(null,"process");
npm_git_release.core.exec_sync = cljs.nodejs.require.call(null,"child_process").execSync;
npm_git_release.core.string_decoder = cljs.nodejs.require.call(null,"string_decoder").StringDecoder;
npm_git_release.core.decoder = (new npm_git_release.core.string_decoder("utf8"));
npm_git_release.core.release_type = clojure.string.trim.call(null,clojure.string.lower_case.call(null,cljs.core.last.call(null,npm_git_release.core.process.argv)));
npm_git_release.core.cmds = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["npm version ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(npm_git_release.core.release_type)].join(''),"git push origin master","git push origin master --tags","npm publish"], null);
/**
 * Releases the specified type of release on npm and git with the appropriate tag.
 */
npm_git_release.core.ngr = (function npm_git_release$core$ngr(){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28_SHARP_){
return cljs.core._EQ_.call(null,p1__28_SHARP_,npm_git_release.core.release_type);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["patch","minor","major"], null)))){
var seq__29 = cljs.core.seq.call(null,npm_git_release.core.cmds);
var chunk__30 = null;
var count__31 = (0);
var i__32 = (0);
while(true){
if((i__32 < count__31)){
var cmd = cljs.core._nth.call(null,chunk__30,i__32);
cljs.core.println.call(null,npm_git_release.core.decoder.write(npm_git_release.core.exec_sync.call(null,cmd)));

var G__33 = seq__29;
var G__34 = chunk__30;
var G__35 = count__31;
var G__36 = (i__32 + (1));
seq__29 = G__33;
chunk__30 = G__34;
count__31 = G__35;
i__32 = G__36;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29);
if(temp__4657__auto__){
var seq__29__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29__$1)){
var c__4231__auto__ = cljs.core.chunk_first.call(null,seq__29__$1);
var G__37 = cljs.core.chunk_rest.call(null,seq__29__$1);
var G__38 = c__4231__auto__;
var G__39 = cljs.core.count.call(null,c__4231__auto__);
var G__40 = (0);
seq__29 = G__37;
chunk__30 = G__38;
count__31 = G__39;
i__32 = G__40;
continue;
} else {
var cmd = cljs.core.first.call(null,seq__29__$1);
cljs.core.println.call(null,npm_git_release.core.decoder.write(npm_git_release.core.exec_sync.call(null,cmd)));

var G__41 = cljs.core.next.call(null,seq__29__$1);
var G__42 = null;
var G__43 = (0);
var G__44 = (0);
seq__29 = G__41;
chunk__30 = G__42;
count__31 = G__43;
i__32 = G__44;
continue;
}
} else {
return null;
}
}
break;
}
} else {
throw "Wrong type of release provided. You must specify a patch, minor, or major release.";

return npm_git_release.core.process.exit((1));
}
});
npm_git_release.core._main = (function npm_git_release$core$_main(var_args){
var args__4414__auto__ = [];
var len__4411__auto___46 = arguments.length;
var i__4412__auto___47 = (0);
while(true){
if((i__4412__auto___47 < len__4411__auto___46)){
args__4414__auto__.push((arguments[i__4412__auto___47]));

var G__48 = (i__4412__auto___47 + (1));
i__4412__auto___47 = G__48;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return npm_git_release.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});

npm_git_release.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return npm_git_release.core.ngr.call(null);
});

npm_git_release.core._main.cljs$lang$maxFixedArity = (0);

npm_git_release.core._main.cljs$lang$applyTo = (function (seq45){
return npm_git_release.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45));
});

cljs.core._STAR_main_cli_fn_STAR_ = npm_git_release.core._main;

//# sourceMappingURL=core.js.map
