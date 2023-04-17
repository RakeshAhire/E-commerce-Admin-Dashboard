import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import AddProducts from '../pages/AddProducts'
import AddVendor from '../pages/AddVendor'
import Dashboard from '../pages/Dashboard'
import ForgotPassword from '../pages/ForgotPassword'
import Login from '../pages/Login'
import Order from '../pages/Order'
import { Other } from '../pages/Other'
import Payments from '../pages/Payments'
import Products from '../pages/Products'
import ResetPassword from '../pages/ResetPassword'
import Subscription from '../pages/Subscription'
import TodaysOrder from '../pages/TodaysOrder'
import Users from '../pages/Users'
import Vendors from '../pages/Vendors'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>          
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route path="/admin" element={<MainLayout />}>
                <Route index element={<Dashboard/>} />
                <Route path='allusers' element={<Users/>} />
                <Route path='allproducts' element={<Products/>} />
                <Route path='addproducts' element={<AddProducts/>} />
                <Route path='allvendors' element={<Vendors/>} />
                <Route path='addvendors' element={<AddVendor/>} />
                <Route path='allorders' element={<Order/>} />
                <Route path='todaysorders' element={<TodaysOrder/>} />
                <Route path='subscription' element={<Subscription/>} />
                <Route path='payment' element={<Payments/>} />
            </Route>
            <Route path="*" element={<Other />}></Route>
        </Routes>
    )
}

export default AllRoutes
