import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ShopProducts from './components/ShopProducts'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotal } from './redux/features/shopSlice'

function App() {

   const shop = useSelector((data) => data.shop)
   const dispatch = useDispatch()

   useEffect(()=>{
      dispatch(updateTotal())
   }, [shop , dispatch])
  return (
    <div>
      <Navbar/>
      <ShopProducts/>
    </div>
  )
}

export default App