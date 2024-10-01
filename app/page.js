import Head from "next/head";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Dev by Sam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 text-background">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Anonymouse baby</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Samuel Lwanga
            </h2>
            <h3 className="text-2xl py-2">Web Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I am a developer and designer based in Kenya. I have a passion for
              web development and love to create websites and web applications.
              Join me on my socials and let&apos;s create something...
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" alt="blender" />
          </div>
        </section>
        {/* Section 2 */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a range of services to help you with your web development
              needs. I offer a wide range of services, from
              <span className="text-teal-500"> web design</span>, web app
              development, SEO services to
              <span className="text-teal-500"> web hosting</span> . I can help
              you with your project, no matter how big or small.
            </p>
          </div>
          <div>
            <div>
              <Image src={design} alt="design" width={100} height={100} />
              <h3>Stunning Designs</h3>
              <p>
                Creating stunning designs that will make your website stand out
                from the crowd.
              </p>
              <h4>Tools I use</h4>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
