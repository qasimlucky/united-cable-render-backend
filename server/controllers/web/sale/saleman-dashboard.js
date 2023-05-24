const Orders = require('../../../models/sale/sale-orders');
const SaleProduct = require('../../../models/sale/sale-product');
const SaleCustomer = require('../../../models/sale/customer');
const CustomerTransaction = require('../../../models/sale/accounts/customer-transaction');

const getSaleManDashBoardData = async function (req, res){    
    try {
        console.log("this is saleman dashboard")

        var d = new Date(Date.now('2015-02-10T10:12:50.5000z'));
        const orderList = await Orders.find();
        
        var orderArr = []
        var TodaySale = 0;
        for (let i = 0; i < orderList.length; i++) {
            const dbDate=orderList[i].created_at
            //console.log(dbDate.toISOString().slice(0,10))
            if(dbDate.toISOString().slice(0,10) == d.toISOString().slice(0,10)){
                orderArr.push(orderList[i])
                TodaySale = TodaySale + orderList[i].total_amount
            }
        }


        //Total Due Payments
        var TotalSaleAmount = 0;
        for (let i = 0; i < orderList.length; i++) {
           // console.log( orderList[i].total_amount)
            TotalSaleAmount = TotalSaleAmount + orderList[i].total_amount
        }
        console.log("TotalSaleAmount" + TotalSaleAmount)
        // total products

        const producList = await SaleProduct.find();
        console.log(producList.length)

        var transactionArr = []
        var TodayCashIn = 0;
        var AllTimeCashIn = 0;
        const transactionList = await CustomerTransaction.find({transaction_type:"Debit"});
        for (let i = 0; i < transactionList.length; i++) {
            AllTimeCashIn = AllTimeCashIn + transactionList[i].transaction_amount
            const dbDateTransaction=transactionList[i].created_at
            if(dbDateTransaction.toISOString().slice(0,10) == d.toISOString().slice(0,10)){
                transactionArr.push(transactionList[i])
                TodayCashIn = TodayCashIn + transactionList[i].transaction_amount
            }
        }
        console.log("AllTimeCashIn" + AllTimeCashIn)

        const customerList = await SaleCustomer.find();
        var total_customer = customerList.length

        /* console.log(orderArr.length)
        console.log(TodayCash)
        console.log(producList.length)
        console.log(transactionArr.length)
        console.log(CashIn) */
        var duePayments = (TotalSaleAmount - AllTimeCashIn);
        var transaction_customer = transactionArr.length;
        var total_no_of_products = producList.length
        var total_orders_number = orderArr.length
        console.log("oky")
        res.send([{due_payments:duePayments,total_customer:total_customer,today_cash_in:TodayCashIn,transaction_customer:transaction_customer,total_no_of_products:total_no_of_products,today_sale:TodaySale,total_orders_number:total_orders_number,orderList:orderList,transaction_Arr:transactionArr,customerList:customerList}])
            
    } catch (error) { 
        res.send(error)   
    }

}


module.exports = {
    getSaleManDashBoardData,
}