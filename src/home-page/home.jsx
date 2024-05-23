import React from 'react'
import './home.css'
import img_home from './assets/photo1715859842.jpeg'

const home = () => {
  return (
    <div className="all">
    <div className='container_hm'>
        <img id='home-pg_fr' src={img_home} alt="cars_img" />
        <h1 id='h1-hp'>AUTO Rader</h1>
    </div>

    <main class="container">
  <section class="card">
    <div class="product-image">
      <img src="https://i.ibb.co/cNWqxGx/red.png" alt="OFF-white Red Edition" draggable="false" />
    </div>
    <div class="product-info">
      <h2>Nike X OFF-white</h2>
      <p>The 10: Air Jordan 1 off-white - Chicago</p>
      <div class="price">$999</div>
    </div>
    <div class="btn">
      <button class="buy-btn">Buy Now</button>
      <button class="fav">
        <svg class="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </svg>
      </button>
    </div>
  </section>
  <section class="card card-blue">
    <div class="product-image">
      <img src="https://i.ibb.co/0JKpmgd/blue.png" alt="OFF-white Blue Edition" draggable="false" />
    </div>
    <div class="product-info">
      <h2>Nike X OFF-white</h2>
      <p>Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
      <div class="price">$1599</div>
    </div>
    <div class="btn">
      <button class="buy-btn">Buy Now</button>
      <button class="fav">
        <svg class="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </svg>
      </button>
    </div>
  </section>
</main>
      </div>
  )
}

export default home