import { Poppins } from 'next/font/google';


// Set up Poppins with specified weights
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <div className={`${poppinsFont.variable}`}>
        <h1 className="text-3xl font-bold underline font-poppins">Ini Index</h1>
      </div>
    </>
  );
}
