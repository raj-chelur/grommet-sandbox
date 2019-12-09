import React from 'react';
import { Image } from 'grommet';
import SandboxComponent from './SandboxComponent';

export default () => (
  <SandboxComponent align='stretch' pad={{ horizontal: 'large' }}>
    <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
  </SandboxComponent>
);
