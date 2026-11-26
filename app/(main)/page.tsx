import Separator from '@/components/Separator';
import Panel from '@/components/Panel';

export default function Home() {
  return (
    <div>
      <div className="justify-items-center text-center w-full">
        <h1 className="text-8xl pointer-events-none">-- welcome home --</h1>
        <Separator/>
        <Panel className="w-full" padding={10} as="div">
          <p>This is a test for the new home page! Hi everyone! This project is going pretty well. I thought it would be a little easier than it was, but I'm glad that it isn't easy.</p>
          <p>Can't make an omelette without cracking a couple eggs, or something!</p>
        </Panel>
      </div>
    </div>
  );
}