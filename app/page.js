import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="flex flex-col md:flex-row h-auto md:h-[50vh] justify-around m-5">
        {/* Text Section */}
        <div className="flex flex-col gap-4 items-center md:items-start justify-center p-4 md:p-0 md:w-1/2">
          <p className="text-2xl md:text-4xl font-bold text-center md:text-left">
            The best URL shortener
          </p>
          <p className="text-center md:text-left md:w-3/4 px-4 md:px-0">
            We are the most straightforward URL Shortener in the world. Most of
            the URL shorteners will track you or ask you to give your details for
            login. We understand your needs and hence we have created this URL
            shortener.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
                Try now
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center md:justify-end items-center md:w-1/2">
          <Image
            className="mix-blend-darken"
            alt="image is a vector"
            src="/vector.jpg" // Ensure the image is in the public folder
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </main>
  );
}
