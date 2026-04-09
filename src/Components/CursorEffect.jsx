import React, { useEffect, useRef } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
    const glowRef = useRef(null);
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const delayedMouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const glow = glowRef.current;

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            
            // Temporary boost in glow size/intensity on movement
            if (glow) {
                glow.style.opacity = '0.75';
                setTimeout(() => {
                    if (glow) glow.style.opacity = '0.5';
                }, 150);
            }
        };

        const animate = () => {
            // High inertia for the background glow
            delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.05;
            delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.05;

            if (glow) {
                glow.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0) translate(-50%, -50%)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const rafId = requestAnimationFrame(animate);

        // Ensure default cursor is VISIBLE
        document.body.style.cursor = 'auto';

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return <div ref={glowRef} className="background-glow-spotlight"></div>;
};

export default CursorEffect;
