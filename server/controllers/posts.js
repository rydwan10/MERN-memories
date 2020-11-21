const PostMesage = require('../models/postMessage');
const mongoose = require('mongoose');

const getPost = async (req, res) => {
    try {
        const postMessages = await PostMesage.find();
        res.status(202).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMesage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    // res.send('post creation');
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMesage.findByIdAndUpdate(_id,)
}

module.exports = {
    getPost: getPost,
    createPost: createPost,
    updatePost: updatePost,
}