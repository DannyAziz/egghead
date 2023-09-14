import { useEffect, useState } from "react";

import Head from "next/head";

import Button from "components/Button";
import EggHead from "components/head";
import Speech from "components/speech";

import Left from "components/speech/components/left";

const APIKEY = "vc91gT+jM9xXsk0RCsFoDQ==uv9ZuW2ycR2V1oRi";

const Home = () => {
  const [mode, setMode] = useState("smile");
  const [fact, setFact] = useState(null);


  const getFact = async () => {
    setMode("thinking");
    const response = await fetch("https://api.api-ninjas.com/v1/facts", {
      headers: {
        "X-Api-Key": APIKEY,
      },
    });
    const data = await response.json();
    setTimeout(() => {
      setFact(data[0].fact);
      setMode("talking");
    }, 2000);
  };

  return (
    <div className="bg-[#D8D8C0] text-[#0D1523] min-h-screen p-2 sm:pb-40 p-20 font-Egghead uppercase tracking-widest leading-[1.8em] ">
      <Head>
        <title>EggHead</title>
        <meta name="description" content="EggHead" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="flex flex-col items-center gap-y-12 max-w-[600px] mx-auto">
        <h1 className="-rotate-6 [word-spacing:10px] text-2xl sm:text-3xl text-[#2E433D] self-start">
          EGG HEAD
        </h1>

        <div className="w-[150px] sm:w-[300px] h-[200px] sm:h-[400px] relative scale-75">
          <EggHead mode={mode} />
        </div>

        {fact && (
            <Speech
              fact={fact}
              onFinished={() => setMode("smile")}
              side="bottomMiddle"
            />
          )}

        <div>
          <Button
            onClick={getFact}
            noFact={fact === null}
          />
        </div>
          
      </main>

      <footer className="bottom-0 left-0 fixed px-8 py-4 sm:px-16 min-w-full bg-[#D8D8C0]">
        <p>
          Made with 🍵 by{" "}
          <a
            className="underline text-[#A25F57]"
            href="https://twitter.com/dannyaziz97"
            target="_blank"
          >
            Lane Samata
          </a>{" "}
          and{" "}
          <a
            className="underline text-[#A25F57]"
            href="https://twitter.com/dannyaziz97"
            target="_blank"
          >
            Danny Aziz
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
