import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  
    const RouterError = useRouteError()

    return (
    <div>Error
    <h2>{console.log(RouterError)}</h2>
    </div>

)
}

export default Error