import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import './vrScene.styl';

const VRScene = () => (
  <Scene>
    <Entity geometry={{ primitive: 'box' }} material={{ color: '#66296b' }} position={{ x: 0, y: 0, z: -5 }} />
    <Entity particle-system={{ preset: 'snow' }} />
    <Entity light={{ type: 'point' }} />
    <Entity text={{ value: 'Hello, WebVR!' }} />
  </Scene>
);

export default VRScene;
