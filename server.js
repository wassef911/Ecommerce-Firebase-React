import express from "express";
import { cors } from "cors";
import { bodyParser } from "body-parser";
import { path } from "path";

if (process.env.NODE_ENV != "production") require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
