const mongoose = require('mongoose');

const ProductColorSchema = new mongoose.Schema({
    
  color_id: {
    type: String,
    required: true,
  },
  color_collection_index: {
    type: String,
    required: true,
  },
  color_title: {type: String,
    default: null
  },
  color_description: {type: String,
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

module.exports = mongoose.model('product_color', ProductColorSchema)