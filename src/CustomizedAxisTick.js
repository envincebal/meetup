import React, {Component} from "react";
 const Tick: FC<any> = ({
  payload: { value },
  verticalAnchor,
  visibleTicksCount,
  ...rest
}) => (
  <text {...rest} className="bar-chart-tick" dy={12}>
    {value}
  </text>
);

export {Tick};