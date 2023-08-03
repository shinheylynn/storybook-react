import React from 'react';
import PropTypes from 'prop-types';
import '../../colors/medistream.variables.scss';

const StyledBadge = (props) => {
  const { color, size, shape, rounded } = props;

  const sizes = {
    'x-small': {
      height: '20px',
      lineHeight: '20px',
      fontSize: '11px',
      letterSpacing: '-0.36px',
      padding: '0 8px',
    },
    small: {
      height: '24px',
      lineHeight: '24px',
      fontSize: '9px',
      letterSpacing: '-0.34px',
      padding: '0 10px',
    },
    medium: {
      height: '30px',
      lineHeight: '30px',
      fontSize: '12px',
      letterSpacing: '-0.32px',
      padding: '0 13px',
    },
    large: {
      height: '34px',
      lineHeight: '34px',
      fontSize: '15px',
      letterSpacing: '-0.3px',
      padding: '0 16px',
    },
    'x-large': {
      height: '40px',
      lineHeight: '40px',
      fontSize: '18px',
      letterSpacing: '-0.28px',
      padding: '0 19px',
    },
  };

  StyledBadge.defaultProps = {
    color: '#000000',
    size: 'medium',
    shape: 'embossed',
    rounded: false,
  };

  const shapeStyles = {
    embossed: {
      color: '#ffffff',
      backgroundColor: color,
      border: `1px solid ${color}`,
    },
    engraved: {
      color: color,
      backgroundColor: color,
      border: `1px solid ${color}`,
      opacity: 0.3,
    },
    outlined: {
      color: color,
      border: `1px solid ${color}`,
    },
  };

  const paddingStyle = () => {
    let shapeStyle = sizes[size] || {};
    return { padding: shapeStyle.padding };
  };

  const radiusStyle = () => {
    let borderPixel = Number(sizes[size].height.slice(0, 2));
    if (rounded) {
      return { borderRadius: `${borderPixel / 2}px` };
    } else {
      return { borderRadius: '3px' };
    }
  };

  const colorStyle = () => {
    let shapeStyle = shapeStyles[shape] || {};
    return { color: shapeStyle.color };
  };

  const opacityStyle = () => {
    let shapeStyle = shapeStyles[shape] || {};
    return { opacity: shapeStyle.opacity };
  };

  const bgColorStyle = () => {
    let shapeStyle = shapeStyles[shape] || {};
    return { backgroundColor: shapeStyle.backgroundColor };
  };

  const hexToRgba = () => {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);
    return { boxShadow: `inset 0 0 0 1px rgba(${r}, ${g}, ${b}, 0.4)` };
  };

  return (
    <React.Fragment>
      <mark className="styled-badge" style={{ ...paddingStyle(), ...sizes[size], ...colorStyle(), ...radiusStyle() }}>
        {props.children}
        <span className="bg" style={{ ...opacityStyle(), ...bgColorStyle(), ...radiusStyle(), ...hexToRgba() }}></span>
      </mark>
    </React.Fragment>
  );
};

StyledBadge.defaultProps = {
  color: '#000000',
  size: 'medium',
  shape: 'embossed',
  rounded: false,
};

StyledBadge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large', 'x-large']),
  shape: PropTypes.oneOf(['embossed', 'engraved', 'outlined']),
  rounded: PropTypes.bool,
};

export default StyledBadge;
