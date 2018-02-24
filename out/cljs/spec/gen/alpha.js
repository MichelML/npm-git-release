// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4073__auto__,writer__4074__auto__,opt__4075__auto__){
return cljs.core._write.call(null,writer__4074__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2332 = arguments.length;
var i__4412__auto___2333 = (0);
while(true){
if((i__4412__auto___2333 < len__4411__auto___2332)){
args__4414__auto__.push((arguments[i__4412__auto___2333]));

var G__2334 = (i__4412__auto___2333 + (1));
i__4412__auto___2333 = G__2334;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq2331){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2331));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2336 = arguments.length;
var i__4412__auto___2337 = (0);
while(true){
if((i__4412__auto___2337 < len__4411__auto___2336)){
args__4414__auto__.push((arguments[i__4412__auto___2337]));

var G__2338 = (i__4412__auto___2337 + (1));
i__4412__auto___2337 = G__2338;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq2335){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2335));
});

var g_QMARK__2339 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_2340 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__2339){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__2339))
,null));
var mkg_2341 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__2339,g_2340){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__2339,g_2340))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__2339,g_2340,mkg_2341){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__2339).call(null,x);
});})(g_QMARK__2339,g_2340,mkg_2341))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__2339,g_2340,mkg_2341){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_2341).call(null,gfn);
});})(g_QMARK__2339,g_2340,mkg_2341))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__2339,g_2340,mkg_2341){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_2340).call(null,generator);
});})(g_QMARK__2339,g_2340,mkg_2341))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7158__auto___2361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__7158__auto___2361){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2362 = arguments.length;
var i__4412__auto___2363 = (0);
while(true){
if((i__4412__auto___2363 < len__4411__auto___2362)){
args__4414__auto__.push((arguments[i__4412__auto___2363]));

var G__2364 = (i__4412__auto___2363 + (1));
i__4412__auto___2363 = G__2364;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2361))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2361),args);
});})(g__7158__auto___2361))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__7158__auto___2361){
return (function (seq2342){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2342));
});})(g__7158__auto___2361))
;


var g__7158__auto___2365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__7158__auto___2365){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2366 = arguments.length;
var i__4412__auto___2367 = (0);
while(true){
if((i__4412__auto___2367 < len__4411__auto___2366)){
args__4414__auto__.push((arguments[i__4412__auto___2367]));

var G__2368 = (i__4412__auto___2367 + (1));
i__4412__auto___2367 = G__2368;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2365))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2365),args);
});})(g__7158__auto___2365))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__7158__auto___2365){
return (function (seq2343){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2343));
});})(g__7158__auto___2365))
;


var g__7158__auto___2369 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__7158__auto___2369){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2370 = arguments.length;
var i__4412__auto___2371 = (0);
while(true){
if((i__4412__auto___2371 < len__4411__auto___2370)){
args__4414__auto__.push((arguments[i__4412__auto___2371]));

var G__2372 = (i__4412__auto___2371 + (1));
i__4412__auto___2371 = G__2372;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2369))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2369),args);
});})(g__7158__auto___2369))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__7158__auto___2369){
return (function (seq2344){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2344));
});})(g__7158__auto___2369))
;


var g__7158__auto___2373 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__7158__auto___2373){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2374 = arguments.length;
var i__4412__auto___2375 = (0);
while(true){
if((i__4412__auto___2375 < len__4411__auto___2374)){
args__4414__auto__.push((arguments[i__4412__auto___2375]));

var G__2376 = (i__4412__auto___2375 + (1));
i__4412__auto___2375 = G__2376;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2373))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2373),args);
});})(g__7158__auto___2373))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__7158__auto___2373){
return (function (seq2345){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2345));
});})(g__7158__auto___2373))
;


var g__7158__auto___2377 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__7158__auto___2377){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2378 = arguments.length;
var i__4412__auto___2379 = (0);
while(true){
if((i__4412__auto___2379 < len__4411__auto___2378)){
args__4414__auto__.push((arguments[i__4412__auto___2379]));

var G__2380 = (i__4412__auto___2379 + (1));
i__4412__auto___2379 = G__2380;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2377))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2377),args);
});})(g__7158__auto___2377))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__7158__auto___2377){
return (function (seq2346){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2346));
});})(g__7158__auto___2377))
;


var g__7158__auto___2381 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__7158__auto___2381){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2382 = arguments.length;
var i__4412__auto___2383 = (0);
while(true){
if((i__4412__auto___2383 < len__4411__auto___2382)){
args__4414__auto__.push((arguments[i__4412__auto___2383]));

var G__2384 = (i__4412__auto___2383 + (1));
i__4412__auto___2383 = G__2384;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2381))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2381),args);
});})(g__7158__auto___2381))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__7158__auto___2381){
return (function (seq2347){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2347));
});})(g__7158__auto___2381))
;


var g__7158__auto___2385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__7158__auto___2385){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2386 = arguments.length;
var i__4412__auto___2387 = (0);
while(true){
if((i__4412__auto___2387 < len__4411__auto___2386)){
args__4414__auto__.push((arguments[i__4412__auto___2387]));

var G__2388 = (i__4412__auto___2387 + (1));
i__4412__auto___2387 = G__2388;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2385))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2385),args);
});})(g__7158__auto___2385))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__7158__auto___2385){
return (function (seq2348){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2348));
});})(g__7158__auto___2385))
;


var g__7158__auto___2389 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__7158__auto___2389){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2390 = arguments.length;
var i__4412__auto___2391 = (0);
while(true){
if((i__4412__auto___2391 < len__4411__auto___2390)){
args__4414__auto__.push((arguments[i__4412__auto___2391]));

var G__2392 = (i__4412__auto___2391 + (1));
i__4412__auto___2391 = G__2392;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2389))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2389),args);
});})(g__7158__auto___2389))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__7158__auto___2389){
return (function (seq2349){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2349));
});})(g__7158__auto___2389))
;


var g__7158__auto___2393 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__7158__auto___2393){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2394 = arguments.length;
var i__4412__auto___2395 = (0);
while(true){
if((i__4412__auto___2395 < len__4411__auto___2394)){
args__4414__auto__.push((arguments[i__4412__auto___2395]));

var G__2396 = (i__4412__auto___2395 + (1));
i__4412__auto___2395 = G__2396;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2393))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2393),args);
});})(g__7158__auto___2393))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__7158__auto___2393){
return (function (seq2350){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2350));
});})(g__7158__auto___2393))
;


var g__7158__auto___2397 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__7158__auto___2397){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2398 = arguments.length;
var i__4412__auto___2399 = (0);
while(true){
if((i__4412__auto___2399 < len__4411__auto___2398)){
args__4414__auto__.push((arguments[i__4412__auto___2399]));

var G__2400 = (i__4412__auto___2399 + (1));
i__4412__auto___2399 = G__2400;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2397))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2397),args);
});})(g__7158__auto___2397))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__7158__auto___2397){
return (function (seq2351){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2351));
});})(g__7158__auto___2397))
;


var g__7158__auto___2401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__7158__auto___2401){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2402 = arguments.length;
var i__4412__auto___2403 = (0);
while(true){
if((i__4412__auto___2403 < len__4411__auto___2402)){
args__4414__auto__.push((arguments[i__4412__auto___2403]));

var G__2404 = (i__4412__auto___2403 + (1));
i__4412__auto___2403 = G__2404;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2401))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2401),args);
});})(g__7158__auto___2401))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__7158__auto___2401){
return (function (seq2352){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2352));
});})(g__7158__auto___2401))
;


var g__7158__auto___2405 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__7158__auto___2405){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2406 = arguments.length;
var i__4412__auto___2407 = (0);
while(true){
if((i__4412__auto___2407 < len__4411__auto___2406)){
args__4414__auto__.push((arguments[i__4412__auto___2407]));

var G__2408 = (i__4412__auto___2407 + (1));
i__4412__auto___2407 = G__2408;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2405))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2405),args);
});})(g__7158__auto___2405))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__7158__auto___2405){
return (function (seq2353){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2353));
});})(g__7158__auto___2405))
;


var g__7158__auto___2409 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__7158__auto___2409){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2410 = arguments.length;
var i__4412__auto___2411 = (0);
while(true){
if((i__4412__auto___2411 < len__4411__auto___2410)){
args__4414__auto__.push((arguments[i__4412__auto___2411]));

var G__2412 = (i__4412__auto___2411 + (1));
i__4412__auto___2411 = G__2412;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2409))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2409),args);
});})(g__7158__auto___2409))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__7158__auto___2409){
return (function (seq2354){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2354));
});})(g__7158__auto___2409))
;


var g__7158__auto___2413 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__7158__auto___2413){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2414 = arguments.length;
var i__4412__auto___2415 = (0);
while(true){
if((i__4412__auto___2415 < len__4411__auto___2414)){
args__4414__auto__.push((arguments[i__4412__auto___2415]));

var G__2416 = (i__4412__auto___2415 + (1));
i__4412__auto___2415 = G__2416;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2413))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2413),args);
});})(g__7158__auto___2413))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__7158__auto___2413){
return (function (seq2355){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2355));
});})(g__7158__auto___2413))
;


var g__7158__auto___2417 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__7158__auto___2417){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2418 = arguments.length;
var i__4412__auto___2419 = (0);
while(true){
if((i__4412__auto___2419 < len__4411__auto___2418)){
args__4414__auto__.push((arguments[i__4412__auto___2419]));

var G__2420 = (i__4412__auto___2419 + (1));
i__4412__auto___2419 = G__2420;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2417))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2417),args);
});})(g__7158__auto___2417))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__7158__auto___2417){
return (function (seq2356){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2356));
});})(g__7158__auto___2417))
;


var g__7158__auto___2421 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__7158__auto___2421){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2422 = arguments.length;
var i__4412__auto___2423 = (0);
while(true){
if((i__4412__auto___2423 < len__4411__auto___2422)){
args__4414__auto__.push((arguments[i__4412__auto___2423]));

var G__2424 = (i__4412__auto___2423 + (1));
i__4412__auto___2423 = G__2424;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2421))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2421),args);
});})(g__7158__auto___2421))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__7158__auto___2421){
return (function (seq2357){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2357));
});})(g__7158__auto___2421))
;


var g__7158__auto___2425 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__7158__auto___2425){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2426 = arguments.length;
var i__4412__auto___2427 = (0);
while(true){
if((i__4412__auto___2427 < len__4411__auto___2426)){
args__4414__auto__.push((arguments[i__4412__auto___2427]));

var G__2428 = (i__4412__auto___2427 + (1));
i__4412__auto___2427 = G__2428;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2425))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2425),args);
});})(g__7158__auto___2425))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__7158__auto___2425){
return (function (seq2358){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2358));
});})(g__7158__auto___2425))
;


var g__7158__auto___2429 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__7158__auto___2429){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2430 = arguments.length;
var i__4412__auto___2431 = (0);
while(true){
if((i__4412__auto___2431 < len__4411__auto___2430)){
args__4414__auto__.push((arguments[i__4412__auto___2431]));

var G__2432 = (i__4412__auto___2431 + (1));
i__4412__auto___2431 = G__2432;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2429))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2429),args);
});})(g__7158__auto___2429))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__7158__auto___2429){
return (function (seq2359){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2359));
});})(g__7158__auto___2429))
;


var g__7158__auto___2433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__7158__auto___2433){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2434 = arguments.length;
var i__4412__auto___2435 = (0);
while(true){
if((i__4412__auto___2435 < len__4411__auto___2434)){
args__4414__auto__.push((arguments[i__4412__auto___2435]));

var G__2436 = (i__4412__auto___2435 + (1));
i__4412__auto___2435 = G__2436;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7158__auto___2433))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7158__auto___2433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7158__auto___2433),args);
});})(g__7158__auto___2433))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__7158__auto___2433){
return (function (seq2360){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2360));
});})(g__7158__auto___2433))
;

var g__7163__auto___2458 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__7163__auto___2458){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2459 = arguments.length;
var i__4412__auto___2460 = (0);
while(true){
if((i__4412__auto___2460 < len__4411__auto___2459)){
args__4414__auto__.push((arguments[i__4412__auto___2460]));

var G__2461 = (i__4412__auto___2460 + (1));
i__4412__auto___2460 = G__2461;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2458))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2458){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2458);
});})(g__7163__auto___2458))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__7163__auto___2458){
return (function (seq2437){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2437));
});})(g__7163__auto___2458))
;


var g__7163__auto___2462 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__7163__auto___2462){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2463 = arguments.length;
var i__4412__auto___2464 = (0);
while(true){
if((i__4412__auto___2464 < len__4411__auto___2463)){
args__4414__auto__.push((arguments[i__4412__auto___2464]));

var G__2465 = (i__4412__auto___2464 + (1));
i__4412__auto___2464 = G__2465;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2462))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2462){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2462);
});})(g__7163__auto___2462))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__7163__auto___2462){
return (function (seq2438){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2438));
});})(g__7163__auto___2462))
;


var g__7163__auto___2466 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__7163__auto___2466){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2467 = arguments.length;
var i__4412__auto___2468 = (0);
while(true){
if((i__4412__auto___2468 < len__4411__auto___2467)){
args__4414__auto__.push((arguments[i__4412__auto___2468]));

var G__2469 = (i__4412__auto___2468 + (1));
i__4412__auto___2468 = G__2469;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2466))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2466){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2466);
});})(g__7163__auto___2466))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__7163__auto___2466){
return (function (seq2439){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2439));
});})(g__7163__auto___2466))
;


var g__7163__auto___2470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__7163__auto___2470){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2471 = arguments.length;
var i__4412__auto___2472 = (0);
while(true){
if((i__4412__auto___2472 < len__4411__auto___2471)){
args__4414__auto__.push((arguments[i__4412__auto___2472]));

var G__2473 = (i__4412__auto___2472 + (1));
i__4412__auto___2472 = G__2473;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2470))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2470){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2470);
});})(g__7163__auto___2470))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__7163__auto___2470){
return (function (seq2440){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2440));
});})(g__7163__auto___2470))
;


var g__7163__auto___2474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__7163__auto___2474){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2475 = arguments.length;
var i__4412__auto___2476 = (0);
while(true){
if((i__4412__auto___2476 < len__4411__auto___2475)){
args__4414__auto__.push((arguments[i__4412__auto___2476]));

var G__2477 = (i__4412__auto___2476 + (1));
i__4412__auto___2476 = G__2477;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2474))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2474){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2474);
});})(g__7163__auto___2474))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__7163__auto___2474){
return (function (seq2441){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2441));
});})(g__7163__auto___2474))
;


var g__7163__auto___2478 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__7163__auto___2478){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2479 = arguments.length;
var i__4412__auto___2480 = (0);
while(true){
if((i__4412__auto___2480 < len__4411__auto___2479)){
args__4414__auto__.push((arguments[i__4412__auto___2480]));

var G__2481 = (i__4412__auto___2480 + (1));
i__4412__auto___2480 = G__2481;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2478))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2478){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2478);
});})(g__7163__auto___2478))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__7163__auto___2478){
return (function (seq2442){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2442));
});})(g__7163__auto___2478))
;


var g__7163__auto___2482 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__7163__auto___2482){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2483 = arguments.length;
var i__4412__auto___2484 = (0);
while(true){
if((i__4412__auto___2484 < len__4411__auto___2483)){
args__4414__auto__.push((arguments[i__4412__auto___2484]));

var G__2485 = (i__4412__auto___2484 + (1));
i__4412__auto___2484 = G__2485;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2482))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2482){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2482);
});})(g__7163__auto___2482))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__7163__auto___2482){
return (function (seq2443){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2443));
});})(g__7163__auto___2482))
;


var g__7163__auto___2486 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__7163__auto___2486){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2487 = arguments.length;
var i__4412__auto___2488 = (0);
while(true){
if((i__4412__auto___2488 < len__4411__auto___2487)){
args__4414__auto__.push((arguments[i__4412__auto___2488]));

var G__2489 = (i__4412__auto___2488 + (1));
i__4412__auto___2488 = G__2489;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2486))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2486){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2486);
});})(g__7163__auto___2486))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__7163__auto___2486){
return (function (seq2444){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2444));
});})(g__7163__auto___2486))
;


var g__7163__auto___2490 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__7163__auto___2490){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2491 = arguments.length;
var i__4412__auto___2492 = (0);
while(true){
if((i__4412__auto___2492 < len__4411__auto___2491)){
args__4414__auto__.push((arguments[i__4412__auto___2492]));

var G__2493 = (i__4412__auto___2492 + (1));
i__4412__auto___2492 = G__2493;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2490))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2490){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2490);
});})(g__7163__auto___2490))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__7163__auto___2490){
return (function (seq2445){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2445));
});})(g__7163__auto___2490))
;


var g__7163__auto___2494 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__7163__auto___2494){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2495 = arguments.length;
var i__4412__auto___2496 = (0);
while(true){
if((i__4412__auto___2496 < len__4411__auto___2495)){
args__4414__auto__.push((arguments[i__4412__auto___2496]));

var G__2497 = (i__4412__auto___2496 + (1));
i__4412__auto___2496 = G__2497;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2494))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2494){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2494);
});})(g__7163__auto___2494))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__7163__auto___2494){
return (function (seq2446){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2446));
});})(g__7163__auto___2494))
;


var g__7163__auto___2498 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__7163__auto___2498){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2499 = arguments.length;
var i__4412__auto___2500 = (0);
while(true){
if((i__4412__auto___2500 < len__4411__auto___2499)){
args__4414__auto__.push((arguments[i__4412__auto___2500]));

var G__2501 = (i__4412__auto___2500 + (1));
i__4412__auto___2500 = G__2501;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2498))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2498){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2498);
});})(g__7163__auto___2498))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__7163__auto___2498){
return (function (seq2447){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2447));
});})(g__7163__auto___2498))
;


var g__7163__auto___2502 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__7163__auto___2502){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2503 = arguments.length;
var i__4412__auto___2504 = (0);
while(true){
if((i__4412__auto___2504 < len__4411__auto___2503)){
args__4414__auto__.push((arguments[i__4412__auto___2504]));

var G__2505 = (i__4412__auto___2504 + (1));
i__4412__auto___2504 = G__2505;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2502))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2502){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2502);
});})(g__7163__auto___2502))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__7163__auto___2502){
return (function (seq2448){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2448));
});})(g__7163__auto___2502))
;


var g__7163__auto___2506 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__7163__auto___2506){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2507 = arguments.length;
var i__4412__auto___2508 = (0);
while(true){
if((i__4412__auto___2508 < len__4411__auto___2507)){
args__4414__auto__.push((arguments[i__4412__auto___2508]));

var G__2509 = (i__4412__auto___2508 + (1));
i__4412__auto___2508 = G__2509;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2506))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2506){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2506);
});})(g__7163__auto___2506))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__7163__auto___2506){
return (function (seq2449){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2449));
});})(g__7163__auto___2506))
;


var g__7163__auto___2510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__7163__auto___2510){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2511 = arguments.length;
var i__4412__auto___2512 = (0);
while(true){
if((i__4412__auto___2512 < len__4411__auto___2511)){
args__4414__auto__.push((arguments[i__4412__auto___2512]));

var G__2513 = (i__4412__auto___2512 + (1));
i__4412__auto___2512 = G__2513;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2510))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2510){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2510);
});})(g__7163__auto___2510))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__7163__auto___2510){
return (function (seq2450){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2450));
});})(g__7163__auto___2510))
;


var g__7163__auto___2514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__7163__auto___2514){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2515 = arguments.length;
var i__4412__auto___2516 = (0);
while(true){
if((i__4412__auto___2516 < len__4411__auto___2515)){
args__4414__auto__.push((arguments[i__4412__auto___2516]));

var G__2517 = (i__4412__auto___2516 + (1));
i__4412__auto___2516 = G__2517;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2514))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2514){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2514);
});})(g__7163__auto___2514))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__7163__auto___2514){
return (function (seq2451){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2451));
});})(g__7163__auto___2514))
;


var g__7163__auto___2518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__7163__auto___2518){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2519 = arguments.length;
var i__4412__auto___2520 = (0);
while(true){
if((i__4412__auto___2520 < len__4411__auto___2519)){
args__4414__auto__.push((arguments[i__4412__auto___2520]));

var G__2521 = (i__4412__auto___2520 + (1));
i__4412__auto___2520 = G__2521;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2518))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2518){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2518);
});})(g__7163__auto___2518))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__7163__auto___2518){
return (function (seq2452){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2452));
});})(g__7163__auto___2518))
;


var g__7163__auto___2522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__7163__auto___2522){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2523 = arguments.length;
var i__4412__auto___2524 = (0);
while(true){
if((i__4412__auto___2524 < len__4411__auto___2523)){
args__4414__auto__.push((arguments[i__4412__auto___2524]));

var G__2525 = (i__4412__auto___2524 + (1));
i__4412__auto___2524 = G__2525;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2522))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2522){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2522);
});})(g__7163__auto___2522))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__7163__auto___2522){
return (function (seq2453){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2453));
});})(g__7163__auto___2522))
;


var g__7163__auto___2526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__7163__auto___2526){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2527 = arguments.length;
var i__4412__auto___2528 = (0);
while(true){
if((i__4412__auto___2528 < len__4411__auto___2527)){
args__4414__auto__.push((arguments[i__4412__auto___2528]));

var G__2529 = (i__4412__auto___2528 + (1));
i__4412__auto___2528 = G__2529;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2526))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2526){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2526);
});})(g__7163__auto___2526))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__7163__auto___2526){
return (function (seq2454){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2454));
});})(g__7163__auto___2526))
;


var g__7163__auto___2530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__7163__auto___2530){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2531 = arguments.length;
var i__4412__auto___2532 = (0);
while(true){
if((i__4412__auto___2532 < len__4411__auto___2531)){
args__4414__auto__.push((arguments[i__4412__auto___2532]));

var G__2533 = (i__4412__auto___2532 + (1));
i__4412__auto___2532 = G__2533;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2530))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2530){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2530);
});})(g__7163__auto___2530))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__7163__auto___2530){
return (function (seq2455){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2455));
});})(g__7163__auto___2530))
;


var g__7163__auto___2534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__7163__auto___2534){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2535 = arguments.length;
var i__4412__auto___2536 = (0);
while(true){
if((i__4412__auto___2536 < len__4411__auto___2535)){
args__4414__auto__.push((arguments[i__4412__auto___2536]));

var G__2537 = (i__4412__auto___2536 + (1));
i__4412__auto___2536 = G__2537;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2534))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2534){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2534);
});})(g__7163__auto___2534))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__7163__auto___2534){
return (function (seq2456){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2456));
});})(g__7163__auto___2534))
;


var g__7163__auto___2538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__7163__auto___2538){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2539 = arguments.length;
var i__4412__auto___2540 = (0);
while(true){
if((i__4412__auto___2540 < len__4411__auto___2539)){
args__4414__auto__.push((arguments[i__4412__auto___2540]));

var G__2541 = (i__4412__auto___2540 + (1));
i__4412__auto___2540 = G__2541;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});})(g__7163__auto___2538))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7163__auto___2538){
return (function (args){
return cljs.core.deref.call(null,g__7163__auto___2538);
});})(g__7163__auto___2538))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__7163__auto___2538){
return (function (seq2457){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2457));
});})(g__7163__auto___2538))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4414__auto__ = [];
var len__4411__auto___2544 = arguments.length;
var i__4412__auto___2545 = (0);
while(true){
if((i__4412__auto___2545 < len__4411__auto___2544)){
args__4414__auto__.push((arguments[i__4412__auto___2545]));

var G__2546 = (i__4412__auto___2545 + (1));
i__4412__auto___2545 = G__2546;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((0) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4415__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__2542_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__2542_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq2543){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2543));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__2547_SHARP_){
return (new Date(p1__2547_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
