import { DataStore } from '../../data/data'
import { RequestHandler } from 'express';
import { PostDetail } from '../../shared/postDetail'

export const apiGetPostDetail: RequestHandler = (req, res) => {
  const selectedPost = DataStore.posts.find(
    (element: any) => element.id == req.params.id
  )
  if (selectedPost) {
    const selectTodos = DataStore.todos.filter(
      (item: any) => item.postId == req.params.id
    )
    res.json(new PostDetail(selectedPost, selectTodos))
  } else {
    res.status(404).json({
      status: 'failed',
      message: 'post note found',
    })
  }
}