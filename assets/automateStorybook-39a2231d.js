import{r as _,R as a}from"./index-e03f90b5.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=_,c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,m=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,o){var r,n={},f=null,u=null;o!==void 0&&(f=""+o),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)y.call(e,r)&&!x.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:c,type:t,key:f,ref:u,props:n,_owner:m.current}}s.Fragment=d;s.jsx=i;s.jsxs=i;p.exports=s;var v=p.exports;function E(t,e){return t.reduce((o,r)=>r===e?o:{...o,[r]:{table:{disable:!0}}},{})}function O(t){const e=r=>a.createElement(t,r),o={};if(t.__docgenInfo.props){const r=Object.keys(t.__docgenInfo.props);r.forEach(n=>{o[n]=e.bind({}),o[n].argTypes=E(r,n)})}return o.Playground=e,o}export{O as a,v as j};
//# sourceMappingURL=automateStorybook-39a2231d.js.map
