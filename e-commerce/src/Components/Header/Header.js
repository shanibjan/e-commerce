import React from 'react'
import './Header.css'

function Header() {
  return (
    <div class="header">
    <span class="left">
        <p class="light" > Call us:</p>
        <p class="bold" >1–234–5678901</p>
    </span>
    <span class="center">
       <p class="bold">50% OFF</p>
       <p class="light">all new collection</p>
       <a class="more" >More Details</a>
    </span>
    <span class="right">
        <a  class="link" href="">Facebook</a>
        <a class="link" href="">Instagram</a>
        <a class="link" href="">Twitter</a>
    </span>
    
    
</div>
  )
}

export default Header

