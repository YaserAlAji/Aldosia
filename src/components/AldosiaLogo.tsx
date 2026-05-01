import React from 'react';

const AldosiaLogo = () => (
  <a href="/home" style={{
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: '30px',
    letterSpacing: '-0.045em',
    color: '#FFFFFF',
    lineHeight: 1,
  }}>
    <span style={{
      position: 'relative',
      color: '#FFFFFF',
      display: 'inline-block'
    }}>
      <span aria-hidden="true" style={{
        position: 'absolute',
        left: '-0.055em',
        top: '0.055em',
        color: '#A8CBF0',
        zIndex: -1,
        userSelect: 'none',
        pointerEvents: 'none',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        fontSize: '30px',
        letterSpacing: '-0.045em',
      }}>A</span>
      A
    </span>
    <span style={{ color: '#FFFFFF' }}>ldosia</span>
    <span style={{ color: '#7FB0E3' }}>.</span>
  </a>
);

export default AldosiaLogo;
