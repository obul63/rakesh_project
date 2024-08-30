import React, { useState } from 'react'
import Data from './Food.json'
import './Food.css'
import pic from './images/cheff.png'
import flogo  from './images/flo-removebg-preview.png'
import Footer from './Footer'
export default function Food() {
  const [food, setFood] = useState(Data)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const YOUR_APP_ID = "18ea9fd5"
  const YOUR_APP_KEY = "eaec06f952263681a8c3aca72bcc1972"
  const submitHandle = (e) => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=10&to=19 `)
      .then(res => res.json())
      .then(data => setData(data.hits))
  }
  function f1(e) {
    setSearch(e.target.value)
  }
  return (
    <>
  <div className='container'>

      <div className='food row'>
        <div className='col-md-8'>
   
    <h1 id="bst">Best<span id="and"> & </span>  Fastest</h1>
    <h1><span id="span">Delivery</span> in your place</h1>

  <h4 id="sty">Order your foods at any time and we'll safely delivery them stright to your home we will deliver it on time so  your not angry</h4>
  <h1 id="title"><img src={flogo} alt="" id="flogo" />Indian Food</h1>
  </div>
  <div className='col-md-4'>
<img src={pic} alt="" id="pa"></img>
  </div>
  </div>
  </div>
    <div className='bg-dark text-light'>
    <center>
        <h1 className='text-warning p-2'>Select Food Recipe</h1>
        <form onSubmit={submitHandle}>
          <input type='text' value={search} onChange={f1} placeholder='search item' className='w-50 p-2 m-4 ' />
          <input type='submit' value="search" className='btn btn-warning p-2 mb-2' />
        </form>
      </center>
  
      <div className='container-fluid'>
        <div className='row'>
          {data.map((data) =>
            <div className='col-md-4 bg-dark'>
              <div className="style card M-2 mb-2">
                <img src={data.recipe.image} class="card-img-top img-fluid" alt="..." id="foods"/>
                <div class="card-body">
                  <h5 class="card-title">{data.recipe.label}</h5>
                  <p> amount calories:{data.recipe.calories}</p>
                  <button className="btn btn-danger " style={{ borderRadius: '15%', backgroundColor: 'red' }}>₹{Math.round(data.recipe.totalWeight) - 500}</button>
                </div>
              </div>
            </div>
          )}
          <div className="col text-center">
            {search.length > 0 ? (
              <p>No results found.</p>
            ) : (
              <p>Start by searching for an item.</p>
            )}
          </div>
        </div>

        <div className='row'>
          {food.map((x) => (
            <div className='col-md-4'>
              <div className=' style card mt-3'>
                <img src={x.url} className='card-img-top' alt='' width='100%' height='350'  id="foods" />
                <div className='card-body'>
                  <h5 className='card-title'>{x.Title}</h5>
                  <p className='card-text'>amount calories:{x.Calories}</p>
                  <button style={{ borderRadius: '15%', backgroundColor: 'red' }}>{x.Price}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}