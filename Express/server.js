const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (requet, response) => response.send('<h1>hello</h1>'))

app.get('/:random', (req, res) => res.send(`<h1>${req.query.random}</h1>`))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listning on port ${port}`))