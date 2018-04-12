const url = 'https://mkt-endpoint.now.sh/products';
const vm = new Vue({
  el: '#app',
  // Product Data
  data: {
    products: []
  },
  mounted() {
    axios.get(url).then(response => {
      this.products = response.data;
    });
  },
  computed: {
    sortedProducts() {
      return this.products.sort((a, b) => a.price - b.price);
    }
  }
});
