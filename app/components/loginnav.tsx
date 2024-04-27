// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.svg'

const LoginNav = () => {
  return (
    <nav className="bg-transparent p-4 w-full top-0 absolute sm:px-0 md:px-20 lg:px-20">
      <div className="container mx-auto   flex items-center justify-between">
        <div>
          <Link href={"/home" as string}>
          <Image
             src={logo}
             alt="Description of your image"
             width={100}
             height={100}
        />
          </Link>
        </div>
        <div>
       
        </div>
      </div>
    </nav>
  );
};

export default LoginNav;
