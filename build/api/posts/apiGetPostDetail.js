"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postDetail_1 = require("../../shared/postDetail");
exports.apiGetPostDetail = (req, res) => {
    const selectedPost = data_1.DataStore.posts.find((element) => element.id == req.params.id);
    if (selectedPost) {
        const selectTodos = data_1.DataStore.todos.filter((item) => item.postId == req.params.id);
        res.json(new postDetail_1.PostDetail(selectedPost, selectTodos));
    }
    else {
        res.status(404).json({
            status: 'failed',
            message: 'post note found',
        });
    }
};
