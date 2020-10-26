(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"544":function(e,t,n){"use strict";function isEmpty(e){return void 0===e||""===e||null===e||"{}"===JSON.stringify(e)}function valiIdCard(e){return!!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e)}function valiPhone(e){if(!e)return!1;return/^((\d{3,4}-)?\d{7,8})$|^1(3|4|5|7|8)\d{9}$/.test(e)}function valiCarNumber(e){return/^桂[林]?[0-9A-Z]{5,6}$/.test(e)}n.d(t,"a",(function(){return isEmpty})),n.d(t,"c",(function(){return valiIdCard})),n.d(t,"d",(function(){return valiPhone})),n.d(t,"b",(function(){return valiCarNumber}))},"599":function(e,t,n){"use strict";n.d(t,"a",(function(){return getDictItem}));var i=n(15),a=n.n(i),r=n(18),o=n(31);function getDictItem(e){return _getDictItem.apply(this,arguments)}function _getDictItem(){return(_getDictItem=Object(r.a)(a.a.mark((function _callee(e){var t;return a.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}throw new Error("字典Code不能为空");case 2:return n.next=4,Object(o.a)("/api/sysDict/getDictItemsByDictCode?dictCode=".concat(e),{"method":"post"});case 4:if(200!==(t=n.sent).resultCode){n.next=7;break}return n.abrupt("return",t.data.map((function(e){return{"text":e.itemText,"value":e.itemValue}})));case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),_callee)})))).apply(this,arguments)}},"601":function(e,t,n){var i=n(21),a=n(735);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={"insert":"head","singleton":!1},o=(i(a,r),a.locals?a.locals:{});e.exports=o},"730":function(e,t,n){var i=n(21),a=n(731);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={"insert":"head","singleton":!1},o=(i(a,r),a.locals?a.locals:{});e.exports=o},"731":function(e,t,n){(t=n(19)(!1)).push([e.i,".van-uploader {\n  position: relative;\n  display: inline-block;\n}\n.van-uploader__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n.van-uploader__wrapper--disabled {\n  opacity: 0.5;\n}\n.van-uploader__input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  opacity: 0;\n}\n.van-uploader__input-wrapper {\n  position: relative;\n}\n.van-uploader__input:disabled {\n  cursor: not-allowed;\n}\n.van-uploader__upload {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 80px;\n  height: 80px;\n  margin: 0 8px 8px 0;\n  background-color: #f7f8fa;\n}\n.van-uploader__upload:active {\n  background-color: #f2f3f5;\n}\n.van-uploader__upload-icon {\n  color: #dcdee0;\n  font-size: 24px;\n}\n.van-uploader__upload-text {\n  margin-top: 8px;\n  color: #969799;\n  font-size: 12px;\n}\n.van-uploader__preview {\n  position: relative;\n  margin: 0 8px 8px 0;\n  cursor: pointer;\n}\n.van-uploader__preview-image {\n  display: block;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n}\n.van-uploader__preview-delete {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 14px;\n  height: 14px;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 0 0 0 12px;\n}\n.van-uploader__preview-delete-icon {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  color: #fff;\n  font-size: 16px;\n  transform: scale(0.5);\n}\n.van-uploader__preview-cover {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.van-uploader__mask {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: rgba(50, 50, 51, 0.88);\n}\n.van-uploader__mask-icon {\n  font-size: 22px;\n}\n.van-uploader__mask-message {\n  margin-top: 6px;\n  padding: 0 4px;\n  font-size: 12px;\n  line-height: 14px;\n}\n.van-uploader__loading {\n  width: 22px;\n  height: 22px;\n  color: #fff;\n}\n.van-uploader__file {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 80px;\n  height: 80px;\n  background-color: #f7f8fa;\n}\n.van-uploader__file-icon {\n  color: #646566;\n  font-size: 20px;\n}\n.van-uploader__file-name {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 8px;\n  padding: 0 4px;\n  color: #646566;\n  font-size: 12px;\n  text-align: center;\n}\n",""]),e.exports=t},"734":function(e,t,n){"use strict";var i=n(601);n.n(i).a},"735":function(e,t,n){(t=n(19)(!1)).push([e.i,".page-illegal-info {\n  min-height: 100vh;\n  padding-bottom: 2.66667rem;\n}\n.page-illegal-info .bottom {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  padding: 0.44444rem 0;\n  -webkit-box-shadow: 0 0 0.08889rem rgba(100, 100, 100, 0.4);\n          box-shadow: 0 0 0.08889rem rgba(100, 100, 100, 0.4);\n}\n.page-illegal-info .bottom .next-btn {\n  position: relative;\n  width: 76%;\n  left: 12%;\n  padding: 0.31111rem 0;\n  color: #fff;\n  background-color: #456fe4;\n  border-radius: 0.71111rem;\n  text-align: center;\n}\n.page-illegal-info .uploader-wrap {\n  background-color: #fff;\n  padding: 0.62222rem;\n  margin-top: 0.44444rem;\n}\n.page-illegal-info .uploader-wrap .uploader-title {\n  margin-bottom: 0.44444rem;\n  font-size: 0.66667rem;\n}\n",""]),e.exports=t},"866":function(e,t,n){"use strict";n.r(t);n(214);var i=n(52),a=n(15),r=n.n(a),o=n(204),l=n(18),s=n(3),c=(n(522),n(520)),u=(n(528),n(529)),p=(n(536),n(541)),f=(n(523),n(515)),d=(n(631),n(638)),h=(n(632),n(639)),v=(n(209),n(212),n(210),n(211),n(597),n(213),n(509),n(633),n(634),n(635),n(730),n(16)),m=n(34),g=n(46),b=n(10);function toArray(e){return Array.isArray(e)?e:[e]}function utils_readFile(e,t){return new Promise((function(n){if("file"!==t){var i=new FileReader;i.onload=function(e){n(e.target.result)},"dataUrl"===t?i.readAsDataURL(e):"text"===t&&i.readAsText(e)}else n()}))}var y=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function isImageFile(e){return!!e.isImage||(e.file&&e.file.type?0===e.file.type.indexOf("image"):e.url?function isImageUrl(e){return y.test(e)}(e.url):!!e.content&&0===e.content.indexOf("data:image"))}var w=n(54),x=n(600),T=n(511),k=n(689),_=Object(m.a)("uploader"),O=_[0],P=_[1],j=O({"inheritAttrs":!1,"mixins":[{"inject":{"vanField":{"default":null}},"watch":{"value":function value(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},"created":function created(){var e=this.vanField;e&&!e.children&&(e.children=this)}}],"model":{"prop":"fileList"},"props":{"disabled":Boolean,"lazyLoad":Boolean,"uploadText":String,"afterRead":Function,"beforeRead":Function,"beforeDelete":Function,"previewSize":[Number,String],"previewOptions":Object,"name":{"type":[Number,String],"default":""},"accept":{"type":String,"default":"image/*"},"fileList":{"type":Array,"default":function _default(){return[]}},"maxSize":{"type":[Number,String],"default":Number.MAX_VALUE},"maxCount":{"type":[Number,String],"default":Number.MAX_VALUE},"deletable":{"type":Boolean,"default":!0},"showUpload":{"type":Boolean,"default":!0},"previewImage":{"type":Boolean,"default":!0},"previewFullImage":{"type":Boolean,"default":!0},"imageFit":{"type":String,"default":"cover"},"resultType":{"type":String,"default":"dataUrl"},"uploadIcon":{"type":String,"default":"photograph"}},"computed":{"previewSizeWithUnit":function previewSizeWithUnit(){return Object(g.a)(this.previewSize)},"value":function value(){return this.fileList}},"methods":{"getDetail":function getDetail(e){return void 0===e&&(e=this.fileList.length),{"name":this.name,"index":e}},"onChange":function onChange(e){var t=this,n=e.target.files;if(!this.disabled&&n.length){if(n=1===n.length?n[0]:[].slice.call(n),this.beforeRead){var i=this.beforeRead(n,this.getDetail());if(!i)return void this.resetInput();if(Object(b.f)(i))return void i.then((function(e){e?t.readFile(e):t.readFile(n)})).catch(this.resetInput)}this.readFile(n)}},"readFile":function readFile(e){var t=this,n=function isOversize(e,t){return toArray(e).some((function(e){return e.size>t}))}(e,this.maxSize);if(Array.isArray(e)){var i=this.maxCount-this.fileList.length;e.length>i&&(e=e.slice(0,i)),Promise.all(e.map((function(e){return utils_readFile(e,t.resultType)}))).then((function(i){var a=e.map((function(e,t){var n={"file":e,"status":"","message":""};return i[t]&&(n.content=i[t]),n}));t.onAfterRead(a,n)}))}else utils_readFile(e,this.resultType).then((function(i){var a={"file":e,"status":"","message":""};i&&(a.content=i),t.onAfterRead(a,n)}))},"onAfterRead":function onAfterRead(e,t){var n=this;this.resetInput();var i=e;if(t){var a=e;Array.isArray(e)?(a=[],i=[],e.forEach((function(e){e.file&&(e.file.size>n.maxSize?a.push(e):i.push(e))}))):i=null,this.$emit("oversize",a,this.getDetail())}(Array.isArray(i)?Boolean(i.length):Boolean(i))&&(this.$emit("input",[].concat(this.fileList,toArray(i))),this.afterRead&&this.afterRead(i,this.getDetail()))},"onDelete":function onDelete(e,t){var n=this;if(this.beforeDelete){var i=this.beforeDelete(e,this.getDetail(t));if(!i)return;if(Object(b.f)(i))return void i.then((function(){n.deleteFile(e,t)})).catch(b.h)}this.deleteFile(e,t)},"deleteFile":function deleteFile(e,t){var n=this.fileList.slice(0);n.splice(t,1),this.$emit("input",n),this.$emit("delete",e,this.getDetail(t))},"resetInput":function resetInput(){this.$refs.input&&(this.$refs.input.value="")},"onPreviewImage":function onPreviewImage(e){var t=this;if(this.previewFullImage){var n=this.fileList.filter((function(e){return isImageFile(e)})),i=n.map((function(e){return e.content||e.url}));this.imagePreview=Object(k.a)(Object(v.a)({"images":i,"startPosition":n.indexOf(e),"onClose":function onClose(){t.$emit("close-preview")}},this.previewOptions))}},"closeImagePreview":function closeImagePreview(){this.imagePreview&&this.imagePreview.close()},"chooseFile":function chooseFile(){this.disabled||this.$refs.input&&this.$refs.input.click()},"genPreviewMask":function genPreviewMask(e){var t=this.$createElement,n=e.status,i=e.message;if("uploading"===n||"failed"===n){var a="failed"===n?t(w.a,{"attrs":{"name":"close"},"class":P("mask-icon")}):t(T.a,{"class":P("loading")}),r=Object(b.c)(i)&&""!==i;return t("div",{"class":P("mask")},[a,r&&t("div",{"class":P("mask-message")},[i])])}},"genPreviewItem":function genPreviewItem(e,t){var n=this,i=this.$createElement,a="uploading"!==e.status&&this.deletable&&i("div",{"class":P("preview-delete"),"on":{"click":function click(i){i.stopPropagation(),n.onDelete(e,t)}}},[i(w.a,{"attrs":{"name":"cross"},"class":P("preview-delete-icon")})]),r=this.slots("preview-cover",Object(v.a)({"index":t},e)),o=r&&i("div",{"class":P("preview-cover")},[r]),l=isImageFile(e)?i(x.a,{"attrs":{"fit":this.imageFit,"src":e.content||e.url,"width":this.previewSize,"height":this.previewSize,"lazyLoad":this.lazyLoad},"class":P("preview-image"),"on":{"click":function click(){n.onPreviewImage(e)}}},[o]):i("div",{"class":P("file"),"style":{"width":this.previewSizeWithUnit,"height":this.previewSizeWithUnit}},[i(w.a,{"class":P("file-icon"),"attrs":{"name":"description"}}),i("div",{"class":[P("file-name"),"van-ellipsis"]},[e.file?e.file.name:e.url]),o]);return i("div",{"class":P("preview"),"on":{"click":function click(){n.$emit("click-preview",e,n.getDetail(t))}}},[l,this.genPreviewMask(e),a])},"genPreviewList":function genPreviewList(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},"genUpload":function genUpload(){var e=this.$createElement;if(!(this.fileList.length>=this.maxCount)&&this.showUpload){var t,n=this.slots(),i=e("input",{"attrs":Object(v.a)({},this.$attrs,{"type":"file","accept":this.accept,"disabled":this.disabled}),"ref":"input","class":P("input"),"on":{"change":this.onChange}});if(n)return e("div",{"class":P("input-wrapper")},[n,i]);if(this.previewSize){var a=this.previewSizeWithUnit;t={"width":a,"height":a}}return e("div",{"class":P("upload"),"style":t},[e(w.a,{"attrs":{"name":this.uploadIcon},"class":P("upload-icon")}),this.uploadText&&e("span",{"class":P("upload-text")},[this.uploadText]),i])}}},"render":function render(){var e=arguments[0];return e("div",{"class":P()},[e("div",{"class":P("wrapper",{"disabled":this.disabled})},[this.genPreviewList(),this.genUpload()])])}}),C=(n(636),n(691)),N=(n(598),n(59)),S=n(30),I=n(4),z=n(44),$=n(45),F=n.n($),M=n(32),A=(n(637),n(31)),D=n(544),L=n(599);I.a.use(c.a).use(u.a).use(p.a).use(f.a).use(d.a).use(h.a).use(j).use(C.a).use(N.a);var U={"name":"IllegalInfo","data":function data(){return{"offenderName":"","certificateType":"居民身份证","documentNumber":"","violationTypeCode":"","isShowPersonnelTypePicker":!1,"violationTypeOptions":[],"phone":"","trafficModeCode":"","isShowTransportPicker":!1,"trafficModeOptions":[],"carTypeCode":"","isShowVehicleTypePicker":!1,"carTypeOptions":[],"carNumber":"无","images":[]}},"computed":Object(s.a)(Object(s.a)({},Object(z.d)("punishment",["punishInfo"])),{},{"isPersonalType":function isPersonalType(){return this.violationType&&this.violationType.text&&this.violationType.text.indexOf("行人")>-1},"violationType":function violationType(){var e=this;return this.violationTypeOptions.length&&this.violationTypeCode&&M.a.find(this.violationTypeOptions,(function(t){return t.value===e.violationTypeCode}))||{}},"trafficMode":function trafficMode(){var e=this;return this.trafficModeOptions.length&&this.trafficModeCode&&M.a.find(this.trafficModeOptions,(function(t){return t.value===e.trafficModeCode}))||{}},"carType":function carType(){var e=this;return this.carTypeOptions.length&&this.carTypeCode&&M.a.find(this.carTypeOptions,(function(t){return t.value===e.carTypeCode}))||{}}}),"created":function created(){var e=this;return Object(l.a)(r.a.mark((function _callee(){var t,n;return r.a.wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.getPersonnelTypeOptions(),e.getTransportOptions(),e.getVehicleTypeOptions()]);case 2:e.punishInfo.id&&(console.log(e.punishInfo),t=e.punishInfo,t.violationType,t.trafficMode,t.carType,n=Object(o.a)(t,["violationType","trafficMode","carType"]),Object.assign(e.$data,n));case 3:case"end":return i.stop()}}),_callee)})))()},"onShow":function onShow(){var e=localStorage.getItem("checkedCarNumber");e&&(localStorage.removeItem("checkedCarNumber"),this.carNumber=e)},"methods":Object(s.a)(Object(s.a)({},Object(z.c)("punishment",["PUT_PUNISH_INFO"])),{},{"toNextPage":function toNextPage(){var e=this;return Object(l.a)(r.a.mark((function _callee2(){var t,n,i,a,o,l,c,u,p;return r.a.wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(e.valid()){r.next=2;break}return r.abrupt("return");case 2:t=e.offenderName,n=e.certificateType,i=e.documentNumber,a=e.phone,o=e.carNumber,l=e.trafficMode,c=e.violationType,u=e.carType,p=e.images,e.PUT_PUNISH_INFO(Object(s.a)(Object(s.a)({},e.punishInfo),{},{"offenderName":t,"certificateType":n,"documentNumber":i,"violationType":c,"phone":a,"trafficMode":l,"carType":u,"carNumber":o,"images":p})),S.default.navigateTo({"url":"/pages/illegalPunish/index"});case 5:case"end":return r.stop()}}),_callee2)})))()},"afterRead":function afterRead(e){return Object(l.a)(r.a.mark((function _callee3(){return r.a.wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee3)})))()},"onPersonnelTypePickerConfirm":function onPersonnelTypePickerConfirm(e){var t=this;this.violationTypeCode=e.value,this.isShowPersonnelTypePicker=!1,setTimeout((function(){t.violationType&&t.violationType.text&&t.violationType.text.indexOf("行人")>-1&&(t.carTypeCode="",t.carNumber="无")}),200)},"onTransportPickerConfirm":function onTransportPickerConfirm(e){this.trafficModeCode=e.value,this.isShowTransportPicker=!1},"onVehicleTypePickerConfirm":function onVehicleTypePickerConfirm(e){this.carTypeCode=e.value,this.isShowVehicleTypePicker=!1},"valid":function valid(){var e=!0,t=this.offenderName,n=(this.certificateType,this.documentNumber),i=this.phone,a=this.carNumber,r=this.trafficMode,o=this.violationType,l=this.carType,s=[{"value":t,"txt":"请输入姓名"},{"value":n,"txt":"请输入证件号码"},{"value":o,"txt":"请选择人员分类"},{"value":r,"txt":"请选择交通方式"}];this.isPersonalType||(s=s.concat([{"value":l,"txt":"请选择车辆分类"}]));for(var c=0;c<s.length;c++){var u=s[c];if(Object(D.a)(u.value)){Object(S.showToast)({"title":u.txt,"icon":"none"}),e=!1;break}}return!!e&&(Object(D.c)(n)?i&&!Object(D.d)(i)?(Object(S.showToast)({"title":"输入的联系电话有误，请检查","icon":"none"}),!1):!(!this.isPersonalType&&a&&"无"!==a&&!Object(D.b)(a))||void Object(S.showToast)({"title":"输入的车牌号有误，请检查","icon":"none"}):(Object(S.showToast)({"title":"输入的证件号码有误，请检查","icon":"none"}),!1))},"getVehicleTypeOptions":function getVehicleTypeOptions(){var e=this;return Object(l.a)(r.a.mark((function _callee4(){return r.a.wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.a)("vehicle_type").then((function(t){null!=t&&(e.carTypeOptions=t)}));case 2:case"end":return t.stop()}}),_callee4)})))()},"getTransportOptions":function getTransportOptions(){var e=this;return Object(l.a)(r.a.mark((function _callee5(){return r.a.wrap((function _callee5$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.a)("transport").then((function(t){null!=t&&(e.trafficModeOptions=t)}));case 2:case"end":return t.stop()}}),_callee5)})))()},"getPersonnelTypeOptions":function getPersonnelTypeOptions(){var e=this;return Object(l.a)(r.a.mark((function _callee6(){return r.a.wrap((function _callee6$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.a)("personnel_type").then((function(t){null!=t&&(e.violationTypeOptions=t)}));case 2:case"end":return t.stop()}}),_callee6)})))()},"checkIdentity":function checkIdentity(){var e=this;return Object(l.a)(r.a.mark((function _callee7(){var t,n,a,o,l,s,c;return r.a.wrap((function _callee7$(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.offenderName,n=e.documentNumber,a=e.certificateType,!(t.length<1)){r.next=4;break}return Object(S.showToast)({"title":"请输入姓名","icon":"none"}),r.abrupt("return",!1);case 4:if(!(n.length<1)){r.next=7;break}return Object(S.showToast)({"title":"请输入证件号码","icon":"none"}),r.abrupt("return",!1);case 7:if(Object(D.c)(n)){r.next=10;break}return Object(S.showToast)({"title":"输入的证件号码有误，请检查","icon":"none"}),r.abrupt("return",!1);case 10:return Object(S.showLoading)({"title":"核查中...","mask":!0}),o={"identityNumber":n},r.next=14,Object(A.a)("/api/identity/identityVerify?".concat(F.a.stringify(o)),{"method":"post"});case 14:if(l=r.sent,Object(S.hideToast)(),Object(S.hideLoading)(),200===l.resultCode){for(c in s=[],l.data)s.push({"libName":c,"result":l.data[c]});S.default.navigateTo({"url":"/pages/identityCheck/index?".concat(F.a.stringify({"name":t,"certificateType":a,"idcard":n,"checkResults":JSON.stringify(s)}))})}else Object(i.a)({"type":"danger","duration":2e3,"message":"可能由于网络或服务器繁忙，请稍后重试~"});case 18:case"end":return r.stop()}}),_callee7)})))()},"checkCarNumber":function checkCarNumber(){var e=this;return Object(l.a)(r.a.mark((function _callee8(){var t,n,i,a;return r.a.wrap((function _callee8$(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.carNumber,n=e.documentNumber,i=e.offenderName,a="",a=t&&"无"!==t?t:n||i,t&&"无"!==t||n||i){r.next=6;break}return Object(S.showToast)({"title":"请填写【车牌号】【姓名】【身份证】至少一样！","icon":"none"}),r.abrupt("return");case 6:S.default.navigateTo({"url":"/pages/search/index?keyword=".concat(a)});case 7:case"end":return r.stop()}}),_callee8)})))()}})},V=(n(734),n(512)),R=Object(V.a)(U,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{"staticClass":"page page-illegal-info"},[n("div",{"staticClass":"main-content"},[n("van-cell-group",{"attrs":{"title":"人员基本信息"}},[n("van-field",{"attrs":{"required":"","clearable":"","label":"姓名","placeholder":"请输入姓名"},"model":{"value":e.offenderName,"callback":function(t){e.offenderName=t},"expression":"offenderName"}}),e._v(" "),n("van-field",{"attrs":{"required":"","clearable":"","label":"身份证号","placeholder":"请输入身份证号"},"model":{"value":e.documentNumber,"callback":function(t){e.documentNumber=t},"expression":"documentNumber"}},[n("van-button",{"attrs":{"slot":"button","size":"small","type":"info","plain":""},"on":{"click":e.checkIdentity},"slot":"button"},[e._v("\n          身份核查\n        ")])],1)],1),e._v(" "),n("van-cell-group",{"attrs":{"title":"违法基本信息"}},[n("van-field",{"attrs":{"required":"","clearable":"","label":"人员分类","placeholder":"请选择人员分类","readonly":""},"on":{"click":function(t){e.isShowPersonnelTypePicker=!0}},"model":{"value":e.violationType.text,"callback":function(t){e.$set(e.violationType,"text",t)},"expression":"violationType.text"}}),e._v(" "),n("van-field",{"attrs":{"clearable":"","label":"联系电话","placeholder":"请输入联系电话"},"model":{"value":e.phone,"callback":function(t){e.phone=t},"expression":"phone"}}),e._v(" "),n("van-field",{"attrs":{"required":"","clearable":"","label":"交通方式","placeholder":"请选择交通方式","readonly":""},"on":{"click":function(t){e.isShowTransportPicker=!0}},"model":{"value":e.trafficMode.text,"callback":function(t){e.$set(e.trafficMode,"text",t)},"expression":"trafficMode.text"}}),e._v(" "),e.isPersonalType?e._e():n("van-field",{"attrs":{"required":"","clearable":"","label":"车辆分类","placeholder":"请选择车辆分类","readonly":""},"on":{"click":function(t){e.isShowVehicleTypePicker=!0}},"model":{"value":e.carType.text,"callback":function(t){e.$set(e.carType,"text",t)},"expression":"carType.text"}}),e._v(" "),e.isPersonalType?e._e():n("van-field",{"attrs":{"clearable":"","label":"车牌号码","placeholder":"请输入车牌号码"},"model":{"value":e.carNumber,"callback":function(t){e.carNumber=t},"expression":"carNumber"}},[n("van-button",{"attrs":{"slot":"button","size":"small","type":"info","plain":""},"on":{"click":e.checkCarNumber},"slot":"button"},[e._v("\n          车辆核查\n        ")])],1)],1)],1),e._v(" "),n("div",{"staticClass":"uploader-wrap"},[n("div",{"staticClass":"uploader-title"},[e._v("现场图片")]),e._v(" "),n("van-uploader",{"attrs":{"after-read":e.afterRead,"max-count":3,"preview-size":"106px"},"model":{"value":e.images,"callback":function(t){e.images=t},"expression":"images"}})],1),e._v(" "),n("div",{"staticClass":"bottom"},[n("div",{"staticClass":"next-btn","on":{"click":e.toNextPage}},[e._v("下一步（违法处罚）")])]),e._v(" "),n("van-popup",{"attrs":{"position":"bottom"},"model":{"value":e.isShowPersonnelTypePicker,"callback":function(t){e.isShowPersonnelTypePicker=t},"expression":"isShowPersonnelTypePicker"}},[n("van-picker",{"attrs":{"show-toolbar":"","columns":e.violationTypeOptions},"on":{"cancel":function(t){e.isShowPersonnelTypePicker=!1},"confirm":e.onPersonnelTypePickerConfirm}})],1),e._v(" "),n("van-popup",{"attrs":{"position":"bottom"},"model":{"value":e.isShowTransportPicker,"callback":function(t){e.isShowTransportPicker=t},"expression":"isShowTransportPicker"}},[n("van-picker",{"attrs":{"show-toolbar":"","columns":e.trafficModeOptions},"on":{"cancel":function(t){e.isShowTransportPicker=!1},"confirm":e.onTransportPickerConfirm}})],1),e._v(" "),n("van-popup",{"attrs":{"position":"bottom"},"model":{"value":e.isShowVehicleTypePicker,"callback":function(t){e.isShowVehicleTypePicker=t},"expression":"isShowVehicleTypePicker"}},[n("van-picker",{"attrs":{"show-toolbar":"","columns":e.carTypeOptions},"on":{"cancel":function(t){e.isShowVehicleTypePicker=!1},"confirm":e.onVehicleTypePickerConfirm}})],1)],1)}),[],!1,null,null,null);t.default=R.exports}}]);