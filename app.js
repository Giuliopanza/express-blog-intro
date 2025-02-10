/*Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità
sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo,
contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare
le immagini associate ad ogni post.
Testare su postman
Buon lavoro!*/

const express = require("express");

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.type('html').send(
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pizzeria</title>
            </head>
            <body>
            <h1>Server del mio blog</h1>
            </body>
        </html> `
    )
});

app.get("/bacheca", (req, res) => {


    const menu = [
        {
            titolo: "Ciambellone",
            contenuto: "dolce",
            image: "img/ciambellone.jpeg",
            ingredients: ["farina", "latte"]
        }, {
            titolo: "Cracker Barbabietola",
            contenuto: "salato",
            image: "img/cracker_barbabietola.jpeg",
            ingredients: ["cracker", "barbabietola", "origano"]
        }, {
            titolo:  "Pane Fritto Dolce",
            contenuto: "dolce",
            image: "img/pane_fritto_dolce.jpeg",
            ingredients: ["pane", "olio", "zucchero"]
        }, {
            titolo: "Pasta Barbabietola",
            contenuto: "salato",
            image: "img/pasta_barbabietola.jpeg",
            ingredients: ["pasta", "barbabietola"]
        }, {
            titolo: "Torta Paesana",
            contenuto: "dolce",
            image: "img/torta_paesana.jpeg",
            ingredients: ["cioccolato", "cacao", "latte"]
        }
    ]

    res.json(menu)
})