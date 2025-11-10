import './Appliences.css'
import { addToCart } from '../../../Funtions/AddCart'

export function Appliances() {
  return (
    <div className='container'>
      <div className="Appliances shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="Tv.jpg" alt="Appliance" />
          <h4>Samsung TV</h4>
          <p>Price: $500</p>
          <p>Rating: 4.5/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "Samsung TV", price: 500 })}>Add to Cart</button>
        </form>
      </div>

      <div className="Appliances shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="WashingMachine.jpg" alt="Appliance" />
          <h4>LG Washing Machine</h4>
          <p>Price: $700</p>
          <p>Rating: 4.0/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "LG Washing Machine", price: 700 })}>Add to Cart</button>
        </form>
      </div>

      <div className="Appliances shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="Fridge.jpg" alt="Appliance" />
          <h4>Whirlpool Fridge</h4>
          <p>Price: $800</p>
          <p>Rating: 4.3/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "Whirlpool Fridge", price: 800 })}>Add to Cart</button>
        </form>
      </div>

      <div className="Appliances shadow-lg bg-body rounded">
        <form className="d-flex flex-column" action="">
          <img style={{ width: "200px", height: '200px' }} src="Ac.jpg" alt="Appliance" />
          <h4>Daikin AC</h4>
          <p>Price: $600</p>
          <p>Rating: 4.6/5</p>
          <button id="Addcart" type="submit" className="btn btn-primary" onClick={() => addToCart({ name: "Daikin AC", price: 600 })}>Add to Cart</button>
        </form>
      </div>
    </div>
  )
}