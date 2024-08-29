import RiSoll from "@/src/components/Elements/RiSoll";

export default function InsightFullLayout({ children }) {
  return (
    <main className="mt-20 lg:mt-24 flex flex-col items-center justify-center">
      <RiSoll />
      {children}
    </main>
  );
}
