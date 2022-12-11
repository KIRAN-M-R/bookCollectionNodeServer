import express from 'express'
import { addBook, deleteBook, getBookBySearch, getBooks, updateBook } from '../controllers/books.js';
const router = express.Router();
router.post('/',addBook);
router.get('/',getBooks);
router.patch('/:id',updateBook);
router.delete('/:id',deleteBook)
router.get('/search', getBookBySearch)
export default router