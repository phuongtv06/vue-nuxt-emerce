(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(t,e,o){var content=o(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("88d23094",content,!0,{sourceMap:!1})},158:function(t,e,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("b8af8e4e",content,!0,{sourceMap:!1})},159:function(t,e,o){var content=o(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("71fe927a",content,!0,{sourceMap:!1})},160:function(t,e,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("67eadd7c",content,!0,{sourceMap:!1})},161:function(t,e,o){var content=o(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("56b15182",content,!0,{sourceMap:!1})},177:function(t,e,o){"use strict";var r=o(9),n=o(67),l=o(68),c=o(180),d=o(181),h=o(182);r.b.watch();var m={components:{VmHeader:n.default,VmFooter:l.default,VmLoginModal:c.default,VmRegistrationModal:d.default,VmCheckoutModal:h.default}},f=(o(236),o(6)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("VmHeader"),t._v(" "),o("main",[o("Nuxt"),t._v(" "),o("VmLoginModal"),t._v(" "),o("VmRegistrationModal"),t._v(" "),o("VmCheckoutModal")],1),t._v(" "),o("VmFooter")],1)}),[],!1,null,null,null);e.a=component.exports},178:function(t,e,o){"use strict";o.r(e);var r={name:"search",data:function(){return{value:""}},computed:{placeholder:function(){return"/wishlist"===this.$route.path?"Search in wishlist...":"Search..."}},methods:{search:function(t){t.length>0?(this.$store.commit("setHasUserSearched",!0),this.$store.commit("setProductTitleSearched",t)):(this.$store.commit("setHasUserSearched",!1),this.$store.commit("setProductTitleSearched",""))}}},n=o(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"control has-icons-left"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input is-rounded",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{keyup:function(e){return t.search(t.value)},input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-search"})])}],!1,null,null,null);e.default=component.exports},179:function(t,e,o){"use strict";o.r(e);var r={name:"VmMenu",data:function(){return{wishlistLabel:"Wishlist",logoutLabel:"Log out",loginLabel:"Log in",signupLabel:"Sign up"}},computed:{isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},getUserName:function(){var t=this.$store.getters.getUserName;return""===t?"user":t}},methods:{logout:function(){this.$store.commit("isUserLoggedIn",!1),this.$store.commit("isUserSignedUp",!1),this.$store.commit("removeProductsFromFavourite"),this.$router.push({name:"index"})},showLoginModal:function(){this.$store.commit("showLoginModal",!0)},showSignupModal:function(){this.$store.commit("showSignupModal",!0)}}},n=o(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"navbar-item"},[o("div",{staticClass:"field is-grouped"},[o("p",{staticClass:"control"},[t.isUserLoggedIn?t._e():o("a",{staticClass:"button",on:{click:t.showSignupModal}},[t._m(0),t._v(" "),o("span",[t._v(t._s(t.signupLabel))])])]),t._v(" "),o("p",{staticClass:"control"},[t.isUserLoggedIn?t._e():o("a",{staticClass:"button",on:{click:t.showLoginModal}},[t._m(1),t._v(" "),o("span",[t._v(t._s(t.loginLabel))])])])])]),t._v(" "),t.isUserLoggedIn?o("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[o("a",{staticClass:"navbar-link",attrs:{href:""}},[t._v(" Welcome "+t._s(t.getUsername)+" ")]),t._v(" "),o("div",{staticClass:"navbar-dropdown is-boxed"},[o("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"user-wishlist"}}},[t._v("\n            "+t._s(t.wishlistLabel)+"\n        ")]),t._v(" "),o("hr",{staticClass:"navbar-divider"}),t._v(" "),o("a",{staticClass:"navbar-item",attrs:{href:""},on:{click:t.logout}},[t._v("\n            "+t._s(t.logoutLabel)+"\n        ")])],1)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-user-plus"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-user"})])}],!1,null,null,null);e.default=component.exports},180:function(t,e,o){"use strict";o.r(e);var r=o(40),n={name:"login",data:function(){return{modalTitle:"Log in",modalTitleLoggedIn:"Welcome!",primaryBtnLabel:"Log in",emailRequiredLabel:"Email required",passwordRequiredLabel:"Password required",emailNotValidLabel:"Valid email required",btnLoggedInLabel:"Close",emailPlaceholder:"Your email",email:"",password:"",highlightEmailWithError:null,highlightPasswordWithError:null,isFormSuccess:!1}},computed:{isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},openModal:function(){return!!this.$store.getters.isLoginModalOpen}},methods:{closeModal:function(){this.$store.commit("showLoginModal",!1)},checkForm:function(t){t.preventDefault(),this.email&&this.password&&(this.highlightEmailWithError=!1,this.highlightPasswordWithError=!1,this.isFormSuccess=!0,this.$store.commit("isUserLoggedIn",this.isFormSuccess)),this.email?this.highlightEmailWithError=!1:(this.highlightEmailWithError=!0,this.email&&!Object(r.a)(this.email)&&(this.emailRequiredLabel=this.emailNotValidLabel)),this.password?this.highlightPasswordWithError=!1:this.highlightPasswordWithError=!0},checkEmailOnKeyUp:function(t){t&&Object(r.a)(t)?this.highlightEmailWithError=!1:(this.highlightEmailWithError=!0,Object(r.a)(t)||(this.emailRequiredLabel=this.emailNotValidLabel))},checkPasswordOnKeyUp:function(t){this.highlightPasswordWithError=!t}}},l=(o(232),o(6)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:[t.openModal?"is-active":"","modal"]},[o("div",{staticClass:"modal-background"}),t._v(" "),o("div",{staticClass:"modal-card"},[o("header",{staticClass:"modal-card-head"},[t.isUserLoggedIn?t._e():o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitle))]),t._v(" "),t.isUserLoggedIn?o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitleLoggedIn))]):t._e(),t._v(" "),o("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),o("form",{attrs:{action:"#",method:"post"},on:{submit:t.checkForm}},[o("section",{staticClass:"modal-card-body"},[t.isUserLoggedIn?t._e():o("div",[o("div",{staticClass:"field"},[o("p",{staticClass:"control has-icons-left has-icons-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:[t.highlightEmailWithError?"input is-danger":"input"],attrs:{type:"email",placeholder:t.emailPlaceholder,name:"emailName"},domProps:{value:t.email},on:{keyup:function(e){return t.checkEmailOnKeyUp(t.email)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),null!==t.highlightEmailWithError?o("span",{staticClass:"icon is-small is-right"},[o("i",{class:[t.highlightEmailWithError?"fa fa-exclamation-circle":"fa fa-check"]})]):t._e()]),t._v(" "),t.highlightEmailWithError?o("p",{staticClass:"help is-danger"},[t._v(t._s(t.emailRequiredLabel))]):t._e()]),t._v(" "),o("div",{staticClass:"field"},[o("p",{staticClass:"control has-icons-left has-icons-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:[t.highlightPasswordWithError?"input is-danger":"input"],attrs:{type:"password",placeholder:"Your password",name:"passwordName"},domProps:{value:t.password},on:{keyup:function(e){return t.checkPasswordOnKeyUp(t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),null!==t.highlightPasswordWithError?o("span",{staticClass:"icon is-small is-right"},[o("i",{class:[t.highlightPasswordWithError?"fa fa-exclamation-circle":"fa fa-check"]})]):t._e()]),t._v(" "),t.highlightPasswordWithError?o("p",{staticClass:"help is-danger"},[t._v(t._s(t.passwordRequiredLabel))]):t._e()])]),t._v(" "),t.isUserLoggedIn?o("div",{staticClass:"level"},[t._m(2)]):t._e()]),t._v(" "),o("footer",{staticClass:"modal-card-foot"},[t.isUserLoggedIn?t._e():o("button",{staticClass:"button is-info",attrs:{type:"submit"}},[t._v(t._s(t.primaryBtnLabel))]),t._v(" "),t.isUserLoggedIn?o("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:t.closeModal}},[t._v(t._s(t.btnLoggedInLabel))]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-lock"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"level-item has-text-centered"},[o("div",[o("p",{staticClass:"title"},[t._v("Welcome back!")]),t._v(" "),o("p",{staticClass:"heading"},[t._v("Now you are logged in")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(67).default,Footer:o(68).default})},181:function(t,e,o){"use strict";o.r(e);o(22);var r=o(40),n={name:"registration",data:function(){return{modalTitle:"Sign up",modalTitleRegistered:"Welcome ",primaryBtnLabel:"Sign up",btnRegisteredLabel:"Close",namePlaceholder:"Name*",emailPlaceholder:"Email*",passwordPlaceholder:"Password*",repeatPasswordPlaceholder:"Repeat Password*",notEqualErrorLabel:"Passwords must be equal",passwordErrorLabel:"Password required",nameErrorLabel:"Name required",emailErrorLabel:"Email required",emailNotValidLabel:"Valid email required",name:"",email:"",password:"",repeatPassword:"",highlightNameWithError:null,highlightEmailWithError:null,highlightPasswordWithError:null,highlightRepeatPasswordWithError:null,isFormSuccess:!1}},computed:{isUserSignedUp:function(){return this.$store.getters.isUserSignedUp},openModal:function(){return!!this.$store.getters.isSignupModalOpen}},methods:{closeModal:function(){this.$store.commit("showSignupModal",!1)},checkForm:function(t){t.preventDefault(),this.name&&this.email&&this.password&&this.repeatPassword&&(this.highlightEmailWithError=!1,this.highlightPasswordWithError=!1,this.isFormSuccess=!0,this.$store.commit("setUserName",this.name),this.$store.commit("isUserSignedUp",this.isFormSuccess),this.$store.commit("isUserLoggedIn",this.isFormSuccess)),this.name?this.highlightNameWithError=!1:this.highlightNameWithError=!0,this.email?this.highlightEmailWithError=!1:(this.highlightEmailWithError=!0,this.email&&!Object(r.a)(this.email)&&(this.emailErrorLabel=this.emailNotValidLabel)),this.password?this.highlightPasswordWithError=!1:this.highlightPasswordWithError=!0,this.repeatPassword?this.highlightRepeatPasswordWithError=!1:this.highlightRepeatPasswordWithError=!0},checkNameOnKeyUp:function(t){this.highlightNameWithError=!t},checkEmailOnKeyUp:function(t){t&&Object(r.a)(t)?this.highlightEmailWithError=!1:(this.highlightEmailWithError=!0,Object(r.a)(t)||(this.emailErrorLabel=this.emailNotValidLabel))},checkPasswordOnKeyUp:function(t){t?(this.highlightPasswordWithError=!1,this.repeatPassword===this.password?this.highlightRepeatPasswordWithError=!1:this.highlightRepeatPasswordWithError=!0):this.highlightPasswordWithError=!0},checkRepeatPasswordOnKeyUp:function(t){t&&t===this.password?this.highlightRepeatPasswordWithError=!1:this.highlightRepeatPasswordWithError=!0}}},l=(o(234),o(6)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:[t.openModal?"is-active":"","modal"]},[o("div",{staticClass:"modal-background"}),t._v(" "),o("div",{staticClass:"modal-card"},[o("header",{staticClass:"modal-card-head"},[t.isUserSignedUp?t._e():o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitle))]),t._v(" "),t.isUserSignedUp?o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitleRegistered))]):t._e(),t._v(" "),o("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),o("form",{attrs:{action:"#",method:"post"},on:{submit:t.checkForm}},[o("section",{staticClass:"modal-card-body"},[t.isUserSignedUp?t._e():o("div",[o("div",{staticClass:"field"},[o("p",{staticClass:"control has-icons-left has-icons-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:[t.highlightNameWithError?"input is-danger":"input"],attrs:{type:"text",placeholder:t.namePlaceholder},domProps:{value:t.name},on:{keyup:function(e){return t.checkNameOnKeyUp(t.name)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),null!==t.highlightNameWithError?o("span",{staticClass:"icon is-small is-right"},[o("i",{class:[t.highlightNameWithError?"fa fa-exclamation-circle":"fa fa-check"]})]):t._e()]),t._v(" "),t.highlightNameWithError?o("p",{staticClass:"help is-danger"},[t._v(t._s(t.nameErrorLabel))]):t._e()]),t._v(" "),o("div",{staticClass:"field"},[o("p",{staticClass:"control has-icons-left has-icons-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:[t.highlightEmailWithError?"input is-danger":"input"],attrs:{type:"email",placeholder:t.emailPlaceholder,name:"emailName"},domProps:{value:t.email},on:{keyup:function(e){return t.checkEmailOnKeyUp(t.email)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t._m(1),t._v(" "),null!==t.highlightEmailWithError?o("span",{staticClass:"icon is-small is-right"},[o("i",{class:[t.highlightEmailWithError?"fa fa-exclamation-circle":"fa fa-check"]})]):t._e()]),t._v(" "),t.highlightEmailWithError?o("p",{staticClass:"help is-danger"},[t._v(t._s(t.emailErrorLabel))]):t._e()]),t._v(" "),o("div",{staticClass:"field"},[o("p",{staticClass:"control has-icons-left has-icons-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:[t.highlightPasswordWithError?"input is-danger":"input"],attrs:{type:"password",placeholder:t.passwordPlaceholder},domProps:{value:t.password},on:{keyup:function(e){return t.checkPasswordOnKeyUp(t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(2),t._v(" "),null!==t.highlightPasswordWithError?o("span",{staticClass:"icon is-small is-right"},[o("i",{class:[t.highlightPasswordWithError?"fa fa-exclamation-circle":"fa fa-check"]})]):t._e()]),t._v(" "),t.highlightPasswordWithError?o("p",{staticClass:"help is-danger"},[t._v(t._s(t.passwordErrorLabel))]):t._e()]),t._v(" "),o("div",{staticClass:"field"},[o("p",{staticClass:"control has-icons-left has-icons-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],class:[t.highlightRepeatPasswordWithError?"input is-danger":"input"],attrs:{type:"password",placeholder:t.repeatPasswordPlaceholder},domProps:{value:t.repeatPassword},on:{keyup:function(e){return t.checkRepeatPasswordOnKeyUp(t.repeatPassword)},input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}}),t._v(" "),t._m(3),t._v(" "),null!==t.highlightRepeatPasswordWithError?o("span",{staticClass:"icon is-small is-right"},[o("i",{class:[t.highlightRepeatPasswordWithError?"fa fa-exclamation-circle":"fa fa-check"]})]):t._e()]),t._v(" "),t.highlightRepeatPasswordWithError?o("p",{staticClass:"help is-danger"},[t._v(t._s(t.notEqualErrorLabel))]):t._e()])]),t._v(" "),t.isUserSignedUp?o("div",{staticClass:"level"},[o("div",{staticClass:"level-item has-text-centered"},[o("div",[o("p",{staticClass:"title"},[t._v("Welcome "+t._s(t.name)+"!")]),t._v(" "),o("p",{staticClass:"heading"},[t._v("Now you are a member")])])])]):t._e()]),t._v(" "),o("footer",{staticClass:"modal-card-foot"},[t.isUserSignedUp?t._e():o("button",{staticClass:"button is-success"},[t._v(t._s(t.primaryBtnLabel))]),t._v(" "),t.isUserSignedUp?o("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:t.closeModal}},[t._v(t._s(t.btnRegisteredLabel))]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-lock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-lock"})])}],!1,null,"e4d12efe",null);e.default=component.exports;installComponents(component,{Header:o(67).default,Footer:o(68).default})},182:function(t,e,o){"use strict";o.r(e);o(26),o(62);var r={name:"checkout",data:function(){return{modalTitle:"Checkout",removeLabel:"Remove from cart",cartEmptyLabel:"Your cart is empty",closeLabel:"Close",isCheckoutSection:!1}},computed:{products:function(){return this.$store.getters.productsAdded},openModal:function(){return!!this.$store.getters.isCheckoutModalOpen},buyLabel:function(){var t,e=this.products.length,o=this.$store.getters.productsAdded,r=[],n="",l=1;return o.forEach((function(t){t.quantity>=1&&(l=t.quantity),r.push(t.price*l)})),t=r.reduce((function(a,b){return a+b}),0),n=e>1?"products":"product","Buy ".concat(e," ").concat(n," at ").concat(t)},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn}},methods:{closeModal:function(t){this.$store.commit("showCheckoutModal",!1),t&&window.location.reload()},removeFromCart:function(t){var data={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",data)},onNextBtn:function(){this.isUserLoggedIn?this.isCheckoutSection=!0:(this.$store.commit("showCheckoutModal",!1),this.$store.commit("showLoginModal",!0))},onPrevBtn:function(){this.isCheckoutSection=!1}}},n=o(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:[t.openModal?"is-active":"","modal"]},[o("div",{staticClass:"modal-background"}),t._v(" "),o("div",{staticClass:"modal-card"},[o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.modalTitle))]),t._v(" "),o("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal(!1)}}})]),t._v(" "),o("section",{staticClass:"modal-card-body"},[t.isCheckoutSection?t._e():o("div",[t._l(t.products,(function(e){return o("div",{key:e.id,staticClass:"box"},[o("button",{staticClass:"is-pulled-right button is-info is-inverted",on:{click:function(o){return t.removeFromCart(e.id)}}},[t._v(t._s(t.removeLabel))]),t._v(" "),o("p",[t._v(t._s(e.title)+"  "+t._s(e.quantity>0?" - Quantity: "+e.quantity:""))]),t._v(" "),o("p",[t._v(t._s(e.price))])])})),t._v(" "),0===t.products.length?o("div",[o("p",[t._v(t._s(t.cartEmptyLabel))])]):t._e()],2),t._v(" "),t.isCheckoutSection?o("div",[o("p",[t._v("You bought it!")])]):t._e()]),t._v(" "),o("footer",{staticClass:"modal-card-foot"},[o("button",{directives:[{name:"show",rawName:"v-show",value:t.products.length>0&&!t.isCheckoutSection,expression:"products.length > 0 && !isCheckoutSection"}],staticClass:"button is-success",on:{click:t.onNextBtn}},[t._v(t._s(t.buyLabel))]),t._v(" "),t.isCheckoutSection?o("button",{staticClass:"button is-success",on:{click:function(e){return t.closeModal(!0)}}},[t._v(t._s(t.closeLabel))]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(67).default,Footer:o(68).default})},183:function(t,e,o){o(184),t.exports=o(185)},226:function(t,e,o){"use strict";o(157)},227:function(t,e,o){var r=o(29),n=o(228),l=o(229),c=r(!1),d=n(l);c.push([t.i,".title[data-v-1e9f6c90]{background:url("+d+") no-repeat;background-position:50% 50%;background-size:165px;width:175px;height:35px}.shopping-cart[data-v-1e9f6c90]{cursor:pointer}a[data-v-1e9f6c90]{color:grey}",""]),t.exports=c},229:function(t,e,o){t.exports=o.p+"img/logo.09dd28f.png"},230:function(t,e,o){"use strict";o(158)},231:function(t,e,o){var r=o(29)(!1);r.push([t.i,".footer[data-v-0119ba11]{background:#b9e2fc;color:#000}",""]),t.exports=r},232:function(t,e,o){"use strict";o(159)},233:function(t,e,o){var r=o(29)(!1);r.push([t.i,".fa-exclamation-circle{color:red}.fa-check{color:green}",""]),t.exports=r},234:function(t,e,o){"use strict";o(160)},235:function(t,e,o){var r=o(29)(!1);r.push([t.i,".fa-exclamation-circle[data-v-e4d12efe]{color:red}.fa-check[data-v-e4d12efe]{color:green}",""]),t.exports=r},236:function(t,e,o){"use strict";o(161)},237:function(t,e,o){var r=o(29)(!1);r.push([t.i,".el-footer,.el-header{background-color:#b3c0d1;color:#333;text-align:center;line-height:60px}.el-aside{background-color:#d3dce6;line-height:200px}.el-aside,.el-main{color:#333;text-align:center}.el-main{background-color:#e9eef3;line-height:160px}body>.el-container{margin-bottom:40px}.el-container:nth-child(5) .el-aside,.el-container:nth-child(6) .el-aside{line-height:260px}.el-container:nth-child(7) .el-aside{line-height:320px}",""]),t.exports=r},238:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return r})),o.d(e,"getters",(function(){return n})),o.d(e,"mutations",(function(){return l}));o(34),o(239),o(22),o(26);var r=function(){return{products:[{id:1,title:"Product 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:5e4,saleOff:.1,selectedProduct:0,ratings:3,reviews:5,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:10,image:"img1",listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:0,textColor:"Hộp màu đỏ"}]},{id:2,title:"Product 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:35e3,saleOff:.2,selectedProduct:1,ratings:5,reviews:10,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,image:"img1",quantity:15,listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]},{id:3,title:"Product 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:11e4,saleOff:.3,selectedProduct:0,ratings:2,reviews:3,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:10,image:"img1",listProductDetail:[{image:"blueImg1",quantity:0,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]},{id:4,title:"Product 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:5e4,saleOff:.4,selectedProduct:0,ratings:1,reviews:0,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:15,image:"img1",listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]},{id:5,title:"Product 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:35e3,saleOff:.5,selectedProduct:0,ratings:4,reviews:2,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:15,image:"img1",listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]},{id:6,title:"Product 6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:11e4,saleOff:.6,selectedProduct:0,ratings:5,reviews:1,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:15,image:"img1",listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]},{id:7,title:"Product 7",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:5e4,saleOff:.7,selectedProduct:0,ratings:5,reviews:7,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:15,image:"img1",listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]},{id:8,title:"Product 8",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:35e3,saleOff:.8,selectedProduct:0,ratings:3,reviews:0,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:15,image:"img1",listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]},{id:9,title:"Product 9",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",price:11e4,saleOff:.9,selectedProduct:0,ratings:4,reviews:2,isAddedToCart:!1,isAddedBtn:!1,isFavourite:!1,quantity:15,image:"img1",listProductDetail:[{image:"blueImg1",quantity:10,textColor:"Hộp màu xanh"},{image:"redImg1",quantity:5,textColor:"Hộp màu đỏ"}]}],userInfo:{isLoggedIn:!1,isSignedUp:!1,hasSearched:!1,name:"",productTitleSearched:""},systemInfo:{openLoginModal:!1,openSignupModal:!1,openCheckoutModal:!1}}},n={productsAdded:function(t){return t.products.filter((function(t){return t.isAddedToCart}))},productsAddedToFavourite:function(t){return t.products.filter((function(t){return t.isFavourite}))},getProductById:function(t){return function(e){return t.products.find((function(t){return t.id==e}))}},isUserLoggedIn:function(t){return t.userInfo.isLoggedIn},isUserSignedUp:function(t){return t.userInfo.isSignedUp},getUserName:function(t){return t.userInfo.name},isLoginModalOpen:function(t){return t.systemInfo.openLoginModal},isSignupModalOpen:function(t){return t.systemInfo.openSignupModal},isCheckoutModalOpen:function(t){return t.systemInfo.openCheckoutModal},quantity:function(t){return t.products.quantity}},l={addToCart:function(t,e){t.products.forEach((function(t){e===t.id&&(t.isAddedToCart=!0)}))},setAddedBtn:function(t,data){t.products.forEach((function(t){data.id===t.id&&(t.isAddedBtn=data.status)}))},removeFromCart:function(t,e){t.products.forEach((function(t){e===t.id&&(t.isAddedToCart=!1)}))},removeProductsFromFavourite:function(t){t.products.filter((function(t){t.isFavourite=!1}))},isUserLoggedIn:function(t,e){t.userInfo.isLoggedIn=e},isUserSignedUp:function(t,e){t.userInfo.isSignedUp=e},setHasUserSearched:function(t,e){t.userInfo.hasSearched=e},setUserName:function(t,e){t.userInfo.name=e},setProductTitleSearched:function(t,e){t.userInfo.productTitleSearched=e},showLoginModal:function(t,e){t.systemInfo.openLoginModal=e},showSignupModal:function(t,e){t.systemInfo.openSignupModal=e},showCheckoutModal:function(t,e){t.systemInfo.openCheckoutModal=e},addToFavourite:function(t,e){t.products.forEach((function(t){e===t.id&&(t.isFavourite=!0)}))},removeFromFavourite:function(t,e){t.products.forEach((function(t){e===t.id&&(t.isFavourite=!1)}))},quantity:function(t,data){t.products.forEach((function(t){data.id===t.id&&(t.quantity=data.quantity)}))},SET_USER:function(t,e){t.authUser=e}}},40:function(t,e,o){"use strict";function r(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}o.d(e,"a",(function(){return r}))},67:function(t,e,o){"use strict";o.r(e);var r=o(178),n=o(179),l={name:"VmHeader",data:function(){return{linkedinToolTip:"Follow us on Linkedin",facebookToolTip:"Follow us on Facebook",twitterToolTip:"Follow us on Twitter",instagramToolTip:"Follow us on Instagram",isCheckoutActive:!1,isMenuOpen:!1}},components:{VmSearch:r.default,VmMenu:n.default},computed:{numProductsAdded:function(){return this.$store.getters.productsAdded.length}},methods:{showCheckoutModal:function(){return this.$store.commit("showCheckoutModal",!0)}}},c=(o(226),o(6)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[o("div",{staticClass:"navbar-brand"},[o("nuxt-link",{staticClass:"navbar-item",attrs:{to:{name:"index"}}},[o("h1",{staticClass:"title is-3 is-flex-mobile"})]),t._v(" "),o("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){t.isMenuOpen=!t.isMenuOpen}}},[o("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),o("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),o("span",{attrs:{"aria-hidden":"true"}})])],1),t._v(" "),o("div",{staticClass:"narbar-menu",attrs:{"is-active":""}},[o("div",{staticClass:"navbar-start"},[o("div",{staticClass:"navbar-item field"},[o("VmSearch")],1)])]),t._v(" "),o("div",{staticClass:"navbar-end"},[o("div",{staticClass:"navbar-item social"},[o("a",{staticClass:"icon",attrs:{href:"#",title:t.facebookToolTip}},[o("i",{staticClass:"fab fa-facebook"})]),t._v(" "),o("a",{staticClass:"icon",attrs:{href:"#",title:t.twitterToolTip}},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("a",{staticClass:"icon",attrs:{href:"#",title:t.instagramToolTip}},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("a",{staticClass:"icon",attrs:{href:"#",title:t.linkedinToolTip}},[o("i",{staticClass:"fab fa-linkedin"})])]),t._v(" "),o("div",{staticClass:"navbar-item shopping-cart",on:{click:t.showCheckoutModal}},[t._m(0),t._v(" "),o("span",{class:[t.numProductsAdded>0?"tag is-info":""]},[t._v("\n                "+t._s(t.numProductsAdded)+"\n            ")])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isMenuOpen,expression:"isMenuOpen"}],staticClass:"navbar-end"},[o("VmMenu")],1),t._v(" "),o("div",{staticClass:"navbar-end is-hidden-mobile"},[o("VmMenu")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-shopping-cart"})])}],!1,null,"1e9f6c90",null);e.default=component.exports},68:function(t,e,o){"use strict";o.r(e);var r={name:"VmFooter"},n=(o(230),o(6)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer"},[o("div",{staticClass:"columns container"},[o("div",{staticClass:"column"},[o("p",[t._v("Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.")])]),t._v(" "),o("div",{staticClass:"column has-text-right"},[o("p",[t._v("Vuemmerce | Made with ❤")])])])])}],!1,null,"0119ba11",null);e.default=component.exports}},[[183,9,1,10]]]);