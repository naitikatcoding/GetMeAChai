import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const chai = "https://get-me-chai.vercel.app/tea.gif"
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] text-white gap-11">
      <div className="flex items-center">
        <span className="text-6xl font-bold pt-6">Get Me A Chai</span>
        <Image width={90} height={90} src={chai} alt="chai"/>
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
  );
}
