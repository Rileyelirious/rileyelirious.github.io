type SectionProps = {
  theme: "theme-main" | "theme-school";
  children: React.ReactNode;
};

export default function Section({ theme, children }: SectionProps) {
  return (
    <section className={`${theme} relative flex min-h-screen w-full items-center justify-center`}>
      {children}
    </section>
  );
}