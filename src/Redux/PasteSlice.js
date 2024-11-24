import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pastesSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      const isDuplicate = state.pastes.some((existingPaste) => existingPaste.title === paste.title);
      if (isDuplicate) {
        toast.error("Paste Already exixts")
      }
      else{
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Created Successfully");
      }

     
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index=state.pastes.findIndex((item)=>item._id===paste._id)
      const isDuplicate = state.pastes.some((existingPaste) => existingPaste.title === paste.title);
      if (isDuplicate) {
        toast.error("Paste Already exixts")
      }
      else{
        if (index>=0) {
          state.pastes[index]=paste;
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
          toast.success("Paste Updated Successfully");
        }
        else{
          toast.error("Paste Not Found")
        }
      }
    },
    resetAllPaste: (state, action) => {
      state.pastes=[]
      localStorage.removeItem("pastes")
    }
  ,
    resetFromPaste: (state, action) => {
      const pasteId=action.payload
      const index=state.pastes.findIndex((item)=>item._id===pasteId)
      if (index>=0) {
       state.pastes.splice(index,1)
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Deleted Successfully");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, resetFromPaste } =
  pastesSlice.actions;

export default pastesSlice.reducer;
