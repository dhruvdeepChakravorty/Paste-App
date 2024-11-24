import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();
  const allPaste = useSelector((state) => state.pastes.pastes);
  const paste = allPaste.filter((p) => p._id == id)[0];
  const [value, setvalue] = useState(paste.title);
  const [content, setContent] = useState(paste.content);
  function handleClick() {
    navigator.clipboard.writeText(paste?.content);
    toast.success("Copied to clipboard");
  }
  return (
    <div className="flex flex-col	gap-5 m-4 w-full  justify-stretch		">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder=" Enter Your Title"
          value={value}
          disabled
          onChange={(e) => setvalue(e.target.title)}
          className="py-3 px-2 bg-[#3a3a3a] w-[85%] text-white rounded-lg "
        />
        <button
         className=" flex justify-center items-center gap-2 bg-[#222222] text-white p-3 rounded-md transition-all duration-300 border border-transparent hover:border-sky-600 hover:text-sky-600"
         onClick={handleClick}>Copy Content <FaCopy />
        </button>
      </div>
      <textarea
        value={content}
        placeholder="  Enter Content Here"
        onChange={(e) => setContent(e.target.content)}
        rows={20}
        disabled
        className="w-[95%] bg-[#3a3a3a] p-2 rounded-lg"
      >
       
      </textarea>
    </div>
  );
};

export default ViewPaste;
