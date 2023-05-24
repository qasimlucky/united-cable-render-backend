const mongoose = require('mongoose');

const SaleProductsSchema = new mongoose.Schema({ 
  cable_id: {
    type: String,
    required: true,
  },
  cable_collection_index: {
    type: String,
    required: true,
  },
  cable_name: {type: String,
    default: null
  },
 cable_categroy: {type: Object,
    default: null
  },
  cable_type: {type: String,
    default: null
  },
  cable_packing_length: {type: String,
    default: null
  },
  packing_type: {type: String,
    default: null
  },
  packing_measurement_unit: {type: String,
    default: null
  },
  sale_price: {type: String,
    default: null
  },
  cable_amp: {type: String,
    default: null
  },
  cable_size_no_wire: {type: String,
    default: null
  },
  cable_size_in_mm: {type: String,
    default: null
  },
  cable_color: {type: String,
      default: null
  },
  quantity: {type: Number,
    default: 0
  },
  cable_status : {type: Boolean,
      default: true
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

module.exports = mongoose.model('sales_products', SaleProductsSchema)