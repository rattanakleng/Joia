import React from 'react'
import CSS from 'csstype';

const Signup = () => {
    return (
        <>
            <div>
                <h1>Ready to sign up to sell your artwork?</h1>
            </div>

            <div>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span>
            </div>

            <form></form>
        </>
    )
}

export default Signup

const bodyStyles: CSS.Properties = {
    backgroundColor: '#E5E5E5',
    backgroundSize: 'cover'
};
  
export function Heading({ title } : { title: string} ) {
    return <body style={bodyStyles}>{title}</body>;
}