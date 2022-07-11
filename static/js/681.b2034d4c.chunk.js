"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[681],{1030:function(n,e,t){var i,r,o,a=t(168),s=t(5751),c=t(184),l=(0,s.iv)(i||(i=(0,a.Z)(["\n  height: 100%;\n  max-width: 300px;\n  @media "," {\n    width: 200px;\n  }\n  @media "," {\n    width: 150px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.mobile})),u=s.ZP.img(r||(r=(0,a.Z)(["\n  ","\n"])),l),d=s.ZP.div(o||(o=(0,a.Z)(["\n  ","\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  padding: 0 10px;\n"])),l);e.Z=function(n){var e=n.poster;return(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)(u,{src:"".concat("https://image.tmdb.org/t/p/w342").concat(e),alt:"poster"}):(0,c.jsx)(d,{children:"NOT AVAILABLE POSTER"})})}},7548:function(n,e,t){t.d(e,{Z:function(){return C}});var i,r=t(168),o=t(2791),a=t(3504),s=t(6355),c=t(5751),l=t(184),u=c.ZP.button(i||(i=(0,r.Z)(["\n  color: #a20100;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 2rem;\n  background-color: transparent;\n  font-weight: bold;\n  z-index: 1;\n"])));var d,f,p,v=function(n){var e=n.like,t=n.onLike;return(0,l.jsx)(u,{onClick:t,children:e?(0,l.jsx)(s.$0H,{}):(0,l.jsx)(s.BgW,{})})},x=t(1030),m=t(1413),h=t(5987),g=t(8820),Z=t(6412),j=["title","originalTitle","year","rating"],b=c.ZP.div(d||(d=(0,r.Z)(["\n  visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 0.5rem 1rem;\n  transition: all 0.3s linear;\n  transform: translateY(100%);\n"]))),k=c.ZP.div(f||(f=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .year {\n    font-size: 13px;\n  }\n"]))),w=c.ZP.p(p||(p=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  svg {\n    color: #f4c519;\n    margin-right: 3px;\n  }\n"])));var y,P=function(n){var e=n.title,t=n.originalTitle,i=n.year,r=n.rating,o=(0,h.Z)(n,j);return(0,l.jsxs)(b,(0,m.Z)((0,m.Z)({},o),{},{children:[(0,l.jsx)("div",{children:(0,l.jsxs)(Z.Z,{level:4,children:[e,e!==t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("br",{}),"(",t,")"]})]})}),(0,l.jsxs)(k,{children:[(0,l.jsx)("p",{className:"year",children:!isNaN(i)&&i}),0!==r&&(0,l.jsxs)(w,{children:[(0,l.jsx)(g.pHD,{}),(0,l.jsx)("span",{children:r})]})]})]}))},L=t(1845),M=t(6535),T=(0,c.ZP)(a.rU)(y||(y=(0,r.Z)(["\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  &:hover .MovieInfo {\n    visibility: visible;\n    transform: translateY(0);\n  }\n"]))),C=function(n){var e=n.movie,t=e.title,i=e.original_title,r=e.poster_path,a=e.id,s=e.vote_average,c=(0,o.useContext)(L.Md),u=(0,M.U)(!1,e),d=u.like,f=u.setLike,p=u.onLike;return(0,o.useEffect)((function(){c.forEach((function(n){return n.id===a&&f(!0)}))}),[]),(0,l.jsx)("li",{children:(0,l.jsxs)(T,{to:"/movie/".concat(a),children:[(0,l.jsx)(v,{like:d,onLike:p}),(0,l.jsx)(x.Z,{poster:r}),(0,l.jsx)(P,{title:t,originalTitle:i,year:parseInt(e.release_date),rating:s,className:"MovieInfo"})]})})}},9147:function(n,e,t){var i,r=t(168),o=(t(2791),t(7548)),a=t(5751),s=t(184),c=a.ZP.ul(i||(i=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n"])));e.Z=function(n){var e=n.movies;return(0,s.jsx)(c,{children:e.map((function(n){return(0,s.jsx)(o.Z,{movie:n},n.id)}))})}},2186:function(n,e,t){t.d(e,{WY:function(){return s},vO:function(){return c},OT:function(){return i.O}});t(6535);var i=t(4843),r=t(8152),o=t(2791),a=t(6871),s=function(){var n=(0,a.bx)(),e=(0,r.Z)(n,2),t=e[0],i=e[1];(0,o.useEffect)((function(){t&&i()}),[])},c=function(n){(0,o.useEffect)((function(){window.scrollTo({top:0})}),n)}},6535:function(n,e,t){t.d(e,{U:function(){return a}});var i=t(8152),r=t(2791),o=t(1845),a=function(n,e){var t=(0,r.useContext)(o.u8),a=t.addFavoriteMovie,s=t.removeFavoriteMovie,c=(0,r.useState)(n),l=(0,i.Z)(c,2),u=l[0],d=l[1];return{like:u,setLike:d,onLike:function(n){n.preventDefault(),d(!u),u?s(e.id):a(e)}}}},9681:function(n,e,t){t.r(e);var i,r=t(168),o=t(2791),a=t(9147),s=t(6412),c=t(1845),l=t(2186),u=t(5751),d=t(184),f=u.ZP.main(i||(i=(0,r.Z)(["\n  padding-top: 2.6rem;\n  padding-bottom: 3.5rem;\n  h1 {\n    text-transform: capitalize;\n    text-align: center;\n    margin-bottom: 3rem;\n  }\n"])));e.default=function(){(0,l.WY)();var n=(0,o.useContext)(c.Md);return(0,d.jsxs)(f,{children:[(0,d.jsx)(s.Z,{children:"Your Favorite Movies \ud83d\udc96"}),(0,d.jsx)(a.Z,{movies:n})]})}}}]);
//# sourceMappingURL=681.b2034d4c.chunk.js.map