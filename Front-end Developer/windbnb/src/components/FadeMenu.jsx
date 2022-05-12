import React from 'react';

const FadeMenu = () => {
    return (
        <div className="fade-menu flex flex-col justify-center items-center">
            <div className="container mx-auto p-2 drop-shadow-sm">
                <div className="grid grid-cols-3">
                    <div>
                        <input className='w-full' type="text" />
                    </div>
                    <div>
                        <input className='w-full' type="text" />
                    </div>
                    <div>
                        <button className="flex flex-row px-7 py-4 m-2 rounded-[16px] bg-primary text-white items-center">
                            <span className="material-symbols-rounded mr-[10px]">
                                search
                            </span>
                            <p>Search</p>
                        </button>
                    </div>
                </div>
            </div>
            <p>Hola mundo</p>
        </div>
    );
};

export default FadeMenu;
