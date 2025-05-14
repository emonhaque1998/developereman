export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="container">
          <div className="bg-white/10 backdrop-blur-md border w-full border-white/30 shadow-xl rounded-xl p-8 text-gray-800 text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome</h1>
            <p>
              This is a beautiful glass effect over a fixed background image
              using Tailwind CSS in React.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
