import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    bookName: String,
    author: String,
    price: {
        type: Number,
        minimum: 0,
        exclusiveMinimum: false
      },
    genre: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostBook = mongoose.model('PostBook',bookSchema)

export default PostBook;