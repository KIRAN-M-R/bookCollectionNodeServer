import express from 'express'
import { addBook, deleteBook, getBooks, updateBook } from '../controllers/books.js';
const router = express.Router();
router.post('/',addBook);
router.get('/',getBooks);
router.patch('/:id',updateBook);
router.delete('/:id',deleteBook)

export default router