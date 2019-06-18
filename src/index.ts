#!/usr/bin/env node

import { NoteCLI } from './NoteCLI'
import "reflect-metadata";
// Connect to DP.

const app: NoteCLI = new NoteCLI();
app.execute();