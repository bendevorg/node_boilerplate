"use strict";

/* eslint-disable no-console */

require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;
const app = express();
const router = require('../server/core/router.js');

app.use(router);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.info("🌎  Server is listening on port %s.", PORT);
    }
});
