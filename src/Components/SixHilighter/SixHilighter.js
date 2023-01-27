import React from "react";

import IphonWach from '../../images/icons/WatchUltra.png'
//   <!-- Sixth section starts here -->
function SixHilighter() {
  return (
    <section className="sixth-heghlight-wrapper mb-4">
      <div className="row">
        <div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper mb-4">
          <div className="left-side-inner-wrapper">
          <div className="top-logo-wrapper">
      <div className="logo-wrapper"> <img src={IphonWach} />
      </div>
            </div>

            <div className="description-wraper">	Adventure awaits.</div>

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper mt-4">
          <div className="right-side-inner-wrapper">
            <div className="top-logo-wrapper">
             
              <div className="logo-wrapper"> <img src={""} /></div>
              <div className="description-wraper home">HomePod mini</div>
            </div>

            <div className="description-wraper">	Adventure awaits.</div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* // <!-- Sixth section ends here --> */
}
export default SixHilighter;
