/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{"./client/components/common/page-delete.vue":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-dialog",{attrs:{"max-width":"550",persistent:"","overlay-color":"red darken-4","overlay-opacity":".7"},model:{value:e.isShown,callback:function(s){e.isShown=s},expression:"isShown"}},[t("v-card",[t("div",{staticClass:"dialog-header is-short is-red"},[t("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[e._v("mdi-file-document-box-remove-outline")]),t("span",[e._v(e._s(e.$t("common:page.delete")))])],1),t("v-card-text",{staticClass:"pt-5"},[t("i18next",{staticClass:"body-1",attrs:{path:"common:page.deleteTitle",tag:"div"}},[t("span",{staticClass:"red--text text--darken-2",attrs:{place:"title"}},[e._v(e._s(e.pageTitle))])]),t("div",{staticClass:"caption"},[e._v(e._s(e.$t("common:page.deleteSubtitle")))]),t("v-chip",{staticClass:"mt-3 ml-0 mr-1",attrs:{label:"",color:"red lighten-4",small:""}},[t("div",{staticClass:"caption red--text text--darken-2"},[e._v(e._s(e.pageLocale.toUpperCase()))])]),t("v-chip",{staticClass:"mt-3 mx-0",attrs:{label:"",color:"red lighten-5",small:""}},[t("span",{staticClass:"red--text text--darken-2"},[e._v("/"+e._s(e.pagePath))])])],1),t("v-card-chin",[t("v-spacer"),t("v-btn",{attrs:{text:"",disabled:e.loading},on:{click:e.discard}},[e._v(e._s(e.$t("common:actions.cancel")))]),t("v-btn",{staticClass:"px-4 white--text",attrs:{color:"red darken-2",loading:e.loading},on:{click:e.deletePage}},[e._v(e._s(e.$t("common:actions.delete")))])],1)],1)],1)};o._withStripped=!0;var n=t("./node_modules/lodash/delay.js"),d=t.n(n),a=t("./node_modules/lodash/get.js"),i=t.n(a),l=t("./node_modules/vuex-pathify/dist/vuex-pathify.js"),c=t("./client/graph/common/common-pages-mutation-delete.gql"),r=t.n(c),m={props:{value:{type:Boolean,default:!1}},data:()=>({loading:!1}),computed:{isShown:{get(){return this.value},set(e){this.$emit("input",e)}},pageTitle:Object(l.get)("page/title"),pagePath:Object(l.get)("page/path"),pageLocale:Object(l.get)("page/locale"),pageId:Object(l.get)("page/id")},watch:{isShown(e,s){e&&document.body.classList.add("page-deleted-pending")}},methods:{discard(){document.body.classList.remove("page-deleted-pending"),this.isShown=!1},async deletePage(){this.loading=!0,this.$store.commit("loadingStart","page-delete"),this.$nextTick(async()=>{try{const e=await this.$apollo.mutate({mutation:r.a,variables:{id:this.pageId}});if(!i()(e,"data.pages.delete.responseResult.succeeded",!1))throw new Error(i()(e,"data.pages.delete.responseResult.message",this.$t("common:error.unexpected")));this.isShown=!1,d()(()=>{document.body.classList.add("page-deleted"),d()(()=>{window.location.assign("/")},1200)},400)}catch(e){this.$store.commit("pushGraphError",e)}this.$store.commit("loadingStop","page-delete"),this.loading=!1})}}},u=(t("./client/components/common/page-delete.vue?vue&type=style&index=0&lang=scss&"),t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),p=t("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),v=t.n(p),g=t("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),_=t("./node_modules/vuetify/lib/components/VCard/VCard.js"),j=t("./node_modules/vuetify/lib/components/VCard/index.js"),h=t("./node_modules/vuetify/lib/components/VChip/VChip.js"),b=t("./node_modules/vuetify/lib/components/VDialog/VDialog.js"),f=t("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),y=t("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),k=Object(u.a)(m,o,[],!1,null,null,null);v()(k,{VBtn:g.a,VCard:_.a,VCardText:j.b,VChip:h.a,VDialog:b.a,VIcon:f.a,VSpacer:y.a}),k.options.__file="client/components/common/page-delete.vue";s.default=k.exports},"./client/components/common/page-delete.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){"use strict";var o=t("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-delete.vue?vue&type=style&index=0&lang=scss&");t.n(o).a},"./client/graph/common/common-pages-mutation-delete.gql":function(e,s){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"delete"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"responseResult"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"succeeded"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"errorCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:162}};t.loc.source={body:"mutation($id: Int!) {\n  pages {\n    delete(id: $id) {\n      responseResult {\n        succeeded\n        errorCode\n        slug\n        message\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};t.definitions.forEach((function(e){if(e.name){var s=new Set;!function e(s,t){if("FragmentSpread"===s.kind)t.add(s.name.value);else if("VariableDefinition"===s.kind){var o=s.type;"NamedType"===o.kind&&t.add(o.name.value)}s.selectionSet&&s.selectionSet.selections.forEach((function(s){e(s,t)})),s.variableDefinitions&&s.variableDefinitions.forEach((function(s){e(s,t)})),s.definitions&&s.definitions.forEach((function(s){e(s,t)}))}(e,s),o[e.name.value]=s}})),e.exports=t,t.documentId="fc8455ceb25c3681e940c7aea76b38a0adb4503ff6c6b422631b6e41852e2388"},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-delete.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){var o=t("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-delete.vue?vue&type=style&index=0&lang=scss&");"string"==typeof o&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(o,n);o.locals&&(e.exports=o.locals)},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/common/page-delete.vue?vue&type=style&index=0&lang=scss&":function(e,s,t){}}]);