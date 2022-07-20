import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="content">
            <h2>Join Our Defi Community</h2>
            <form action="https://getform.io/f/16a4191f-c279-4b24-8611-e6538e17641c" method='POST'>
                <div className="form-container display-col">
                    <input type="email" name='email' placeholder='Enter your email.' />
                    <button className="btn">Sign Up</button>
                </div>
                <div className="form-container">
                    <input type="checkbox"/> <p>Yes, I agree to receive email communications from DeFi.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe;