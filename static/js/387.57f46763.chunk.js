"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{135:function(n,e,t){t.d(e,{Hx:function(){return s},Mc:function(){return u},Pv:function(){return o},Yx:function(){return r},uV:function(){return l}});var c=t(243),a="e547d49db32dd8dd8191ece466e036a9",i="https://api.themoviedb.org/3",r=function(){return c.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(a))},o=function(n){return c.Z.get("".concat(i,"/search/movie?query=").concat(n,"&api_key=").concat(a,"&language=en-US&page=1&include_adult=false"))},u=function(n){return c.Z.get("".concat(i,"/movie/").concat(n,"}?api_key=").concat(a,"&language=en-US"))},l=function(n){return c.Z.get("".concat(i,"/movie/").concat(n,"}/credits?api_key=").concat(a,"&language=en-US"))},s=function(n){return c.Z.get("".concat(i,"/movie/").concat(n,"}/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},387:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var c,a,i,r=t(439),o=t(135),u=t(791),l=t(689),s=t(168),f=t(444),d=f.ZP.ul(c||(c=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-left: 20px;\n  list-style: none;\n"]))),g=f.ZP.li(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),p=f.ZP.img(i||(i=(0,s.Z)(["\n  display: block;\n  width: 100px;\n  height: 100%;\n"]))),m=t(184),h=function(){var n=(0,l.UO)().movieId,e=(0,u.useState)([]),t=(0,r.Z)(e,2),c=t[0],a=t[1];return(0,u.useEffect)((function(){(0,o.uV)(n).then((function(n){var e=n.data.cast;return a(e)}))}),[n]),(0,m.jsx)(d,{children:c&&c.map((function(n){var e=n.credit_id,t=n.profile_path,c=n.name;return(0,m.jsxs)(g,{children:[(0,m.jsx)(p,{src:"https://image.tmdb.org/t/p/original".concat(t),alt:"name"}),(0,m.jsx)("p",{children:c})]},e)}))})}}}]);
//# sourceMappingURL=387.57f46763.chunk.js.map