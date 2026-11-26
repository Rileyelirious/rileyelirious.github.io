type props = {
  as?: "div" | "header";
  children: React.ReactNode;
  className?: string;
  padding: number;
};

export default function Panel({as, children, className, padding}: props) {
  const Tag = as ?? "div"
  return (
    <Tag className={`relative z-10 isolate flex border-4 border-secondary rounded-xl ${className}`}>
        <div className={`absolute flex -z-1 pointer-events-none w-full h-full bg-primary/80 bg-center blur-sm backdrop-blur-md rounded-xl`}/>
        <div className={`w-full h-full text-ink text-2xl`} style={{ padding: `${padding * 0.25}rem` }}>
          {children}
        </div>
    </Tag>
  );
}