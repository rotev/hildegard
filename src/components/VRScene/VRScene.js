import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import './vrScene.styl';

const VRScene = () => (
  <Scene>
    <Entity primitive="a-camera" position={{ x: 0, y: -1, z: 1 }}>
      <Entity
        primitive="a-cursor"
        cursor={{ fuse: true, fuseTimeout: 100 }}
        raycaster={{ objects: '.clickable' }}
        geometry={{ primitive: 'ring' }}
        material={{ color: 'white', shader: 'flat' }}
      >
        <a-animation
          begin="click"
          easing="ease-in"
          attribute="scale"
          dur="150"
          fill="forwards"
          from="0.1 0.1 0.1"
          to="1 1 1"
        />
      </Entity>
    </Entity>

    <Entity geometry={{ primitive: 'box' }} material={{ color: '#66296b' }} position={{ x: 0, y: 0, z: -5 }} class="clickable" />
    <Entity particle-system={{ preset: 'snow' }} />
    <Entity light={{ type: 'point' }} />
    <Entity text={{ value: 'Hello, WebVR!' }} position={{ x: 0, y: 1, z: 0 }} />
  </Scene>
);

export default VRScene;
