import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-12 md:w-16 rounded-full overflow-hidden border-2 border-solid border-light dark:border-light  mr-2 md:mr-4">
            <Image src={profileImg} alt="NFT Indonesia Logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
        <span className="font-bold text-lg md:text-xl">NFT Indonesia</span>
    </Link>
  )
}

export default Logo