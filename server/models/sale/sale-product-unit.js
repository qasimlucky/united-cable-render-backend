const mongoose = require('mongoose');

const SaleProductUnitSchema = new mongoose.Schema({
    

  sale_unit_id: {
    type: String,
    required: true,
  },
  sale_unit_collection_index: {
    type: String,
    required: true,
  },
  unit_title: {type: String,
    default: null
  },
  unit_description: {type: String,
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

module.exports = mongoose.model('sale_product_unit', SaleProductUnitSchema)