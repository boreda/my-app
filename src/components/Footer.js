import React, { Component } from 'react';

// Function-based Component
// function Footer(){
//     return(
//         <div>
//             <ol>
//                 <li>Help</li>
//                 <li>About Us</li>
//                 <li>Social Media</li>
//                 <li>Comments</li>
//             </ol>
//         </div>
//     )
// }

// Class-based Component
class Footer extends React.Component{
    render(){
        return(
            <div>
                <ol>
                    <li>Help</li>
                    <li>About Us</li>
                    <li>Social Media</li>
                    <li>Comments</li>
                </ol>
            </div>
        )
    }
}


export default Footer;