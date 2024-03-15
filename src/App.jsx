import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './Components/SingleProduct/SingleProduct';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('../public/fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    
    const isExist = cart.find((pd) => pd.id == product.id);
    if (!isExist) {
      setCart([...cart, product])
    }
    else {
      alert("This product is already exist!")
    }
  }
  console.log(cart)

  const handleDelete = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart)
  }

  return (
    <>
      <div className='main-container'>
        <div className="cards-container">

          {
            products.map(pb => <SingleProduct key={pb.id} product={pb} handleCart={handleCart}> </SingleProduct>)
          }
          <div className='card'>
            <img src="" alt="" />
          </div>
        </div>
        <div className='cart-container'>
          <h1 className='text-center'>This is cart</h1>
          <div className="cart-title">
            <h4>Name</h4>
            <h4>Price</h4>
          </div>

          <div className=' '>
            {
              cart.map((item, index) => (    // aikhane {} bracket na dia first bracket dita hobe. ()
                <div className='flex justify-around'>
                  <p>{index + 1}</p>
                  <h5>{item.title.slice(0, 15)}</h5>
                  <p>{item.price}</p>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
