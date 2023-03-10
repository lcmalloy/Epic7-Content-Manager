import React from 'react'

import boots from "../../assets/boots.svg"
import armor from "../../assets/armor.svg"
import earring from "../../assets/earring.svg"

import AliceCarousel from 'react-alice-carousel'
import './Carousel.scss'

  const itemsImg = [ boots, armor, earring ];

const items = itemsImg.map((item, index) => {
    return <div className="item" data-value={index + 1}>
      <img src={item} alt=""/>
    </div>;
});

const Carousel = () => {
  return (
    <AliceCarousel
      autoHeight
      autoWidth
      mouseTracking
      disableButtonsControls
      items={items}
    />
  )
}

export default Carousel