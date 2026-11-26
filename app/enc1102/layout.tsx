import "@/app/globals.css";
import Background from '@/components/Background';
import Section from '@/components/Section';
import Panel from '@/components/Panel';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = { title: "riley's website" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Section theme="theme-school">
      <Background/>
      <Navigation/>
      <Panel className="w-2/3 min-h-lvh mb-30 text-xl" padding={5} as="div">
        {children}
      </Panel>
      <Footer/>
    </Section>
  );
}