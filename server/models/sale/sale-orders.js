const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({ 
  order_id: {
    type: String,
    required: true,
  },
  order_collection_index: {
    type: String,
    required: true,
  },
  total_amount: {type: Number,
    default: null
  },
  no_of_items: {type: String,
    default: null
  },
  customer_name: {type: String,
    default: null
  },
  customer_phone: {type: String,
  default: null
  },
  order_items: {type: Array,
        default: null
  },
  order_status: {type: String,
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

module.exports = mongoose.model('orders', OrdersSchema)