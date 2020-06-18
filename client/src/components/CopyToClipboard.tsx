import React, { useState } from "react";

type CTCProps = {
  buttonText: string;
  textRef: any;
};

const CopyToClipboard: React.FC<CTCProps> = ({ textRef, buttonText }) => {
  const [text, setText] = useState(buttonText);
  
  function copyToClipboard(e: any) {
    e.preventDefault();

    if(textRef.current) {
      textRef.current.select();
      textRef.current.setSelectionRange(0, 99999);
      document.execCommand("copy");
      setText("Copied");
      setTimeout(() => {
        setText(buttonText)
      }, 1000)
    }
  }

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
      {text}
    </button>
  );
}

export { CopyToClipboard };