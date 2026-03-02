import React from 'react'

function Container({ children, className }) {
  return (
    <div className={`max-w-330 mx-auto px-4 ${className}`}>{children}</div>
  )
}

export default Container