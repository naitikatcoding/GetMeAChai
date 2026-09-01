import Image from "next/image";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <div className="text-white relative w-full max-w-4xl mx-auto px-4">
      {/* Banner Container */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/20.gif?token-hash=73PrwlPNIGDCHsplj7xxSj2evDXadHP_utXkWveuQGY%3D&token-time=1788480000"
          alt="Banner Image"
          fill
          priority
          unoptimized
          className="rounded-lg object-cover"
        />
      </div>

      {/* Profile Picture (Overlapping the banner) */}
      <div className="absolute top-[250px] left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-10">
        <div className="w-[100px] h-[100px] relative border-4 border-black rounded-full overflow-hidden">
          <Image
            src="https://cdn.britannica.com/11/190811-050-4875CAA7/Sheryl-Lee-Laura-Palmer-Twin-Peaks.jpg"
            alt="User Profile Picture"
            fill
            priority
            className="object-"
          />
        </div>
      </div>

      {/* User Info Details */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mt-16 mb-8 pt-2">
        <span className="font-bold text-xl">@{username || "Naitikatartistery"}</span>
        <span className="text-slate-400 text-sm mt-1">Create Digital Art Live</span>
        <span className="text-slate-400 text-sm">Currently | 9,180 | members</span>
      </div>

      {/* Bottom Feature Cards */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
        <div className="flex-1 min-w-[250px] h-32 bg-gray-700 rounded-lg"></div>
        <div className="flex-1 min-w-[250px] h-32 bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Username;
