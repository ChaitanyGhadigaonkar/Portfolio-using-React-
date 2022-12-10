import React from 'react'
import facebook from './Images/facebook.png'
import twitter from './Images/twitter.png'
import linked_in from './Images/linkedin.png'
import github from './Images/github.png'
export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="contact-header">
          <div className="line"></div>
          <div className="footer-img">
            <img src={facebook} alt="" srcset="" />
            <img src={twitter} alt="" srcset="" />
            <img src={linked_in} alt="" srcset="" />
            <img src={github} alt="" srcset="" />
          </div>
          <div className="line"></div>
        </div>
        <footer>
          <p>Built with ❤️ by Chaitany Ghadigaonkar</p>
        </footer>
      </div>
    </>
  )
}
