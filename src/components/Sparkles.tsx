import React, { useCallback, useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const colors = ['#007AFF', '#86868B']; // Apple blue and gray

export const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const createSparkle = useCallback((x: number, y: number) => {
    const sparkleCount = 12;
    const newSparkles: Sparkle[] = [];

    for (let i = 0; i < sparkleCount; i++) {
      newSparkles.push({
        id: Date.now() + i,
        x,
        y,
        size: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setSparkles((prev) => [...prev, ...newSparkles]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id)));
    }, 1000);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createSparkle(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [createSparkle]);

  return (
    <div style={{ position: 'fixed', pointerEvents: 'none', zIndex: 1000, inset: 0 }}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};