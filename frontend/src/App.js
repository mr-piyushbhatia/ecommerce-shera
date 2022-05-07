import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Product/ProductDetails";
import Products from "./Components/Product/Products";
import Login_Register from "./Components/User/Login_Register";
import Error404 from "./Components/Layout/404/Error404";
import { loaduseraction } from "./Actions/useraction";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Components/Cart/Cart";
import MyOrders from "./Components/Order/MyOrders";
import OrderDetails from "./Components/Order/OrderDetails";
import Shipping from "./Components/Cart/Shipping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import Payment from "./Components/Cart/Payment";
import ProtectedRoute from "./ProtectedRoute";
import UserOptions from "./Components/Layout/Header/UserOptions";
import Dashboard from "./Components/Admin/Dashboard";
import ProductList from "./Components/Admin/ProductList";
import OrderList from "./Components/Admin/OrderList";
import UsersList from "./Components/Admin/UsersList";
import UpdateUser from "./Components/Admin/UpdateUser";
import NewProduct from "./Components/Admin/NewProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import ProductReviews from "./Components/Admin/ProductReviews";
import Profile from "./Components/User/Profile";
import UpdateProfile from "./Components/User/UpdateProfile";
import UpdatePassword from "./Components/User/UpdatePassword";
import About from "./Components/Layout/About/About";
import Contact from "./Components/Layout/Contact/Contact";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";

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
          {!isAuthenticated ? <Route exact path="/password/forgot" component={ForgotPassword} /> : <Redirect to='/' /> }
      </Router>
      <Footer />
    </>
  );
};

export default App;
