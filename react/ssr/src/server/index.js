// var express = require('express')
import express from 'express';
import {renderToString} from 'react-dom/server';
import Home from '../containers/Home';
import React from 'react';

const app = express()
const content = renderToString(<Home/>);
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <h1>hello</h1>
        <p>world</p>
      </body>
    </html>
  `)
})
app.listen(3001, () => {
  console.log('listen:3001')
})
