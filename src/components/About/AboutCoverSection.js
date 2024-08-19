import ChatAnimation from "@/src/components/Contact/ChatAnimation";
import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
        <ChatAnimation />
        {/* <Image src={profileCharacter} alt="CodeBucks" 
            className='w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            /> */}
      </div>

      <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">
          Fair Play, Learn More, Hard Work!
        </h2>
        <p className="font-medium mt-12 text-base">We NEW it!</p>
        <p className="font-medium mt-2 text-base">
          We are the NEW NFT Indonesia.
        </p>
        <p className="font-medium mt-2 text-base">
          Passionate and innovative with timeless captivating playing, learning,
          and working. Inspired by artists and their artworks. We are perpetual
          players, learners, and workers embracing challenges.
        </p>
        <p className="font-medium mt-2 text-base">
          With each activity, we aim to leave a lasting impact.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
