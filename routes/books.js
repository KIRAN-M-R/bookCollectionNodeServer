import express from 'express'
import { addBook, getBooks, updateBook } from '../controllers/books.js';
const router = express.Router();
router.post('/',addBook);
router.get('/',getBooks);
router.patch('/:id',updateBook);

export default router