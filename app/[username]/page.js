import Image from "next/image";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <div className="text-white w-full">
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

      <div className="flex flex-wrap justify-center gap-6 w-[80%] mx-auto mb-15 mt-2.5 px-4">
        
        <div className="w-full sm:w-80 md:w-96 min-h-80 bg-gray-700 rounded-lg p-6 flex flex-col items-start text-left">
          <h2 className="text-xl font-bold mb-4">Supporters</h2>
          <ul className="w-full space-y-2 text-sm">
            {[...Array(6)].map((_, i) => (
              <li key={i}>
                Shubham donated $30 with a message &quot; &quot;
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-80 md:w-96 min-h-80 bg-gray-700 rounded-lg p-6 flex flex-col items-start">
          <h2 className="text-xl font-bold mb-6">Make a Payment</h2>
          
          <div className="w-full space-y-4">
            <input 
              type="text" 
              placeholder="Enter Name" 
              className="w-full bg-gray-800 p-3 rounded-md text-sm border border-gray-600 focus:outline-none focus:border-indigo-500" 
            />
            <input 
              type="text" 
              placeholder="Enter Message" 
              className="w-full bg-gray-800 p-3 rounded-md text-sm border border-gray-600 focus:outline-none focus:border-indigo-500" 
            />
            <input 
              type="text" 
              placeholder="Enter Amount" 
              className="w-full bg-gray-800 p-3 rounded-md text-sm border border-gray-600 focus:outline-none focus:border-indigo-500" 
            />
            
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md text-sm transition duration-150">
              Pay
            </button>
            
            <div className="flex gap-2 pt-2">
              <button className="bg-gray-800 hover:bg-gray-600 py-1.5 px-3 rounded text-xs border border-gray-600">
                Pay $10
              </button>
              <button className="bg-gray-800 hover:bg-gray-600 py-1.5 px-3 rounded text-xs border border-gray-600">
                Pay $20
              </button>
              <button className="bg-gray-800 hover:bg-gray-600 py-1.5 px-3 rounded text-xs border border-gray-600">
                Pay $30
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Username;