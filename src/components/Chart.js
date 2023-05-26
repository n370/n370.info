import React, { useRef, useEffect, useState } from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import styled from "styled-components";

const UnstyledChart = ({ className }) => {
  const containerRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    // d3.csv("/gistemp.csv", d3.autoType).then(setData);
    setData([
      { x: 1, y: 1 },
      { x: 5, y: 5 },
      { x: 10, y: 10 },
      { x: 15, y: 15 },
    ]);
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    const plot = Plot.plot({
      style: {
        background: "transparent",
      },
      caption: "Figure 1: The quadratic function graph of the above dataset.",
      y: { grid: true },
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(data, { x: "x", y: "y", stroke: "#9cdcfe" }),
      ],
    });
    containerRef.current.append(plot);
    return () => plot.remove();
  }, [data]);

  return <div className={className} ref={containerRef} />;
};

export default styled(UnstyledChart)`
  margin: 5em 0;

  figure {
    margin: 0;

    figcaption {
      margin-top: 30px;
    }
  }

`;
