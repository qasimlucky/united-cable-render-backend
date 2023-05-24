const mongoose = require('mongoose');

const SaleProductSizeSchema = new mongoose.Schema({
    

  sale_size_id: {
    type: String,
    required: true,
  },
  sale_size_collection_index: {
    type: String,
    required: true,
  },
  size_according_wires: {type: String,
    default: null
  },
  size_according_mm: {type: String,
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

module.exports = mongoose.model('sale_product_size', SaleProductSizeSchema)