import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const chai = "https://get-me-chai.vercel.app/tea.gif";
  const man = "https://get-me-chai.vercel.app/man.gif";
  const coin = "https://get-me-chai.vercel.app/dollar.gif";
  const humanicon = "https://get-me-chai.vercel.app/group.gif";
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[90vh] text-white gap-11">
        <div className="flex items-center">
          <span className="text-6xl font-bold pt-6">Get Me A Chai</span>
          <Image width={90} height={90} src={chai} alt="chai" />
        </div>
        <p className="text-lg font-bold">
          A Crowdfunding platform for creaters. Get funded by your fans and
          followers. Start Now!
        </p>
        <div className="gap-4 flex">
          <button className="contact py-2.5 px-4 rounded-lg">Start Here</button>
          <button className="contact py-2.5 px-4 rounded-lg">Read More</button>
        </div>
      </div>

      <div className="bg-gray-600 w-screen h-1 mt-16.5"></div>

      <div className="flex flex-col gap-14 py-20">
        <p className="mx-auto text-3xl font-bold">Your fans can buy you a Chai !</p>
        <ul className="flex justify-around text-center">
          <li className="flex flex-col items-center gap-5">
            <Image className="rounded-full" width={100} height={100} src={man} alt="man" />
            <span className="font-bold text-lg">Fund Yourself</span>
            <span>Your fans are available to help you</span>
          </li>
          <li className="flex flex-col items-center gap-5">
            <Image className="rounded-full" width={100} height={100} src={coin} alt="coin" />
            <span className="font-bold text-lg">Stand Financially</span>
            <span>Your fans are available to help you</span>
          </li>
          <li className="flex flex-col items-center gap-5">
            <Image className="rounded-full" width={100} height={100} src={humanicon} alt="humanicon" />
            <span className="font-bold text-lg">Trust the Community</span>
            <span>Your fans are available to help you</span>
          </li>
        </ul>
      </div>
    </>
  );
}
