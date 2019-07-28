"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiGetPosts = (req, res) => {
    res.json(data_1.DataStore.todos);
};
