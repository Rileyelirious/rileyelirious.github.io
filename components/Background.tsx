export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 bg-[url('@/public/green-night.gif')] bg-cover bg-center bg-no-repeat pointer-events-none hue-rotate-(--hue) contrast-125"
    />
  );
}