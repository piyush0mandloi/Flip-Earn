import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import MyListings from './pages/MyListings'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/ManageListing'
import Messages from './pages/Messages'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'
import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const {pathname} = useLocation()
  return (
    <div>
      <Toaster />
      {!pathname.includes('/admin') && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />

        {/* Listings */}
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/listing/:listingId" element={<ListingDetails />} />

        {/* Create & Edit Listings */}
        <Route path="/create-listing" element={<ManageListing />} />
        <Route path="/edit-listing/:listingId" element={<ManageListing />} />

        {/* Messages */}
        <Route path="/messages" element={<Messages />} />

        {/* Orders */}
        <Route path="/my-orders" element={<MyOrders />} />

        {/* Loading */}
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <ChatBox/>
    </div>
  )
}

export default App
