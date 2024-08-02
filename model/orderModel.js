const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    cust_name:{
        type: 'string',
        required: true,
    },
    cust_phno :{
        type: 'string',
    },
    cust_address :{
        type: 'string',
    },
    OrderDate :{
        type: 'Date',
    },
    Est_Delv_Date:{
        type: 'Date',
    },
    products :[{
        'title':'string',
        'description':'string',
        'img':'string',
        'price':'number',
        'quantity':'number',
    }],
    
    total_amount :{
        type:'number',
    },
    order_status:{
        type:'string',
    },
    user_id:{
        type:'number',
    },
    user_email:{
        type:'string',
    }


})

const Order = mongoose.model('Order',orderSchema)

module.exports= Order