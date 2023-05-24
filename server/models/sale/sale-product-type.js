const mongoose = require('mongoose');

const SaleProductTypeSchema = new mongoose.Schema({
    

  sale_type_id: {
    type: String,
    required: true,
  },
  sale_type_collection_index: {
    type: String,
    required: true,
  },
  type_title: {type: String,
    default: null
  },
  type_description: {type: String,
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

module.exports = mongoose.model('sale_product_type', SaleProductTypeSchema)