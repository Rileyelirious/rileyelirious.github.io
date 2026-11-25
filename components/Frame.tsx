export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate flex w-2/3 min-h-lvh items-center justify-center p-4 mt-30 mb-30">
        <div className="absolute flex -z-1 pointer-events-none w-full h-full bg-primary bg-center opacity-80 blur-md rounded-3xl"/>
        {children}
    </div>
  );
}