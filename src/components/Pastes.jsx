import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFromPaste } from "../Redux/PasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Pastes = () => {
  const paste = useSelector((state) => state.pastes.pastes);

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filteredData = paste.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = (pasteId) => {
    dispatch(resetFromPaste(pasteId));
  };
  console.log(paste);
  console.log(filteredData);

  const handleShare = (pasteID) => {
    const shareURL = `${window.location.origin}/pastes/${pasteID}`;
    navigator.clipboard.writeText(shareURL);
    toast.success("Link Copied to Clipboard");
  };
  return (
    <div>
      <input
        type="text"
        placeholder=" Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="py-3 px-2 bg-[#3a3a3a] w-[98%] text-white rounded-lg "
      />
      <div className="flex flex-col gap-5 mt-5 justify-center items-center">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className=" flex flex-col p-3 w-[80%] border rounded-lg">
                <div className="flex justify-between 	">
                  <div className=" flex justify-start font-bold	text-3xl m-2">
                    {paste.title}
                  </div>
                  <div className="flex gap-10 text-xl	text-[#38BDF8] mr-3 shrink	">
                    <button className="hover:text-[#38bff8a7]">
                      <Link to={`/?pasteId=${paste._id}`}>
                        <FaEdit />
                      </Link>
                    </button>
                    <button className="hover:text-[#38bff8a7]">
                      <Link to={`/pastes/${paste._id}`}>
                        <FaRegEye />
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(paste._id)}
                      className="hover:text-[#38bff8a7]"
                    >
                      <MdDelete />
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied to clipboard");
                      }}
                      className="hover:text-[#38bff8a7]"
                    >
                      <FaCopy />
                    </button>
                    <button
                      onClick={() => handleShare(paste._id)}
                      className="hover:text-[#38bff8a7]"
                    >
                      <FaShare />
                    </button>
                  </div>
                </div>
                <div className=" flex justify-start text-xl ml-5 opacity-75">
                  {paste.content}
                </div>
                <div className="flex gap-3 justify-end opacity-70">
                  <div className="flex">
                    {new Date(paste.createdAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",

                      hour12: true,
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
