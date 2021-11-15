import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Component/banner/Banner'
import Headar from './Component/Header/Header'
import Products from './Component/Products/Products'
import Footer from './Component/footer/Footer'
import AuthProvider from './context/AuthProvider'
import PrivateRoute from './Component/PrivateRout/PrivateRoute'
import Registar from './Component/Register/Registar';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import Login from './Component/Login/Login'
import Order from './Component/Order/Order';
import Pay from './Component/Pay/Pay';
import ShowAllProduct from './Component/ShowAllProduct/ShowAllProduct';
import AddReview from './Component/AddReview/AddReview';
import ShowRview from './Component/ShowReview/ShowRview';
import Dashboard from './Component/Dashboard/Dashboard';
import AddProduct from './Component/AddProduct/AddProduct';
import ManageProduct from './Component/ManageProduct/ManageProduct';
import NotFound from './Component/NotFound/NotFound';
import About from './Component/About/About'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Headar></Headar>
              <Banner></Banner>
              <Products></Products>
              <ShowRview></ShowRview>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
              <Headar></Headar>
              <Banner></Banner>
              <Products></Products>
              <ShowRview></ShowRview>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/addreview">
              <Headar></Headar>
              <AddReview></AddReview>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <Headar></Headar>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/myorder">
              <Headar></Headar>
              <Order></Order>
              <Footer></Footer>
            </Route>
            <Route path="/showreview">
              <ShowRview></ShowRview>
            </Route>
            <Route path="/products">
              <Headar></Headar>
              <Products></Products>
              <Footer></Footer>
            </Route>
            <Route path="/pay">
              <Headar></Headar>
              <Pay></Pay>
            </Route>
            <PrivateRoute path="/product/:productId">
              < Headar></Headar>
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/show">
              < Headar></Headar>
              <ShowAllProduct></ShowAllProduct>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              < Headar></Headar>
              <Registar></Registar>
              <Footer></Footer>
            </Route>
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/login">
              < Headar></Headar>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/managesp">
              <ManageProduct></ManageProduct>
            </Route>
            <Route exact path="*">
              < Headar></Headar>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
