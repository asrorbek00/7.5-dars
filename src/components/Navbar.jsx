import { useSelector } from "react-redux"



function Navbar() {
    const {amount} = useSelector((data) => data.shop)
  return (
    <div className='max-w-3xl mx-auto py-5 px-3 flex justify-between items-center'>
        <h1 className='text-3xl font-medium'>home</h1>
        <p>
            <span>Shop</span>
            <span className='badge badge-secondary'>{amount}</span>
        </p>
    </div>
  )
}

export default Navbar