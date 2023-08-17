import React, { useState, useEffect } from 'react';

const ScrollDownArrow = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
        });
        setVisible(false);
    };

    const handleScroll = () => {
        const scrolled = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const shouldShow = fullHeight - scrolled >= 500;
        setVisible(shouldShow);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        visible && (
        <div
            className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-8 cursor-pointer text-[#CF5C36]"
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-24 animate-bounce transition duration-500 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
            </svg>
        </div>
        )
    );
};

export default ScrollDownArrow;

