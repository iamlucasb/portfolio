import Image from "next/image";
import { RiMailFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function Home() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="flex flex-col">
        <article className="flex flex-col p-8 md:p-12 gap-3 md:gap-10 border border-gray-300 shadow-lg shadow-taupe-700 md:flex-row rounded-xl bg-neutral-100">
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                className="border-2 rounded-full shadow-md border-taupe-700 hover:border-amber-500 transition duration-700 shadow-gray-400"
                src="/images/avatar.jpg"
                alt="Avatar Lucas Bossard"
                fill
                sizes="(max-width: 640px) 8rem, (min-width: 641px) 10rem, (min-width: 768px) 14rem"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:max-w-52 gap-4 md:gap-5">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold md:text-5xl sm:text-2xl tracking-wider font-montserrat text-center md:text-left">
                Lucas <span className="text-taupe-700">Bossard</span>
              </h1>
              <p className="text-lg italic text-center md:text-left font-crimson ml-1">
                Soon-to-be entrepreneur
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/iamlucasb"
                className="text-lg font-medium transition duration-200 text-taupe-700 hover:text-amber-500"
                aria-label="GitHub"
              >
                <TbBrandGithubFilled size={25} />
              </a>
              <a
                href="mailto:contact@lucasbossard.dev"
                className="text-lg font-medium transition duration-200 text-taupe-700 hover:text-amber-500"
                aria-label="Email"
              >
                <RiMailFill size={25} />
              </a>
            </div>
          </div>
        </article>
        <p className="mt-6 text-taupe-100 text-center mx-auto max-w-52 md:max-w-full">
          👷🏻‍♂️ Building something great! Come back later to see my portfolio.
        </p>
      </div>
    </main>
  );
}
