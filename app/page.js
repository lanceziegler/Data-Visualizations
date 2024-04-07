import Image from 'next/image';
import LineGraph from './components/LineGraph';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-24'>
      <div>Hi Krissy</div>
      <LineGraph />
    </main>
  );
}
