const Vendors = require('../../../models/product/vendor');
const Customer = require('../../../models/sale/customer');
const Users = require('../../../models/user/user');

const getDashBoardData = async function (req, res){    
    try {
        console.log("admin")
        const vendorList = await Vendors.find();
        const TotalNumbersVendors = vendorList.length;
        console.log(TotalNumbersVendors)
        var TotalPurchase = 0;

        for (let i = 0; i < vendorList.length; i++) {
            console.log(vendorList[i].account_balance)
            TotalPurchase = TotalPurchase+parseInt(vendorList[i].account_balance) ;
            console.log(TotalPurchase)
          }
          console.log(TotalPurchase)

          const customerList = await Customer.find();

          const TotalNumberscustomer = customerList.length;
          var TotalSales = 0;
          for (let i = 0; i < customerList.length; i++) {
              console.log(customerList[i].account_balance)
              TotalSales = TotalSales+parseInt(customerList[i].account_balance) ;
              console.log(TotalSales)
            }
            const Revenue = parseInt(TotalPurchase) -  parseInt(TotalSales)

            const userList = await Users.find();
            var total_user_number = Users.length


        res.send ([{total_Purchase:TotalPurchase,total_vendor_number:TotalNumbersVendors,total_sale:TotalSales,total_customer_number:TotalNumberscustomer,Revenue:Revenue,total_user_number:total_user_number,customerList:customerList,vendorList:vendorList,userList:userList}])
    } catch (error) { 
        res.send(error)   
    }

}


module.exports = {
    getDashBoardData,
}