import Particles from './verticaltiles';

export default function MyVantaComponent() {
  return (
    <Particles
      particleColors={['#0e5e03']}
      particleCount={1200}
      particleSpread={10}
      speed={0.7}
      particleBaseSize={200}
      moveParticlesOnHover={true}
      alphaParticles={true}
      disableRotation={false}
    />
  );
}
