"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[650],{1030:function(n,e,t){var i,r,o,a=t(168),s=t(5751),l=t(184),c=(0,s.iv)(i||(i=(0,a.Z)(["\n  height: 100%;\n  max-width: 350px;\n  @media "," {\n    width: 200px;\n  }\n  @media "," {\n    width: 150px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.mobile})),u=s.ZP.img(r||(r=(0,a.Z)(["\n  ","\n"])),c),d=s.ZP.div(o||(o=(0,a.Z)(["\n  ","\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  padding: 0 10px;\n"])),c);e.Z=function(n){var e=n.poster;return(0,l.jsx)(l.Fragment,{children:e?(0,l.jsx)(u,{src:"".concat("https://image.tmdb.org/t/p/w342").concat(e),alt:"poster"}):(0,l.jsx)(d,{children:"NOT AVAILABLE POSTER"})})}},7548:function(n,e,t){t.d(e,{Z:function(){return E}});var i,r=t(168),o=t(2791),a=t(3504),s=t(6355),l=t(5751),c=t(184),u=l.ZP.button(i||(i=(0,r.Z)(["\n  color: #a20100;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 2rem;\n  background-color: transparent;\n  font-weight: bold;\n  z-index: 1;\n"])));var d,f,p,x=function(n){var e=n.like,t=n.onLike;return(0,c.jsx)(u,{onClick:t,children:e?(0,c.jsx)(s.$0H,{}):(0,c.jsx)(s.BgW,{})})},m=t(1030),v=t(1413),g=t(5987),h=t(8820),j=t(6412),Z=["title","originalTitle","year","rating"],b=l.ZP.div(d||(d=(0,r.Z)(["\n  visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 0.5rem 1rem;\n  transition: all 0.3s linear;\n  transform: translateY(100%);\n"]))),k=l.ZP.div(f||(f=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .year {\n    font-size: 13px;\n  }\n"]))),y=l.ZP.p(p||(p=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  svg {\n    color: #f4c519;\n    margin-right: 3px;\n  }\n"])));var w,P=function(n){var e=n.title,t=n.originalTitle,i=n.year,r=n.rating,o=(0,g.Z)(n,Z);return(0,c.jsxs)(b,(0,v.Z)((0,v.Z)({},o),{},{children:[(0,c.jsx)("div",{children:(0,c.jsxs)(j.Z,{level:4,children:[e,e!==t&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),"(",t,")"]})]})}),(0,c.jsxs)(k,{children:[(0,c.jsx)("p",{className:"year",children:!isNaN(i)&&i}),0!==r&&(0,c.jsxs)(y,{children:[(0,c.jsx)(h.pHD,{}),(0,c.jsx)("span",{children:r})]})]})]}))},C=t(1845),_=t(6535),L=(0,l.ZP)(a.rU)(w||(w=(0,r.Z)(["\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  &:hover .MovieInfo {\n    visibility: visible;\n    transform: translateY(0);\n  }\n"]))),E=function(n){var e=n.movie,t=e.title,i=e.original_title,r=e.poster_path,a=e.id,s=e.vote_average,l=(0,o.useContext)(C.Md),u=(0,_.U)(!1,e),d=u.like,f=u.setLike,p=u.onLike;return(0,o.useEffect)((function(){l.forEach((function(n){return n.id===a&&f(!0)}))}),[]),(0,c.jsx)("li",{children:(0,c.jsxs)(L,{to:"/movie/".concat(a),children:[(0,c.jsx)(x,{like:d,onLike:p}),(0,c.jsx)(m.Z,{poster:r}),(0,c.jsx)(P,{title:t,originalTitle:i,year:parseInt(e.release_date),rating:s,className:"MovieInfo"})]})})}},9147:function(n,e,t){var i,r=t(168),o=(t(2791),t(7548)),a=t(5751),s=t(184),l=a.ZP.ul(i||(i=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n"])));e.Z=function(n){var e=n.movies;return(0,s.jsx)(l,{children:e.map((function(n){return(0,s.jsx)(o.Z,{movie:n},n.id)}))})}},2186:function(n,e,t){t.d(e,{WY:function(){return s},vO:function(){return l},OT:function(){return i.O}});t(6535);var i=t(4843),r=t(8152),o=t(2791),a=t(6871),s=function(){var n=(0,a.bx)(),e=(0,r.Z)(n,2),t=e[0],i=e[1];(0,o.useEffect)((function(){t&&i()}),[])},l=function(n){(0,o.useEffect)((function(){window.scrollTo({top:0})}),n)}},6535:function(n,e,t){t.d(e,{U:function(){return a}});var i=t(8152),r=t(2791),o=t(1845),a=function(n,e){var t=(0,r.useContext)(o.u8),a=t.addFavoriteMovie,s=t.removeFavoriteMovie,l=(0,r.useState)(n),c=(0,i.Z)(l,2),u=c[0],d=c[1];return{like:u,setLike:d,onLike:function(n){n.preventDefault(),d(!u),u?s(e.id):a(e)}}}},6650:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var i,r=t(8152),o=t(168),a=t(2791),s=t(6871),l=t(6412),c=t(7692),u=t(5751),d=t(184),f=u.ZP.div(i||(i=(0,o.Z)(["\n  margin-bottom: 3rem;\n  text-transform: capitalize;\n  display: flex;\n  align-items: center;\n  svg {\n    font-size: 2.5rem;\n    margin-left: 1rem;\n    color: ",";\n  }\n"])),(function(n){return n.theme.color.darkBlue}));var p,x,m,v=function(n){var e=n.type;return(0,d.jsxs)(f,{className:"movies__title",children:[(0,d.jsxs)(l.Z,{children:[e.replace("_"," ")," movies"]}),(0,d.jsx)(c.FXJ,{})]})},g=t(9147),h=t(6355),j=u.ZP.nav(p||(p=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n  gap: 1.3rem;\n"]))),Z=u.ZP.button(x||(x=(0,o.Z)(["\n  color: #fff;\n  background: #000;\n  padding: 0.7rem;\n  border-radius: 5px;\n  flex-basis: 2rem;\n  transition: all 0.3s ease-in-out;\n  &:hover {\n    background-color: ",";\n  }\n  &[disabled] {\n    cursor: auto;\n    background: rgba(0, 0, 0, 0.5);\n  }\n  &[aria-current] {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.skyBlue}),(function(n){return n.theme.color.skyBlue})),b=function(n){var e=n.total,t=n.limit,i=n.page,o=n.setPage,s=Math.ceil(e/t),l=(0,a.useState)(5),c=(0,r.Z)(l,1)[0],u=(0,a.useState)(0),f=(0,r.Z)(u,2),p=f[0],x=f[1];return(0,a.useEffect)((function(){i>p+c?x(p+c):i===p&&x(p-c)}),[i]),(0,d.jsxs)(j,{children:[(0,d.jsx)(Z,{onClick:function(){return o(i-1)},disabled:1===i,children:(0,d.jsx)(h.bUI,{})}),Array(s).fill().slice(p,c+p).map((function(n,e){return(0,d.jsx)(Z,{onClick:function(){return o(e+p+1)},"aria-current":i===p+e+1?"page":null,children:e+p+1},e+1+p)})),(0,d.jsx)(Z,{onClick:function(){return o(i+1)},disabled:i===s,children:(0,d.jsx)(h.Dli,{})})]})},k=t(4701),y=t(2186),w=u.ZP.main(m||(m=(0,o.Z)(["\n  width: 90vw;\n  padding: 2.5rem 0;\n"]))),P=function(){var n=(0,s.UO)().type,e=(0,a.useContext)(k.a).movies[n],t=(0,a.useState)(1),i=(0,r.Z)(t,2),o=i[0],l=i[1],c=12*(o-1);return(0,y.vO)([o]),(0,d.jsxs)(w,{children:[n&&(0,d.jsx)(v,{type:n}),e&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Z,{movies:e.slice(c,c+12)}),(0,d.jsx)(b,{total:e.length,limit:12,page:o,setPage:l})]})]})}}}]);
//# sourceMappingURL=650.c7c1fd38.chunk.js.map