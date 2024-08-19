import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <div className="block pr-4 md:pr-6 lg:pr-8 xl:pr-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200">
      <Link href="/" className="flex items-center">
        <div className="bg-dark rounded-full overflow-hidden border-2 border-solid border-dark dark:border-light -ml-px mr-2 md:mr-3 lg:mr-4 xl:mr-5 w-8 md:w-9 lg:w-10 xl:w-11">
          <Image
            src={profileImg}
            alt="NFT Indonesia Logo"
            className="w-full h-auto"
            sizes="20vw"
            priority
          />
        </div>
        <span className="text-dark dark:text-light font-bold text-sm md:text-base lg:text-lg xl:text-xl">
          NFT Indonesia
        </span>
      </Link>
    </div>
  );
};

export default Logo;
