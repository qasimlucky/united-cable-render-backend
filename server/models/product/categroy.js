const mongoose = require('mongoose');

const ProductCategroySchema = new mongoose.Schema({
    

  category_id: {
    type: String,
    required: true,
  },
  category_collection_index: {
    type: String,
    required: true,
  },
  category_title: {type: String,
    default: null
  },
  category_description: {type: String,
    default: null
  },
  created_at:{
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updated_at:{
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model('product_category', ProductCategroySchema)