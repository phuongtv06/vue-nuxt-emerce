(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{257:function(t,e,r){var map={"./blueImg1.jpg":259,"./img1.jpg":260,"./redImg1.jpg":261};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=257},259:function(t,e,r){t.exports=r.p+"img/blueImg1.44de071.jpg"},260:function(t,e,r){t.exports=r.p+"img/img1.453bd77.jpg"},261:function(t,e,r){t.exports=r.p+"img/redImg1.c9e2752.jpg"},277:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("05ec5177",content,!0,{sourceMap:!1})},283:function(t,e,r){var map={"./blueImg1.jpg":259,"./defaultImg.png":284,"./img1.jpg":260,"./redImg1.jpg":261};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=283},284:function(t,e,r){t.exports=r.p+"img/defaultImg.ec819a0.png"},285:function(t,e,r){"use strict";r(277)},286:function(t,e,r){var o=r(29)(!1);o.push([t.i,".card-content[data-v-446db4a6]{padding:15px 10px 15px 0}.card-content__text[data-v-446db4a6]{margin:15px 0}.card-content__reviews[data-v-446db4a6]{display:inline-block;width:100%;margin-bottom:10px}.saleoff-price[data-v-446db4a6]{border:2px solid orange;padding:1px;margin-left:2px}.wrapper-color[data-v-446db4a6]{display:inline-flex}.list-color[data-v-446db4a6]{text-align:center;border:2px solid grey;margin-right:30px}.list-color.active[data-v-446db4a6],.list-color[data-v-446db4a6]:hover{border-color:#f57224}.color-text[data-v-446db4a6]{font-weight:500}.origin-price[data-v-446db4a6]{padding:10px 0}.btn_quantity[data-v-446db4a6]{text-align:center;padding:10px}",""]),t.exports=o},290:function(t,e,r){"use strict";r.r(e);var o={name:"product_detail-id",validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},data:function(){return{addToCartLabel:"Add to cart",removeFromCartLabel:"Remove from cart",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favourite",product:{},selected:1,quantityArray:[],selectedProductByColor:{},count:1}},mounted:function(){this.product=this.$store.getters.getProductById(this.$route.params.id),this.selected=this.product.quantity;for(var i=1;i<=20;i++)this.quantityArray.push(i)},computed:{formatPrice:function(){var t;return null!=this&&null!==(t=this.product)&&void 0!==t&&t.price?new Intl.NumberFormat("en-US",{style:"currency",currency:"VND"}).format(this.product.price):"vnd"},formatFinalPrice:function(){var t,e;if(null!=this&&null!==(t=this.product)&&void 0!==t&&t.price&&null!=this&&null!==(e=this.product)&&void 0!==e&&e.saleOff){var r=this.product.price-this.product.saleOff*this.product.price;return new Intl.NumberFormat("en-US",{style:"currency",currency:"VND"}).format(r)}return"vnd"},getProductDetail:function(){var t,e=null==this||null===(t=this.product)||void 0===t?void 0:t.selectedProduct;if(e)return this.product.listProductDetail[e];var r=this.$store.getters.getProductById(this.$route.params.id);return r.listProductDetail[r.selectedProduct]},isAddedBtn:function(){return this.product.isAddedBtn},productImage:function(){var t;return null!=this&&null!==(t=this.product)&&void 0!==t&&t.image?this.product.image+".jpg":"defaultImg.png"}},methods:{incrementProduct:function(t){this.count++;var data={id:t,quantity:this.count};this.$store.commit("quantity",data)},decrementProduct:function(t){if(this.count>0){this.count--;var data={id:t,quantity:this.count};this.$store.commit("quantity",data)}},handleClickColor:function(t){this.selectedProductByColor=this.product.listProductDetail[t]},classActive:function(t){return console.log(t),{active:this.product.selectedProduct===t}},addToCart:function(t){var data={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",data)},removeFromCart:function(t){var data={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",data)},onSelectQuantity:function(t){var data={id:t,quantity:this.selected};this.$store.commit("quantity",data)},saveToFavorite:function(t){this.$store.state.userInfo.isLoggedIn?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)}}},n=(r(285),r(6)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section"},[o("div",{staticClass:"card is-clearfix columns"},[o("figure",{staticClass:"card-image is-480x480 column is-one-thirds"},[t.selectedProductByColor.image?o("img",{attrs:{alt:"Placeholder image",src:r(257)("./"+t.selectedProductByColor.image+".jpg")}}):t.getProductDetail?o("img",{attrs:{alt:"Placeholder image",src:r(257)("./"+t.getProductDetail.image+".jpg")}}):o("img",{attrs:{alt:"Placeholder image",src:r(283)("./"+t.productImage)}})]),t._v(" "),o("div",{staticClass:"card-content column is-two-thirds"},[o("div",{staticClass:"card-content__title"},[o("h2",{staticClass:"title is-4"},[t._v("\n          "+t._s(t.product.title)+"\n          "),o("button",{directives:[{name:"show",rawName:"v-show",value:t.product.isFavourite,expression:"product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.removeFromFavouriteLabel},on:{click:function(e){return t.removeFromFavourite(t.product.id)}}},[t._m(0)]),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:!t.product.isFavourite,expression:"!product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.addToFavouriteLabel},on:{click:function(e){return t.saveToFavorite(t.product.id)}}},[t._m(1)])])]),t._v(" "),o("div",{staticClass:"card-content__text"},[o("p",{staticClass:"brand"},[t._v("Brand: No brand")]),t._v(" "),t.selectedProductByColor.quantity?o("div",[t.selectedProductByColor.quantity>0?o("p",[t._v("\n            Còn lại: "+t._s(t.selectedProductByColor.quantity)+" sản phẩm\n          ")]):o("p",[t._v("Sản phẩm đã hết hàng")])]):o("div",[t.selectedProductByColor.quantity<=0?o("p",[t._v("\n            Sản phẩm đã hết hàng\n          ")]):o("p",[t._v("Còn lại: "+t._s(t.getProductDetail.quantity)+" sản phẩm")])]),t._v(" "),o("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n          ad minim veniam, quis nostrud\n        ")])]),t._v(" "),1===t.product.rating?o("div",{staticClass:"card-content__ratings"},[o("i",{staticClass:"fa fa-star"})]):2===t.product.rating?o("div",{staticClass:"card-content__ratings"},[o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"})]):3===t.product.rating?o("div",{staticClass:"card-content__ratings"},[o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"})]):4===t.product.rating?o("div",{staticClass:"card-content__ratings"},[o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"})]):5===t.product.rating?o("div",{staticClass:"card-content__ratings"},[o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"}),t._v(" "),o("i",{staticClass:"fa fa-star"})]):t._e(),t._v(" "),o("div",{staticClass:"card-content__reviews"},[o("div",{staticClass:"is-pulled-left"},[o("p",[o("strong",[t._v(t._s(t.product.reviews>0?t.product.reviews+" Reviews":"No reviews"))])])])]),t._v(" "),o("div",{staticClass:"card-content__price is-pulled-left"},[o("span",{staticClass:"title is-3"},[o("strong",[t._v(t._s(t.formatFinalPrice))])]),t._v(" "),o("div",{staticClass:"origin-price"},[o("span",[t._v(t._s(t.formatPrice))]),t._v(" "),o("span",{staticClass:"saleoff-price"},[t._v("-"+t._s(100*t.product.saleOff)+"%")])]),t._v(" "),o("div",[o("div",{staticClass:"text",staticStyle:{padding:"10px 0 10px"}},[o("label",{staticStyle:{fontWeight:"bold"}},[t._v("Loại")]),t._v(" "),t.selectedProductByColor.textColor?o("span",{staticStyle:{paddingLeft:"30px"}},[t._v(t._s(t.selectedProductByColor.textColor))]):o("span",{staticStyle:{paddingLeft:"30px"}},[t._v(t._s(t.getProductDetail.textColor))])]),t._v(" "),o("div",{staticClass:"wrapper-color"},t._l(t.product.listProductDetail,(function(e,n){return o("div",{key:n,staticClass:"list-color",class:t.classActive(n),on:{click:function(e){return t.handleClickColor(n)}}},[o("ul",[o("li",[o("img",{attrs:{alt:"productDetail.textColor",src:r(257)("./"+e.image+".jpg")}})])])])})),0)]),t._v(" "),o("div",{staticClass:"field is-grouped is-centered",staticStyle:{padding:"5%"}},[o("div",{staticClass:"field is-grouped"},[t._m(2),t._v(" "),o("p",{staticClass:"control"},[o("button",{staticClass:"button is-info is-light is-small is-outlined is-hovered",on:{click:function(e){return t.decrementProduct(t.product.id)}}},[t._v("\n                -\n              ")])]),t._v(" "),o("p",{staticClass:"control"},[o("button",{staticClass:"button is-info is-light is-small is-outlined is-hovered",staticStyle:{"pointer-events":"none"}},[t._v("\n                "+t._s(t.count)+"\n              ")])]),t._v(" "),o("p",{staticClass:"control"},[o("button",{staticClass:"button is-info is-light is-small is-outlined is-hovered",on:{click:function(e){return t.incrementProduct(t.product.id)}}},[t._v("\n                +\n              ")])])]),t._v(" "),o("div",{staticClass:"control",staticStyle:{marginLeft:"6%"}},[o("div",{staticClass:"select is-rounded is-small is-pulled-right",staticStyle:{marginLeft:"10%"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?r:r[0]},function(e){return t.onSelectQuantity(t.product.id)}]}},t._l(t.quantityArray,(function(e){return o("option",{key:e.id,domProps:{value:e}},[t._v("\n                  "+t._s(e)+"\n                ")])})),0)])])])]),t._v(" "),o("div",{staticClass:"card-content__btn is-pulled-right"},[t.isAddedBtn?t._e():o("button",{staticClass:"button is-primary",on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v("\n          "+t._s(t.addToCartLabel)+"\n        ")]),t._v(" "),t.isAddedBtn?o("button",{staticClass:"button is-text",on:{click:function(e){return t.removeFromCart(t.product.id)}}},[t._v("\n          "+t._s(t.removeFromCartLabel)+"\n        ")]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-heart"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-heart-o"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"control"},[r("span",{staticStyle:{fontSize:"larger"}},[t._v("Số lượng")])])}],!1,null,"446db4a6",null);e.default=component.exports}}]);