const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image1: './assets/images/socks_blue.jpg',
      image2: './assets/images/socks_green.jpg',
      inventory: 0,
      onSale: true
    };
  },
});
