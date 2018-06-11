import React from 'react';

import { Links } from '../router'

export const Footer = () => {
  return (
    <div className="Footer">
      <Links to='/'>All</Links>
      <Links to='/active'>Active</Links>
      <Links to='/complete'>Complete</Links>
    </div>
  )
}