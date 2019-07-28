"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const data_1 = require("./data/data");
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const apiGetPostDetail_1 = require("./api/posts/apiGetPostDetail");
const app = express();
// routes
app.get('/', (req, res, next) => {
    res.json(data_1.DataStore.posts);
    res.send('node-typescript is working...1');
});
app.get('/posts', apiGetPosts_1.apiGetPosts);
app.get('/posts/:id', apiGetPostDetail_1.apiGetPostDetail);
app.post('/tours', (req, res, next) => {
    res.send('post tours....');
});
app.listen(process.env.PORT || 8091, () => {
    console.log('server started ....');
});
