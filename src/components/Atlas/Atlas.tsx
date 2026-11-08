import { setWorkerUrl } from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

setWorkerUrl(workerUrl);

export const Atlas = () => {
  return (
    <Map
      initialViewState={{ longitude: 55.0988, latitude: 51.7727, zoom: 14 }}
      mapStyle="/map-style.json"
      attributionControl={false}
      style={{ width: "100dvw", height: "100dvh" }}
    />
  );
};
