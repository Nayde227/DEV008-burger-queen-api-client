import React from 'react'

export const Buttons = ({onClick, productId, className, label}) => {
    

    return (
        <div>
            <button className={className}
                onClick={() => onClick(productId)}>{label}</button> 
            
        </div>
    )
}
