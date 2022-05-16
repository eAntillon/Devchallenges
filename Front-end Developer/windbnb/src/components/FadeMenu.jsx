import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'motion';

const FadeMenu = ({
    city,
    country,
    guests,
    setCity,
    setCountry,
    setGuests,
    data,
    isOpen,
    setisOpen,
}) => {
    const [active, setActive] = useState('location');
    const [adults, setadults] = useState(0);
    const [children, setchildren] = useState(0);
    const menu = useRef(null);
    const [height, setheight] = useState(0);

    useEffect(() => {
        setheight(menu.current.offsetHeight);
        if (isOpen) {
            menu.current.style.height = `${height}px`;
        }
    }, [menu]);

    useEffect(() => {
        if (isOpen) {
            animate('.fade-menu', { y: height }, { duration: 0.5 });
            // rgba(79, 79, 79, 0.4)
            animate(
                '.fade-bg',
                { backgroundColor: 'rgba(79, 79, 79, 0.4)' },
                { duration: 0.5 }
            );
        } else {
            animate('.fade-menu', { y: -height }, { duration: 0.5 });
            animate(
                '.fade-bg',
                { backgroundColor: 'rgba(0, 0, 0, 0)' },
                { duration: 1 }
            );
        }
    }, [isOpen]);

    const activeClass =
        ' w-full px-7 py-2 h-full border-[1px] rounded-[16px] border-black drop-shadow-sm ';
    const defaultClass =
        'w-full px-7 py-2 h-full border-[1px] border-transparent  hover:ease-in duration-300 transition';
    const hoverClass = 'hover:cursor-pointer';

    const addAdult = () => {
        setadults(adults + 1);
        setGuests(adults + children);
    };
    const removeAdult = () => {
        if (adults > 0) {
            setadults(adults - 1);
            setGuests(adults + children);
        }
    };
    const addChild = () => {
        setchildren(children + 1);
        setGuests(adults + children);
    };
    const removeChild = () => {
        if (children > 0) {
            setchildren(children - 1);
            setGuests(adults + children);
        }
    };

    return (
        <>
            <div
                className="fade-menu flex flex-col pt-5 md:pt-16 h-5/6 md:h-2/4"
                ref={menu}
            >
                <div className="h-full w-full justify-center items-start font-mulis">
                    <div className="container mx-auto w-11/12 font-semibold mb-5 md:hidden items-center flex flex-row justify-between">
                        <p>Edit your seach</p>
                        <button className="flex flex-row items-center h-full" onClick={()=>setisOpen(false)}>
                            <span className="material-symbols-rounded">close</span>
                        </button>
                    </div>
                    <div className="container mx-auto p-0 drop-shadow-sm bg-white w-11/12 rounded-[16px] ">
                        <div className="grid md:grid-cols-3 mx-auto ">
                            <div
                                className="px-0 border-r-[1px] border-gray-100 hover:cursor-pointer"
                                onClick={() => setActive('location')}
                            >
                                <div
                                    className={
                                        active == 'location'
                                            ? activeClass
                                            : defaultClass + hoverClass
                                    }
                                >
                                    <p className="font-bold">Location</p>
                                    <p
                                        className={
                                            active == 'location'
                                                ? 'text-black'
                                                : 'hover:cursor-pointer text-gray-500'
                                        }
                                    >
                                        {city}, {country}
                                    </p>
                                </div>
                            </div>
                            <div
                                className="px-0 border-r-[1px] border-gray-100 hover:cursor-pointer"
                                onClick={() => setActive('guest')}
                            >
                                <div
                                    className={
                                        active == 'guest'
                                            ? activeClass
                                            : defaultClass + hoverClass
                                    }
                                >
                                    <p className="font-bold hover:cursor-pointer">
                                        Guest
                                    </p>
                                    <p
                                        className={
                                            active == 'guest'
                                                ? 'text-black'
                                                : 'hover:cursor-pointer text-gray-500'
                                        }
                                    >
                                        Add a guest
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex justify-center hidden">
                                <button className="flex flex-row px-7 py-4 m-1 rounded-[16px] bg-primary text-white items-center font-bold hover:bg-[#ED6666]">
                                    <span className="material-symbols-rounded mr-[10px]">
                                        search
                                    </span>
                                    <p>Search</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container w-11/12 grid grid-cols-3 mx-auto">
                        {active == 'location' && (
                            <div className="container py-8 px-6">
                                <ul>
                                    {data
                                        .filter(
                                            (stay, index, self) =>
                                                index ===
                                                self.findIndex(
                                                    (item) =>
                                                        item.city === stay.city
                                                )
                                        )
                                        .map((stay, index) => (
                                            <li
                                                className="py-4 items-center flex text-dark-gray"
                                                key={index}
                                            >
                                                <span className="material-symbols-rounded pr-2">
                                                    pin_drop
                                                </span>
                                                <a
                                                    className="hover:text-black hover:cursor-pointer hover:underline"
                                                    onClick={() => {
                                                        setCity(stay.city);
                                                        setCountry(
                                                            stay.country
                                                        );
                                                    }}
                                                >
                                                    {stay.city}, {stay.country}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}
                        {active == 'guest' && (
                            <div className="container col-start-2 py-11 px-6 ">
                                <div className="container mb-9">
                                    <p className="font-bold">Adults</p>
                                    <p className="text-gray-400 mb-[12px]">
                                        Ages 13 or above
                                    </p>
                                    <div className="text-gray-600">
                                        <button
                                            className="px-2 py-0 rounded-[4px] border-2 border-gray-600 mr-4"
                                            onClick={removeAdult}
                                        >
                                            -
                                        </button>
                                        <span className="text-black mr-4">
                                            {adults}
                                        </span>
                                        <button
                                            className="px-2 py-0 rounded-[4px] border-2 border-gray-600 "
                                            onClick={addAdult}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="container">
                                    <p className="font-bold">Children</p>
                                    <p className="text-gray-400 mb-[12px]">
                                        Ages 2 - 12
                                    </p>
                                    <div className="text-gray-600">
                                        <button
                                            className="px-2 py-0 rounded-[4px] border-2 border-gray-600 mr-4"
                                            onClick={removeChild}
                                        >
                                            -
                                        </button>
                                        <span className="text-black mr-4">
                                            {children}
                                        </span>
                                        <button
                                            className="px-2 py-0 rounded-[4px] border-2 border-gray-600 "
                                            onClick={addChild}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fade-bg" onClick={() => setisOpen(false)}></div>
            )}
        </>
    );
};

export default FadeMenu;
