import React from 'react'

import Particles from 'react-tsparticles'

import particlesConfig from './config/particles-config'

import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {

    const particlesInit = (engine) => {
        loadFull(engine);
      };


  return (
    <Particles init={particlesInit} options={particlesConfig}>

    </Particles>
  )
}


export default ParticlesBackground