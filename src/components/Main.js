import React from 'react';
import Header from './Header';
import MyInfo from './MyInfo';
import Footer from './Footer';

// Function-based Components
// function Main(){
//     return(
//         <div>
//             <Header />
//             <MyInfo />
//             <Footer />
//         </div>
//     )
// }

// Class-based Components
class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <MyInfo />
                <Footer />
            </div>
        )
    }
}

export default Main;