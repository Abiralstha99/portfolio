import React from 'react';
import Particles from './Particles';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      {/* Fixed particle background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;