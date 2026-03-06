import React from 'react'
import banner from '../images/Banner.png'
import { FaStethoscope } from "react-icons/fa";
function Home() {
    return (
        <div>
            <div className="home">
                <div className="heading">
                    <div className="mainheading">
                        <div className="dr"><FaStethoscope /></div>
                        <h1>Medi<span>Care+</span></h1>

                    </div>
                      <p style={{paddingLeft:'50px'}}> ⭐⭐⭐⭐⭐</p>
                    <div className="heading1">
                        <p>Premium Healthcare</p>
                        <h6>At Your Fingertips</h6>
                    </div>
                    <div className="buttons">
                        <div className="button1">
                            <button>Certified Specialists</button>
                            <button>24/7 Availability</button>
                            <button>Safe & Secure</button>
                        </div>
                        <div className="button2">
                            <button>500+ Doctors</button>
                            <button>Book Appointment Now</button>
                            <button>Emergency Call</button>
                        </div>
                    </div>
                </div>


                <div className="banner">
                    <img src={banner} alt="MediCare Banner" />
                </div>
            </div>


        </div>)
}

export default Home