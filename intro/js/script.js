axios.get("https://ﬂynn.boolean.careers/exercises/api/random/int")
.then((resp) => {
  // SOLO qui possiamo gestire la risposta
  console.log("codice asincrono", resp.data.response);
})

console.log("Codice sincrono");
console.log("Codice sincrono 2");

