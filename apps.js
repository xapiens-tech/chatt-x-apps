"use strict";

const express = require("express");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`app listening at http://127.0.0.1:${port}`);
});
