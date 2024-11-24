import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../Redux/PasteSlice";

const Home = () => {
  const [value, setvalue] = useState("");
  const [content, setContent] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const dispatch = useDispatch();
  const allPaste = useSelector((state) => state.pastes.pastes);
  useEffect(() => {
    if (pasteId) {
      const paste = allPaste.find((p) => pasteId === p._id);

      setvalue(paste.title);
      setContent(paste.content);
    }
  }, [pasteId]);

  const createPaste = () => {
    const paste = {
      title: value,
      content: content,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      dispatch(updateToPaste(paste));
    } else {
      dispatch(addToPaste(paste));
    }
    setvalue("");
    setContent("");
    setSearchParam({});
  };
  return (
    <div className="flex flex-col	gap-5 m-4 w-full  justify-stretch		">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder=" Enter Your Title"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          className="py-3 px-2 bg-[#3a3a3a] w-[85%] text-white rounded-lg "
        />
        <button
          className="bg-[#222222] text-white p-3 rounded-md transition-all duration-300 border border-transparent hover:border-sky-600 hover:text-sky-600"
          onClick={createPaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <textarea
        value={content}
        placeholder="  Enter Content Here"
        onChange={(e) => setContent(e.target.value)}
        rows={20}
        className="w-[95%] bg-[#3a3a3a] p-2 rounded-lg"
      ></textarea>
    </div>
  );
};

export default Home;
