goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1173__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1174__i = 0, G__1174__a = new Array(arguments.length -  0);
while (G__1174__i < G__1174__a.length) {G__1174__a[G__1174__i] = arguments[G__1174__i + 0]; ++G__1174__i;}
  args = new cljs.core.IndexedSeq(G__1174__a,0,null);
} 
return G__1173__delegate.call(this,args);};
G__1173.cljs$lang$maxFixedArity = 0;
G__1173.cljs$lang$applyTo = (function (arglist__1175){
var args = cljs.core.seq(arglist__1175);
return G__1173__delegate(args);
});
G__1173.cljs$core$IFn$_invoke$arity$variadic = G__1173__delegate;
return G__1173;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1176__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1177__i = 0, G__1177__a = new Array(arguments.length -  0);
while (G__1177__i < G__1177__a.length) {G__1177__a[G__1177__i] = arguments[G__1177__i + 0]; ++G__1177__i;}
  args = new cljs.core.IndexedSeq(G__1177__a,0,null);
} 
return G__1176__delegate.call(this,args);};
G__1176.cljs$lang$maxFixedArity = 0;
G__1176.cljs$lang$applyTo = (function (arglist__1178){
var args = cljs.core.seq(arglist__1178);
return G__1176__delegate(args);
});
G__1176.cljs$core$IFn$_invoke$arity$variadic = G__1176__delegate;
return G__1176;
})()
;

return null;
});
