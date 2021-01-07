import React from 'react';
import '../index.css';

// function-based component
// function MyNavBar(){
//     return(
//         <nav className="navStyles">
//             <ul>
//                 <li>Home</li>
//                 <li>Contents</li>
//                 <li>Contact Us</li>
//                 <li>Appedix</li>
//             </ul>
//         </nav>
//     )
// }

// class-based components
class MyNavBar extends React.Component{
    render(){
        return(
            <nav className="navStyles">
                <ul>
                    <li>Home</li>
                    <li>Contents</li>
                    <li>Contact Us</li>
                    <li>Appedix</li>
                </ul>
            </nav> 
        )
    }
}

export default MyNavBar;