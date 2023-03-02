import React, { useState } from 'react'

const Button = () => {
    const [state, setState] = useState(false);

    return (
        <button 
            onClick={() => setState(!state)}
            className={`btn ${state ? "btn-danger" : "btn-primary"}`}>
            {state ? "Remove from Cart" : "Add to Cart"}
        </button>
    )
}

export default Button
