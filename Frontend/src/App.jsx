import React, { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import NavBar from './Components/NavBar'
import ErrorBoundary from './Components/ErrorBoundary'
import Spinner from 'react-bootstrap/Spinner';

const Home = lazy(() => import('./Pages/Home'))
const Products = lazy(() => import('./Pages/Products'))
const Login = lazy(() => import('./Pages/Login'))
const Cart = lazy(() => import('./Pages/Cart'))
const Contact = lazy(() => import('./Pages/Contact'))
const Register = lazy(() => import('./Pages/Register'))
const Success = lazy(() => import('./Pages/Success'))
const Cancel = lazy(() => import('./Pages/Cancel'))
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar/>}>
       <Route path='/' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Home/></Suspense>} />
       <Route path='/products' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Products/></Suspense>} />
       <Route path='/cart' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Cart/></Suspense>} />
       <Route path='/contact' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Contact/></Suspense>} />
       <Route path='/login' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Login/></Suspense>} />
       <Route path='/register' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Register/></Suspense>} />
       <Route path='/success' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Success/></Suspense>} />
       <Route path='/cancel' element={<Suspense fallback={<Spinner animation="border" />} errorElement={<ErrorBoundary />}><Cancel/></Suspense>} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App