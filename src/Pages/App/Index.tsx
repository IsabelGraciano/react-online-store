import { useRoutes, BrowserRouter } from 'react-router-dom'
import { StoreContextProdiver } from '../../Context/Index'
import Home from '../Home/Index'
import MyAccount from '../MyAccount/Index'
import MyOrder from '../MyOrder/Index'
import MyOrders from '../MyOrders/Index'
import NotFound from '../NotFound/Index'
import SignIn from '../SignIn/Index'
import Navbar from '../../Components/Navbar/Index'
import CheckoutSideMenu from '../../Components/CheckOutSideMenu/Index'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])

  return routes
}

const App = () => {
  return (
    <StoreContextProdiver>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </StoreContextProdiver>
  )
}

export default App
