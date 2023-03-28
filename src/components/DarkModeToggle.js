import React, { useEffect } from 'react'
import './DarkMode.css'

function DarkModeToggle() {
    const handleToggled=()=>{
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "dark",
            document.body.className
        );
    };
    useEffect(()=>{
        if(localStorage.getItem("dark")){
            document.body.classList.add("dark");
        }
    },[])
  return (
    <div>
        <label>
            <input
                type='checkbox'
                onClick={handleToggled}
            />
            <span className='switch'>
                <span className='handle'/>
            </span>
        </label>
    </div>
  )
}

export default DarkModeToggle