'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface TechIconProps {
  index: number;
  rotation: MotionValue<number>;
  visibleCount: number;
  windowWidth: number;
  icon: { src: string; alt: string };
}

export default function TechIcon({
  index,
  rotation,
  visibleCount,
  windowWidth,
  icon,
}: TechIconProps) {
  const tOffset = index / visibleCount;

  const t = useTransform(rotation, (value) => (value / 360 + tOffset) % 1);

  const x = useTransform(t, (tVal) => {
    const x0 = 0;
    const x1 = windowWidth / 2;
    const x2 = windowWidth;
    return (
      Math.pow(1 - tVal, 2) * x0 +
      2 * (1 - tVal) * tVal * x1 +
      Math.pow(tVal, 2) * x2
    );
  });

  const y = useTransform(t, (tVal) => {
    const y0 = 0;
    const y1 = 500;
    const y2 = 0;
    return (
      Math.pow(1 - tVal, 2) * y0 +
      2 * (1 - tVal) * tVal * y1 +
      Math.pow(tVal, 2) * y2
    );
  });

  return (
    <motion.div
      style={{
        position: 'absolute',
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center"
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        width={800}
        height={800}
        className="w-16 h-16 object-contain drop-shadow"
      />
    </motion.div>
  );
}
