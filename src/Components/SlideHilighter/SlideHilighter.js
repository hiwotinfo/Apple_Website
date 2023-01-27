import React from 'react'
import Carousel from "react-bootstrap/Carousel";


function SlideHilighter() {
  return (
    <>
      <Carousel className={'d-block w-100 col-12 col-3 '}>
        <Carousel.Item className="firist-slider" interval={1500}>
          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/movie/emancipation/umc.cmc.1j6fdxookwtqml3bd8ivvcbbv?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>Dram·lnspired by a gripping true story </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Second-slider" interval={1500}>
          <Carousel.Caption>
            <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/movie/spirited/umc.cmc.3lp7wqowerzdbej98tveildi3?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>Comedy·Start you on High Not.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Third-slider" interval={1500}>
          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
              Comedy·The rescue is only the bigning. 
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Fourth-slider" interval={1500}>
          <Carousel.Caption>
          <h3 className="watch-more-wrapper ">
            <a href="https://tv.apple.com/us/show/echo-3/umc.cmc.mzqa5sj4m2i80g51cgu04i3j?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
              Holiday·Happiness is the holidays!
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Fivth-slider" interval={1500}>
          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/movie/a-charlie-brown-christmas/umc.cmc.mbxalimrwrtq72wj4h601pyf?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
            Comedi·New season.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Sixt-slider" interval={1500}>
          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/show/little-america/umc.cmc.2ice8mlcn1zrtxf81e5ktwg8p?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
              Decumentary·Every breath, a breakthrough.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="Seventh-slider" interval={1500}>
          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/movie/selena-gomez-my-mind--me/umc.cmc.39yw4dp13gshxq5bt9fsl0o5y?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
              Drama·Welcome to bomby.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="Eighth-slider"interval={1500}></div>

          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/show/shantaram/umc.cmc.atxsrive40xli3zh3uxjimut?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
              Drama·Wellcome to Bombay.
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="Nigenth-slider" interval={1500}></div>

          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
            Thiller.Where all different people at work
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="Tenth-slider" interval={1500}></div>

          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/show/see/umc.cmc.3s4mgg2y7h95fks9gnc4pw13m?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>Thiller.Where all different people at work</h2>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="Elventh-slider" interval={1500}></div>

          <Carousel.Caption>
          <h3 className="watch-more-wrapper">
            <a href="https://tv.apple.com/us/show/mythic-quest/umc.cmc.1nfdfd5zlk05fo1bwwetzldy3?itscg=10000&itsct=atv-apl_hp-stream_now--220622">Stream Now</a>
            </h3>
            <h2>
            Commedy·One new office Same augmented reality.
            </h2>
          </Carousel.Caption>
          
        </Carousel.Item>
        </Carousel>

        {/* <div id="carouselButtons">
<button id="playButton" type="button" class="btn btn-default btn-xs">
    <span class="glyphicon glyphicon-play"></span>
 </button>
<button id="pauseButton" type="button" class="btn btn-default btn-xs">
    <span class="glyphicon glyphicon-pause"></span>
</button> */}
     
              </> 
  );
}

export default SlideHilighter;
