const mongoose = require('mongoose');

const SaleProductPackingSchema = new mongoose.Schema({
    

  sale_packing_id: {
    type: String,
    required: true,
  },
  sale_packing_collection_index: {
    type: String,
    required: true,
  },
  packing_title: {type: String,
    default: null
  },
  packing_description: {type: String,
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

module.exports = mongoose.model('sale_product_packing', SaleProductPackingSchema)