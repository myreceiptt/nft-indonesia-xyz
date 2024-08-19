import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center hover:scale-105 transition-all ease duration-300"
    >
      <span className="text-dark dark:text-light font-bold text-lg md:text-xl">
        NFT Indonesia
      </span>
      <div className="w-12 md:w-16 bg-dark rounded-full overflow-hidden border-2 border-solid border-dark dark:border-light ml-2 md:ml-4">
        <Image
          src={profileImg}
          alt="NFT Indonesia Logo"
          className="w-full h-auto"
          sizes="20vw"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
