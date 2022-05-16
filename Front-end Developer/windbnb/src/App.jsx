import Header from './components/Header';
import { useEffect, useState } from 'react';
import { animate } from 'motion';
import data from './stays.json';

function App() {
    const [guests, setGuests] = useState(1);
    const [country, setCountry] = useState('Finland');
    const [city, setCity] = useState('Helsinki');
    const [stays, setStays] = useState([]);

    useEffect(() => {
        setStays(
            data.filter(
                (stay) => stay.country === country && stay.city === city
            )
        );
        console.log('data', data);
        console.log('stays', stays);
    }, []);

    const controls = animate(
        '.box',
        { x: [0, -100, 100, 0] },
        {
            duration: 2,
            offset: [0, 0.25, 0.75],
        }
    );

    return (
        <>
            <div className=" container mx-auto px-5 md:px-0">
                <Header
                    city={city}
                    country={country}
                    guests={guests}
                    setCity={setCity}
                    setCountry={setCountry}
                    setGuests={setGuests}
                    data={data}
                />
            </div>
            <div className="container mx-auto mt-16 mb-11 px-5 md:px-0">
                <div className="flex justify-between w-full items-center">
                    <h2 className="text-3xl font-bold text-black">
                        Stays in Finland
                    </h2>
                    <p className="text-[#4F4F4F]">12+ stays</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-9">
                    {stays.map((stay, index) => (
                        <div className="container flex flex-col " key={index}>
                            <div
                                className="bg-no-repeat bg-center h-96 bg-cover rounded-[24px]"
                                style={{
                                    backgroundImage: 'url(' + stay.photo + ')',
                                }}
                            ></div>
                            <div className="flex flex-row justify-between mt-4 items-center px-px">
                                <div className="flex flex-row">
                                    {stay.superHost && (
                                        <p className="text-xs leading-8 px-2 py-0 border-[1px] rounded-2xl border-[#4F4F4F] font-bold mr-3 text-[#4F4F4F]">
                                            SUPER HOST
                                        </p>
                                    )}
                                    <p className="text-[#828282] leading-8">
                                        {stay.type}{' '}
                                        {stay.beds
                                            ? '. ' + stay.beds + ' beds'
                                            : ''}
                                    </p>
                                </div>
                                <div>
                                    <p className="flex flex-row items-center text-[#4F4F4F] leading-8">
                                        <span className="material-symbols-rounded text-primary">
                                            star
                                        </span>
                                        {stay.rating}
                                    </p>
                                </div>
                            </div>
                            <p className='text-lg mt-1 font-semibold px-px'>{stay.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
