import { addToCart } from '../../../Funtions/AddCart'
import './Clothing.css'

export function Clothing() {
  return (
    <div className='container'>
      <div className="Clothing shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="Shirt1.jpg" alt="Clothing" />
          <h4>Men's Black Shirt</h4>
          <p>Price: 599/-</p>
          <p>Rating: 4.5/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "Men's Black Shirt", price: 599 })}>Add to Cart</button>
        </form>
      </div>

      <div className="Clothing shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="Shirt2.jpg" alt="Clothing" />
          <h4>Men's Blue Shirt</h4>
          <p>Price: 600/-</p>
          <p>Rating: 4.0/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "Men's Blue Shirt", price: 600 })}>Add to Cart</button>
        </form>
      </div>

      <div className="Clothing shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="Saree1.webp" alt="Clothing" />
          <h4>Banarasi Brinjal</h4>
          <p>Price: 1500/-</p>
          <p>Rating: 4.3/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "Banarasi Brinjal", price: 1500 })}>Add to Cart</button>
        </form>
      </div>

      <div className="Clothing shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="Saree2.webp" alt="Clothing" />
          <h4>Banarsi maroon</h4>
          <p>Price: 1200/-</p>
          <p>Rating: 4.6/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "Banarsi maroon", price: 1200 })}>Add to Cart</button>
        </form>
      </div>
    </div>
  )
}