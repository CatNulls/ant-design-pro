(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"14J3":function(e,a,n){"use strict";n("cIOH"),n("1GLa")},"6VBw":function(e,a,n){"use strict";var t=n("ODXe"),r=n("rePB"),o=n("Ff2n"),s=n("q1tI"),i=n("TSYQ"),l=n.n(i),c=n("VTBJ"),d=n("Qi1f"),u={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function f(e){var a=e.primaryColor,n=e.secondaryColor;u.primaryColor=a,u.secondaryColor=n||Object(d["b"])(a),u.calculated=!!n}function p(){return Object(c["a"])({},u)}var m=function(e){var a=e.icon,n=e.className,t=e.onClick,r=e.style,s=e.primaryColor,i=e.secondaryColor,l=Object(o["a"])(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),f=u;if(s&&(f={primaryColor:s,secondaryColor:i||Object(d["b"])(s)}),Object(d["f"])(),Object(d["g"])(Object(d["c"])(a),"icon should be icon definiton, but got ".concat(a)),!Object(d["c"])(a))return null;var p=a;return p&&"function"===typeof p.icon&&(p=Object(c["a"])(Object(c["a"])({},p),{},{icon:p.icon(f.primaryColor,f.secondaryColor)})),Object(d["a"])(p.icon,"svg-".concat(p.name),Object(c["a"])({className:n,onClick:t,style:r,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l))};m.displayName="IconReact",m.getTwoToneColors=p,m.setTwoToneColors=f;var y=m;function g(e){var a=Object(d["d"])(e),n=Object(t["a"])(a,2),r=n[0],o=n[1];return y.setTwoToneColors({primaryColor:r,secondaryColor:o})}function b(){var e=y.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}g("#1890ff");var h=s["forwardRef"]((function(e,a){var n=e.className,i=e.icon,c=e.spin,u=e.rotate,f=e.tabIndex,p=e.onClick,m=e.twoToneColor,g=Object(o["a"])(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),b=l()("anticon",Object(r["a"])({},"anticon-".concat(i.name),Boolean(i.name)),n),h=l()({"anticon-spin":!!c||"loading"===i.name}),v=f;void 0===v&&p&&(v=-1);var C=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,k=Object(d["d"])(m),T=Object(t["a"])(k,2),j=T[0],O=T[1];return s["createElement"]("span",Object.assign({role:"img","aria-label":i.name},g,{ref:a,tabIndex:v,onClick:p,className:b}),s["createElement"](y,{className:h,icon:i,primaryColor:j,secondaryColor:O,style:C}))}));h.displayName="AntdIcon",h.getTwoToneColor=b,h.setTwoToneColor=g;a["a"]=h},BMrR:function(e,a,n){"use strict";var t=n("qrJ5");a["a"]=t["a"]},GZ0F:function(e,a,n){"use strict";var t=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},o=r,s=n("6VBw"),i=function(e,a){return t["createElement"](s["a"],Object.assign({},e,{ref:a,icon:o}))};i.displayName="EllipsisOutlined";a["a"]=t["forwardRef"](i)},HTcj:function(e,a,n){"use strict";n("GNNt");var t=n("wEI+"),r=(n("kZZr"),n("q1tI")),o=n.n(r),s=n("TSYQ"),i=n.n(s),l=n("jYQm"),c=function(e){var a=Object(r["useContext"])(l["a"]),n=e.children,s=e.contentWidth,c=e.className,d=e.style,u=Object(r["useContext"])(t["b"].ConfigContext),f=u.getPrefixCls,p=e.prefixCls||f("pro"),m=s||a.contentWidth,y="".concat(p,"-grid-content");return o.a.createElement("div",{className:i()(y,c,{wide:"Fixed"===m}),style:d},o.a.createElement("div",{className:"".concat(p,"-grid-content-children")},n))};a["a"]=c},Qi1f:function(e,a,n){"use strict";n.d(a,"g",(function(){return d})),n.d(a,"c",(function(){return u})),n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return m})),n.d(a,"d",(function(){return y})),n.d(a,"e",(function(){return g})),n.d(a,"f",(function(){return v}));var t=n("VTBJ"),r=n("U8pU"),o=n("HXN9"),s=n("q1tI"),i=n.n(s),l=n("Kwbf"),c=n("Gu+u");function d(e,a){Object(l["a"])(e,"[@ant-design/icons] ".concat(a))}function u(e){return"object"===Object(r["a"])(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Object(r["a"])(e.icon)||"function"===typeof e.icon)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(a,n){var t=e[n];switch(n){case"class":a.className=t,delete a.class;break;default:a[n]=t}return a}),{})}function p(e,a,n){return n?i.a.createElement(e.tag,Object(t["a"])(Object(t["a"])({key:a},f(e.attrs)),n),(e.children||[]).map((function(n,t){return p(n,"".concat(a,"-").concat(e.tag,"-").concat(t))}))):i.a.createElement(e.tag,Object(t["a"])({key:a},f(e.attrs)),(e.children||[]).map((function(n,t){return p(n,"".concat(a,"-").concat(e.tag,"-").concat(t))})))}function m(e){return Object(o["generate"])(e)[0]}function y(e){return e?Array.isArray(e)?e:[e]:[]}var g={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},b="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",h=!1,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;Object(s["useEffect"])((function(){h||(Object(c["insertCss"])(e,{prepend:!0}),h=!0)}),[])}},UXoT:function(e,a,n){e.exports={iconGroup:"antd-pro-pages-dashboard-analysis-style-iconGroup",anticon:"antd-pro-pages-dashboard-analysis-style-anticon",rankingList:"antd-pro-pages-dashboard-analysis-style-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-style-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-style-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-style-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-style-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-style-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-style-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-style-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-style-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-style-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-style-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-style-offlineCard",trendText:"antd-pro-pages-dashboard-analysis-style-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-style-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-style-salesExtraWrap"}},jCWc:function(e,a,n){"use strict";n("cIOH"),n("1GLa")},jXcd:function(e,a,n){"use strict";n.r(a);n("14J3");var t=n("BMrR"),r=(n("jCWc"),n("kPKH")),o=(n("qVdP"),n("jsC+")),s=(n("lUTK"),n("BvKs")),i=n("fWQN"),l=n("mtLc"),c=n("yKVA"),d=n("879j"),u=n("GZ0F"),f=n("q1tI"),p=n.n(f),m=n("HTcj"),y=n("9kvl"),g=(n("T2oS"),n("W9HT")),b=function(){return p.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},p.a.createElement(g["a"],{size:"large"}))},h=n("wd/R"),v=n.n(h);function C(e){return 1*e<10?"0".concat(e):e}function k(e){var a=new Date,n=864e5;if("today"===e)return a.setHours(0),a.setMinutes(0),a.setSeconds(0),[v()(a),v()(a.getTime()+(n-1e3))];if("week"===e){var t=a.getDay();a.setHours(0),a.setMinutes(0),a.setSeconds(0),0===t?t=6:t-=1;var r=a.getTime()-t*n;return[v()(r),v()(r+(7*n-1e3))]}var o=a.getFullYear();if("month"===e){var s=a.getMonth(),i=v()(a).add(1,"months"),l=i.year(),c=i.month();return[v()("".concat(o,"-").concat(C(s+1),"-01 00:00:00")),v()(v()("".concat(l,"-").concat(C(c+1),"-01 00:00:00")).valueOf()-1e3)]}return[v()("".concat(o,"-01-01 00:00:00")),v()("".concat(o,"-12-31 23:59:59"))]}var T=n("UXoT"),j=n.n(T),O=p.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(8),n.e(50)]).then(n.bind(null,"CqmX"))})),E=p.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(46),n.e(48)]).then(n.bind(null,"qpEo"))})),w=p.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(5),n.e(45)]).then(n.bind(null,"ceP7"))})),x=p.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(49),n.e(47)]).then(n.bind(null,"8gNO"))})),D=p.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(8),n.e(51)]).then(n.bind(null,"vvVX"))})),I=function(e){Object(c["a"])(n,e);var a=Object(d["a"])(n);function n(){var e;Object(i["a"])(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=a.call.apply(a,[this].concat(r)),e.state={salesType:"all",currentTabKey:"",rangePickerValue:k("year")},e.reqRef=0,e.timeoutId=0,e.handleChangeSalesType=function(a){e.setState({salesType:a.target.value})},e.handleTabChange=function(a){e.setState({currentTabKey:a})},e.handleRangePickerChange=function(a){var n=e.props.dispatch;e.setState({rangePickerValue:a}),n({type:"dashboardAndanalysis/fetchSalesData"})},e.selectDate=function(a){var n=e.props.dispatch;e.setState({rangePickerValue:k(a)}),n({type:"dashboardAndanalysis/fetchSalesData"})},e.isActive=function(a){var n=e.state.rangePickerValue;if(!n)return"";var t=k(a);return t&&n[0]&&n[1]&&n[0].isSame(t[0],"day")&&n[1].isSame(t[1],"day")?j.a.currentDate:""},e}return Object(l["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;this.reqRef=requestAnimationFrame((function(){e({type:"dashboardAndanalysis/fetch"})}))}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e,a=this.state,n=a.rangePickerValue,i=a.salesType,l=a.currentTabKey,c=this.props,d=c.dashboardAndanalysis,y=c.loading,g=d.visitData,h=d.visitData2,v=d.salesData,C=d.searchData,k=d.offlineData,T=d.offlineChartData,I=d.salesTypeData,N=d.salesTypeDataOnline,P=d.salesTypeDataOffline;e="all"===i?I:"online"===i?N:P;var S=p.a.createElement(s["a"],null,p.a.createElement(s["a"].Item,null,"\u64cd\u4f5c\u4e00"),p.a.createElement(s["a"].Item,null,"\u64cd\u4f5c\u4e8c")),A=p.a.createElement("span",{className:j.a.iconGroup},p.a.createElement(o["a"],{overlay:S,placement:"bottomRight"},p.a.createElement(u["a"],null))),R=l||k[0]&&k[0].name;return p.a.createElement(m["a"],null,p.a.createElement(p.a.Fragment,null,p.a.createElement(f["Suspense"],{fallback:p.a.createElement(b,null)},p.a.createElement(O,{loading:y,visitData:g})),p.a.createElement(f["Suspense"],{fallback:null},p.a.createElement(E,{rangePickerValue:n,salesData:v,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:y,selectDate:this.selectDate})),p.a.createElement(t["a"],{gutter:24,style:{marginTop:24}},p.a.createElement(r["a"],{xl:12,lg:24,md:24,sm:24,xs:24},p.a.createElement(f["Suspense"],{fallback:null},p.a.createElement(w,{loading:y,visitData2:h,searchData:C,dropdownGroup:A}))),p.a.createElement(r["a"],{xl:12,lg:24,md:24,sm:24,xs:24},p.a.createElement(f["Suspense"],{fallback:null},p.a.createElement(x,{dropdownGroup:A,salesType:i,loading:y,salesPieData:e,handleChangeSalesType:this.handleChangeSalesType})))),p.a.createElement(f["Suspense"],{fallback:null},p.a.createElement(D,{activeKey:R,loading:y,offlineData:k,offlineChartData:T,handleTabChange:this.handleTabChange}))))}}]),n}(f["Component"]);a["default"]=Object(y["c"])((function(e){var a=e.dashboardAndanalysis,n=e.loading;return{dashboardAndanalysis:a,loading:n.effects["dashboardAndanalysis/fetch"]}}))(I)},jYQm:function(e,a,n){"use strict";var t=n("q1tI"),r=Object(t["createContext"])({});a["a"]=r},kPKH:function(e,a,n){"use strict";var t=n("/kpp");a["a"]=t["a"]},kZZr:function(e,a,n){e.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}}}]);