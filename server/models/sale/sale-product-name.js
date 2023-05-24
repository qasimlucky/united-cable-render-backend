const mongoose = require('mongoose');

const SaleProductNameSchema = new mongoose.Schema({
    
  sale_name_id: {
    type: String,
    required: true,
  },
  sale_name_collection_index: {
    type: String,
    required: true,
  },
  sale_product_title: {type: String,
    default: null
  },
  sale_product_description: {type: String,
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

module.exports = mongoose.model('sale_product_name', SaleProductNameSchema)