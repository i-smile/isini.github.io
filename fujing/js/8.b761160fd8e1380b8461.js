(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"539":function(n,t,e){"use strict";t.a=e.p+"static/images/nodata.e89cdb46a9ff808313b6fb93c3fe5d1c.png"},"573":function(n,t,e){"use strict";e(207),e(574)},"574":function(n,t,e){var a=e(21),i=e(575);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var s={"insert":"head","singleton":!1},o=(a(i,s),i.locals?i.locals:{});n.exports=o},"575":function(n,t,e){(t=e(19)(!1)).push([n.i,".van-row::after {\n  display: table;\n  clear: both;\n  content: '';\n}\n.van-row--flex {\n  display: flex;\n}\n.van-row--flex::after {\n  display: none;\n}\n.van-row--justify-center {\n  justify-content: center;\n}\n.van-row--justify-end {\n  justify-content: flex-end;\n}\n.van-row--justify-space-between {\n  justify-content: space-between;\n}\n.van-row--justify-space-around {\n  justify-content: space-around;\n}\n.van-row--align-center {\n  align-items: center;\n}\n.van-row--align-bottom {\n  align-items: flex-end;\n}\n",""]),n.exports=t},"576":function(n,t,e){"use strict";e(207),e(577)},"577":function(n,t,e){var a=e(21),i=e(578);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var s={"insert":"head","singleton":!1},o=(a(i,s),i.locals?i.locals:{});n.exports=o},"578":function(n,t,e){(t=e(19)(!1)).push([n.i,".van-col {\n  float: left;\n  box-sizing: border-box;\n  min-height: 1px;\n}\n.van-col--1 {\n  width: 4.16666667%;\n}\n.van-col--offset-1 {\n  margin-left: 4.16666667%;\n}\n.van-col--2 {\n  width: 8.33333333%;\n}\n.van-col--offset-2 {\n  margin-left: 8.33333333%;\n}\n.van-col--3 {\n  width: 12.5%;\n}\n.van-col--offset-3 {\n  margin-left: 12.5%;\n}\n.van-col--4 {\n  width: 16.66666667%;\n}\n.van-col--offset-4 {\n  margin-left: 16.66666667%;\n}\n.van-col--5 {\n  width: 20.83333333%;\n}\n.van-col--offset-5 {\n  margin-left: 20.83333333%;\n}\n.van-col--6 {\n  width: 25%;\n}\n.van-col--offset-6 {\n  margin-left: 25%;\n}\n.van-col--7 {\n  width: 29.16666667%;\n}\n.van-col--offset-7 {\n  margin-left: 29.16666667%;\n}\n.van-col--8 {\n  width: 33.33333333%;\n}\n.van-col--offset-8 {\n  margin-left: 33.33333333%;\n}\n.van-col--9 {\n  width: 37.5%;\n}\n.van-col--offset-9 {\n  margin-left: 37.5%;\n}\n.van-col--10 {\n  width: 41.66666667%;\n}\n.van-col--offset-10 {\n  margin-left: 41.66666667%;\n}\n.van-col--11 {\n  width: 45.83333333%;\n}\n.van-col--offset-11 {\n  margin-left: 45.83333333%;\n}\n.van-col--12 {\n  width: 50%;\n}\n.van-col--offset-12 {\n  margin-left: 50%;\n}\n.van-col--13 {\n  width: 54.16666667%;\n}\n.van-col--offset-13 {\n  margin-left: 54.16666667%;\n}\n.van-col--14 {\n  width: 58.33333333%;\n}\n.van-col--offset-14 {\n  margin-left: 58.33333333%;\n}\n.van-col--15 {\n  width: 62.5%;\n}\n.van-col--offset-15 {\n  margin-left: 62.5%;\n}\n.van-col--16 {\n  width: 66.66666667%;\n}\n.van-col--offset-16 {\n  margin-left: 66.66666667%;\n}\n.van-col--17 {\n  width: 70.83333333%;\n}\n.van-col--offset-17 {\n  margin-left: 70.83333333%;\n}\n.van-col--18 {\n  width: 75%;\n}\n.van-col--offset-18 {\n  margin-left: 75%;\n}\n.van-col--19 {\n  width: 79.16666667%;\n}\n.van-col--offset-19 {\n  margin-left: 79.16666667%;\n}\n.van-col--20 {\n  width: 83.33333333%;\n}\n.van-col--offset-20 {\n  margin-left: 83.33333333%;\n}\n.van-col--21 {\n  width: 87.5%;\n}\n.van-col--offset-21 {\n  margin-left: 87.5%;\n}\n.van-col--22 {\n  width: 91.66666667%;\n}\n.van-col--offset-22 {\n  margin-left: 91.66666667%;\n}\n.van-col--23 {\n  width: 95.83333333%;\n}\n.van-col--offset-23 {\n  margin-left: 95.83333333%;\n}\n.van-col--24 {\n  width: 100%;\n}\n.van-col--offset-24 {\n  margin-left: 100%;\n}\n",""]),n.exports=t},"580":function(n,t,e){"use strict";var a=e(33),i=e(511),s=Object(a.a)("row"),o=s[0],r=s[1];t.a=o({"mixins":[Object(i.b)("vanRow")],"props":{"type":String,"align":String,"justify":String,"tag":{"type":String,"default":"div"},"gutter":{"type":[Number,String],"default":0}},"computed":{"spaces":function spaces(){var n=Number(this.gutter);if(n){var spaces=[],t=[[]],e=0;return this.children.forEach((function(n,a){(e+=Number(n.span))>24?(t.push([a]),e-=24):t[t.length-1].push(a)})),t.forEach((function(t){var e=n*(t.length-1)/t.length;t.forEach((function(t,a){if(0===a)spaces.push({"right":e});else{var i=n-spaces[t-1].right,s=e-i;spaces.push({"left":i,"right":s})}}))})),spaces}}},"methods":{"onClick":function onClick(n){this.$emit("click",n)}},"render":function render(){var n,t=arguments[0],e=this.align,a=this.justify,i="flex"===this.type;return t(this.tag,{"class":r((n={"flex":i},n["align-"+e]=i&&e,n["justify-"+a]=i&&a,n)),"on":{"click":this.onClick}},[this.slots()])}})},"581":function(n,t,e){"use strict";var a=e(33),i=e(511),s=Object(a.a)("col"),o=s[0],r=s[1];t.a=o({"mixins":[Object(i.a)("vanRow")],"props":{"span":[Number,String],"offset":[Number,String],"tag":{"type":String,"default":"div"}},"computed":{"style":function style(){var n=this.index,t=(this.parent||{}).spaces;if(t&&t[n]){var e=t[n],a=e.left,i=e.right;return{"paddingLeft":a?a+"px":null,"paddingRight":i?i+"px":null}}}},"methods":{"onClick":function onClick(n){this.$emit("click",n)}},"render":function render(){var n,t=arguments[0],e=this.span,a=this.offset;return t(this.tag,{"style":this.style,"class":r((n={},n[e]=e,n["offset-"+a]=a,n)),"on":{"click":this.onClick}},[this.slots()])}})},"602":function(n,t,e){var a=e(21),i=e(739);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var s={"insert":"head","singleton":!1},o=(a(i,s),i.locals?i.locals:{});n.exports=o},"603":function(n,t,e){var a=e(21),i=e(741);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var s={"insert":"head","singleton":!1},o=(a(i,s),i.locals?i.locals:{});n.exports=o},"738":function(n,t,e){"use strict";var a=e(602);e.n(a).a},"739":function(n,t,e){(t=e(19)(!1)).push([n.i,".list-wrap[data-v-42de7fe6] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 2.66667rem;\n}\n.list[data-v-42de7fe6],\n.empty[data-v-42de7fe6] {\n  min-height: calc(100vh - 10.11111rem);\n  /*margin-top: 16px;*/\n}\n.empty[data-v-42de7fe6] {\n  background-color: #fff;\n}\n.item-content[data-v-42de7fe6] {\n  background-color: #fff;\n}\n.item-content .item-filed[data-v-42de7fe6] {\n  text-align: center;\n  height: 1.77778rem;\n  line-height: 1.77778rem;\n}\n.item-content .item-filed .image[data-v-42de7fe6] {\n  vertical-align: middle;\n  height: 1.26667rem;\n}\n",""]),n.exports=t},"740":function(n,t,e){"use strict";var a=e(603);e.n(a).a},"741":function(n,t,e){(t=e(19)(!1)).push([n.i,".page-order-rank {\n  height: 100vh;\n}\n.page-order-rank .rank-list-header {\n  background-color: #fff;\n  border-bottom: 0.04444rem solid #dedede;\n}\n.page-order-rank .rank-list-header .filed {\n  text-align: center;\n  height: 2.04444rem;\n  line-height: 2.04444rem;\n}\n.page-order-rank .bottom-hint {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  line-height: 2.66667rem;\n  height: 2.66667rem;\n  text-align: center;\n}\n.page-order-rank .van-tabs__wrap {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 2.66667rem;\n  -webkit-box-shadow: 0 0.06667rem 0.15556rem 0 rgba(0, 0, 0, 0.25);\n          box-shadow: 0 0.06667rem 0.15556rem 0 rgba(0, 0, 0, 0.25);\n  z-index: 9;\n}\n.page-order-rank .van-tabs__wrap .van-tabs__nav {\n  position: relative;\n  background-color: #2396f3;\n}\n.page-order-rank .van-tabs__wrap .van-tabs__nav .van-tab {\n  color: #fff;\n}\n.page-order-rank .van-tabs__wrap .van-tabs__nav .van-tab__text {\n  font-weight: bold;\n  font-size: 0.66667rem;\n}\n.page-order-rank .van-tabs__wrap .van-tabs__nav .van-tabs__line {\n  width: 33.333%;\n  height: 0.08889rem;\n}\n.page-order-rank .van-tabs__content {\n  position: absolute;\n  top: 2.66667rem;\n  height: calc(100vh - 2.48889rem - 2.66667rem);\n  width: 100%;\n  overflow: auto;\n}\n",""]),n.exports=t},"834":function(n,t,e){"use strict";e.r(t);e(624);var a=e(678),i=(e(625),e(626)),s=(e(34),e(4)),o=(e(518),e(516)),r=(e(548),e(553)),l=(e(549),e(554)),c=(e(556),e(557)),f=(e(573),e(580)),d=(e(576),e(581)),v=(e(550),e(555)),h=(e(31),e(45)),g=e.n(h),u=e(30),p=e(539),m=[e.p+"static/images/prize1.a2c4efc89573a0a0f818ce459bec146a.png",e.p+"static/images/prize2.e0615e01111b181dec3960358502d1cc.png",e.p+"static/images/prize3.05a2f5f3cdae1794a659964622cb1ede.png"];s.a.use(o.a).use(r.a).use(l.a).use(c.a).use(f.a).use(d.a).use(v.a);var b={"name":"List","props":["status"],"data":function data(){return{"pic_nodata":p.a,"prizes":m,"offset":200,"listData":[],"isRefreshing":!1,"isLoading":!1,"error":!1,"loadFinished":!1,"pageSize":20,"pageIndex":1}},"created":function created(){this.getDatas()},"filters":{"rankSum":function rankSum(n){return n?((n=n.toString()).indexOf(".")>-1&&(n=n.substring(0,n.indexOf("."))),n+="单"):""}},"methods":{"onListLoad":function onListLoad(){this.pageIndex++,this.getDatas()},"onRefresh":function onRefresh(){this.listData=[],this.pageIndex=1,this.loadFinished=!1,this.getDatas()},"getDatas":function getDatas(){var n=this,t=this,e={"pageNo":t.pageIndex,"pageSize":t.pageSize,"type":t.status};Object(u.a)("/api/tPunishment/getFuJingRank?".concat(g.a.stringify(e)),{"method":"POST"}).then((function(n){if(200===n.resultCode){var e=n.data.records;if(null==e||0===e.length)return void(t.loadFinished=!0);e.length<t.pageSize&&(t.loadFinished=!0),1===t.pageIndex?t.listData=e:t.listData=t.listData.concat(e)}else t.loadFinished=!0;console.log(t.loadFinished)})).catch((function(){n.error=!0})).finally((function(){t.isRefreshing=!1,t.isLoading=!1}))}}},w=(e(738),e(509)),_=Object(w.a)(b,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("taro-view",{"staticClass":"list-wrap"},[e("van-pull-refresh",{"attrs":{"loading-text":" "},"on":{"refresh":n.onRefresh},"model":{"value":n.isRefreshing,"callback":function(t){n.isRefreshing=t},"expression":"isRefreshing"}},[n.listData.length>0?e("van-list",{"staticClass":"list","attrs":{"finished":n.loadFinished,"immediate-check":!1,"offset":n.offset,"error":n.error,"error-text":"","loading-text":"","finished-text":"没有更多数据~"},"on":{"update:error":function(t){n.error=t},"load":n.onListLoad},"model":{"value":n.isLoading,"callback":function(t){n.isLoading=t},"expression":"isLoading"}},n._l(n.listData,(function(t,a){return e("taro-view",{"key":a+"-"+t.rank+"-"+t.sum},[e("taro-view",{"staticClass":"item-content"},[e("van-row",[e("van-col",{"staticClass":"item-filed","attrs":{"span":"8"}},[a<3?e("img",{"staticClass":"image","attrs":{"src":n.prizes[a]}}):e("span",[n._v("\n                "+n._s(t.rank)+"\n              ")])]),n._v(" "),e("van-col",{"staticClass":"item-filed","attrs":{"span":"8"}},[e("span",[n._v(n._s(t.name))])]),n._v(" "),e("van-col",{"staticClass":"item-filed","attrs":{"span":"8"}},[e("span",[n._v(n._s(n._f("rankSum")(t.sum)))])])],1)],1)],1)})),1):n._e(),n._v(" "),n.loadFinished&&0==n.listData.length?e("taro-view",{"staticClass":"empty"},[e("taro-image",{"staticClass":"empty-img","attrs":{"src":n.pic_nodata}}),n._v(" "),e("taro-view",{"staticClass":"empty-text"},[n._v("暂无数据")])],1):n._e(),n._v(" "),n.loadFinished||0!=n.listData.length?n._e():e("taro-view",{"staticClass":"loading"},[n._v("加载中~")])],1)],1)}),[],!1,null,"42de7fe6",null).exports;s.a.use(a.a).use(i.a);var x={"name":"Approval","components":{"MyList":_},"data":function data(){return{"activeIndex":0}},"mounted":function mounted(){},"methods":{"tabsChange":function tabsChange(n,t){}}},k=(e(740),Object(w.a)(x,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{"staticClass":"page page-order-rank"},[e("div",{"staticClass":"main-content"},[e("div",{"staticClass":"tabs-wrapper"},[e("van-tabs",{"attrs":{"offset-top":0,"title-active-color":"#fff","color":"#fff"},"on":{"change":n.tabsChange},"model":{"value":n.activeIndex,"callback":function(t){n.activeIndex=t},"expression":"activeIndex"}},[e("taro-view",{"staticClass":"rank-list-header"},[e("van-row",[e("van-col",{"staticClass":"filed","attrs":{"span":"8"}},[e("span",[n._v("排名")])]),n._v(" "),e("van-col",{"staticClass":"filed","attrs":{"span":"8"}},[e("span",[n._v("姓名")])]),n._v(" "),e("van-col",{"staticClass":"filed","attrs":{"span":"8"}},[e("span",[n._v("开单数")])])],1)],1),n._v(" "),e("van-tab",{"attrs":{"title":"日排行榜"}},[e("MyList",{"attrs":{"status":0}})],1),n._v(" "),e("van-tab",{"attrs":{"title":"周排行榜"}},[e("MyList",{"attrs":{"status":1}})],1),n._v(" "),e("van-tab",{"attrs":{"title":"月排行榜"}},[e("MyList",{"attrs":{"status":2}})],1)],1)],1)]),n._v(" "),n._m(0)])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{"staticClass":"bottom-hint"},[t("span",[this._v("*开单排名以所属大队为单位进行统计")])])}],!1,null,null,null));t.default=k.exports}}]);