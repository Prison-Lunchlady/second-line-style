import { useState, useRef, useEffect } from "react";

export function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; };
  }, [onClose]);

  const clampScale = (s: number) => Math.min(5, Math.max(1, s));
  const reset = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const next = clampScale(scale * (e.deltaY < 0 ? 1.15 : 0.87));
    if (next === 1) setOffset({ x: 0, y: 0 });
    setScale(next);
  };

  const onDoubleClick = () => {
    if (scale > 1) reset(); else setScale(2.5);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLImageElement>) => {
    if (scale <= 1) return;
    (e.target as HTMLImageElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!dragRef.current) return;
    setOffset({ x: dragRef.current.ox + (e.clientX - dragRef.current.x), y: dragRef.current.oy + (e.clientY - dragRef.current.y) });
  };
  const onPointerUp = () => { dragRef.current = null; };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (!pinchRef.current) pinchRef.current = { dist, scale };
      else setScale(clampScale(pinchRef.current.scale * (dist / pinchRef.current.dist)));
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => { if (e.touches.length < 2) pinchRef.current = null; };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 select-none" onClick={onClose} onWheel={onWheel}>
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={onDoubleClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`, transition: dragRef.current ? "none" : "transform 0.15s ease-out", cursor: scale > 1 ? "grab" : "zoom-in", touchAction: "none" }}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 border border-white/20 rounded-sm px-2 py-1">
        <button onClick={(e) => { e.stopPropagation(); setScale((s) => { const n = clampScale(s / 1.3); if (n === 1) setOffset({ x: 0, y: 0 }); return n; }); }} aria-label="Zoom out" className="text-white px-2 py-1 hover:text-primary text-lg leading-none">−</button>
        <button onClick={(e) => { e.stopPropagation(); reset(); }} aria-label="Reset zoom" className="text-white text-xs uppercase tracking-widest px-2 py-1 hover:text-primary">{Math.round(scale * 100)}%</button>
        <button onClick={(e) => { e.stopPropagation(); setScale((s) => clampScale(s * 1.3)); }} aria-label="Zoom in" className="text-white px-2 py-1 hover:text-primary text-lg leading-none">+</button>
      </div>
      <button onClick={onClose} aria-label="Close" className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-primary">&times;</button>
    </div>
  );
}
