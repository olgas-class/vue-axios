// 1. All'avvio della pagina generiamo una parola random
// 2. Al click sul bottone far partire due chiamate api per due numeri e dire qual è quello più grande
// 3. Fare la chiamata api al click sul bottone e richiedere array di numeri usando i parametri

const { createApp } = Vue;

createApp({
  data() {
    return {
      word: "",
      num1: 0,
      num2: 0,
      numsArray: [],
      isLoading: false
    };
  },
  created() {
    this.generateWord();
  },
  methods: {
    generateWord: function () {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/word")
        .then((resp) => {
          console.log(resp);
          this.word = resp.data.response;
        });
    },
    generateNumbers: function () {
      // Prima chiamata
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/int")
        .then((resp) => {
          console.log("chiamata 1", resp.data.response);
          this.num1 = resp.data.response;
        });

      // Seconda chiamata
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/int")
        .then((resp) => {
          console.log("chiamata 2", resp.data.response);
          this.num2 = resp.data.response;
        });
    },
    getResult: function () {
      let result = "";
      if (this.num1 > this.num2) {
        result = "Primo numero è più grande";
      } else if (this.num2 > this.num1) {
        result = "Secondo numero è più rande";
      } else {
        result = "Sono uguali";
      }
      return result;
    },
    generateArray: function () {
      const min = 10;
      const max = 89;
      const items = 12;
      this.isLoading = true;
      this.numsArray = [];
      axios
        .get(
          `https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${items}`
        )
        .then((resp) => {
          console.log(resp);
          this.numsArray = resp.data.response;
          this.isLoading = false;
        });
    },
  },
}).mount("#app");
