import { useState, useEffect } from "react";

function App() {

  const [products, setProducts] = useState([])
  const [loading , setLoading] = useState([])
  useEffect(() => {
    try{
    fetch("https://skecommerce-backend.onrender.com/allproducts")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
    }
    catch(error){
      console.log("error in fetching",error)
    }
  }, []);


  return (
    <div className="text-cyan-950 ">
      <div className="m-5 text-center">
        <h1 className="text-4xl p-5 font-extrabold">
          SHOPPING CART
        </h1>
        
        <div className="flex gap-4 flex-wrap justify-center cursor-pointer ">
          {products.map((product) => (
            <div key={product} className="border-2 p-2 rounded-xl shadow-lg hover:-translate-y-2 transform duration-400 border-gray-300">
              <div className="flex justify-between bg-pink-950 text-white font-bold px-5 rounded-b-full">
              <span>id: {product.id}</span>
              <span>{product._id}</span>
              </div><br/>

              <span className="text-center font-extrabold text-xl bg-pink-300 rounded-t-full  px-10 py-1">{product.category}</span>
              <img src="image.png" className="w-90  p-2"></img>              
              
              <p className="text-xl font-extrabold">{product.name}</p>
              
              <p className="w-90  line-clamp-4">{product.description}</p>
              <br/>
              
              <div className="flex flex-wrap gap-4 bg-pink-800 p-2 text-white text-lg font-bold hover:-translate-y-0.5 hover:shadow-pink-900 shadow-md">
              <p className="line-through">Actual price : {product.actualPrice}</p>
                <p>Offer Price : {product.offerPrice}</p>
                
              </div>
              <br/>
              
              <span className="text-lg font-bold ">Rating : {product.rating}</span>
              
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default App;