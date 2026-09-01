import Image from "next/image";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <>
      <div className="text-white relative">
        <Image src={"https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/20.gif?token-hash=73PrwlPNIGDCHsplj7xxSj2evDXadHP_utXkWveuQGY%3D&token-time=1788480000"} alt="Picture of the author"
        width={860}
        height={300}
        priority
        unoptimized
        className="rounded-lg object-cover w-full" />
        <div className="absolute top-90 right-178"> 
          <Image src={"https://cdn.britannica.com/11/190811-050-4875CAA7/Sheryl-Lee-Laura-Palmer-Twin-Peaks.jpg"} alt="user pfp"
        width={100}
        height={130}
        priority
        className="rounded-full" />
        </div>
        <div className="flex flex-col text-center mt-25">
          <span className="font-bold text-sm">&#64;Naitikatartistery</span>
          <span className="text-slate-400">Create Digital Art Live</span>
          <span className="text-slate-400">currently | 9,180 | members.</span>
        </div>
      </div>
    </>
  );
};

export default Username;
