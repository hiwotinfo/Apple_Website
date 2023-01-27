import React from 'react'
import IphonePro from '../../images/icons/Iphone14Pro.png'
import Ipad from '../../images/icons/Ipad.png'



      // <!-- Fourth section starts here -->
function FourthHilighter() {
  return (
	<section className="fourth-heghlight-wrapper">
	<div className="row">
	  <div className="col-12 col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
		<div className="left-side-inner-wrapper">
		  <div className="top-logo-wrapper">
			<div className="logo-wrapper img">
			  <img src={IphonePro} />
			</div>
		  </div>
		  <div className="description-wraper ">
			Pro.Beyond.
		  </div>
		  <div className="links-wrapper">
			<ul>
			  <li><a href="">Learn more</a></li>
			  <li><a href="">Buy</a></li>
			</ul>
		  </div>
		</div>
	  </div>

	  <div className="col-12 col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
		<div className="right-side-inner-wrapper">
		  <div className="top-logo-wrapper">
			<div className="logo-wrapper">
			  <img src={Ipad} />
			</div>
		  </div>
		  <div className="description-wraper">
			Lovable. Drawable.Magical.
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
  </section>

  );
}
// {/* <!-- Fourth section ends here --> */}

export default FourthHilighter;