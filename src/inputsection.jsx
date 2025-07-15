import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";


export default function Inputsection({
  emptyinput,
  claim,
  setclaim,
  handleinput,
  loading,
}) {

  const button=useRef(null)
  const input=useRef(null)


function keypressed(key) {
    if (key.key == "Enter" && key.shiftKey == false) {
      button.current.click();
    }
  }

  


  return (
    <>
      <div className="inputsection flex justify-center gap-2 items-center m-3">
        <hr />
        <TextareaAutosize
          type="text"
          name=""
          id=""
          className="inputtextbox w-60  bg-transparent rounded-md p-3 text-[15px] text-white border-[#3d3d3d] border-[2px] content-box resize-none"
          placeholder="Paste or Enter any Claim"
          maxRows={6}
          maxLength={1000}
          value={claim}
          // disabled={loading}
          onKeyDown={keypressed}
          onChange={(e) => {
            setclaim(e.target.value);
          }}
          ref={input}
        />
        <button
          className=" rounded-md py-2 px-2 border-[#3d3d3d] text-[15px] disabled:hover:bg-black border-[2px] text-[#747474] hover:bg-[#1c1b1b] ease-in-out "
          onClick={() => {            
            handleinput();
          }}
          disabled={loading}
          ref={button}
        >
          Fallacify
        </button>
      </div>
      {emptyinput && (
        <p className="text-red-900 border-[#3d3d3d] border-[2px] mb-2 text-[15px]  px-3 rounded-lg">
          Please enter a valid Claim
        </p>
      )}
    </>
  );
}
