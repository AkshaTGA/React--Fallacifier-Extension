import "./App.css";
import { Fragment, useEffect, useState } from "react";
import StarRating from "./stars";
import Inputsection from "./inputsection";
import apitasks from "./apitask";

function App() {
  const [inputgiven, setinputgiven] = useState(false);

  const [stars, setstars] = useState(0);

  const [claim, setclaim] = useState("");

  const [emptyinput, setemptyinput] = useState(false);

  const [sources, setsources] = useState([]);

  const [verdict, setverdict] = useState(null);

  const [detailed_verdict, setdetailed_verdict] = useState(null);

  const [loading, setloading] = useState(false);
  const [mentionsources, setmentionsources] = useState(true);
  const [error, seterror] = useState(false);
  const [about, setabout] = useState(false);
  const [sample, setsample] = useState(null);

  const verdictcolor = {
    "Cannot be Verified": "#5c4e15",
    Supported: "Green",
    Refuted: "#b72e2e",
  };

  const handleinput = async () => {
    setclaim(claim.trim());
    if (claim == "" || claim.length < 6 || !claim.includes(" ")) {
      setemptyinput(true);
      seterror(false);
      return;
    }
    setloading(true);
    setemptyinput(false);
    setinputgiven(true);
    const res = await apitasks(claim);
    if (res == undefined) {
      seterror(true);
      setloading(false);
    }
    setclaim("");

    setstars(res.Confidence_Rating);
    setsources(
      res.Top_Sources.map((result) => {
        return result.link;
      })
    );
    setverdict(res.Verdict);
    setdetailed_verdict(res.Reasoning);
    if (res.Mention == "yes") {
      setmentionsources(true);
    } else if (res.Mention == "no") {
      setmentionsources(false);
    }

    setloading(false);
  };

  const sampleClaims = [
    "The Great Wall of China is visible from space.",
    "Lightning never strikes the same place twice.",
    "Humans only use 10% of their brains.",
    "Bulls get angry when they see the color red.",
    "Goldfish have a memory span of only three seconds.",
    "Bananas grow on trees.",
    "The Eiffel Tower can grow taller in summer.",
    "Vaccines cause autism.",
    "Mount Everest is the closest point on Earth to the Moon.",
    "Sugar causes hyperactivity in children.",
    "The moon has a dark side that never faces Earth.",
    "You can see the Great Pyramid of Giza from space with the naked eye.",
    "Cracking your knuckles causes arthritis.",
    "Napoleon Bonaparte was extremely short.",
    "Chameleons change color to blend in with their surroundings.",
  ];

  useEffect(() => {
    const ind = Math.floor(Math.random() * 15);
    setsample(sampleClaims[ind]);
  }, [setclaim]);

  const mainui = (
    <>
      <Inputsection
        setinputgiven={setinputgiven}
        claim={claim}
        setclaim={setclaim}
        handleinput={handleinput}
        emptyinput={emptyinput}
        loading={loading}
      />
      <main className="overflow-y-scroll custom-scrollbar ">
        <div className="error w-[80%] ml-8">
          {error && (
            <p className="text-red-800 text-center p-2 border-[#3d3d3d] border rounded-[20px]">
              Something Went wrong, Please try Again.
            </p>
          )}
        </div>
        <div className="border-[#3d3d3d] border-[2px] m-2 p-2 shadow-md rounded-lg flex flex-col items-center ">
          {loading && <div className="loader"></div>}

          {verdict == null && (
            <div
              className="text-[#747474]  border-[#3d3d3d] border-[2px] rounded-lg p-3 text-[15px]"
              style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
            >
              <h3 className="text-center italic">Try: “{sample}”</h3>
            </div>
          )}

          {inputgiven && !loading && !error && (
            <div className="Verdict mt-2   shadow-sm w-[370px] rounded-lg px-1 py-4 flex  flex-col gap-3">
              <p className="text-xl text-white text-center">Results</p>
              <hr className="border-[#3d3d3d] " />
              <div className="flex  flex-col gap-3">
                <p className="text-[15px] font-bold text-white">
                  Verdict:
                  <span
                    className=" p-1 m-2 rounded- text-[15px] rounded-lg "
                    style={{ backgroundColor: verdictcolor[verdict] }}
                  >
                    {verdict}
                  </span>{" "}
                </p>
                <div className="text-[15px]  flex max-h-48 text-white ">
                  <p className="font-bold whitespace-nowrap">
                    Detailed Verdict:
                  </p>
                  <p className=" pr-5 max-w-60  text-[15px] ml-2 break-words overflow-y-scroll overflow-x-hidden custom-scrollbar">
                    {detailed_verdict}
                  </p>
                </div>
                <p className="flex text-[15px] text-white font-bold">
                  Verdict Confidence Rating:
                  <span className="flex ml-1  bg-[#343434] rounded-lg p-1 gap-1 ">
                    <StarRating stars={stars} />
                  </span>
                </p>
                <div className="text-[15px] text-white font-bold">
                  Top Sources:
                  {mentionsources ? (
                    <div className="ml-5 flex flex-col gap-3">
                      {sources.map((link, index) => {
                        return (
                          <Fragment key={index}>
                            <a
                              className="text-blue-400 font-normal"
                              href={link}
                            >
                              <p className=" truncate text-[13px] ">
                                {index + 1}. {link}
                              </p>
                            </a>
                          </Fragment>
                        );
                      })}
                    </div>
                  ) : (
                    " Not Applicable"
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            className="px-3 m-3 border-[2px] border-[#3d3d3d] shadow-sm rounded-lg flex gap-1 text-[#747474]"
            style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
          >
            <p>💡</p>
            <p className="text-[15px]">
              Tip: Use a sentence or paragraph for best results. Otherwise, it
              might give mixed results.
            </p>
          </div>
          {verdict != null && (
            <div
              className="px-3   flex gap-1 text-[#747474]"
              style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
            >
              <p className="text-xs ">ⓘ</p>
              <p className="text-xs text-[#747474] italic">
                Info: Fallacifier relies on web data and AI inference. It is not
                a replacement for verified journalistic fact-checking.
              </p>
            </div>
          )}
        </div>
      </main>
      <hr className="border-[#3d3d3d] border-[1px] w-[90%]" />
      <div className="footer w-full ">
        <ul className="list-none flex justify-evenly text-[#747474]  ">
          <li className="mt-2 ">
            {!loading && (
              <a
                href="#"
                onClick={() => {
                  setloading(true);
                  setTimeout(() => {
                    setabout(true);
                    setloading(false);
                  }, 1000);
                }}
                className="hover:text-gray-400 text-[15px]"
              >
                Who Made This?
              </a>
            )}
          </li>
        </ul>
      </div>
    </>
  );

  const aboutui = (
    <div className=" flex flex-col  items-center">
      <div className=" flex flex-col  p-2 items-center border border-[#3d3d3d] m-2 rounded-2xl">
        <h1
          className="text-white text-xl mb-2"
          style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
        >
          Who Made This?
        </h1>
        <hr className="border-[#3d3d3d] border w-full" />

        {loading && <div className="loader2"></div>}
        <div
          className="about items-center flex text-[14px] flex-col  m-2 p-3 rounded-lg"
          style={{ filter: loading ? "blur(2px)" : "blur(0px)" }}
        >
          <p className="text-[#888787]  ">
            Hi, I’m Akshat Parmar, an undergraduate student at IIIT Allahabad,
            pursuing a degree in Information Technology. I’m passionate about
            web development and AI, and I enjoy building tools that solve
            real-world problems.
          </p>
          <p className="text-[#888787] mt-2">
            Fallicifier was developed to help tackle misinformation by combining
            trusted sources with AI-based analysis. This project reflects my
            interest in creating simple, effective, and impactful digital
            solutions.
          </p>
          <button
          disabled={loading}
            onClick={() =>
              window.open("https://coff.ee/akshat140")
            }
            className=" rounded-md mt-10 py-2 px-2 border-[#3d3d3d] text-[15px] disabled:hover:bg-black border-[2px] text-[#747474] hover:bg-[#1c1b1b] ease-in-out "
          >
            ☕ Buy Me a Coffee
          </button>
        </div>
      </div>
      <hr className="border-[#3d3d3d] border-[1px] w-[90%]" />
      <div className="footer w-full ">
        <ul className="list-none flex justify-evenly text-[#747474]  ">
          <li className="mt-2 ">
            {!loading && (
              <a
                href="#"
                onClick={() => {
                  setloading(true);
                  setTimeout(() => {
                    setabout(false);
                    setloading(false);
                  }, 1000);
                }}
                className="hover:text-gray-400 text-[15px]"
              >
                Home
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className=" Maindiv bg-black flex flex-col items-center shadow-2xl py-2 ">
      <div className="Header flex justify-center">
        <h1
          className="heading text-[3rem] text-white
            m-1"
        >
          Fallacifier
        </h1>
      </div>
      {about ? aboutui : mainui}
    </div>
  );
}

export default App;
