import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// const express = require('express')
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});



export default app;
