"use client";
import Head from "next/head";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

export default function Home() {
  const [darkMode, setDarkmode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Dev by Sam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">
              Anonymouse baby
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-gray-200"
                  onClick={() => setDarkmode(!darkMode)}
                />
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Samuel Lwanga
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Web Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">
              I am a developer and designer based in Kenya. I have a passion for
              web development and love to create websites and web applications.
              Join me on my socials and let&apos;s create something...
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="#">
              <AiFillLinkedin />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" alt="blender" />
          </div>
        </section>
        {/* Section 2 */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I offer a range of services to help you with your web development
              needs. I offer a wide range of services, from
              <span className="text-teal-500"> web design</span>, web app
              development, SEO services to
              <span className="text-teal-500"> web hosting</span> . I can help
              you with your project, no matter how big or small.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                alt="design"
                width={"100"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Stunning Designs
              </h3>
              <p className="py-2 dark:text-gray-300">
                Creating stunning designs that will make your website stand out
                from the crowd.
              </p>
              <h4 className="py-4 text-teal-600 font-bold dark:text-teal-400">
                Tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Visual Studio Code
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="design"
                width={"100"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Stunning Designs
              </h3>
              <p className="py-2 dark:text-gray-300">
                Creating stunning designs that will make your website stand out
                from the crowd.
              </p>
              <h4 className="py-4 text-teal-600 font-bold dark:text-teal-400">
                Tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Visual Studio Code
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                alt="design"
                width={"100"}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Stunning Designs
              </h3>
              <p className="py-2 dark:text-gray-300">
                Creating stunning designs that will make your website stand out
                from the crowd.
              </p>
              <h4 className="py-4 text-teal-600 font-bold dark:text-teal-400">
                Tools I use
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Visual Studio Code
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Tailwind</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">React</p>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="dark:text-gray-300">
              Here are some of the projects that I have worked on. I have
              designed and developed a range of websites and web applications
              for clients all over the world. Take a look at some of my work
              below.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="Project screenshot 1"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="Project screenshot 2"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="Project screenshot 3"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="Project screenshot 4"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="Project screenshot 5"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="Project screenshot 6"
                className="rounded-lg object-cover"
                width={"100"}
                height={"100"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
