import React from 'react'
import '../Navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Language() {
  let languages=["Mal","Ara","Eng"]
  return (
    <div className='lang-main' >
       <div className="dropdown">
           <a className='lang' href=""><p>Eng</p>
            <FontAwesomeIcon icon={faChevronDown} /></a>
            
          <ul className="dropdown-menu">
            
          {languages.map((lang, index) => (
            <li key={index}>
              <a className='slide' href={`#${lang}`}>
                {lang}
              </a>
            </li>
))}

            
            
          </ul>
        </div>
        
    </div>
  )
}

export default Language
