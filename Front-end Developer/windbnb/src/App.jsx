import Header from './components/Header';
import { useEffect, useState } from 'react';
import { animate } from 'motion';

function App() {
    const [isOpen, setisOpen] = useState(false);
    const controls = animate(
        '.box',
        { x: [0, -100, 100, 0] },
        {
            duration: 2,
            offset: [0, 0.25, 0.75],
        }
    );
    

    return (
        <div className=" container mx-auto">
            <Header />
        </div>
    );
}

export default App;
