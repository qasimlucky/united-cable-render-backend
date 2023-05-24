const mongoose = require('mongoose');

const ProductUnitSchema = new mongoose.Schema({
    

  unit_id: {
    type: String,
    required: true,
  },
  unit_collection_index: {
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

module.exports = mongoose.model('product_unit', ProductUnitSchema)