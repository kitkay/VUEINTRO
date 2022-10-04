const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariant: 0,
            variants: [
              {
                id: 2234,
                color: 'green',
                image: './assets/images/socks_green.jpg',
                quantity: 50
                },
              {
                id: 2235,
                color: 'blue',
                image: './assets/images/socks_blue.jpg',
                quantity: 2
                },
            ],
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            // Where selectedVariant is the index
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            // Where selectedVariant is the index
            return this.variants[this.selectedVariant].quantity;
        },
        onSaleMessage() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.';
            } else {
                return '';
            }
        }
    }
})
