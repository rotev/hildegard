import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import './vrScene.styl';

const VRScene = () => (
  <Scene>
    <Entity position={{ x: 0, y: -1, z: 1 }}>
      <a-camera>
        <a-entity
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
          material="color: white; shader: flat"
        />
      </a-camera>
    </Entity>
    <Entity geometry={{ primitive: 'box' }} material={{ color: '#66296b' }} position={{ x: 0, y: 0, z: -5 }} />
    <Entity particle-system={{ preset: 'snow' }} />
    <Entity light={{ type: 'point' }} />
    <Entity text={{ value: 'Hello, WebVR!' }} position={{ x: 0, y: 1, z: 0 }} />
  </Scene>
);

export default VRScene;
