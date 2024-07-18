import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import Navbar from '../../components/navbar'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/',element: <Home />},
    {path: '/myAccount', element: <MyAccount />},
    {path: '/myOrder', element: <MyOrder />},
    {path: '/myOrders', element: <MyOrders />},
    {path: '/signIn', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ])
  return routes
}

const App=() => {
  return (
    <BrowserRouter>
    <AppRoutes />
    <Navbar />
    </BrowserRouter>
  );
}

export default App
