const mongoose = require('mongoose');

const LibrarySchema = mongoose.Schema(
  {
  title: { 
    type: String,
    required: [true, "A  book can't be without a title"]
    },
  author: { 
    type: String, 
    required: true
},
  isbn: { 
    type: String, 
    unique: true,
    default: 978-3-16-148410-0
},
  publishedYear: { 
    type: Number, 
    required: true,
    min: 1900
},
  genre: { 
    type: String, 
    required: true 
},
},
  {
    timestamps: true,
  }
);

const library = mongoose.model("Library", LibrarySchema);

module.exports = library;
