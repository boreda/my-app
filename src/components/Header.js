import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import Logo from './Logo';
import MyNavBar from './MyNavBar';

// Function-based Component
// function Header(){
//     return (
//         <div>
//             <MyNavBar />
//         </div>
//     )
// }

// Class-based Component
class Header extends React.Component {
    render(){
        return(
            <div>
                <MyNavBar />
            </div>
        )
    }
}

export default Header;