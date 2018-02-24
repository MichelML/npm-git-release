// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64__i = 0, G__64__a = new Array(arguments.length -  0);
while (G__64__i < G__64__a.length) {G__64__a[G__64__i] = arguments[G__64__i + 0]; ++G__64__i;}
  args = new cljs.core.IndexedSeq(G__64__a,0,null);
} 
return G__63__delegate.call(this,args);};
G__63.cljs$lang$maxFixedArity = 0;
G__63.cljs$lang$applyTo = (function (arglist__65){
var args = cljs.core.seq(arglist__65);
return G__63__delegate(args);
});
G__63.cljs$core$IFn$_invoke$arity$variadic = G__63__delegate;
return G__63;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__66__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__66 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67__i = 0, G__67__a = new Array(arguments.length -  0);
while (G__67__i < G__67__a.length) {G__67__a[G__67__i] = arguments[G__67__i + 0]; ++G__67__i;}
  args = new cljs.core.IndexedSeq(G__67__a,0,null);
} 
return G__66__delegate.call(this,args);};
G__66.cljs$lang$maxFixedArity = 0;
G__66.cljs$lang$applyTo = (function (arglist__68){
var args = cljs.core.seq(arglist__68);
return G__66__delegate(args);
});
G__66.cljs$core$IFn$_invoke$arity$variadic = G__66__delegate;
return G__66;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
