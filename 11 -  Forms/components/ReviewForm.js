app.component('review-form', {
    template:
    /*html*/
    `
        <!-- @submit.prevent = modifier that prevents browser refresh -->
        <form class="review-form" @submit.prevent="onSubmit">
            <h1>Leave a review</h1>
            <label for="name">Name:</label>
            <input id="name" v-model="name"/>

            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Rating:</label>
            <!-- .number is a modifier that typcast value as a number -->
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <input class="button" type="submit" value="Submit" />
        </form>
    `,
    data() {
        // We would use 2 way binding to connect this variables
        // to our template literals
        // Using v-model
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        //Creating the method for form submit
        onSubmit() {
            //Creating a validation, basic validation
            if(
                this.name === ''
                || this.review === ''
                || this.rating === null
            ) {
                alert('Review is incomplete. All field is required.');
                return;
            }

            //This is our payload.
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            //Now we need to submit the data. using the name we could listen to it.
            this.$emit('review-submitted', productReview);
            //Refresh variables.
            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
});