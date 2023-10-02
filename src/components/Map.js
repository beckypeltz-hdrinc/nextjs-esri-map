import React, { useRef } from "react";
import { useCreateMap } from "@/components/Hook";

const Map = () => {
  const mapRef = useRef(null);
  useCreateMap(mapRef);
  return <div className="map-view" ref={mapRef} />;
};
export default Map;
