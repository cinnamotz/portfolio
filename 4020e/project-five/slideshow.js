
new Vue({
  el: '#app',

  data() {
    return {
      info: null,
      moreData: [],
      whichDawg: '',
      selector: 0,
      loading: false,
      error: ''
    }
  },

  mounted() {
    this.showme('Cocker');
  },

  methods: {

    async showme(breed) {

      this.loading = true;
      this.error = '';

      try {

        const response = await axios.get(
          `https://dog.ceo/api/breed/spaniel/${breed}/images`
        );

        this.info = response.data;
        this.moreData = this.info.message;
        this.whichDawg = breed;
        this.selector = 0;

        console.log(this.moreData);

      } catch (error) {

        console.log(error);
        this.error = 'Oops! Could not load the dog pictures.';

      } finally {

        this.loading = false;

      }

    },

    slider() {

      this.selector++;

      if (this.selector >= this.moreData.length) {
        this.selector = 0;
      }

    },

    previousImage() {

      this.selector--;

      if (this.selector < 0) {
        this.selector = this.moreData.length - 1;
      }

    }

  }
});
