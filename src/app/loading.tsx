import Image from "next/image";

/** Branded route-transition loader — same look as the initial splash. */
export default function Loading() {
  return (
    <div className="splash route">
      <Image
        src="/assets/logo-black.png"
        alt="Cargando…"
        width={150}
        height={64}
        priority
      />
    </div>
  );
}
