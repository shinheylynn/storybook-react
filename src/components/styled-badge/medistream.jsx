import React from 'react';
// import './medistream.scss';

export const StyledBadge = ({ color = '#000000', size = 'medium', shape = 'embossed', rounded = false, children }) => {
  const sizes = {
    'x-small': { height: '20px', lineHeight: '20px', fontSize: '11px', letterSpacing: '-0.36px', padding: '0 8px' },
    small: { height: '24px', lineHeight: '24px', fontSize: '9px', letterSpacing: '-0.34px', padding: '0 10px' },
    medium: { height: '30px', lineHeight: '30px', fontSize: '12px', letterSpacing: '-0.32px', padding: '0 13px' },
    large: { height: '34px', lineHeight: '34px', fontSize: '15px', letterSpacing: '-0.3px', padding: '0 16px' },
    'x-large': { height: '40px', lineHeight: '40px', fontSize: '18px', letterSpacing: '-0.28px', padding: '0 19px' },
  };

  const shapeStyles = {
    embossed: { color: '#ffffff', border: '1px solid', backgroundColor: color },
    engraved: { color, border: `1px solid ${color}`, opacity: 0.3 },
    outlined: { color, border: `1px solid ${color}` },
  };

  const shapeStyle = shapeStyles[shape] || {};

  const badgeStyle = {
    position: 'relative',
    zIndex: 1,
    zoom: 1,
    display: 'inline-block',
    height: sizes[size]?.height || '22px',
    lineHeight: sizes[size]?.lineHeight || '22px',
    padding: sizes[size]?.padding || '0 3px',
    backgroundColor: 'transparent',
    fontFamily: 'Inter',
    fontSize: sizes[size]?.fontSize || '12px',
    fontWeight: 600,
    color: shapeStyle.color || 'var(--white)',
    textAlign: 'center',
    letterSpacing: sizes[size]?.letterSpacing || '-0.3px',
    verticalAlign: 'middle',
  };

  const bgStyle = {
    position: 'absolute',
    zIndex: -1,
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    opacity: shapeStyle.opacity,
    backgroundColor: shapeStyle.backgroundColor,
    borderRadius: rounded ? `${parseInt(sizes[size]?.height.slice(0, 2)) / 2}px` : '3px',
    boxShadow: `inset 0 0 0 1px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
      color.slice(5, 7),
      16,
    )}, 0.4)`,
  };

  // to-do: tailwindcss와 style 정의 간 중복되는 표현은 없는지 확인 필요.
  return (
    <mark
      className="relative z-1 inline-block h-22 line-height-22 px-3 bg-transparent font-inter font-semibold text-white text-center tracking-wide align-middle"
      style={badgeStyle}>
      {children} NEW
      <span className="absolute top-0 left-0 right-0 bottom-0" style={bgStyle}></span>
    </mark>
  );
};
