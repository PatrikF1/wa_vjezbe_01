const express = require("express");
const app = express();

const PORT = 3000;

const user = [
    {id: 1, ime: "Patrik", prezime: "Fabijanic"},
    {id: 2, ime: "Ivan", prezime: "Ivic"},
    {id: 3, ime: "Petar", prezime: "Peric"}
];


app.get("/", (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
});


app.get("/about", (req,res) => {
    res.sendFile(__dirname + '/public/about.html')
})

app.get("/users", (req,res) => {
    res.json(user)
})

app.listen(PORT, (error) => {
    if (error) {
    console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
    });