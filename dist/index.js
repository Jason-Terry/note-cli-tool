#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoteCLI_1 = require("./NoteCLI");
require("reflect-metadata");
// Connect to DP.
const app = new NoteCLI_1.NoteCLI();
app.execute();
