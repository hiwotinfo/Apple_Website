import React from 'react'
// import Iphon14Pro from '../../images/home/Iphone14Pro.jpg'
import Iphone from '../../images/icons/Iphone-14-sm.png'

function FirstHilight() {
  return (
    <section className="main-highlight-wrapper">
      <div className="container">
        <div
          className="row h-100 align-items-center justify-content-center text-center"
        >
          <div className="col-12">
            {/* <div className="model">16-inch model</div> */}

            <div className="product-title"><img src={Iphone} /></div>

            <div className="brief-description">Big and Bigger.</div>

            <div className="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Buy</a></li>
              </ul>
            </div>
      <div className="main-image-wrapper "> 
            <div>
              {/* <img src={Iphon14Pro} />  */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstHilight