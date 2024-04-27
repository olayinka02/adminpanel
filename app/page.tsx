import Image from "next/image";
import { Container } from "postcss";
import LoginNav from "./components/loginnav";
import Login from "./components/login";
import patternbg from "./assets/patternbg.svg";
// import Link from "next/link";

<style>
{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
`}
</style>

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 mainlogin" >
    <LoginNav />
    <Login />
  </main>
  );
}
