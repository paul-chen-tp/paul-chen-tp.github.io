(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bannerCreate"],{"11ef":function(t,e,a){"use strict";var n=a("8145"),i=a.n(n);i.a},8145:function(t,e,a){},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,s=Function.prototype,l=s.toString,r=/^\s*function ([^ (]*)/,o="name";!n||o in s||i(s,o,{configurable:!0,get:function(){try{return l.call(this).match(r)[1]}catch(t){return""}}})},d9d5:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header",{attrs:{title:"Banner 新增",breadcrumb:t.breadcrumb}}),a("div",{staticClass:"right_top"},[a("div",{staticClass:"col-sm-12 col-md-8"},[a("file-uploader",{attrs:{id:"uploader_image"},on:{change:t.onImageChange}},[a("label",{attrs:{for:"uploader_image"}},[t.image?a("img",{attrs:{src:t.image,width:"90%"}}):a("div",[t._v(" 上傳 ")])])])],1),a("div",{staticClass:"col-sm-12 col-md-4"},[a("file-uploader",{attrs:{id:"uploader_image_m"},on:{change:t.onImageMChange}},[a("label",{attrs:{for:"uploader_image_m"}},[t._v(" 上傳小圖 "),a("img",{attrs:{src:t.imageM,width:"90%"}})])])],1)]),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-blue",attrs:{type:"button"}},[t._v(" 儲存 ")]),a("router-link",{attrs:{to:"/banner"}},[a("button",{staticClass:"btn btn-blue",attrs:{type:"button"}},[t._v(" 取消 ")])])],1)],1)},i=[],s=a("36ad"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",t._b({ref:"input",class:t.inputClass,attrs:{id:t.$attrs.id||"fileUploader",type:"file",files:t.value},on:{change:t.handleChange}},"input",t.$attrs,!1)),t._t("default",[a("label",{staticClass:"custom-file-label upload-label",attrs:{for:t.$attrs.id||"fileUploader","data-browse":"瀏覽"}},[t._v(" "+t._s(t.fileName||"選擇檔案")+" ")])])],2)},r=[],o=(a("b0c0"),{inheritAttrs:!1,props:["inputClass","value"],data:function(){return{fileName:""}},methods:{handleChange:function(t){var e=t.target,a=e.files,n=e.multiple;this.$emit("input",a),a.length>0?(this.createFiles(a),this.fileName=n?"已選擇".concat(a.length,"份檔案"):a[0].name):(this.fileName="",this.$emit("change",{files:null,paths:[]}))},createFiles:function(t){var e=[],a=this;if(t)for(var n=function(n){var i=new FileReader;i.onload=function(i){e.push(i.target.result),n===t.length-1&&a.$emit("change",{files:t,paths:e})},i.readAsDataURL(t[n])},i=0;i<t.length;i++)n(i);else a.$emit("change",{files:t,paths:e})},reset:function(){this.$refs.input.value="",this.handleChange({target:this.$refs.input})}}}),u=o,c=(a("11ef"),a("2877")),h=Object(c["a"])(u,l,r,!1,null,"20eefb87",null),d=h.exports,f={data:function(){return{breadcrumb:[{title:"Banner 內容維護",link:"/banner"},{title:"新增"}],data:{title:"",description:""},image:"",imageM:""}},components:{FileUploader:d,PageHeader:s["a"]},methods:{onImageChange:function(t){var e=t.paths;this.image=e.length>0?e[0]:""},onImageMChange:function(t){var e=t.paths;this.imageM=e.length>0?e[0]:""}}},g=f,m=Object(c["a"])(g,n,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=bannerCreate.cfa8767a.js.map