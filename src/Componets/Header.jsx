import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="bg-gradient-to-r from-[#663399] to-[#5D3FD3]
            flex justify-between items-center p-[20px_40px]"
            >
                <h1 className = "logo">CLARKE CREATORS</h1>
                <div className = "flex gap-13 text-white">
                <a href="url" className="hover:text-purple-700">Home</a>
                <a href="url" className="hover:text-purple-700">Services</a>
                <a href="url" className="hover:text-purple-700">Contact</a>
                <a href="url" className="hover:text-purple-700">About</a>
                </div>
            </div>
        );
    }
}

export default Header;