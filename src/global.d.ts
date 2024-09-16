// global.d.ts
declare module "*.svg" {
  import React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { className?: string }
  >;
  export default ReactComponent;
}
