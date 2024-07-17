import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignInd from '../SignIn';
import NotFound from '../NotFound';
import './App.css'

function App() {
  return (
    <div className="bg-red-100">
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignInd />
      <NotFound />
    </div>
  );
}

export default App
