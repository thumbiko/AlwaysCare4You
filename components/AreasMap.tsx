"use client";
import { useEffect, useRef } from "react";
import { AREAS } from "@/lib/data";

export default function AreasMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (typeof window === "undefined" || mapInstanceRef.current) return;

    import("leaflet").then(L => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // Fix default marker icons
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current, {
        center: [53.35, -6.27],
        zoom: 11,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const customIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:32px;height:32px;border-radius:50% 50% 50% 0;
          background:var(--primary,#5AA7A7);
          border:3px solid white;
          box-shadow:0 2px 8px rgba(0,0,0,0.3);
          transform:rotate(-45deg);
          cursor:pointer;
        "></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      AREAS.forEach(area => {
        L.marker([area.lat, area.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(`<strong style="font-family:'Nunito',sans-serif;color:#1a2e2e">${area.name}</strong><br/><span style="font-size:12px;color:#6B7280">Service Area</span>`);
      });

      mapInstanceRef.current = map;
    });

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (mapInstanceRef.current) { (mapInstanceRef.current as any).remove(); mapInstanceRef.current = null; }
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
      <div
        ref={mapRef}
        style={{
          height: "420px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
          border: "1px solid var(--primary-light)",
        }}
        aria-label="Map showing AlwaysCare4You service areas across Dublin"
      />
    </>
  );
}
