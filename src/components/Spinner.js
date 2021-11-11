import React from 'react'
import loader from '../ajax-loader.gif'

const Spinner = () => {
   
    return (
        <div className="text-center my-3">
            <img className="my-4" src={loader} alt="loading"/>
        </div>
    )
    
}

export default Spinner