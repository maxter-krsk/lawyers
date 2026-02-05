"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Skeleton } from "@/lib/ui/skeleton";

declare global {
  interface Window {
    ymaps: any;
  }
}

const ADDRESS = "Красноярск, ул. Ладо Кецховели, 22А";
const POINT: [number, number] = [56.009572, 92.814663];

export function YandexMap() {
  const [scriptReady, setScriptReady] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.ymaps) setScriptReady(true);
  }, []);

  useEffect(() => {
    if (!scriptReady) return;

    window.ymaps.ready(() => {
      const el = document.getElementById("map");
      if (!el || el.dataset.inited === "true") return;
      el.dataset.inited = "true";

      const map = new window.ymaps.Map(
        "map",
        {
          center: POINT,
          zoom: 18,
          controls: ["zoomControl"],
        },
        { suppressMapOpenBlock: true }
      );
      mapRef.current = map;

      const placemark = new window.ymaps.Placemark(
        POINT,
        { balloonContent: ADDRESS, hintContent: ADDRESS },
        { preset: "islands#blackDotIcon", iconColor: "#6B6B6B" }
      );

      map.geoObjects.add(placemark);

      setMapReady(true);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, [scriptReady]);

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`}
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <div className="rounded-6 xs:rounded-12 relative h-[25rem] w-full overflow-hidden">
        {!mapReady && (
          <Skeleton
            className="rounded-6 xs:rounded-12 absolute inset-0 z-10"
            aria-live="polite"
            aria-busy="true"
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-10">
                <div className="h-28 w-28 animate-spin rounded-full border-2 border-white/80 border-t-transparent" />
                <div className="text-center text-sm font-light text-white/90">
                  Карта загружается...
                </div>
              </div>
            </div>
          </Skeleton>
        )}

        <div
          id="map"
          className="h-full w-full transition-opacity duration-300"
          style={{
            filter: "grayscale(1) contrast(1.05) brightness(1.02)",
            opacity: mapReady ? 1 : 0,
          }}
        />
      </div>
    </>
  );
}
