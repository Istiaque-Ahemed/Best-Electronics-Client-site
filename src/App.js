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
              <Registar></Registar>
              <Footer></Footer>
            </Route>
            <Route exact path="/home">
              <Headar></Headar>
              <Banner></Banner>
              <Products></Products>
              <Registar></Registar>
              <Footer></Footer>
            </Route>
            <Route path="/myorder">
              <Headar></Headar>
              <Order></Order>
              <Footer></Footer>
            </Route>
            <Route path="/products">
              <Products></Products>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/product/:productId">
              < Headar></Headar>
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
              <Footer></Footer>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
