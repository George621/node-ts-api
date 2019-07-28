import express = require('express');
import { DataStore } from './data/data' 
import {apiGetPosts} from './api/posts/apiGetPosts'  
import {apiGetPostDetail} from './api/posts/apiGetPostDetail'  

const app = express();

// routes
app.get('/', (req, res, next) => {
  res.json(DataStore.posts)
  res.send('node-typescript is working...1')
})

app.get('/posts', apiGetPosts)
app.get('/posts/:id', apiGetPostDetail)


app.post('/tours', (req, res, next) => {
  res.send('post tours....')
})

app.listen(process.env.PORT || 8091, () => {
  console.log('server started ....')
})
