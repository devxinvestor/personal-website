import { useEffect, useState } from "react";

// Custom hook to manage stains
export const useStainEffect = (elementSelector) => {
    const [stains, setStains] = useState([]);

    useEffect(() => {
        const element = document.querySelector(elementSelector);

        const handleMouseMove = (e) => {
            const { left, top } = element.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            const newStain = { id: Date.now(), x, y };

            // Add new stain and limit the number of stains
            setStains((prevStains) => [...prevStains, newStain].slice(-20));
        };

        const handleMouseLeave = () => {
            setStains([]);
        };

        if (element) {
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [elementSelector]);

    return stains;
};