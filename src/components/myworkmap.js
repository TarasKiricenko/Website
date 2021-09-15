import React from "react";
import { VectorMap } from "react-jvectormap";

const mapData = {
  AT: 0, BE: 0, BG: 0, HR: 0, CY: 0, 
  CZ: 0, DK: 0, EE: 0, ES: 0, FI: 0, 
  FR: 0, DE: 0, GR: 0, HU: 0, IE: 0, 
  IT: 0, LV: 0, LT: 0, LU: 0, MT: 0, 
  NL: 0, NO: 0, PL: 0, PT: 0, RO: 0, 
  SK: 0, SI: 0, EL: 0, SE: 0, GB: 0,
  US: 1, IS: 0, RU: 1, CA: 1, CH: 1,
  
}

const MyWorkMap = () => {
  return (
      <div className="col-9 mx-auto container mt-1">
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent"
        zoomOnScroll={true}
        containerStyle={{
          width: "100%",
          height: "300px"
        }}
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
        }}
        series={{
          regions: [
            {
              values: mapData,
              scale: ["#ac8ebf", "#9dcb96"],
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </div>
  )
}

export default MyWorkMap;