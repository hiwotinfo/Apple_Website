import React from 'react'
import Apple from '../../images/icons/Apple.jpg';
// import IphonWach from '../../images/icons/WatchUltra.png'
import WachSerie from '../../images/icons/WatchSeries8.png'
{/* <!-- Fifth section starts here --> */}
function FivthHilighter() {
  return (
	<section className="fifth-heghlight-wrapper">
	<div className="row">
	  <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
		<div className="left-side-inner-wrapper">
		  <div className="top-logo-wrapper">
			<div className="logo-wrapper">
			  <img src={Apple} />
			</div>
		  </div>

		 <div className="description-wraper">
			Share The joy
		  </div> 

		  <div className="links-wrapper">
		  <ul>
			<li><a href="#">Shop</a></li>
			</ul>
		  </div>
		</div>
	  </div>

	  <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
		<div className="right-side-inner-wrapper">
		  <div className="top-logo-wrapper">
			   <div className="logo-wrapper">
			  <img src={WachSerie} />
			</div>
            <div className="product-title-small">
              <ul>
                <h5>
                  <a href="#">A health leap ahead.</a>
                </h5>
              </ul>
            </div>

		  <div className="links-wrapper">
			<ul>
			  <li><a href="">Learn more</a></li>
			  <li><a href="">Buy</a></li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
	</div>
  </section>
     )
   }
// /* <!-- Fifth section endes here --> */}
export default FivthHilighter