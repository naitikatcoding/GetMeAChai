import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const chai = "https://get-me-chai.vercel.app/tea.gif";
  const man = "https://get-me-chai.vercel.app/man.gif";
  const coin = "https://get-me-chai.vercel.app/dollar.gif";
  const humanicon = "https://get-me-chai.vercel.app/group.gif";
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[75vh] sm:min-h-[85vh] py-12 px-4 text-white text-center gap-6 sm:gap-9">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Get Me A Chai</h1>
          <Image
            width={90}
            height={90}
            src={chai}
            alt="chai"
            unoptimized
            className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
        <p className="text-base sm:text-lg font-medium sm:font-bold max-w-xl mx-auto px-2 text-gray-200">
          A Crowdfunding platform for creators. Get funded by your fans and
          followers. Start Now!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={"/login"}>
            <button className="bg-[#2563EB] py-2.5 px-6 rounded-lg hover:bg-blue-500 cursor-pointer text-sm sm:text-base font-semibold transition">
              Start Here
            </button>
          </Link>
          <a href="#endpage">
            <button className="bg-[#2563EB] contact py-2.5 px-6 rounded-lg hover:bg-blue-500 cursor-pointer text-sm sm:text-base font-semibold transition">
              Read More
            </button>
          </a>
        </div>
      </div>

      <div className="bg-gray-700 w-full max-w-6xl mx-auto h-px my-4 sm:my-8 opacity-60"></div>

      <section className="flex flex-col gap-10 sm:gap-14 py-10 sm:py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">
          Your fans can buy you a Chai !
        </h2>
        <ul className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-6 text-center">
          <li className="flex flex-col items-center gap-4 max-w-xs">
            <Image
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
              width={100}
              height={100}
              src={man}
              alt="man"
              unoptimized
            />
            <span className="font-bold text-base sm:text-lg">Fund Yourself</span>
            <span className="text-sm text-gray-300">Your fans are available to help you</span>
          </li>
          <li className="flex flex-col items-center gap-4 max-w-xs">
            <Image
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
              width={100}
              height={100}
              src={coin}
              alt="coin"
              unoptimized
            />
            <span className="font-bold text-base sm:text-lg">Stand Financially</span>
            <span className="text-sm text-gray-300">Your fans are available to help you</span>
          </li>
          <li className="flex flex-col items-center gap-4 max-w-xs">
            <Image
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover"
              width={100}
              height={100}
              src={humanicon}
              alt="humanicon"
              unoptimized
            />
            <span className="font-bold text-base sm:text-lg">Trust the Community</span>
            <span className="text-sm text-gray-300">Your fans are available to help you</span>
          </li>
        </ul>
      </section>

      <div className="bg-gray-700 w-full max-w-6xl mx-auto h-px my-4 sm:my-8 opacity-60"></div>

      <section className="text-center flex flex-col gap-6 sm:gap-8 py-10 sm:py-14 px-4 sm:px-8 max-w-4xl mx-auto">
        <h2 id="endpage" className="text-2xl sm:text-3xl font-bold scroll-mt-20">
          Learn More About Us
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          At Get Me A Chai, we are dedicated to supporting developers, creators,
          and influencers by connecting them with their supporters. Our platform
          enables individuals to fund their projects and ideas, providing a
          space where creativity and innovation can thrive.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          Our mission is to empower talented individuals by facilitating
          financial support, allowing them to focus on what they do best –
          creating. Whether you&apos;re a developer coding the next big app, a
          content creator making engaging videos, or an influencer sharing your
          passion, Get Me A Chai is here to help you achieve your goals.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          We believe in the power of community and the impact of collective
          support. By providing a platform for patrons to contribute, we aim to
          transform dreams into reality and foster a culture of creativity and
          innovation.
        </p>
      </section>
    </>
  );
}

export const metadata = { title: `Home -GetMeAChai` };