import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdressFormPage from '../pages/AdressFormPage/AdressFormPage'
import CartPage from '../pages/CartPage/CartPage'
import EditAdressPage from '../pages/EditAdressPage/EditAdressPage'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage'
import SignupPage from '../pages/SignUpPage/SignUpPage'
import SplashPage from '../pages/SplashPage/SplashPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignupPage />} />
        <Route path="/adressForm" element={<AdressFormPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/editAdress" element={<EditAdressPage />} />
        <Route path="/editProfile" element={<EditProfilePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route index element={<SplashPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
