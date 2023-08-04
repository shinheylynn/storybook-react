import React from 'react';
import { Link } from 'react-router-dom';
import '../../colors/medistream.variables.scss';
import './medistream.scss';

export const StyledButton = ({
  width = 'auto',
  size = 'medium',
  color = 'primary',
  outlined = false,
  disabled = false,
  loading = false,
  Type = 'button',
  to = null,
  HeightUnit = [24, 28, 36, 44, 52],
  PaddingUnit = [8, 8, 10, 14, 14],
  FontSizeUnit = [12, 13, 14, 16, 16],
  FontWeightUnit = [600, 600, 700, 700, 700],
  BorderRadiusUnit = [4, 4, 6, 6, 6],
  children,
}) => {
  const widthValue = typeof width === 'number' ? `${width}px` : width === 'auto' ? null : width;

  const heightValue = (() => {
    switch (size) {
      case 'x-large':
        return HeightUnit[4];
      case 'large':
        return HeightUnit[3];
      case 'small':
        return HeightUnit[1];
      case 'x-small':
        return HeightUnit[0];
      case 'medium':
      default:
        return HeightUnit[2];
    }
  })();

  const paddingHorizontal = (() => {
    switch (size) {
      case 'x-large':
        return PaddingUnit[4];
      case 'large':
        return PaddingUnit[3];
      case 'small':
        return PaddingUnit[1];
      case 'x-small':
        return PaddingUnit[0];
      case 'medium':
      default:
        return PaddingUnit[2];
    }
  })();

  const fontSize = (() => {
    switch (size) {
      case 'x-large':
        return FontSizeUnit[4];
      case 'large':
        return FontSizeUnit[3];
      case 'small':
        return FontSizeUnit[1];
      case 'x-small':
        return FontSizeUnit[0];
      case 'medium':
      default:
        return FontSizeUnit[2];
    }
  })();

  const fontWeight = (() => {
    switch (size) {
      case 'x-large':
        return FontWeightUnit[4];
      case 'large':
        return FontWeightUnit[3];
      case 'small':
        return FontWeightUnit[1];
      case 'x-small':
        return FontWeightUnit[0];
      case 'medium':
      default:
        return FontWeightUnit[2];
    }
  })();

  const borderRadius = (() => {
    switch (size) {
      case 'x-large':
        return BorderRadiusUnit[4];
      case 'large':
        return BorderRadiusUnit[3];
      case 'small':
        return BorderRadiusUnit[1];
      case 'x-small':
        return BorderRadiusUnit[0];
      case 'medium':
      default:
        return BorderRadiusUnit[2];
    }
  })();

  const buttonClassNames = [
    'styled-button',
    color,
    size,
    outlined ? 'outlined' : '',
    disabled ? 'disabled' : '',
    loading ? 'loading' : '',
    'dark',
  ].join(' ');

  const commonButtonStyle = {
    height: `${heightValue}px`,
    padding: `0 ${paddingHorizontal}px`,
    fontSize: `${fontSize}px`,
    fontWeight: fontWeight,
    borderRadius: `${borderRadius}px`,
  };

  const handleClick = (e) => {
    if (!disabled && !loading) {
      if (to) {
        console.log('Navigating to:', to);
      } else {
        console.log('Button clicked!');
      }
    }
  };

  return (
    <span className={buttonClassNames} style={{ width: widthValue }}>
      {to ? (
        <Link
          to={to}
          style={{
            height: `${heightValue}px`,
            lineHeight: `${heightValue - 2}px`,
            ...commonButtonStyle,
          }}>
          {loading ? 'Loading...' : <>{children}</>}
        </Link>
      ) : (
        <button
          type={Type}
          disabled={disabled || loading}
          style={{ height: `${heightValue}px`, ...commonButtonStyle }}
          onClick={handleClick}>
          {loading ? 'Loading...' : <>{children || 'button'}</>}
        </button>
      )}
    </span>
  );
};
