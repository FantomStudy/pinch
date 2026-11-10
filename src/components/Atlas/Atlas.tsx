import { setWorkerUrl } from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import { useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";
import { PhotoPin } from "@/components/PhotoPin";
import { memories } from "@/lib/memories";
import "maplibre-gl/dist/maplibre-gl.css";

setWorkerUrl(workerUrl);

export const Atlas = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <Map
      initialViewState={{ longitude: 55.0988, latitude: 51.7727, zoom: 14 }}
      mapStyle="/map-style.json"
      attributionControl={false}
      style={{ width: "100dvw", height: "100dvh" }}
    >
      {memories.map((memory) => {
        const isSelected = memory.id === selectedId;

        return (
          <Marker
            key={memory.id}
            longitude={memory.coordinates.lng}
            latitude={memory.coordinates.lat}
            anchor="center"
          >
            <PhotoPin
              memory={memory}
              selected={isSelected}
              onSelect={() => setSelectedId(isSelected ? null : memory.id)}
            />
          </Marker>
        );
      })}
    </Map>
  );
};
