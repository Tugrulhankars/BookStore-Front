
import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import OrderPage from './pages/OrderPage'
import OfferPage from './pages/OfferPage'
import ShoppingCartPage from './pages/ShoppingCart'
import PaymentPage from './pages/PaymentPage'
import NotFound from './pages/errors/NotFound'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'offer', element: <OfferPage /> },
      { path: 'shoppingcart', element: <ShoppingCartPage /> },
    ]
  },
  {
    path: '/payment', // <-- bu root seviyede olacak!
    element: <PaymentPage />
  },
  {path:"*",element:<NotFound/>}

]);

function App() {

  return <RouterProvider router={router} />
}

export default App
