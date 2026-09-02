import Image from "next/image";
import user from "../user.gif";

const Username = async ({ params }) => {
  const { username } = await params;

  const displayUsername = username || "Naitikatartistery";

  return (
    <main className="w-full text-white">
      <section
        className="relative w-full h-75"
        aria-label={`${displayUsername} profile banner`}
      >
        <Image
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/20.gif?token-hash=73PrwlPNIGDCHsplj7xxSj2evDXadHP_utXkWveuQGY%3D&token-time=1788480000"
          alt={`${displayUsername} profile banner`}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="flex flex-col items-center">
        <div className="relative z-10 -mt-12.5 h-25 w-25 overflow-hidden rounded-full border-4 border-black">
          <Image
            src="https://cdn.britannica.com/11/190811-050-4875CAA7/Sheryl-Lee-Laura-Palmer-Twin-Peaks.jpg"
            alt={`${displayUsername} profile picture`}
            fill
            priority
            sizes="100px"
            className="object-cover"
          />
        </div>

        <header className="mt-3 mb-8 text-center">
          <h1 className="text-xl font-bold">@{displayUsername}</h1>

          <p className="mt-1 text-sm text-slate-400">
            Create Digital Art Live
          </p>

          <p className="text-sm text-slate-400">
            Currently | 9,180 | members
          </p>
        </header>
      </section>

      <section className="mx-auto mb-15 mt-2.5 flex w-[90%] max-w-6xl flex-wrap justify-center gap-6 px-4">
        <article className="min-h-80 w-full rounded-lg bg-gray-700 p-6 sm:w-[28rem] md:w-[32rem]">
          <h2 className="mb-4 text-xl font-bold">Supporters</h2>

          <ul className="w-full space-y-3 text-sm">
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center gap-3 rounded-lg bg-gray-800/50 p-2.5"
              >
                <Image
                  src={user}
                  alt="Supporter avatar"
                  width={32}
                  height={32}
                  className="shrink-0 rounded-full object-cover"
                />

                <span>
                  Shubham donated{" "}
                  <strong className="text-green-400">$30</strong> with a
                  message &quot;&quot;
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="min-h-80 w-full rounded-lg bg-gray-700 p-6 sm:w-[28rem] md:w-[32rem]">
          <h2 className="mb-6 text-xl font-bold">Make a Payment</h2>

          <form className="w-full space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Name"
                autoComplete="name"
                className="w-full rounded-md border border-gray-600 bg-gray-800 p-3 text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your message
              </label>

              <input
                id="message"
                name="message"
                type="text"
                placeholder="Enter Message"
                className="w-full rounded-md border border-gray-600 bg-gray-800 p-3 text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="amount" className="sr-only">
                Payment amount
              </label>

              <input
                id="amount"
                name="amount"
                type="number"
                min="1"
                step="1"
                placeholder="Enter Amount"
                inputMode="decimal"
                className="w-full rounded-md border border-gray-600 bg-gray-800 p-3 text-sm focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition duration-150 hover:bg-indigo-700"
            >
              Pay
            </button>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs hover:bg-gray-600"
              >
                Pay $10
              </button>

              <button
                type="button"
                className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs hover:bg-gray-600"
              >
                Pay $20
              </button>

              <button
                type="button"
                className="rounded border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs hover:bg-gray-600"
              >
                Pay $30
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Username;