"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[227],{46899:function(e,t,n){n.d(t,{Ir:function(){return y},Mm:function(){return d},b9:function(){return g},hQ:function(){return p},nM:function(){return x},p8:function(){return v},r5:function(){return u},rK:function(){return l},ry:function(){return h},tT:function(){return f}});var r=n(15861),a=n(87757),c=n.n(a),s=n(74569),o=n.n(s),i=n(66460),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,2e5],a=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(){var u=(0,r.Z)(c().mark((function r(u){var p,l,d;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u({type:i.Ty}),p="/api/v1/products?keyword=".concat(e,"&page=").concat(t,"&Price[gte]=").concat(n[0],"&Price[lte]=").concat(n[1],"&Ratings[gte]=").concat(s),a&&(p="/api/v1/products?keyword=".concat(e,"&page=").concat(t,"&Price[gte]=").concat(n[0],"&Price[lte]=").concat(n[1],"&Category=").concat(a,"&Ratings[gte]=").concat(s)),r.next=6,o().get(p);case 6:l=r.sent,d=l.data,u({type:i.js,payload:d}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),u({type:i.Vh,payload:r.t0.response.data.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return u.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,r.Z)(c().mark((function t(n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.Uy}),t.next=4,o().get("/api/v1/product/".concat(e));case 4:r=t.sent,a=r.data,n({type:i.xe,payload:a.product}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:i.gh,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(){var n=(0,r.Z)(c().mark((function n(r){var a,s,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.zK}),a={headers:{"Content-Type":"application/json"}},n.next=5,o().put("/api/v1/product/".concat(e,"/review"),t,a);case 5:s=n.sent,u=s.data,r({type:i.Yu,payload:u.success}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.V_,payload:n.t0.response.data.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,r.Z)(c().mark((function t(n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.MJ}),t.next=4,o().get("/api/v1/reviews?id=".concat(e));case 4:r=t.sent,a=r.data,n({type:i.zh,payload:a.reviews}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:i.Rc,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var n=(0,r.Z)(c().mark((function n(r){var a,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.fz}),n.next=4,o().delete("/api/v1/reviews?id=".concat(e,"&productId=").concat(t));case 4:a=n.sent,s=a.data,r({type:i.g6,payload:s.success}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r({type:i.Om,payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},v=function(){return function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.Iq}),e.next=4,o().get("/api/v1/admin/products");case 4:n=e.sent,r=n.data,t({type:i.AT,payload:r.products}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.zH,payload:"error.response.data.message"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,r.Z)(c().mark((function t(n){var r,a,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.TK}),r={headers:{"Content-Type":"application/json"}},t.next=5,o().post("/api/v1/admin/product/new",e,r);case 5:a=t.sent,s=a.data,n({type:i.Cy,payload:s}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:i.J$,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var n=(0,r.Z)(c().mark((function n(r){var a,s,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:i.L7}),a={headers:{"Content-Type":"application/json"}},n.next=5,o().put("/api/v1/admin/product/".concat(e),t,a);case 5:s=n.sent,u=s.data,r({type:i.zk,payload:u.success}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:i.ki,payload:n.t0.response.data.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},y=function(e){return function(){var t=(0,r.Z)(c().mark((function t(n){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.bi}),t.next=4,o().delete("/api/v1/admin/product/".concat(e));case 4:r=t.sent,a=r.data,n({type:i.cO,payload:a.success}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:i.IX,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:i.pp});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},52703:function(e,t,n){var r=n(1413),a=n(91523),c=n(55112),s=(n(51291),n(80184));t.Z=function(e){var t=e.product,n={edit:!1,color:"gold",activeColor:"tomato",size:window.innerWidth<600?20:25,value:t.Ratings,isHalf:!0},o="/product/".concat(t._id),i=t.Images[0].url;return i=i.substring(0,55)+"f_auto/"+i.substring(55,i.length),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.Link,{className:"productCard",to:o,children:[(0,s.jsx)("div",{className:"img",children:(0,s.jsx)("img",{src:i,alt:t.Name})}),(0,s.jsx)("p",{children:t.Name}),(0,s.jsxs)("div",{children:[(0,s.jsx)(c.Z,(0,r.Z)({},n)),(0,s.jsxs)("span",{children:["(",t.NumofReviews," Reviews)"]})]}),(0,s.jsxs)("span",{className:"price",children:[" \u20b9",t.Price," "]})]})})}},98696:function(e,t,n){var r=n(54270),a=n(80184);t.Z=function(e){var t=e.title;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{children:(0,a.jsx)("title",{children:t})})})}},71567:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(80184),a=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"load1",children:(0,r.jsx)("div",{className:"load2"})})})}},98227:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(70885),a=n(72791),c=n(59434),s=n(46899),o=n(71567),i=n(52703),u=n(3637),p=n(24076),l=n(56534),d=n(38302),f=n(98696),v=n(80184),h=["All","Laptop","Shirt","Bottom","Tops","Attire","Camera","SmartPhones"],x=function(e){var t=e.match,n=(0,c.I0)(),x=(0,l.VY)(),y=(0,a.useState)(1),g=(0,r.Z)(y,2),m=g[0],j=g[1],k=(0,a.useState)([0,2e5]),w=(0,r.Z)(k,2),Z=w[0],C=w[1],b=(0,a.useState)(""),P=(0,r.Z)(b,2),N=P[0],T=P[1],R=(0,a.useState)(0),I=(0,r.Z)(R,2),L=I[0],A=I[1],S=(0,c.v9)((function(e){return e.allproducts})),z=S.products,F=S.loading,M=S.error,B=S.productscount,E=S.resultPerPage,O=S.filteredProductsCount,_=t.params.keyword;return(0,a.useEffect)((function(){M&&(x.error(M),n((0,s.b9)())),n((0,s.r5)(_,m,Z,N,L))}),[n,_,m,Z,N,L,x,M]),(0,v.jsx)(a.Fragment,{children:(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)(f.Z,{title:"PRODUCTS -- ECOMMERCE"}),(0,v.jsx)("h2",{className:"productsHeading",children:"Products"}),(0,v.jsx)("div",{className:"products",children:F?(0,v.jsx)(o.Z,{}):(0,v.jsx)(v.Fragment,{children:z&&z.map((function(e){return(0,v.jsx)(i.Z,{product:e},e._id)}))})}),(0,v.jsxs)("div",{className:"filterBox",children:[(0,v.jsx)(d.Z,{children:"Price"}),(0,v.jsx)(p.Z,{value:Z,onChange:function(e,t){C(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:0,max:1e5}),(0,v.jsx)(d.Z,{children:"Categories"}),(0,v.jsx)("ul",{className:"categoryBox",children:h.map((function(e){return(0,v.jsx)("li",{className:"category-link",onClick:function(){return T("All"===e?"":e)},children:e},e)}))}),(0,v.jsxs)("fieldset",{children:[(0,v.jsx)(d.Z,{component:"legend",children:"Ratings Above"}),(0,v.jsx)(p.Z,{value:L,onChange:function(e,t){A(t)},"aria-labelledby":"continuous-slider",valueLabelDisplay:"auto",min:0,max:5})]})]}),E<O&&(0,v.jsx)("div",{className:"paginationBox",children:(0,v.jsx)(u.Z,{activePage:m,itemsCountPerPage:E,totalItemsCount:B,onChange:function(e){j(e)},nextPageText:"Next",prevPageText:"Prev",firstPageText:"1st",lastPageText:"Last",itemClass:"page-item",linkClass:"page-link",activeClass:"pageItemActive",activeLinkClass:"pageLinkActive"})})]})})}},51291:function(){}}]);
//# sourceMappingURL=227.3b0a3830.chunk.js.map