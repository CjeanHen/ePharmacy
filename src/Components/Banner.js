import React from 'react'
import Image from 'react-bootstrap/Image'
import vaccinePic from '../assets/vaccine.png'

const Banner = () => {
  return (
    <Image src={vaccinePic} fluid />
  )
}

export default Banner
