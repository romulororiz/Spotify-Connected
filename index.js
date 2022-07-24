require('dotenv').config();
const express = require('express');
const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get('/', (req, res) => {
	const data = {
		name: 'Romulo',
		isAwesome: true,
	};

	res.json(data);
});

app.get('/awesome-generator', (req, res) => {
	const { name, isAwesome } = req.query;
	res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`);
});

const port = 5000;
app.listen(port, () => {
	console.log(`Express app listening at port ${port}`);
});
