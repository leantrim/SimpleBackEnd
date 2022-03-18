const express = require("express");
const router = express.Router();
const articles = require("../articles.json");
const currencyFormatter = require("../utils/currencyFormatter");

// En function som man kan enkelt justera article artikel objectet.
const adjustArticles = () => {
    articles.map((item) => {
        // Formatera priset så det är mer läsvänligt för användaren
        item.price = currencyFormatter.format(item.price);
        // Om artikeln inte har någon beskrivning lägg till placeholder.
        if (!item.description) {
            item.description = 'Beskrivning saknas för denna produkten';
        }
    })
}

// Kör functionen när servern har startats.
adjustArticles();

router.get('/', async (req, res) => {
    return res.send(articles);
})

// Om en put request kommer in (filtrering)
router.put('/', async (req, res) => {
    // Filtrera på produkterna
    const articlesFiltered = articles.filter((article) =>
        article.title.toLowerCase().startsWith(req.body.search.toLowerCase()));

    // startsWith gör som den heter, kommer bara visa bokstaverna man skriver in som matchar början av titel namnet, man kan enkelt ändra till includes istället som matchar bokstäver oavsett vart i titeln dem ligger


    // Skicka tillbaka den filtrerade listan
    return res.send(articlesFiltered);
})


module.exports = router;