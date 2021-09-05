import Head from "next/head";
import Form from "../components/Form";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Nextjs with cloudinary</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold my-5">Nextjs with cloudinary</h1>
          <Form />
          <Gallery />
        </main>
      </div>
      <Footer />
    </>
  );
}
