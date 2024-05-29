declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames
  export = classNames;
}

declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';

// declare module "*.svg" {
//   import React = require("react");
//   const ReactComponent: React.FC<React.SVGAttributes<SVGSVGElement>>;
//   export default ReactComponent;
// }

declare module '*.svg' {
  import React from 'react'
  const content: React.FC<
    React.PropsWithChildren<React.SVGAttributes<SVGElement>>
  >
  export default content
}

declare const __IS_DEV__: boolean
