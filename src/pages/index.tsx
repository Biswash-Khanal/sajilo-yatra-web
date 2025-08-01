
import Head from "next/head";


// pages/index.tsx
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="p-4 text-center text-2xl">Welcome to Sajilo Yatra</h1>

      <div className="relative border border-black h-[200px] w-[300px]">
        
        <div className="bg-blue-500  border border-blue-500 absolute left-[20px] right-[20px] w-auto">
			I stretch between left and right, ignoring width
        </div>
        
      </div>
    </div>
  );
}
