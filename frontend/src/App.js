import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loaduseraction } from "./Actions/useraction";
import { useDispatch, useSelector } from "react-redux";
import loadable from 'react-loadable'

const ProtectedRoute = loadable({
  loader: ()=> import("./ProtectedRoute"),
  loading: ()=> <div>Loading...</div>
})
const Header = loadable({
  loader: ()=> import("./Components/Layout/Header/Header"),
  loading: ()=> <div>Loading...</div>
})
const Footer = loadable({
  loader: ()=> import("./Components/Layout/Footer/Footer"),
  loading: ()=> <div>Loading...</div>
})
const UserOptions = loadable({
  loader: ()=> import("./Components/Layout/Header/UserOptions"),
  loading: ()=> <div>Loading...</div>
})
const Home = loadable({
  loader: ()=> import("./Components/Home/Home"),
  loading: ()=> <div>Loading...</div>
})
const ProductDetails = loadable({
  loader: ()=> import("./Components/Product/ProductDetails"),
  loading: ()=> <div>Loading...</div>
})
const Products = loadable({
  loader: ()=> import("./Components/Product/Products"),
  loading: ()=> <div>Loading...</div>
})
const Login_Register = loadable({
  loader: ()=> import("./Components/User/Login_Register"),
  loading: ()=> <div>Loading...</div>
})
const Error404 = loadable({
  loader: ()=> import("./Components/Layout/404/Error404"),
  loading: ()=> <div>Loading...</div>
})
const Cart = loadable({
  loader: ()=> import("./Components/Cart/Cart"),
  loading: ()=> <div>Loading...</div>
})
const MyOrders = loadable({
  loader: ()=> import("./Components/Order/MyOrders"),
  loading: ()=> <div>Loading...</div>
})
const OrderDetails = loadable({
  loader: ()=> import("./Components/Order/MyOrders"),
  loading: ()=> <div>Loading...</div>
})
const Shipping = loadable({
  loader: ()=> import("./Components/Cart/Shipping"),
  loading: ()=> <div>Loading...</div>
})
const ConfirmOrder = loadable({
  loader: ()=> import("./Components/Cart/ConfirmOrder"),
  loading: ()=> <div>Loading...</div>
})
const Payment = loadable({
  loader: ()=> import("./Components/Cart/Payment"),
  loading: ()=> <div>Loading...</div>
})
const Dashboard = loadable({
  loader: ()=> import("./Components/Admin/Dashboard"),
  loading: ()=> <div>Loading...</div>
})
const ProductList = loadable({
  loader: ()=> import("./Components/Admin/ProductList"),
  loading: ()=> <div>Loading...</div>
})
const OrderList = loadable({
  loader: ()=> import("./Components/Admin/OrderList"),
  loading: ()=> <div>Loading...</div>
})
const UsersList = loadable({
  loader: ()=> import("./Components/Admin/UsersList"),
  loading: ()=> <div>Loading...</div>
})
const UpdateUser = loadable({
  loader: ()=> import("./Components/Admin/UpdateUser"),
  loading: ()=> <div>Loading...</div>
})
const NewProduct = loadable({
  loader: ()=> import("./Components/Admin/NewProduct"),
  loading: ()=> <div>Loading...</div>
})
const UpdateProduct = loadable({
  loader: ()=> import("./Components/Admin/UpdateProduct"),
  loading: ()=> <div>Loading...</div>
})
const ProductReviews = loadable({
  loader: ()=> import("./Components/Admin/ProductReviews"),
  loading: ()=> <div>Loading...</div>
})
const Profile = loadable({
  loader: ()=> import("./Components/User/Profile"),
  loading: ()=> <div>Loading...</div>
})
const UpdateProfile = loadable({
  loader: ()=> import("./Components/User/UpdateProfile"),
  loading: ()=> <div>Loading...</div>
})
const UpdatePassword = loadable({
  loader: ()=> import("./Components/User/UpdatePassword"),
  loading: ()=> <div>Loading...</div>
})
const About = loadable({
  loader: ()=> import("./Components/Layout/About/About"),
  loading: ()=> <div>Loading...</div>
})
const Contact = loadable({
  loader: ()=> import("./Components/Layout/Contact/Contact"),
  loading: ()=> <div>Loading...</div>
})
const ForgotPassword = loadable({
  loader: ()=> import("./Components/User/ForgotPassword"),
  loading: ()=> <div>Loading...</div>
})
const ResetPassword = loadable({
  loader: ()=> import("./Components/User/ResetPassword"),
  loading: ()=> <div>Loading...</div>
})



const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loaduseraction());
  }, [dispatch]);

  return (
    <>
      <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products" component={Products} />

          <Route exact path="/login" component={Login_Register} />
          <ProtectedRoute exact path="/account" component={Profile} />
          <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
          <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
          <Route exact path="/reset/:token" component={ResetPassword} />
          {!isAuthenticated && <Route exact path="/password/forgot" component={ForgotPassword} /> }
          
          <Route exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/shipping" component={Shipping} />
          <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder}/>
          <ProtectedRoute exact path="/process/payment" component={Payment} />

          <ProtectedRoute exact path="/orders" component={MyOrders} />
          <ProtectedRoute exact path="/order/:id" component={OrderDetails} />



          <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={Dashboard} />

          <ProtectedRoute isAdmin={true} exact path='/admin/products' component={ProductList} />
          <ProtectedRoute isAdmin={true} exact path='/admin/product/new' component={NewProduct} />
          <ProtectedRoute isAdmin={true} exact path='/admin/product/:id' component={UpdateProduct} />

          <ProtectedRoute isAdmin={true} exact path='/admin/orders' component={OrderList} />

          <ProtectedRoute isAdmin={true} exact path='/admin/users' component={UsersList} />
          <ProtectedRoute isAdmin={true} exact path='/admin/user/:id' component={UpdateUser} />

          <ProtectedRoute isAdmin={true} exact path='/admin/reviews' component={ProductReviews} />

          <Route exact component={Error404} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
