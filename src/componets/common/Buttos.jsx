import React from 'react'

function Buttos({ btntxt, children, className}) {
  return (
    <button className={`px-4 py-2 bg-primary text-white font-OpenSans text-[18px] hover:text-primary duration-200 rounded-[15px] hover:bg-transparent border-2 border-transparent hover:border-primary ${className}`}>{btntxt} {children} </button>
  )
}

export default Buttos