import React, { useContext, useEffect } from 'react'
import './DarkMode.css'
import { DarkModeContext } from './context/DarkModeContext';

function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const handleToggled = () => {
        toggleDarkMode();
        document.body.classList.toggle("dark");
    };
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        }
    }, [darkMode])
    return (
        <div>
            <label>
                <input
                    type='checkbox'
                    onClick={handleToggled}
                />
                <span className='switch'>
                    <span className='handle' />
                </span>
            </label>
        </div>
    )
}

export default DarkModeToggle