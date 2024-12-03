import { LoadingSpinner } from "@/components/LoadingSpinner";

// const checkAndBootstrapIndex = async (
//   setIsBootstrapping: (isBootstrapping: boolean) => void,
//   setIsIndexReady: (isIndexReady: boolean) => void
// ) => {
//   setIsBootstrapping(true);
//   await runBootstrapProcedure();
//   setIsBootstrapping(false);
//   setIsIndexReady(true);
// };

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingSpinner />
    </div>
  );
}
