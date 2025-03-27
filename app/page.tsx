import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Image
        src="/images/bghunter.jpeg"
        alt="Hunter x Hunter Background"
        fill
        priority
        className="object-cover brightness-75"
      />
      <div className="relative z-10 max-w-4xl text-center px-4">
        <p className="text-3xl md:text-4xl font-semibold text-white italic drop-shadow-lg">
          {`"You Should Enjoy the Little Detours to the Fullest Because That's Where You'll Find Things More Important Than What You Want"`}
        </p>
        <p className="mt-4 text-xl text-gray-300 font-medium">- Ging Freecss</p>
      </div>
    </main>
  );
}
