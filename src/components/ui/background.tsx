import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export default function MyVantaComponent() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
const effect = NET({
  el: myRef.current,
  THREE: THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x796007,           // corrected to 6 digits
  backgroundColor: 0x000000, // black
  spacing: 16.0
});
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      style={{
        width: '100%',
        height: '100%', // full viewport height
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        transform: 'scale(1.2)',
        transformOrigin: 'center center',
      }}
    />
  );
}
