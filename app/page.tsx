import Image from 'next/image';
//import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Library from './component/Library';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div>
        <Library></Library>
      </div>
    </div>
  );
}
