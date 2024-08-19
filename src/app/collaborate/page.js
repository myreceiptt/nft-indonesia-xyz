import RiSoll from "@/src/components/Elements/RiSoll";
import ContactForm from "@/src/components/Contact/ContactForm";
import ChatAnimation from "@/src/components/Contact/ChatAnimation";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
  title: "Partnership & Collaborate",
  description: `Contact us through the form available on this page or email us at ${siteMetadata.email} to be our partner and collaborate.`,
};

export default function Collaborate() {
  return (
    <main className="flex flex-col items-center justify-between">
      <RiSoll />
      <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light mb-16 sm:mb-24">
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
          <ChatAnimation />
        </div>
        <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
          <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">
            Let's Collaborate With Us!
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
