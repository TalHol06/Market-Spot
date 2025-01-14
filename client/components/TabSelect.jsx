import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SwitchTab({path, children}){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path);
    };
    return (
        <button onClick={handleClick} 
        className={`tab ${location.pathname === path ? 'active' : ''}`}>
            {children}
        </button>
    );
}