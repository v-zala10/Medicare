import React from 'react'
import logo from '../images/logo.webp'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src={logo} alt="Logo" width="100" />
          <a class="navbar-brand" href="#">MediCAre
            <p>Healthcare Solutions</p>
          </a>
          <div className="display">
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Doctors</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Appointment</a>
                </li> <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>



            <button>Doctor Admin</button>
            <button>Login</button>

          </div>
          </div>
      </nav>


    </div>
  )
}

export default Navbar