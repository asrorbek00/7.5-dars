import { useSelector } from "react-redux";

import Product from "./Product";

function ShopProducts() {
  const { products, total } = useSelector((data) => data.shop);
  return (<>
  <h1 className="text-3xl text-center mb-8 mt-6">Redux Store </h1> 
    {products.length !== 0 ? 
      <div>
      {products.map((product) => {
        const { name, price, image, amount } = product;
        return (
          <Product
            key={product.name}
            name={name}
            price={price}
            image={image}
            amount={amount}
          />
        );
      })}
      <div className="max-w-md mx-auto justify-between flex   items-center  mt-5">
        <h2 className="text-2xl">Total</h2>
        <h2 className="font-bold">${total.toFixed(2)}</h2>
      </div>
    </div> : <div>
  <h1 className="text-4xl text-center mt-32"> You Don't have any Products:)</h1>
    </div>}
    </>
  );
}

export default ShopProducts;