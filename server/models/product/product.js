const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    
  product_id: {
    type: String,
    required: true,
  },
  product_collection_index: {
    type: String,
    required: true,
  },
  product_title: {type: String,
    default: null
  },
  product_description: {type: String,
    default: null
  },
  product_unit: {type: String,
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

module.exports = mongoose.model('product', ProductSchema)