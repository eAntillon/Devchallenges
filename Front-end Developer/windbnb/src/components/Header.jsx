import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import FadeMenu from './FadeMenu';
const Header = () => {
    const [place, setPlace] = useState('Helsinki, Finland');
    return (
        <div className="flex justify-between mt-9">
            <div>
                <img src={logo} alt="logo-windbnb" />
            </div>
            <div className="font-monts flex drop-shadow-sm">
                <button className="bg-white px-5 py-5 text-black rounded-l-2xl border-r-[1px] border-gray-100 hover:bg-gray-50">
                    {place}
                </button>
                <button className="bg-white px-5 py-5 text-[#BDBDBD] border-r-[1px] border-gray-100 hover:bg-gray-50 hover:text-gray-400">
                    Add guest
                </button>
                <button className="bg-white px-5 h-full rounded-r-[16px] text-primary hover:bg-primary hover:text-white">
                    <span className="material-symbols-rounded">search</span>
                </button>
            </div>
            <FadeMenu />
        </div>
    );
};

export default Header;
