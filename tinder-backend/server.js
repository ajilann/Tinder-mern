import express from "express";
// const express = require('express')
import mongoose from "mongoose";

// App config
const app = express();
const port = process.env.PORT || 8001;

// Middleware


//DB config


// API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello Programmers!!"));

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));

