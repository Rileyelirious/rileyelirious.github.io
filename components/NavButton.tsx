'use client';
import { useRouter } from 'next/navigation';

type props = {
    name: string,
    route: string
}

export default function NavButton({name, route}: props) {
    const router = useRouter();
    const handleNavigation = () => {
        router.push(route);
    };

    return (
        <button
        onClick={handleNavigation}
        className="bg-primary/40 border-2 border-secondary rounded-xl text-md pl-2 pr-2 h-9 min-w-15 text-center"
        >{name}</button>
    );
}