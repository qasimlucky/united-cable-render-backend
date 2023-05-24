const mongoose = require('mongoose');

const SaleProductCategroySchema = new mongoose.Schema({
    

  sale_category_id: {
    type: String,
    required: true,
  },
  sale_category_collection_index: {
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

module.exports = mongoose.model('sale_product_category', SaleProductCategroySchema)