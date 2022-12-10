import express from "express"
import PostBook from "../models/book.js"


//const router = express.Router()
export const addBook = async (req,res) => {
    const post = req.body;
    console.log(req.body)
    const newPostBook = new PostBook({...post, createdAt: new Date().toISOString()})
    
    try {
        await newPostBook.save()
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getBooks = async (req,res) => {
    try {
        const posts = await PostBook.find();
        console.log("gieei"+posts)
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//export default router