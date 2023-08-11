// import React, { useState, useEffect } from 'react';
// import '../../colors/medistream.variables.scss';

// export const StyledRadio = (props) => {
//   const { value: valueProp, modelValue: modelValueProp, Name, Val, Disabled = false, Width = 26, Height = 26 } = props;

//   const [checkedValue, setCheckedValue] = useState(valueProp || modelValueProp);

//   useEffect(() => {
//     if (valueProp !== undefined) {
//       setCheckedValue(valueProp);
//     }
//   }, [valueProp]);

//   useEffect(() => {
//     if (modelValueProp !== undefined) {
//       setCheckedValue(modelValueProp);
//     }
//   }, [modelValueProp]);

//   const isDark = false; // Replace this with your actual theme logic

//   const handleRadioChange = (event) => {
//     setCheckedValue(event.target.value);
//   };

//   return (
//     <span
//       className={`inline-block ${isDark ? 'dark' : ''} ${checkedValue === Val ? 'selected' : 'un-selected'} ${
//         Disabled ? 'opacity-30 cursor-not-allowed' : ''
//       }`}
//       style={{ height: `${Height}px`, lineHeight: `${Height}px` }}>
//       <input
//         type="radio"
//         checked={checkedValue === Val}
//         onChange={handleRadioChange}
//         name={Name}
//         value={Val}
//         disabled={Disabled}
//         className="absolute left-[-9999px]"
//       />
//       <svg
//         key="checked"
//         className={`selected-icon ${Width} h-${Height}`}
//         viewBox="0 0 26 26"
//         fill={isDark ? '#000' : '#fff'}
//         xmlns="http://www.w3.org/2000/svg">
//         <g clipPath="url(#clip0_860_13850)">
//           <circle
//             className="out-circle"
//             cx="13"
//             cy="13"
//             r="12.25"
//             strokeWidth="1.5"
//             stroke={isDark ? 'var(--blue-grey-700)' : 'var(--blue-grey-300)'}
//           />
//           <circle cx="13" cy="13" r="7" fill={isDark ? 'var(--blue-400)' : 'var(--blue-600)'} />
//         </g>
//       </svg>

//       <svg
//         key="unchecked"
//         className={`selected-icon ${Width} h-${Height}`}
//         viewBox="0 0 26 26"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg">
//         <circle
//           className="out-circle"
//           cx="13"
//           cy="13"
//           r="12.25"
//           strokeWidth="1.5"
//           stroke={isDark ? 'var(--blue-grey-700)' : 'var(--blue-grey-300)'}
//         />
//         <circle cx="13" cy="13" r="7" fill="none" />
//       </svg>
//     </span>
//   );
// };

export const StyledRadio = ({ text }) => {
  return <input type="radio">{text}</input>;
};
