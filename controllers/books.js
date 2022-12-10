import express from "express"
import PostBook from "../models/book.js"
import mongoose from "mongoose";


//const router = express.Router()
export const addBook = async (req,res) => {
    const post = req.body;
    console.log(req.body)
    const newPostBook = new PostBook({...post, createdAt: new Date().toISOString()})
    
    try {
        await newPostBook.save()
        res.status(201).json(newPostBook );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getBooks = async (req,res) => {
    try {
        const posts = await PostBook.find();
        //console.log("gieei"+posts)
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateBook = async (req,res) => {
    try {
        const {id} = req.params;
        const {bookName, author, price, genre, image} = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        const updatedPost = {bookName, author, price, genre, image}
        await PostBook.findByIdAndUpdate(id, updatedPost, { new: true });
        res.json(updatedPost);
    } catch (error) {
        console.log(error)
    }
}

export const deleteBook = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostBook.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

//export default router