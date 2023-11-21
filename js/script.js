// // Una stringa json può essere trasformata in struttura dati di JS
// const myJson = `
// {
//     "users": [
//         {
//             "nome": "Olga",
//             "cognome": "Demina",
//             "eta": 25
//         },
//         {
//             "nome": "Michele",
//             "cognome": "Verdi",
//             "eta": 22
//         }
//     ]
// }
// `;
// console.log(myJson);
//
// console.log(JSON.parse(myJson));
//
// // Struttura dati JS può essere trasformata in una stringa JSON
// const contacts = [
//   {
//     name: "Michele",
//     avatar: "_1",
//     visible: true,
//     messages: [
//       {
//         date: "10/01/2020 15:30:55",
//         message: "Hai portato a spasso il cane?",
//         status: "sent",
//       },
//       {
//         date: "10/01/2020 15:50:00",
//         message: "Ricordati di dargli da mangiare",
//         status: "sent",
//       },
//       {
//         date: "10/01/2020 16:15:22",
//         message: "Tutto fatto!",
//         status: "received",
//       },
//     ],
//   },
//   {
//     name: "Fabio",
//     avatar: "_2",
//     visible: true,
//     messages: [
//       {
//         date: "20/03/2020 16:30:00",
//         message: "Ciao come stai?",
//         status: "sent",
//       },
//       {
//         date: "20/03/2020 16:30:55",
//         message: "Bene grazie! Stasera ci vediamo?",
//         status: "received",
//       },
//       {
//         date: "20/03/2020 16:35:00",
//         message: "Mi piacerebbe ma devo andare a fare la spesa.",
//         status: "received",
//       },
//     ],
//   },
// ];
//
// console.log(JSON.stringify(contacts));
//
// axios
//   .get("https://flynn.boolean.careers/exercises/api/random/word")
//   .then(function (resp) {
//     // Qui gestiamo la risposta
//     // Solo qui sappiamo esattamente che abbiamo la risposta
//     console.log(resp.data.response);
//   });
//
// console.log(resp);
// console.log("I am syncronous");

// Al click sul bottone richiedere al server una parola random e stamparla in pagina
const { createApp } = Vue;

createApp({
  data() {
    return {
      randomWord: "",
      username: "",
      items: 0,
      min: 0,
      max: 0,
      numbers: [],
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/name")
      .then((resp) => {
        console.log(resp);
        this.username = resp.data.response;
      });
  },
  methods: {
    generateWord() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/word")
        .then((resp) => {
          console.log(resp.data.response);
          this.randomWord = resp.data.response;
        });
    },
    generateNumbers() {
      axios
        .get(
          `https://flynn.boolean.careers/exercises/api/array/integers?min=${this.min}&max=${this.max}&items=${this.items}`
        )
        .then((resp) => {
          this.numbers = resp.data.response;
        });
    },
  },
}).mount("#app");
