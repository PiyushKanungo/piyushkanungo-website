export default function Home() {
    return (
      <main
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/bghunter.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl text-center px-4">
          <p className="text-3xl md:text-4xl font-semibold text-white italic drop-shadow-lg">
            {`"You Should Enjoy the Little Detours to the Fullest Because That's Where You'll Find Things More Important Than What You Want"`}
          </p>
          <p className="mt-4 text-xl text-gray-300 font-medium">- Ging Freecss</p>
        </div>
      </main>
    );
  }
  