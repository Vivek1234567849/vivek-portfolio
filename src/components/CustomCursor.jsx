import { useEffect, useState } from 'react';

export default function CustomCursor({ mousePosition }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only show on desktop devices with fine pointers
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handlePointerCheck = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handlePointerCheck);

    setIsVisible(true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handlePointerCheck);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/60 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-cyan-400/20"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%) scale(${isPointer ? 1.6 : 1})`,
          width: '28px',
          height: '28px',
          backgroundColor: isPointer ? 'rgba(56, 189, 248, 0.12)' : 'transparent'
        }}
      />
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-md shadow-cyan-400"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`
        }}
      />
    </div>
  );
}
