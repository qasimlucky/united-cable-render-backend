const express = require('express')
const app = express()
const port = 7000
const path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');
var session = require('express-session');
const MongoStore = require('connect-mongo');
const Users = require('./server/models/user/user');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://salom-vercel-deploy-9g6g.vercel.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
//app.use(cors());
//app.use(cors({ credentials: true, origin: '*' }));
//app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
//app.use(cors({ credentials: true, origin: 'https://salom-vercel-deploy-9g6g.vercel.app/' }));


app.use('/static', express.static(path.join(__dirname, './server/public/images')))
app.use('/static', express.static(path.join(__dirname, './server/public/images/vendor-images')))

// db connection
const connectDB = require('./server/config/db');
connectDB();

//session
app.use(session({
  secret: 'keyboard nexus',
  saveUninitialized: false,
  cookie :{maxAge:360000000000000},
  store: MongoStore.create({ mongoUrl: process.env.MONGOLAB_URL })
}))

// Routes 
const usersRoute = require('./server/routes/web/user-route/user-route')
const purchaseRoutes = require('./server/routes/web/purchase-route/purchase-route')
const productRoutes = require('./server/routes/web/product-route/product-route')
const VendorTransactionRoutes = require('./server/routes/web/purchase-route/accounts/vendor-transaction-route')
//shop
const orderRoutes = require('./server/routes/web/sale-route/order-route')
const ProductsaleRoutes = require('./server/routes/web/sale-route/product-route')
//customer
const customerRoutes = require('./server/routes/web/sale-route/customer-route')
const customerTransactionRoutes = require('./server/routes/web/sale-route/accounts/customer-transaction-route')

// admin dashboard
const AdminDashboardRoutes = require('./server/routes/web/admin-dashboard-route/admin-dashboard-route')
//salemanDashboard
const SaleManDashboard = require('./server/routes/web/sale-route/saleman-dashboard-route')

app.use('/user', usersRoute)
app.use('/purchase', purchaseRoutes)
app.use('/product', productRoutes)
app.use('/vendor/transaction', VendorTransactionRoutes)

// shop
app.use('/order', orderRoutes)
app.use('/sale/product', ProductsaleRoutes)
app.use('/customer', customerRoutes)
app.use('/customer/transaction', customerTransactionRoutes)

// admin dashboard
app.use('/admin/dashboard', AdminDashboardRoutes)
//
app.use('/saleman/dashboard', SaleManDashboard)
//
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 // login user
 // create session

app.post('/user/login',  async function (req, res){  
  const {password,phone_number} = req.body;
  console.log( req.body)
  try {
      console.log(req.sessionID)
        const client = await Users.findOne({phone_number:phone_number});
      if(client)  {
          console.log(client.password)
          if(client.password ==  password){
           console.log(client.user_id)
              req.session.authenticated = true;
              req.session.user = {
                  user_id : client.user_id,
                  first_name : client.first_name
              }
              req.session.isAuth = true;
              console.log(req.session)
              res.send("client")
          }else{
              res.send("invalid password or phone number")
          }
      }else{
          res.send("not a client") 
      }
  } catch (error) { 
      res.send(error)   
  }
})

// destroy session

app.post("/user/logout",(req, res) => {
  console.log("this is logout")
  req.session.destroy((err)=>{
       if(err) throw err;
      res.send("session destroy")
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})