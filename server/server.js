const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const body = req.body;
    const { email } = body;
    res.send({ email });
});

app.listen(port, () => console.log(`Listening on port ${port}`));