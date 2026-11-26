import "@/app/globals.css";

export const metadata = { title: "riley's website" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Cairopixel, sans-serif" }}>
        <div className="main">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}