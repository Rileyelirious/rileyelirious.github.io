type SeparatorProps = {
  width?: React.CSSProperties["width"];
};

export default function Separator({ width = "100%" }: SeparatorProps) {
  return (
    <hr
      className="text-secondary border-2 border-dashed mx-auto my-8"
      style={{ width }}
    />
  );
}