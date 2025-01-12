const Library = require('../models/libraryModel');

const getAllBooks = async (req, res) => {
    try {
        const library = await Library.find({});
        res.status(200).json(library);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addBook = async (req, res) => {
    try {
        const library = await Library.create(req.body);
        res.status(200).json(library);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const library = await Library.findOneAndUpdate(id, req.body);

        if (!library) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const updatedBook = await Library.findOne(id);
        res.status(200).json(library);
    } catch (error) {
        res.status(500).json({ mesaage: error.message });
    }
}

const deleteBook = async (req, res) => { 
        try {
            const { id } = req.params;
            const library = await Library.findOneAndDelete(id);
    
            if (!library) {
                return res.status(404).json({ message: 'Book not found' });
            }
    
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
   }

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
}