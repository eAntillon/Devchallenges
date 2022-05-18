import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import FadeMenu from './FadeMenu';
const Header = ({
    city,
    country,
    guests,
    setCity,
    setCountry,
    setGuests,
    data,
    setUpdate
}) => {
    const [isOpen, setisOpen] = useState(false);

    const start = () => {
        setisOpen(true);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between mt-9">
            <div className='mb-11 md:mb-0'>
                <img src={logo} alt="logo-windbnb" />
            </div>
            <div className="font-monts flex drop-shadow-sm ml-auto mr-1 md:ml-0">
                <button
                    className="bg-white px-5 py-5 text-black rounded-l-2xl border-r-[1px] border-gray-100 hover:bg-gray-50"
                    onClick={start}
                >
                    {city + ', ' + country}
                </button>
                <button
                    className="bg-white px-5 py-5 text-[#BDBDBD] border-r-[1px] border-gray-100 hover:bg-gray-50 hover:text-gray-400"
                    onClick={start}
                >
                    {guests <= 1 ? 'Add guest' : guests + ' guests'}
                </button>
                <div>
                    <button className="bg-white px-5 h-full rounded-r-[16px] text-primary hover:cursor-default">
                        <span className="material-symbols-rounded">search</span>
                    </button>
                </div>
            </div>
            <FadeMenu
                city={city}
                country={country}
                guests={guests}
                setCity={setCity}
                setCountry={setCountry}
                setGuests={setGuests}
                data={data}
                isOpen={isOpen}
                setisOpen={setisOpen}
                setUpdate={setUpdate}
            />
        </div>
    );
};

export default Header;
