const mongoose = require('mongoose');

const VendorTransactionSchema = new mongoose.Schema({ 
  transaction_id: {
    type: String,
    required: true,
  },
  transaction_collection_index: {
    type: String,
    required: true,
  },
  vendor_id: {type: String,
    default: null
  },
  purchase_id: {type: String,
    default: null
  },
  transaction_type: {type: String,
    default: null
  },
  transaction_amount: {type: Number,
    default: null
  },
  opening_balance: {type: Number,
  default: null
  },
  closing_balance: {type: Number,
    default: null
  },
  image: {type: String,
    default: null
  },
  transaction_status: {type: String,
    default: 'Active'
  },
  date: {type: String,
    default: null
  },
  time: {type: String,
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

module.exports = mongoose.model('vendor_transaction', VendorTransactionSchema)