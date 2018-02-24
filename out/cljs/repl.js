// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1660){
var map__1661 = p__1660;
var map__1661__$1 = ((((!((map__1661 == null)))?((((map__1661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1661):map__1661);
var m = map__1661__$1;
var n = cljs.core.get.call(null,map__1661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1663_1685 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1664_1686 = null;
var count__1665_1687 = (0);
var i__1666_1688 = (0);
while(true){
if((i__1666_1688 < count__1665_1687)){
var f_1689 = cljs.core._nth.call(null,chunk__1664_1686,i__1666_1688);
cljs.core.println.call(null,"  ",f_1689);

var G__1690 = seq__1663_1685;
var G__1691 = chunk__1664_1686;
var G__1692 = count__1665_1687;
var G__1693 = (i__1666_1688 + (1));
seq__1663_1685 = G__1690;
chunk__1664_1686 = G__1691;
count__1665_1687 = G__1692;
i__1666_1688 = G__1693;
continue;
} else {
var temp__4657__auto___1694 = cljs.core.seq.call(null,seq__1663_1685);
if(temp__4657__auto___1694){
var seq__1663_1695__$1 = temp__4657__auto___1694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1663_1695__$1)){
var c__4231__auto___1696 = cljs.core.chunk_first.call(null,seq__1663_1695__$1);
var G__1697 = cljs.core.chunk_rest.call(null,seq__1663_1695__$1);
var G__1698 = c__4231__auto___1696;
var G__1699 = cljs.core.count.call(null,c__4231__auto___1696);
var G__1700 = (0);
seq__1663_1685 = G__1697;
chunk__1664_1686 = G__1698;
count__1665_1687 = G__1699;
i__1666_1688 = G__1700;
continue;
} else {
var f_1701 = cljs.core.first.call(null,seq__1663_1695__$1);
cljs.core.println.call(null,"  ",f_1701);

var G__1702 = cljs.core.next.call(null,seq__1663_1695__$1);
var G__1703 = null;
var G__1704 = (0);
var G__1705 = (0);
seq__1663_1685 = G__1702;
chunk__1664_1686 = G__1703;
count__1665_1687 = G__1704;
i__1666_1688 = G__1705;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1706 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3836__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3836__auto__)){
return or__3836__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1706);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1706)))?cljs.core.second.call(null,arglists_1706):arglists_1706));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1667_1707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1668_1708 = null;
var count__1669_1709 = (0);
var i__1670_1710 = (0);
while(true){
if((i__1670_1710 < count__1669_1709)){
var vec__1671_1711 = cljs.core._nth.call(null,chunk__1668_1708,i__1670_1710);
var name_1712 = cljs.core.nth.call(null,vec__1671_1711,(0),null);
var map__1674_1713 = cljs.core.nth.call(null,vec__1671_1711,(1),null);
var map__1674_1714__$1 = ((((!((map__1674_1713 == null)))?((((map__1674_1713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1674_1713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1674_1713):map__1674_1713);
var doc_1715 = cljs.core.get.call(null,map__1674_1714__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1716 = cljs.core.get.call(null,map__1674_1714__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1712);

cljs.core.println.call(null," ",arglists_1716);

if(cljs.core.truth_(doc_1715)){
cljs.core.println.call(null," ",doc_1715);
} else {
}

var G__1717 = seq__1667_1707;
var G__1718 = chunk__1668_1708;
var G__1719 = count__1669_1709;
var G__1720 = (i__1670_1710 + (1));
seq__1667_1707 = G__1717;
chunk__1668_1708 = G__1718;
count__1669_1709 = G__1719;
i__1670_1710 = G__1720;
continue;
} else {
var temp__4657__auto___1721 = cljs.core.seq.call(null,seq__1667_1707);
if(temp__4657__auto___1721){
var seq__1667_1722__$1 = temp__4657__auto___1721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1667_1722__$1)){
var c__4231__auto___1723 = cljs.core.chunk_first.call(null,seq__1667_1722__$1);
var G__1724 = cljs.core.chunk_rest.call(null,seq__1667_1722__$1);
var G__1725 = c__4231__auto___1723;
var G__1726 = cljs.core.count.call(null,c__4231__auto___1723);
var G__1727 = (0);
seq__1667_1707 = G__1724;
chunk__1668_1708 = G__1725;
count__1669_1709 = G__1726;
i__1670_1710 = G__1727;
continue;
} else {
var vec__1676_1728 = cljs.core.first.call(null,seq__1667_1722__$1);
var name_1729 = cljs.core.nth.call(null,vec__1676_1728,(0),null);
var map__1679_1730 = cljs.core.nth.call(null,vec__1676_1728,(1),null);
var map__1679_1731__$1 = ((((!((map__1679_1730 == null)))?((((map__1679_1730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1679_1730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1679_1730):map__1679_1730);
var doc_1732 = cljs.core.get.call(null,map__1679_1731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1733 = cljs.core.get.call(null,map__1679_1731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1729);

cljs.core.println.call(null," ",arglists_1733);

if(cljs.core.truth_(doc_1732)){
cljs.core.println.call(null," ",doc_1732);
} else {
}

var G__1734 = cljs.core.next.call(null,seq__1667_1722__$1);
var G__1735 = null;
var G__1736 = (0);
var G__1737 = (0);
seq__1667_1707 = G__1734;
chunk__1668_1708 = G__1735;
count__1669_1709 = G__1736;
i__1670_1710 = G__1737;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__1681 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1682 = null;
var count__1683 = (0);
var i__1684 = (0);
while(true){
if((i__1684 < count__1683)){
var role = cljs.core._nth.call(null,chunk__1682,i__1684);
var temp__4657__auto___1738__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1738__$1)){
var spec_1739 = temp__4657__auto___1738__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1739));
} else {
}

var G__1740 = seq__1681;
var G__1741 = chunk__1682;
var G__1742 = count__1683;
var G__1743 = (i__1684 + (1));
seq__1681 = G__1740;
chunk__1682 = G__1741;
count__1683 = G__1742;
i__1684 = G__1743;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1681);
if(temp__4657__auto____$1){
var seq__1681__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1681__$1)){
var c__4231__auto__ = cljs.core.chunk_first.call(null,seq__1681__$1);
var G__1744 = cljs.core.chunk_rest.call(null,seq__1681__$1);
var G__1745 = c__4231__auto__;
var G__1746 = cljs.core.count.call(null,c__4231__auto__);
var G__1747 = (0);
seq__1681 = G__1744;
chunk__1682 = G__1745;
count__1683 = G__1746;
i__1684 = G__1747;
continue;
} else {
var role = cljs.core.first.call(null,seq__1681__$1);
var temp__4657__auto___1748__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1748__$2)){
var spec_1749 = temp__4657__auto___1748__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1749));
} else {
}

var G__1750 = cljs.core.next.call(null,seq__1681__$1);
var G__1751 = null;
var G__1752 = (0);
var G__1753 = (0);
seq__1681 = G__1750;
chunk__1682 = G__1751;
count__1683 = G__1752;
i__1684 = G__1753;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
