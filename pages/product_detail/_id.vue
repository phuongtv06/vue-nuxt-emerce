<template>
  <div class="section">
    <div class="card is-clearfix columns">
      <figure class="card-image is-480x480 column is-one-thirds">
        <!-- <img src="https://bulma.io/images/placeholders/480x480.png"> -->
        <img
          v-if="selectedProductByColor.image"
          alt="Placeholder image"
          :src="require(`~/assets/images/${selectedProductByColor.image}.jpg`)"
        />
        <img
          v-else-if="getProductDetail"
          alt="Placeholder image"
          :src="require(`~/assets/images/${getProductDetail.image}.jpg`)"
        />
        <img
          v-else
          alt="Placeholder image"
          :src="require(`~/assets/images/${productImage}`)"
        />
      </figure>
      <div class="card-content column is-two-thirds">
        <div class="card-content__title">
          <h2 class="title is-4">
            {{ product.title }}
            <button
              class="button is-small"
              :title="removeFromFavouriteLabel"
              v-show="product.isFavourite"
              @click="removeFromFavourite(product.id)"
            >
              <span class="icon is-small">
                <i class="fa fa-heart"></i>
              </span>
            </button>
            <button
              class="button is-small"
              :title="addToFavouriteLabel"
              v-show="!product.isFavourite"
              @click="saveToFavorite(product.id)"
            >
              <span class="icon is-small">
                <i class="fa fa-heart-o"></i>
              </span>
            </button>
          </h2>
        </div>
        <div class="card-content__text">
          <p class="brand">Brand: No brand</p>
          <div v-if="selectedProductByColor.quantity">
            <p v-if="selectedProductByColor.quantity > 0">
              Còn lại: {{ selectedProductByColor.quantity }} sản phẩm
            </p>
            <p v-else>Sản phẩm đã hết hàng</p>
          </div>
          <div v-else>
            <p v-if="selectedProductByColor.quantity <= 0">
              Sản phẩm đã hết hàng
            </p>
            <p v-else>Còn lại: {{ getProductDetail.quantity }} sản phẩm</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
        <div class="card-content__ratings" v-if="product.rating === 1">
          <i class="fa fa-star"></i>
        </div>
        <div class="card-content__ratings" v-else-if="product.rating === 2">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="card-content__ratings" v-else-if="product.rating === 3">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="card-content__ratings" v-else-if="product.rating === 4">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="card-content__ratings" v-else-if="product.rating === 5">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="card-content__reviews">
          <div class="is-pulled-left">
            <p>
              <strong>{{
                product.reviews > 0
                  ? `${product.reviews} Reviews`
                  : "No reviews"
              }}</strong>
            </p>
          </div>
          <!-- <div class="select is-rounded is-small is-pulled-right">
            <select @change="onSelectQuantity(product.id)" v-model="selected">
              <option
                v-for="quantity in quantityArray"
                :key="quantity.id"
                :value="quantity"
              >
                {{ quantity }}
              </option>
            </select>
          </div> -->
        </div>
        <div class="card-content__price is-pulled-left">
          <span class="title is-3">
            <strong>{{ formatFinalPrice }}</strong>
          </span>
          <div class="origin-price">
            <span>{{ formatPrice }}</span>
            <span class="saleoff-price">-{{ product.saleOff * 100 }}%</span>
          </div>
          <div>
            <div class="text" style="padding: 10px 0 10px">
              <label style="fontWeight: bold">Loại</label>
              <span
                v-if="selectedProductByColor.textColor"
                style="paddingLeft: 30px"
                >{{ selectedProductByColor.textColor }}</span
              >
              <span v-else style="paddingLeft: 30px">{{
                getProductDetail.textColor
              }}</span>
            </div>
            <div class="wrapper-color">
              <div
                class="list-color"
                v-for="(productDetail, idx) in product.listProductDetail"
                :key="idx"
                :class="classActive(idx)"
                @click="handleClickColor(idx)"
              >
                <ul>
                  <li>
                    <img
                      alt="productDetail.textColor"
                      :src="
                        require(`~/assets/images/${productDetail.image}.jpg`)
                      "
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="field is-grouped is-centered" style="padding: 5%">
            <div class="field is-grouped">
              <p class="control">
                <span style="fontSize: larger">Số lượng</span>
              </p>
              <p class="control">
                <button
                  @click="decrementProduct(product.id)"
                  class="button is-info is-light is-small is-outlined is-hovered"
                >
                  -
                </button>
              </p>
              <p class="control">
                <button style="pointer-events: none"
                  class="button is-info is-light is-small is-outlined is-hovered"
                >
                  {{ count }}
                </button>
              </p>
              <p class="control">
                <button
                  @click="incrementProduct(product.id)"
                  class="button is-info is-light is-small is-outlined is-hovered"
                >
                  +
                </button>
              </p>
            </div>
            <div class="control" style="marginLeft: 6%">
              <div
                class="select is-rounded is-small is-pulled-right"
                style="marginLeft: 10%"
              >
                <select
                  @change="onSelectQuantity(product.id)"
                  v-model="selected"
                >
                  <option
                    v-for="quantity in quantityArray"
                    :key="quantity.id"
                    :value="quantity"
                  >
                    {{ quantity }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content__btn is-pulled-right">
          <button
            class="button is-primary"
            v-if="!isAddedBtn"
            @click="addToCart(product.id)"
          >
            {{ addToCartLabel }}
          </button>
          <button
            class="button is-text"
            v-if="isAddedBtn"
            @click="removeFromCart(product.id)"
          >
            {{ removeFromCartLabel }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product_detail-id",
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove from cart",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      product: {},
      selected: 1,
      quantityArray: [],
      selectedProductByColor: {},
      count: 1
    };
  },
  mounted() {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },
  computed: {
    formatPrice() {
      if (this?.product?.price) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "VND"
        }).format(this.product.price);
      } else {
        return "vnd";
      }
    },
    formatFinalPrice() {
      if (this?.product?.price && this?.product?.saleOff) {
        let finalPrice =
          this.product.price - this.product.saleOff * this.product.price;

        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "VND"
        }).format(finalPrice);
      } else {
        return "vnd";
      }
    },
    getProductDetail() {
      let index = this?.product?.selectedProduct;
      if (index) {
        return this.product.listProductDetail[index];
      } else {
        var productDetail = this.$store.getters.getProductById(
          this.$route.params.id
        );
        return productDetail.listProductDetail[productDetail.selectedProduct];
      }
    },
    isAddedBtn() {
      return this.product.isAddedBtn;
    },
    productImage() {
      if (this?.product?.image) {
        return this.product.image + ".jpg";
      } else {
        return "defaultImg.png";
      }
    }
  },
  methods: {
    incrementProduct(id) {
      this.count++;
      let data = {
        id: id,
        quantity: this.count
      };
      this.$store.commit("quantity", data);
    },
    decrementProduct(id) {
      if (this.count > 0) {
        this.count--;
        let data = {
        id: id,
        quantity: this.count
      };
      this.$store.commit("quantity", data);
      }
    },
    handleClickColor(index) {
      this.selectedProductByColor = this.product.listProductDetail[index];
    },
    classActive(index) {
      console.log(index);
      return {
        active: this.product.selectedProduct === index
      };
    },
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    },
    saveToFavorite(id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;
      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        this.$store.commit("showLoginModal", true);
      }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
    }
  }
};
</script>

<style scoped>
.card-content {
  padding: 15px 10px 15px 0;
}
.card-content__text {
  margin: 15px 0;
}
.card-content__reviews {
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
}
.saleoff-price {
  border: 2px solid orange;
  padding: 1px;
  margin-left: 2px;
}
.wrapper-color {
  display: inline-flex;
}
.list-color {
  text-align: center;
  border: 2px solid grey;
  margin-right: 30px;
}
.list-color:hover,
.list-color.active {
  border-color: #f57224;
}
.color-text {
  font-weight: 500;
}
.origin-price {
  padding: 10px 0 10px;
}
.btn_quantity {
  text-align: center;
  padding: 10px;
}
</style>
