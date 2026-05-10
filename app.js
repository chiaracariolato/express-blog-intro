const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/health', (req, res) => {
    res.json({ status: "Applicazione in funzione." })
})

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

const post = [
    {
        title: "Cookies al cioccolato",
        content: "Ammorbidire fino quasi a sciogliere il burro e mescolare con la frusta elettrica burro e i due tipi di zucchero, aggiungere le uova e l’aroma alla vaniglia. Aggiungere lievito setacciato, sale e  bicarbonato, poi mescolare il tutto. Aggiungere la farina setacciata un po’ alla volta amalgamandola con gli altri ingredienti ed infine il cioccolato.",
        image: "chocolate_cookies.jpg",
        tag: ["dessert", "cookies", "cioccolato", "biscotti"]
    },
    {
        title: "Cookies",
        content: "Ammorbidire fino quasi a sciogliere il burro e mescolare con la frusta elettrica burro e i due tipi di zucchero, aggiungere le uova e l’aroma alla vaniglia. Aggiungere lievito setacciato, sale e  bicarbonato, poi mescolare il tutto. Aggiungere la farina setacciata un po’ alla volta amalgamandola con gli altri ingredienti ed infine aggiungere altri ingredienti a piacere. Molto consigliata l'abbinata cioccolato bianco e mirtilli secchi",
        image: "cookies.jpg",
        tag: ["dessert", "cookies", "frutta", "biscotti"]
    },
    {
        title: "Brownies",
        content: "Sciogliere completamente il cioccolato in microonde o a bagno maria (meglio), sciogliere il burro e aggiungerlo al cioccolato, montare uova, zucchero e sale con le fruste elettriche, aggiungere alle uova e zucchero anche il cioccolato con il burro e mescolare, unire la farina setacciata e il cacao e incorporare tutti gli ingredienti, facoltativamente aggiungere nocciole tostate o altra frutta secca, rivestire lo stampo con carta forno e versare il composto livellandolo in modo uniforme fino a circa 2 cm di altezza, cuocere in forno ventilato a 180°C per circa 25 minuti controllando con uno stuzzicadenti che il centro sia cotto e lasciar raffreddare prima di tagliare.",
        image: "brownies.jpg",
        tag: ["dessert", "cioccolato", "brownies"]
    },
    {
        title: "Pizza in teglia",
        content: "Sciogliere il lievito nell’acqua tiepida, aggiungere poco alla volta la farina e iniziare a impastare, unire il sale e infine l’olio extravergine d’oliva continuando a lavorare l’impasto fino a renderlo liscio ed elastico, coprire e lasciare lievitare fino al raddoppio del volume, stendere l’impasto in una teglia ben oliata allargandolo delicatamente con le mani, lasciarlo riposare ancora per una seconda lievitazione, condire con salsa di pomodoro e un filo d’olio, cuocere in forno ben caldo finché la base risulta dorata, aggiungere la mozzarella e gli eventuali ingredienti scelti, completare la cottura per qualche minuto finché il formaggio si scioglie e servire calda.",
        image: "pizza.jpg",
        tag: ["pizza", "salato"]
    },
    {
        title: "Cupcakes",
        content: "Mescolare burro morbido e zucchero fino a ottenere un composto chiaro e spumoso, aggiungere le uova una alla volta continuando a montare, unire il latte e l’estratto di vaniglia mescolando delicatamente, incorporare poco alla volta la farina setacciata con il lievito fino a ottenere un impasto liscio e omogeneo, distribuire il composto nei pirottini riempiendoli per circa due terzi, cuocere in forno preriscaldato a 180°C per circa 18-20 minuti controllando la cottura con uno stuzzicadenti, lasciar raffreddare completamente e decorare a piacere con crema, glassa o zuccherini.",
        image: "cupcake.jpg",
        tag: ["dessert", "cioccolato", "cupcakes"]
    },
]

app.get("/bacheca", (req, res) => {
    res.json(post)
})

app.listen(port, () => {
    console.log("App di esempio lanciata sulla porta", port)
})
