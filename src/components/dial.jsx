import React, { useEffect, useRef } from "react";
import SvgGauge from "svg-gauge";

const Dial = ({ min, max, value, unit, name, pin }) => {
  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);
  useEffect(() => {
    if (!gaugeRef.current) {
      gaugeRef.current = SvgGauge(gaugeEl.current, {
        min,
        max,
        animDuration: 1,
        showValue: true,
        label: () => `${value}${unit}`,
      });
      gaugeRef.current.setValue(0);
    }
    gaugeRef.current.setValueAnimated(value, 1);
  }, [min, max, value, unit, name, pin]);

  return (
    <div ref={gaugeEl} className="gauge-container">
      <div className="outer">
        <div className="inner"></div>
      </div>
      <div className="pin">{name || pin}</div>
    </div>
  );
};

export default Dial;
