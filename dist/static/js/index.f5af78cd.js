/*! For license information please see index.f5af78cd.js.LICENSE.txt */
!function(){var e,t,n,r,a={65760:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n("67294"),a=n.n(r),c=n("50533");n("54169");var i=n("78597"),u=n("57778"),l=n("20039"),o=n("21377"),s=n("49323"),m=n("79655"),f=n("11099"),d=n("45064"),p=n("1818");n("78178");var g=function(){var e=(0,c.useDispatch)();return(0,r.useEffect)(function(){e((0,i.fetchGoodsList)())},[]),a().createElement(a().Fragment,null,a().createElement(p.ReactNotifications,null),a().createElement(m.Routes,null,a().createElement(m.Route,{path:"/",element:a().createElement(f.Layout,null)},a().createElement(m.Route,{path:"/",element:a().createElement(u.default,null)}),a().createElement(m.Route,{path:"/cart",element:a().createElement(l.default,null)}),a().createElement(m.Route,{path:"/orderpage",element:a().createElement(s.default,null)}),a().createElement(m.Route,{path:"/auth",element:a().createElement(o.default,null)}),a().createElement(m.Route,{path:"/account",element:a().createElement(d.default,null)}))))}},2171:function(e,t,n){"use strict";n.r(t),n.d(t,{LABELS:function(){return a},STATUS_MAP:function(){return l},hostUrl:function(){return r},initialCountState:function(){return s},initialFilterValue:function(){return o},initialPriceValue:function(){return f},initialUserData:function(){return c},optionsInitialization:function(){return m},paginationInitialValue:function(){return d},typeOfNotification:function(){return p}}),n("47941"),n("57658");var r={listItems:"http://localhost:4002/goods",getItem:"http://localhost:4002/goods",signUp:"http://localhost:4002/signup",signIn:"http://localhost:4002/signin",logOut:"http://localhost:4002/logout"},a=["\u0422\u043E\u0432\u0430\u0440","\u0422\u043E\u0432\u0430\u0440\u0430","\u0422\u043E\u0432\u0430\u0440\u043E\u0432"],c={login:"",password:""},i={all:"\u0412\u0441\u0435",phones:"\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B",computers:"\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B",kitchen:"\u043A\u0443\u0445\u043D\u044F",TV:"\u0422\u0412"},u=Object.keys(i),l={pending:"pending",fulfilled:"fulfilled",rejected:"rejected"},o={bestOffer:!1,name:"",category:[]},s=1,m=function(){for(var e=[],t=0;t<Object.keys(i).length;t++)e.push({value:u[t],label:i[u[t]]});return e},f=[1,25e4],d={pageSize:5,currentPage:1,pageSizeOptions:[3,5,10]},p={error:"danger",success:"success"}},66413:function(e,t,n){"use strict";n.r(t),n.d(t,{getProductInfo:function(){return l}});var r,a=n("76150"),c=n("18965");n("92222");var i=n("27233"),u=n("2171");var l=(r=(0,a._)(function(e){return(0,c._)(this,function(t){switch(t.label){case 0:return[4,i.default.get("".concat(u.hostUrl.getItem,"/").concat(e))];case 1:return[2,t.sent()]}})}),function(e){return r.apply(this,arguments)})},88843:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n("76150"),a=n("27412"),c=n("7409"),i=n("99282"),u=n("38956"),l=n("18965"),o=n("67294"),s=n.n(o),m=n("50533"),f=n("68370"),d=n("7704"),p=n("2171"),g=n("79552"),h=function(){var e,t,n=(0,m.useDispatch)(),h=(0,u._)((0,o.useState)(p.initialUserData),2),E=h[0],v=h[1],y=(0,u._)((0,o.useState)({unregistered:!0}),2),S=y[0],b=y[1],N=function(e){v(function(t){return(0,i._)((0,c._)({},t),(0,a._)({},e.target.name,e.target.value))})},_=function(e){e.preventDefault(),b(function(e){return(0,i._)((0,c._)({},e),{unregistered:!S.unregistered})})};var C=(e=(0,r._)(function(){return(0,l._)(this,function(e){return n((0,g.signIn)(E)),[2]})}),function(){return e.apply(this,arguments)});var k=(t=(0,r._)(function(){return(0,l._)(this,function(e){return n((0,g.signUp)(E)),[2]})}),function(){return t.apply(this,arguments)});return s().createElement(s().Fragment,null,s().createElement("div",{className:"auth-form-wrapper"},s().createElement(f.Input,{name:"login",prefix:s().createElement(d.UserOutlined,{className:"site-form-item-icon"}),placeholder:"Username",onChange:N}),s().createElement(f.Input,{name:"password",prefix:s().createElement(d.LockOutlined,{className:"site-form-item-icon"}),placeholder:"Password",onChange:N}),S.unregistered?s().createElement("div",null,s().createElement(f.Button,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:k},"Sign up"),"Or ",s().createElement("a",{href:"",style:{textDecorationLine:"none",color:"#1677ff"},onClick:_},"sign in")):s().createElement("div",null,s().createElement(f.Button,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:C},"Log in"),"Or ",s().createElement("a",{href:"",style:{textDecorationLine:"none",color:"#1677ff"},onClick:_},"register now!"))))}},85820:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}}),n("57327"),n("88449"),n("59849"),n("2490"),n("41539"),n("92222");var r=n("67294"),a=n.n(r),c=n("50533"),i=n("7704"),u=n("68370"),l=n("71012"),o=function(e){var t=e.props,n=(0,c.useSelector)(function(e){return e.goods.goods}),r=(0,c.useDispatch)(),o=n.filter(function(e){return e.id===t[0]})[0],s=t[1],m=o.priceWithDiscount*s,f=o.price*s;return a().createElement("li",{className:"cart-item-wrapper"},a().createElement("div",{className:"cart-item-content"},a().createElement("div",{className:"cart-img-wrapper"},a().createElement("img",{className:"cart-img",alt:o.name,src:o.imgSource})),a().createElement("div",{className:"cart-middle"},o.name),a().createElement("div",{className:"cart-right"},o.hasDiscount?a().createElement("div",null,a().createElement("div",{className:"cart-item-finishprice"},"\u0426\u0435\u043D\u0430 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439: ".concat(m," ").concat(o.currency)),a().createElement("div",{className:"cart-item-defprice"},"\u0431\u0435\u0437: ".concat(f," ").concat(o.currency))):a().createElement("div",null,a().createElement("div",{className:"cart-item-finishprice"},"\u0426\u0435\u043D\u0430: ".concat(f," ").concat(o.currency))),a().createElement("div",{className:"counter-wrapper"},a().createElement(u.Button,{style:{width:"2em"},key:"decrement",disabled:!(t[1]>1),onClick:function(){r((0,l.decrement)(o.id))},icon:a().createElement(i.MinusOutlined,null)}),a().createElement("div",{style:{width:"30px"},className:"cart-item-counter"},s),a().createElement(u.Button,{style:{width:"2em"},key:"increment",onClick:function(){r((0,l.increment)(o.id))},icon:a().createElement(i.PlusOutlined,null)}))),a().createElement("div",{className:"cart-trash"},a().createElement(i.DeleteOutlined,{onClick:function(){r((0,l.deleteItemFromCart)(t[0][0]))},style:{fontSize:"20px",color:"gray",marginLeft:"5px"}}))))}},93677:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n("37098");n("92222");var a=n("67294"),c=n.n(a),i=n("68370"),u=function(e){var t=e.inputCostValue,n=e.setInputCostValue;return c().createElement(c().Fragment,null,c().createElement("span",{className:"cost-filter-title"},"\u0426\u0435\u043D\u0430"),c().createElement(i.Space,{wrap:!0},c().createElement(i.InputNumber,{size:"small",min:1,max:4e5,onChange:function(e){n(function(t){var n=(0,r._)(t);return n[0]=e,n})},defaultValue:"\u043E\u0442 ".concat(t[0])}),c().createElement(i.InputNumber,{size:"small",min:1,max:4e5,onChange:function(e){n(function(t){var n=(0,r._)(t);return n[1]=e,n})},defaultValue:"\u0434\u043E ".concat(t[1])})))}},90367:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n("76150"),a=n("18965");n("92222");var c=n("67294"),i=n.n(c),u=n("50533"),l=n("59540"),o=function(e){var t,n=e.product,c=n.name,o=n.price,s=n.currency,m=n.imgSource,f=n.priceWithDiscount,d=n.cashbackPercent,p=n.cashbackSize,g=(0,u.useDispatch)();var h=(t=(0,r._)(function(){return(0,a._)(this,function(e){return g((0,l.fetchProductById)(n.id)),[2]})}),function(){return t.apply(this,arguments)});return i().createElement("div",{className:"goods-item",onClick:h},i().createElement("div",{className:"img-container"},i().createElement("img",{className:"img-item",alt:c,src:m})),i().createElement("div",null,c),i().createElement("div",{className:"product-price-container"},n.hasDiscount?i().createElement("div",null,i().createElement("div",{className:"font-price-before color-price-before"},"".concat(o," ").concat(s)),i().createElement("div",{className:"font-price-discount color-price-discount"},"".concat(f," ").concat(s))):i().createElement("div",{className:"font-price color-price"},"".concat(o," ").concat(s))),d>0&&i().createElement("div",{className:"font-cashback color-cashback"},i().createElement("span",null,"\u041A\u044D\u0448\u0431\u044D\u043A: ".concat(p," ").concat(s))))}},11099:function(e,t,n){"use strict";n.r(t),n.d(t,{Layout:function(){return u}});var r=n("67294"),a=n.n(r),c=n("50533"),i=n("79655"),u=function(){var e=(0,c.useSelector)(function(e){return e.user});return a().createElement("div",{className:"App"},a().createElement("header",null,a().createElement("div",{className:"navbar"},a().createElement(i.Link,{className:"link",to:"/"},"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),a().createElement(i.Link,{className:"link",to:"/cart"},"\u041A\u043E\u0440\u0437\u0438\u043D\u0430"),e.login?a().createElement(i.Link,{className:"link",to:"/account"},"\u0412\u044B\u0439\u0442\u0438"):a().createElement(i.Link,{className:"link",to:"/auth"},"\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))),a().createElement(i.Outlet,null))}},50783:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}}),n("82526"),n("41817"),n("92222");var r=n("67294"),a=n.n(r),c=n("68370"),i=n("50533"),u=n("59925"),l=function(){var e=(0,i.useSelector)(function(e){return e.product.product}),t=e.name,n=e.imgSource,r=e.price,l=e.currency,o=e.cashbackSize,s=e.cashbackPercent,m=e.description,f=e.country,d=e.guarantee,p=e.rating;return a().createElement("div",null,a().createElement("img",{className:"img-item",alt:t,src:n}),a().createElement("h2",{className:"product-card-title"},t),a().createElement("div",{className:"product-card-price"},a().createElement("span",{className:"product-card-title"},"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:"),e.hasOwnProperty("priceWithDiscount")?a().createElement(a().Fragment,null,a().createElement("span",{className:"font-price-before color-price-before"},"".concat(r," ").concat(l)),a().createElement("span",null,"/"),a().createElement("span",{className:"font-price-discount color-price-discount font-default-price"},(0,u.calcPriceWithDiscount)(e)),a().createElement("span",{className:"font-price-discount font-price font-default-price"},l)):a().createElement(a().Fragment,null,a().createElement("span",{className:"font-price-discount color-price font-default-price"},r),a().createElement("span",{className:"font-price-discount font-default-price"},l))),s>0&&a().createElement("div",{className:"product-cashback cashback"},a().createElement("span",{className:"product-card-title color-cashback"},"\u041A\u044D\u0448\u0431\u044D\u043A:"),a().createElement("span",{className:"color-cashback"},"".concat(o," ").concat(l))),a().createElement("div",{className:"product-description"},a().createElement("span",{className:"product-card-title"},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: "),a().createElement("span",null,m)),a().createElement("div",{className:"product-country"},a().createElement("span",{className:"product-card-title"},"\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: "),a().createElement("span",null,f)),a().createElement("div",{className:"product-guarantee"},a().createElement("span",{className:"product-card-title"},"\u0421\u0440\u043E\u043A \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438: "),!!d&&a().createElement("span",null,"".concat(d.period," ").concat(d.unit))),a().createElement("div",{className:"product-rate"},a().createElement("div",{className:"product-card-title"},"\u0420\u0435\u0439\u0442\u0438\u043D\u0433: "),p>0?a().createElement(a().Fragment,null,a().createElement("div",null,p),a().createElement(c.Rate,{disabled:!0,allowHalf:!0,value:p})):a().createElement("div",null,"\u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u043E \u043E\u0442\u0437\u044B\u0432\u043E\u0432")))}},92232:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n("7409"),a=n("38956"),c=n("67294"),i=n.n(c),u=n("68370"),l=n("50783"),o=n("50533"),s=n("59540"),m=n("7704"),f=n("71012"),d=n("2171"),p=n("59925"),g=function(){var e=(0,o.useSelector)(function(e){return e.product.product}),t=(0,o.useSelector)(function(e){return e.cart}),n=(0,o.useSelector)(function(e){return e.product.isModalOpen}),g=(0,a._)((0,c.useState)(!1),2),h=g[0],E=g[1],v=(0,a._)((0,c.useState)(d.initialCountState),2),y=v[0],S=v[1];(0,c.useEffect)(function(){E(n)});var b=(0,o.useDispatch)(),N=function(){var n={};if(n[e.id]=y,(0,p.hasItemInCart)(e.id,t)){var a=(0,r._)({},t);a[e.id]+=y,b((0,f.addNewItemToCart)(a))}else b((0,f.addNewItemToCart)(n));b((0,s.toggleOffModalStatus)()),S(d.initialCountState)};return i().createElement(i().Fragment,null,i().createElement(u.Modal,{className:"product-card",title:"\u041E \u0442\u043E\u0432\u0430\u0440\u0435",open:h,onOk:N,onCancel:function(){b((0,s.toggleOffModalStatus)()),S(d.initialCountState)},footer:[i().createElement(u.Button,{key:"decrement",disabled:!(y>1),onClick:function(){S(function(e){return e-1})},icon:i().createElement(m.MinusOutlined,null)}),i().createElement("span",{style:{margin:"10px"},key:"count"},y),i().createElement(u.Button,{key:"increment",onClick:function(){S(function(e){return e+1})},icon:i().createElement(m.PlusOutlined,null)}),i().createElement(u.Button,{key:"submit",onClick:N},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")]},i().createElement(l.default,null)))}},45064:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n("76150"),a=n("18965"),c=n("67294"),i=n.n(c),u=n("50533"),l=n("79655"),o=n("79552"),s=function(){var e,t=(0,u.useSelector)(function(e){return e.user.login}),n=(0,u.useDispatch)(),c=(0,l.useNavigate)();var s=(e=(0,r._)(function(){return(0,a._)(this,function(e){return console.log("Clicked logout!"),n((0,o.logOut)()),c("/"),[2]})}),function(){return e.apply(this,arguments)});return t?i().createElement("div",{className:"profile-container"},i().createElement("span",null,"Your profile"),i().createElement("div",{className:"profile-content"},i().createElement("span",null,"Welcome, ",t),i().createElement("button",{style:{backgroundColor:"red"},onClick:s},"\u0412\u044B\u0439\u0442\u0438"))):i().createElement(l.Navigate,{to:"/",replace:!0})}},59925:function(e,t,n){"use strict";n.r(t),n.d(t,{calcCashbackSize:function(){return c},calcPriceWithDiscount:function(){return a},calcRating:function(){return i},createLabel:function(){return l},hasItemInCart:function(){return r},isEmptyObject:function(){return u}}),n("2707"),n("86035"),n("24506"),n("52262"),n("41539"),n("39714"),n("23123"),n("74916"),n("92222");var r=function(e,t){if(u(t))return!1;for(var n in t)if(n===e)return!0},a=function(e){return Math.round(e.price*((100-e.discountPercent)/100))},c=function(e){return e.hasDiscount?a(e)*e.cashbackPercent/100:e.price*e.cashbackPercent/100};Math.round10=function(e,t){var n,r,a;return n="round",r=e,void 0===(a=t)||0==+a?Math[n](r):(a=+a,isNaN(r=+r)||!("number"==typeof a&&a%1==0))?NaN:+((r=(r=Math[n](+((r=r.toString().split("e"))[0]+"e"+(r[1]?+r[1]-a:-a)))).toString().split("e"))[0]+"e"+(r[1]?+r[1]+a:a))};var i=function(e){if(!(e.reviews.length>0))return 0;for(var t=0,n=0;n<e.reviews.length;n++)t+=e.reviews[n].rate;return Math.round10(t/e.reviews.length,-1)},u=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},l=function(e,t){return"".concat(t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]])}},59872:function(e,t,n){"use strict";n.r(t);var r=n("67294"),a=n.n(r),c=n("20745"),i=n("65760"),u=n("17453"),l=n("50533"),o=n("79655");c.createRoot(document.getElementById("root")).render(a().createElement(o.BrowserRouter,null,a().createElement(l.Provider,{store:u.default},a().createElement(i.default,null))))},21377:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n("67294"),a=n.n(r),c=n("79655"),i=n("50533"),u=n("88843"),l=n("45064"),o=function(){var e=(0,i.useSelector)(function(e){return e.user}),t=(0,i.useSelector)(function(e){return e.cart.status}),n=(0,c.useNavigate)();return((0,r.useEffect)(function(){t&&e.login&&n("/orderpage")},[e.login]),e.login)?a().createElement("div",{className:"auth-page"},a().createElement(l.default,null)):a().createElement("div",{className:"auth-page"},a().createElement(u.default,null))}},20039:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n("38956");n("57327"),n("88449"),n("59849"),n("2490"),n("41539"),n("69720"),n("82526"),n("41817"),n("32165"),n("66992"),n("33948"),n("78783"),n("92222"),n("21249"),n("57640"),n("9924");var a=n("67294"),c=n.n(a),i=n("50533"),u=n("79655"),l=n("7704"),o=n("68370"),s=n("59925"),m=n("85820"),f=n("71012"),d=n("2171"),p=function(){var e=(0,i.useSelector)(function(e){return e.cart.cart}),t=(0,i.useSelector)(function(e){return e.goods.goods}),n=(0,i.useSelector)(function(e){return e.user}),a=(0,u.useNavigate)(),p=0,g=0,h="",E=(0,i.useDispatch)(),v=0,y=!0,S=!1,b=void 0;try{for(var N,_=Object.entries(e)[Symbol.iterator]();!(y=(N=_.next()).done);y=!0)!function(){var e=(0,r._)(N.value,2),n=e[0],a=e[1];t.filter(function(e){return e.id===n})[0].priceWithDiscount&&(g+=t.filter(function(e){return e.id===n})[0].priceWithDiscount*a),v+=a,p+=t.filter(function(e){return e.id===n})[0].price*a,h=t.filter(function(e){return e.id===n})[0].currency}()}catch(e){S=!0,b=e}finally{try{!y&&null!=_.return&&_.return()}finally{if(S)throw b}}return c().createElement("div",null,c().createElement("div",{className:"cart-header"},c().createElement(l.ShoppingCartOutlined,{style:{fontSize:"32px",alignItems:"end"}}),c().createElement("div",{className:"cart-title"},"\u041A\u043E\u0440\u0437\u0438\u043D\u0430"),c().createElement("div",{style:{display:"flex",alignItems:"flex-end"}},(0,s.isEmptyObject)(e)?c().createElement(c().Fragment,null,"\u0417\u0434\u0435\u0441\u044C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442"):c().createElement(c().Fragment,null,"".concat(v," ").concat((0,s.createLabel)(v,d.LABELS))))),c().createElement("div",{className:"cart-header-button",onClick:function(){E((0,f.deleteAllItemFromCart)())}},c().createElement("span",{style:{color:"gray"}},"\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443"),c().createElement("div",{className:"cart-trash"},c().createElement(l.DeleteOutlined,{style:{fontSize:"20px",color:"gray",marginLeft:"5px"}}))),c().createElement("hr",null),(0,s.isEmptyObject)(e)?c().createElement(c().Fragment,null,"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 ",c().createElement(u.Link,{className:"link",to:"/"},"\u043A\u0430\u0442\u0430\u043B\u043E\u0433")):c().createElement(c().Fragment,null,c().createElement("ul",{className:"cart-container"},Object.entries(e).map(function(e){return c().createElement(m.default,{props:e,key:e[0]})})),c().createElement("hr",null),c().createElement(o.ConfigProvider,{theme:{token:{colorBgBase:"yellow"}}},c().createElement("div",{className:"cart-order"},c().createElement("div",null,c().createElement(o.Button,{onClick:function(){E((0,f.toggleStatusOn)()),n.login?a("/orderpage"):a("/auth")},style:{width:"400px"}},"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E")),c().createElement("div",null,c().createElement("div",{className:"cart-order-content"},c().createElement("div",null,"\u0412\u0441\u0435\u0433\u043E: ".concat(v," ").concat((0,s.createLabel)(v,d.LABELS))),c().createElement("div",{style:{color:"gray"}},"\u0446\u0435\u043D\u0430 \u0431\u0435\u0437 \u0441\u043A\u0438\u0434\u043A\u0438: ".concat(p," ").concat(h))),c().createElement("div",{className:"cart-order-content"},c().createElement("div",null,"\u0421\u043A\u0438\u0434\u043A\u0430:"),c().createElement("div",{style:{color:"red"}},"".concat(p-g," ").concat(h))),c().createElement("div",{className:"cart-order-content"},c().createElement("div",null,"\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430:"),c().createElement("div",{style:{color:"green",fontWeight:"bold"}},"".concat(g," ").concat(h))))))))}},57778:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n("7409"),a=n("99282"),c=n("38956");n("26699"),n("32023"),n("57327"),n("88449"),n("59849"),n("2490"),n("41539"),n("47042"),n("21249"),n("57640"),n("9924");var i=n("67294"),u=n.n(i),l=n("2171"),o=n("50533"),s=n("68370"),m=n("92232"),f=n("93677"),d=n("90367"),p=function(){var e=(0,o.useSelector)(function(e){return e.goods.goods}),t=(0,o.useSelector)(function(e){return e.goods.status}),n=(0,c._)((0,i.useState)(l.initialPriceValue),2),p=n[0],g=n[1],h=(0,c._)((0,i.useState)(l.initialFilterValue),2),E=h[0],v=h[1],y=(0,c._)((0,i.useState)(l.paginationInitialValue),2),S=y[0],b=y[1],N=(0,l.optionsInitialization)();(0,i.useEffect)(function(){b(function(e){return(0,a._)((0,r._)({},e),{currentPage:l.paginationInitialValue.currentPage})})},[E,p]);var _=function(e){v((0,a._)((0,r._)({},E),{name:e.target.value}))},C=S.currentPage*S.pageSize,k=S.currentPage*S.pageSize-S.pageSize,O=e.filter(function(e){var t,n,r;return t=e,(!E.bestOffer||t.hasDiscount)&&e.name.toLowerCase().includes(E.name.toLowerCase())&&(n=e,!E.category.length||"all"===E.category||!!E.category.toLowerCase().includes(n.category.toLowerCase())||!1)&&((r=e).hasOwnProperty("priceWithDiscount")?p[0]<r.priceWithDiscount&&r.priceWithDiscount<p[1]:p[0]<r.price&&r.price<p[1])});return u().createElement("div",{className:"goods-list"},u().createElement("div",{className:"main"},u().createElement("div",{className:"filters-wrapper"},u().createElement("div",{className:"filters"},u().createElement(s.Select,{className:"category-select",placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",onChange:function(e){v((0,a._)((0,r._)({},E),{category:e}))},options:N}),u().createElement("div",{className:"cost-best-input"},u().createElement(f.default,{inputCostValue:p,setInputCostValue:g}),u().createElement(s.Checkbox,{className:"checkbox",onChange:function(){v((0,a._)((0,r._)({},E),{bestOffer:!E.bestOffer}))}}),u().createElement("span",{style:{fontWeight:"bold"}},"\u043B\u0443\u0447\u0448\u0435\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435"),u().createElement(s.Input,{className:"input-goods",placeholder:"\u041F\u043E\u0438\u0441\u043A \u0442\u043E\u0432\u0430\u0440\u0430",onChange:function(e){return _(e)}})))),u().createElement("div",{className:"goods-list"},u().createElement(m.default,null),O.length?function(e){if(e===l.STATUS_MAP.fulfilled)return O.slice(k,C).map(function(e){return u().createElement(d.default,{product:e,key:e.id})});return u().createElement(s.Spin,{tip:"Loading",size:"large"},u().createElement("div",{className:"content"}))}(t):u().createElement("div",null,"\u041F\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u043C \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))),!O.length||u().createElement(s.Pagination,{showSizeChanger:!0,onChange:function(e){b(function(t){return(0,a._)((0,r._)({},t),{currentPage:e})})},pageSize:S.pageSize,current:S.currentPage,onShowSizeChange:function(e,t){b(function(e){return(0,a._)((0,r._)({},e),{pageSize:t})})},pageSizeOptions:S.pageSizeOptions,total:O.length}))}},49323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n("7409"),a=n("99282"),c=n("38956");n("57327"),n("88449"),n("59849"),n("2490"),n("41539"),n("57658"),n("69720"),n("82526"),n("41817"),n("32165"),n("66992"),n("33948"),n("78783");var i=n("67294"),u=n.n(i),l=n("68370"),o=n("50533"),s=n("79655"),m=n("71012"),f=function(){var e=(0,o.useDispatch)(),t=(0,o.useSelector)(function(e){return e.goods.goods}),n=(0,o.useSelector)(function(e){return e.cart.cart}),i=(0,o.useSelector)(function(e){return e.user}),f=(0,s.useNavigate)(),d=[],p=!0,g=!1,h=void 0;try{for(var E,v=Object.entries(n)[Symbol.iterator]();!(p=(E=v.next()).done);p=!0)!function(){var e=(0,c._)(E.value,2),n=e[0],i=e[1],u=(0,a._)((0,r._)({},t.filter(function(e){return e.id===n})[0]),{count:i});d.push(u)}()}catch(e){g=!0,h=e}finally{try{!p&&null!=v.return&&v.return()}finally{if(g)throw h}}var y=(0,c._)(l.Form.useForm(),1)[0],S=function(){f("/")},b=function(){l.Modal.success({content:"\u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D",onOk:function(){S()}})},N={labelCol:{span:8},wrapperCol:{span:16}};return i.login?u().createElement("div",{className:"payment-wrapper"},u().createElement(l.Form,(0,a._)((0,r._)({},N),{form:y,name:"nest-messages",onFinish:function(t){b(),console.log("\u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D. \u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ",t.user,"\u0441\u043F\u0438\u0441\u043E\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432: ",d),e((0,m.deleteAllItemFromCart)())},style:{maxWidth:600},validateMessages:{required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}}}),u().createElement(l.Form.Item,{name:["user","name"],label:"\u0418\u043C\u044F",rules:[{required:!0}]},u().createElement(l.Input,null)),u().createElement(l.Form.Item,{name:["user","email"],label:"Email",rules:[{type:"email"}]},u().createElement(l.Input,null)),u().createElement(l.Form.Item,{name:["user","age"],label:"\u0412\u043E\u0437\u0440\u0430\u0441\u0442",rules:[{type:"number",min:0,max:99}]},u().createElement(l.InputNumber,null)),u().createElement(l.Form.Item,{name:["user","Address"],label:"\u0410\u0434\u0440\u0435\u0441"},u().createElement(l.Input,null)),u().createElement(l.Form.Item,{name:["user","Description"],label:"\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F"},u().createElement(l.Input.TextArea,null)),u().createElement(l.Form.Item,{wrapperCol:(0,a._)((0,r._)({},N.wrapperCol),{offset:8})},u().createElement(l.Button,{type:"primary",htmlType:"submit"},"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437")))):u().createElement(s.Navigate,{to:"/auth",replace:!0})}},71012:function(e,t,n){"use strict";n.r(t),n.d(t,{addNewItemToCart:function(){return l},decrement:function(){return m},default:function(){return p},deleteAllItemFromCart:function(){return s},deleteItemFromCart:function(){return o},increment:function(){return f},toggleStatusOn:function(){return d}});var r=n("7409"),a=n("29829"),c={cart:{},status:!1},i=(0,a.createSlice)({name:"cart",initialState:c,reducers:{addNewItemToCart:function(e,t){return e.cart=(0,r._)({},e.cart,t.payload),e},decrement:function(e,t){e.cart[t.payload]-=1},increment:function(e,t){e.cart[t.payload]+=1},deleteItemFromCart:function(e,t){delete e.cart[t.payload]},deleteAllItemFromCart:function(e){return e=c},toggleStatusOn:function(e){e.status=!0}}}),u=i.actions,l=u.addNewItemToCart,o=u.deleteItemFromCart,s=u.deleteAllItemFromCart,m=u.decrement,f=u.increment,d=u.toggleStatusOn,p=i.reducer},59540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},fetchProductById:function(){return v},toggleOffModalStatus:function(){return E}});var r=n("76150"),a=n("7409"),c=n("99282"),i=n("18965");n("57658");var u=n("29829"),l=n("2171"),o=n("66413"),s=n("59925"),m={product:{},status:null,error:null,isModalOpen:!1},f=(0,u.createSlice)({name:"product",initialState:m,reducers:{fetchStart:function(e){e.status=l.STATUS_MAP.pending},fetchSuccess:function(e,t){e.product=t.payload,e.status=l.STATUS_MAP.fulfilled,e.isModalOpen=!0},fetchFail:function(e,t){e.status=l.STATUS_MAP.rejected,e.error=t.payload,console.log("Error: ",t.payload)},toggleOffModalStatus:function(){return m}}}),d=f.actions,p=d.fetchStart,g=d.fetchSuccess,h=d.fetchFail,E=d.toggleOffModalStatus,v=function(e){var t;return t=(0,r._)(function(t){var n,r;return(0,i._)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),t(p()),[4,(0,o.getProductInfo)(e)];case 1:return n=i.sent(),r={},(r=(0,c._)((0,a._)({},n.data),{cashbackSize:Math.round((0,s.calcCashbackSize)(n.data)),rating:(0,s.calcRating)(n.data)})).hasDiscount?r.priceWithDiscount=(0,s.calcPriceWithDiscount)(r):r.priceWithDiscount=r.price,t(g(r)),[3,3];case 2:return t(h(i.sent())),[3,3];case 3:return[2]}})}),function(e){return t.apply(this,arguments)}},y=f.reducer},78597:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},fetchGoodsList:function(){return E}});var r=n("76150"),a=n("7409"),c=n("99282"),i=n("18965");n("57658");var u=n("29829"),l=n("2171"),o=n("27233"),s=n("59925"),m=(0,u.createSlice)({name:"goods",initialState:{goods:[],status:null,error:null},reducers:{fetchStart:function(e){e.status=l.STATUS_MAP.pending},fetchSuccess:function(e,t){(e.status=l.STATUS_MAP.pending)&&(e.goods=t.payload,e.status=l.STATUS_MAP.fulfilled)},fetchFail:function(e,t){e.status=l.STATUS_MAP.rejected,e.error=t.payload,console.log("Error: ",t.payload)}}}),f=m.actions,d=f.fetchStart,p=f.fetchSuccess,g=f.fetchFail,h=m.reducer,E=function(){var e;return e=(0,r._)(function(e){var t,n,r;return(0,i._)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),e(d()),[4,o.default.get(l.hostUrl.listItems)];case 1:for(r=0,t=i.sent(),n=[];r<t.data.length;r++)t.data[r].hasDiscount?n.push((0,c._)((0,a._)({},t.data[r]),{priceWithDiscount:(0,s.calcPriceWithDiscount)(t.data[r]),cashbackSize:Math.round((0,s.calcCashbackSize)(t.data[r]))})):n.push((0,c._)((0,a._)({},t.data[r]),{priceWithDiscount:t.data[r].price,cashbackSize:Math.round((0,s.calcCashbackSize)(t.data[r]))}));return e(p(n)),[3,3];case 2:return e(g(i.sent())),[3,3];case 3:return[2]}})}),function(t){return e.apply(this,arguments)}}},4598:function(e,t,n){"use strict";n.r(t),n.d(t,{addNotification:function(){return f},default:function(){return m},resetStatus:function(){return s}}),n("92222");var r=n("29829"),a=n("1818"),c=n("2171"),i={msg:null,status:null},u=(0,r.createSlice)({name:"notification",initialState:i,reducers:{setStatus:function(e,t){e.status=t.payload.status,e.msg=t.payload.data},resetStatus:function(){return i}}}),l=u.actions,o=l.setStatus,s=l.resetStatus,m=u.reducer,f=function(e){return function(t){t(o(e)),t(d(e.data,e.status))}},d=function(e,t){var n;t>399&&t<501&&(n="error"),a.Store.addNotification({title:"".concat(n),message:"".concat(e),type:"".concat(c.typeOfNotification["".concat(n)]),insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:1500,onScreen:!0}})}},17453:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n("29829"),a=n("57774"),c=n("76734"),i=n("78597"),u=n("59540"),l=n("71012"),o=n("79552"),s=n("4598"),m=(0,r.combineReducers)({goods:i.default,product:u.default,cart:l.default,user:o.default,notification:s.default}),f={key:"root",storage:c.default},d=(0,a.persistReducer)(f,m),p=(0,r.configureStore)({reducer:d,middleware:function(e){return e({serializableCheck:{ignoredActions:[a.FLUSH,a.REHYDRATE,a.PAUSE,a.PERSIST,a.PURGE,a.REGISTER]}})}});(0,a.persistStore)(p);var g=p},79552:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v},logOut:function(){return d},signIn:function(){return f},signUp:function(){return m}});var r=n("76150"),a=n("18965");n("57658");var c=n("29829"),i=n("27233"),u=n("2171"),l=n("4598"),o={login:null,password:null,status:null,msg:null},s=(0,c.createSlice)({name:"user",initialState:o,reducers:{setUser:function(e,t){e.login=t.payload.login,e.password=t.payload.password,e.status="success",e.msg=null},removeUser:function(){return o},authFail:function(e,t){e.msg=t.payload.response.data,e.status=t.payload.response.status}}}),m=function(e){var t;return t=(0,r._)(function(t){var n;return(0,a._)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i.default.post(u.hostUrl.signUp,e,{withCredentials:"true"})];case 1:return t(g(r.sent().data)),t((0,l.resetStatus)()),[3,3];case 2:return n=r.sent(),t((0,l.addNotification)(n.response)),t(E(n)),[3,3];case 3:return[2]}})}),function(e){return t.apply(this,arguments)}},f=function(e){var t;return t=(0,r._)(function(t){var n;return(0,a._)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i.default.post(u.hostUrl.signIn,e,{withCredentials:"true"})];case 1:return t(g(r.sent().data)),t((0,l.resetStatus)()),[3,3];case 2:return n=r.sent(),t((0,l.addNotification)(n.response)),t(E(n)),[3,3];case 3:return[2]}})}),function(e){return t.apply(this,arguments)}},d=function(){var e;return e=(0,r._)(function(e){var t;return(0,a._)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,i.default.get(u.hostUrl.logOut,{withCredentials:"true"})];case 1:return n.sent(),e(h()),e((0,l.resetStatus)()),[3,3];case 2:return t=n.sent(),e((0,l.addNotification)(t.response)),e(E(t)),[3,3];case 3:return[2]}})}),function(t){return e.apply(this,arguments)}},p=s.actions,g=p.setUser,h=p.removeUser,E=p.authFail,v=s.reducer},54169:function(e){}},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=a,i.es=function(e,t){return Object.keys(e).forEach(function(n){"default"!==n&&!Object.prototype.hasOwnProperty.call(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),e},e=[],i.O=function(t,n,r,a){if(n){a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a];return}for(var u=1/0,c=0;c<e.length;c++){for(var n=e[c][0],r=e[c][1],a=e[c][2],l=!0,o=0;o<n.length;o++)u>=a&&Object.keys(i.O).every(function(e){return i.O[e](n[o])})?n.splice(o--,1):(l=!1,a<u&&(u=a));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={980:0},i.O.j=function(e){return 0===t[e]},n=function(e,n){var r=n[0],a=n[1],c=n[2],u,l,o=0;if(r.some(function(e){return 0!==t[e]})){for(u in a)i.o(a,u)&&(i.m[u]=a[u]);if(c)var s=c(i)}for(e&&e(n);o<r.length;o++)l=r[o],i.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return i.O(s)},(r=self.webpackChunkshop=self.webpackChunkshop||[]).forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r));var u=i.O(void 0,["126","72","16"],function(){return i("59872")});i.O(u)}();