const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({ 
  purchase_id: {
    type: String,
    required: true,
  },
  purchase_collection_index: {
    type: String,
    required: true,
  },
  product_name: {type: String,
    default: null
  },
  purchase_amount: {type: Number,
    default: null
    },
  vendor: {type: String,
    default: null
  },
  purchase_status: {type: String,
    default: null
    },
  reference_number: {type: String,
    default: null
  },
  purchase_date: {type: String,
      default: null
  },
  product_color: {type: String,
    default: null
  },
  product_category: {type: String,
    default: null
  },
  product_quantity: {type: String,
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

module.exports = mongoose.model('purchase', PurchaseSchema)