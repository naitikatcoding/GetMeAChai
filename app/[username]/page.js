import Image from "next/image";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <div className="text-white w-full">
      {/* Full Width Banner */}
      <div className="relative w-full h-75">
        <Image
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/20.gif?token-hash=73PrwlPNIGDCHsplj7xxSj2evDXadHP_utXkWveuQGY%3D&token-time=1788480000"
          alt="Banner Image"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

     
      <div className="flex flex-col items-center">
       
        <div className="relative w-25 h-25 -mt-12.5 border-4 border-black rounded-full overflow-hidden z-10">
          <Image
            src="https://cdn.britannica.com/11/190811-050-4875CAA7/Sheryl-Lee-Laura-Palmer-Twin-Peaks.jpg"
            alt="User Profile Picture"
            fill
            priority
            className="object-cover"
          />
        </div>

     
        <div className="flex flex-col items-center text-center mt-3 mb-8">
          <span className="font-bold text-xl">
            @{username || "Naitikatartistery"}
          </span>

          <span className="text-slate-400 text-sm mt-1">
            Create Digital Art Live
          </span>

          <span className="text-slate-400 text-sm">
            Currently | 9,180 | members
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center w-[80%] px-4 mx-auto mb-15 mt-2.5">
        <div className="flex-1 min-w-62.5 h-80 bg-gray-700 rounded-lg"></div>

        <div className="flex-1 min-w-62.5 h-80 bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Username;
