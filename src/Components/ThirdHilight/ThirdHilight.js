import React from 'react'
import Card from '../../images/icons/Card.png';

function ThirdHilight() {
  return (
    <section className="third-highlight-wrapper pb-5">
      <div className="container">
        <div
          className="row h-100 align-items-center justify-content-center text-center"
        >
          <div className="col-12">
          <div className="logo-wrapper">
			  <img src={Card} />
			</div>

            <div className="description-wraper ">
              Save 5% on Apple products with a <br/>new Apple Card through December 25.
            </div>
            <h2 className="price-wrapper">
              Only at Apple. Exclusions and terms apply.<sup>1</sup>
            </h2>
            <div className="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- Third section ends here -->
  )
}

export default ThirdHilight