import React from 'react'

function Images({className,imgsrc,imgalt}) {
  return (
    <img className={`${className}`} src={imgsrc} alt={imgalt} />
  )
}

export default Images