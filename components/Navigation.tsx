import Panel from '@/components/Panel';
import NavButton from '@/components/NavButton';

export default function Navigation() {
    return (
        <Panel className="w-2/3 h-12 text-ink text-2xl m-5" padding={1} as="header">
            <div className="flex justify-between h-full w-full items-center pl-2">
                <p className="pointer-events-none">// riley's website</p>
                <div className="space-x-1">
                    <NavButton name="home" route="/"/>
                    <NavButton name="blog" route="/blog"/>
                    <NavButton name="portfolio" route="/portfolio"/>
                    <NavButton name="games" route="/games"/>
                </div>
            </div>
        </Panel>
    );
}