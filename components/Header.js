import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { getSession, signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12 ">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Home
            </span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Search
            </span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Watchlist
            </span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Originals
            </span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Movies
            </span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Series
            </span>
          </a>
        </div>
      )}

      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <img
          src={session.user.image}
          alt=""
          className="ml-auto  h-12 w-12 rounded-full object-cover cursor-pointer "
          onClick={signOut}
        />
      )}
    </header>
  );
}

export default Header;
