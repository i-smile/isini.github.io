(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"543":function(a,e,s){"use strict";e.a=s.p+"static/images/nodata.e89cdb46a9ff808313b6fb93c3fe5d1c.png"},"586":function(a,e,s){var t=s(21),n=s(703);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[a.i,n,""]]);var i={"insert":"head","singleton":!1},r=(t(n,i),n.locals?n.locals:{});a.exports=r},"702":function(a,e,s){"use strict";var t=s(586);s.n(t).a},"703":function(a,e,s){(e=s(19)(!1)).push([a.i,".page-search .form-search {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  -webkit-box-shadow: 0 0.06667rem 0.15556rem 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0.06667rem 0.15556rem 0 rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  z-index: 2;\n}\n.page-search .list {\n  padding-bottom: 2.48889rem;\n}\n.page-search .search-datas-wrapper {\n  min-height: calc(100vh - 2.48889rem);\n  padding-top: 2.44444rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n}\n.page-search .search-datas-wrapper .search-datas {\n  padding: 0 0.66667rem;\n}\n.page-search .search-datas-wrapper .search-datas .item-content .field {\n  height: 1.33333rem;\n  line-height: 1.33333rem;\n}\n.page-search .search-datas-wrapper .search-datas .item-content .field .key {\n  font-size: 0.62222rem;\n  color: #969799;\n}\n.page-search .search-datas-wrapper .search-datas .item-content .field .value {\n  font-size: 0.62222rem;\n  color: #000;\n}\n.page-search .search-datas-wrapper .search-datas .item-content .field .car-number {\n  color: #456fe4;\n  font-size: 0.8rem;\n}\n",""]),a.exports=e},"870":function(a,e,s){"use strict";s.r(e);s(522);var t=s(520),n=(s(696),s(701)),i=(s(552),s(557)),r=(s(553),s(558)),o=(s(554),s(559)),c=(s(700),s(583)),d=(s(577),s(584)),l=(s(580),s(585)),h=s(30),f=s(4),p=s(45),v=s.n(p),u=s(31),g=s(543);f.a.use(t.a).use(n.a).use(i.a).use(r.a).use(o.a).use(c.a).use(d.a).use(l.a);var m={"name":"Search","components":{},"data":function data(){return{"pic_nodata":g.a,"keyWord":decodeURI(h.default.getCurrentInstance().router.params.keyword||""),"isForCheck":h.default.getCurrentInstance().router.params&&h.default.getCurrentInstance().router.params.keyword,"isRefreshing":!1,"isLoading":!1,"error":!1,"loadFinished":!1,"offset":200,"pageSize":20,"pageIndex":1,"datas":[]}},"computed":{},"created":function created(){},"onShow":function onShow(){this.isForCheck=h.default.getCurrentInstance().router.params&&h.default.getCurrentInstance().router.params.keyword},"mounted":function mounted(){this.getDatas()},"methods":{"doSearch":function doSearch(){window.scrollTo(0,0),this.pageIndex=1,this.loadFinished=!1,this.getDatas()},"onRefresh":function onRefresh(){console.log("onRefresh"),this.pageIndex=1,this.loadFinished=!1,this.getDatas()},"onItemClick":function onItemClick(a){this.isForCheck&&(localStorage.setItem("checkedCarNumber",a.hphm),h.default.navigateBack())},"onLoad":function onLoad(){console.log("load"),this.pageIndex++,this.getDatas()},"getDatas":function getDatas(){var a=this,e=this,s={"pageNo":e.pageIndex,"pageSize":e.pageSize,"searchStr":e.keyWord};Object(u.a)("/api/nonMotorInfo/findByPage?".concat(v.a.stringify(s)),{"method":"POST"}).then((function(a){if(200===a.resultCode){var s=a.data.data;if(null==s||0===s.length)return void(e.loadFinished=!0);s.length<e.pageSize&&(e.loadFinished=!0),1===e.pageIndex?e.datas=s:e.datas=e.datas.concat(s)}else e.loadFinished=!0;console.log(e.loadFinished)})).catch((function(){a.error=!0})).finally((function(){e.isRefreshing=!1,e.isLoading=!1}))}}},_=(s(702),s(512)),C=Object(_.a)(m,(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{"staticClass":"page page-search"},[s("div",{"staticClass":"main-content"},[s("taro-form",{"staticClass":"form-search","attrs":{"action":"/"}},[s("van-search",{"attrs":{"placeholder":"请输入搜索关键词","show-action":""},"on":{"search":a.doSearch},"model":{"value":a.keyWord,"callback":function(e){a.keyWord=e},"expression":"keyWord"}},[s("div",{"attrs":{"slot":"action"},"on":{"click":a.doSearch},"slot":"action"},[a._v("搜索")])])],1),a._v(" "),s("div",{"staticClass":"search-datas-wrapper"},[s("van-pull-refresh",{"on":{"refresh":a.onRefresh},"model":{"value":a.isRefreshing,"callback":function(e){a.isRefreshing=e},"expression":"isRefreshing"}},[s("div",{"staticClass":"search-datas"},[a.datas.length>0?s("van-list",{"staticClass":"list","attrs":{"finished":a.loadFinished,"immediate-check":!1,"offset":a.offset,"error":a.error,"error-text":"","finished-text":"没有更多数据~"},"on":{"update:error":function(e){a.error=e},"load":a.onLoad},"model":{"value":a.isLoading,"callback":function(e){a.isLoading=e},"expression":"isLoading"}},a._l(a.datas,(function(e,t){return s("div",{"key":e.sfzmhm+t,"staticClass":"item-content","on":{"click":function(s){return a.onItemClick(e)}}},[s("div",{"staticClass":"field"},[s("span",{"staticClass":"car-number"},[a._v(a._s(e.hphm))])]),a._v(" "),s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("持有人：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.syr))])]),a._v(" "),s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("身份证号：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.sfzmhm))])]),a._v(" "),s("van-row",[s("van-col",{"attrs":{"span":"12"}},[s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("品牌：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.clpp))])])]),a._v(" "),s("van-col",{"attrs":{"span":"12"}},[s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("型号：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.clxh))])])])],1),a._v(" "),s("van-row",[s("van-col",{"attrs":{"span":"12"}},[s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("颜色：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.csys_mc))])])]),a._v(" "),s("van-col",{"attrs":{"span":"12"}},[s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("尺寸：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.wkcc))])])])],1),a._v(" "),s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("车架号：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.clsbdh))])]),a._v(" "),s("div",{"staticClass":"field"},[s("span",{"staticClass":"key"},[a._v("电机号：")]),a._v(" "),s("span",{"staticClass":"value"},[a._v(a._s(e.djhm))])]),a._v(" "),s("van-divider",{"style":{"color":"#bfbfbf","borderColor":"#bfbfbf","padding":"0 0"}})],1)})),0):a._e(),a._v(" "),a.loadFinished&&0==a.datas.length?s("taro-view",{"staticClass":"empty"},[s("taro-image",{"staticClass":"empty-img","attrs":{"src":a.pic_nodata}}),a._v(" "),s("taro-view",{"staticClass":"empty-text"},[a._v("暂无数据")])],1):a._e(),a._v(" "),a.loadFinished||0!=a.datas.length?a._e():s("taro-view",{"staticClass":"loading"},[a._v("加载中~")])],1)])],1)],1)])}),[],!1,null,null,null);e.default=C.exports}}]);