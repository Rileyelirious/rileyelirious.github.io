import "./globals.css";
import Background from '@/components/Background';
import Section from '@/components/Section';
import Frame from '@/components/Frame';

export const metadata = { title: "riley's website" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <main>
            <Section theme="theme-main">
              <Background />
              <Frame>
                {children}
              </Frame>
            </Section>
          </main>
        </div>
      </body>
    </html>
  );
}