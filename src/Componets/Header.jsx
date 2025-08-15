import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="bg-gradient-to-r from-[#663399] to-[#5D3FD3]
            flex justify-between items-center p-[20px_40px]"
            >
                <h1 className = "logo">CLARKE CREATIONS</h1>
                <div className = "flex gap-13 text-white">
                <p>Home</p>
                <p>Services</p>
                <p>Contact</p>
                <p>About</p>
                </div>
            </div>
        );
    }
}

export default Header;