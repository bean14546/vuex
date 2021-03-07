import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    products: [{
        id: 1,
        name: "มะยงชิดข้าวเหนียวมูน",
        price: 40,
        image: "https://img.wongnai.com/p/1920x0/2018/04/12/c5dea6a72da043839b71f33c4506a6a1.jpg",
        state: false,
      },
      {
        id: 2,
        name: "ซาหริ่มอันชัน",
        price: 30,
        image: "https://img.wongnai.com/p/1920x0/2018/07/26/c134853612734d61894c7810b66f2a6b.jpg",
        state: false,
      },
      {
        id: 3,
        name: "มะม่วงหาวลอยแก้ว",
        price: 20,
        image: "https://img.wongnai.com/p/1920x0/2018/08/10/9968149533184b958cef50207c7d6b1c.jpg",
        state: false,
      },
      {
        id: 4,
        name: "โดนัทมะม่วง",
        price: 45,
        image: "https://img.kapook.com/u/2018/surauch/cooking/co1/summer2.jpg",
        state: false,
      },
      {
        id: 5,
        name: "ลอดช่องสิงคโปร์",
        price: 30,
        image: "https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2017/04/11/24cb91e7fa2744db870eb714f0abd915.jpg",
        state: false,
      },
      {
        id: 6,
        name: "ม้าฮ่อ",
        price: 20,
        image: "https://img.wongnai.com/p/1920x0/2018/03/01/bd4949f77d284f09879ac19d35d8f80a.jpg",
        state: false,
      },
      {
        id: 7,
        name: "ลูกตาลลอยแก้ว",
        price: 25,
        image: "https://img.wongnai.com/p/l/2017/06/26/0b0c797e61e84be5ad4775fe31f01b8c.jpg",
        state: false,
      },
      {
        id: 8,
        name: "เครปใบเตย",
        price: 40,
        image: "https://img.kapook.com/u/2018/surauch/cooking/co1/summer11.jpg",
        state: false,
      },
    ],

  },
  getters: {
    productsArray: state => {
      return state.products
    },
    cartArray: state => {
      return state.cart
    }
  },
  mutations: {
    getcartFromaction: (state, productcart) => {
      state.cart.push(productcart)
    }
  },
  actions: {
    getCartFromProduct: (context,productcart) => {
      context.commit('getcartFromaction',productcart)
    }
  },
  modules: {}
})