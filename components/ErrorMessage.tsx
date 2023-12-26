import React from 'react'

interface ChildrenProps {
    children : React.ReactNode
}

function ErrorMessage({children} :ChildrenProps ) {
    if(!children) return null
  return (
    <p className="text-rose-600">{children}</p>
    )
}

export default ErrorMessage