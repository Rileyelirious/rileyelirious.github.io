import "./globals.css";

export const metadata = { title: "riley's website" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}