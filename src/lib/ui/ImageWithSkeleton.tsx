"use client";

import React from "react";
import Image from "next/image";
import { Skeleton } from "@/lib/ui/skeleton";

export default function ImageWithSkeleton({
  src,
  alt,
  priority,
  sizes,
  className,
  objectPosition,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  objectPosition?: string;
}) {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className="relative h-full w-full">
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
        style={objectPosition ? { objectPosition } : undefined}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
