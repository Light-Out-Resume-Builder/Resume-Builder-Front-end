import React, { useState } from "react";
import Button from "./../../components/Button/button";
import { MdOutlineFileUpload, MdOutlineFileDownload } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { CgMenuGridO } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import ProjectManagement from "../../assets/images/ProjectManagement.png";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
// import draftToHtml from "draftToHtml";

const CoverLetterBuilderB = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  //   const getEditorContentAsHtml = () => {
  //     const contentState = editorState.getCurrentContent();
  //     return draftToHtml(convertToRaw(contentState));
  //   };

  return (
    <div className="px-[5%] lg:px-[10%]">
      {/* skip button div  */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-20">
        <div className="w-[100%] lg:w-[60%] flex justify-between">
          <Button
            icon={<CgMenuGridO className="text-2xl mr-2" />}
            text="Templates"
            url=""
            variant="text-[12px] lg:text-base text-[#1E40AF] text-center font-semibold lg:font-bold lg:px-8 px-2 lg:py-1 py-0 flex items-center bg-opacity-0 border-[#1E40AF] border-[1.5px]  justify-center"
          />
          <Button
            icon={<MdOutlineFileUpload className="text-2xl mr-2" />}
            text="Upload existing cover letter"
            url=""
            variant="text-[12px] lg:text-base text-[#fff] text-center font-semibold lg:font-bold md:px-8 px-6 lg:py-1 py-1 flex items-center bg-[#1E40AF]  justify-center"
          />
        </div>
        <div className="w-[100%] lg:w-[40%] flex justify-center lg:justify-end">
          <Button
            icon={<MdOutlineFileDownload className="text-2xl mr-2" />}
            text="Download"
            url=""
            variant="text-base text-[#fff] text-center font-semibold lg:font-bold md:px-8 px-6 lg:py-1 py-1 flex items-center bg-[#1E40AF] justify-center"
          />
        </div>
      </div>

      {/* personal details  */}
      <div className="flex flex-col lg:flex-row gap-20">
        {/* right-side divide  */}
        <div className="w-[100%] lg:w-[60%]">
          {/* personal details  */}
          <div className="bg-white pb-14 mt-10 lg:mt-20 rounded-xl">
            {/* header with title  */}
            <div className="border-solid border-b-2 border-[#B1AEAE]  p-6">
              <h5 className="flex items-center text-[15px] lg:text-2xl font-bold">
                Personal Details <BiEdit className="ml-2 text-[#1E40AF]" />
              </h5>
            </div>
            {/* divde holding input fields  */}
            <div className="mt-5 flex flex-col lg:flex-row gap-3 lg:gap-10 px-3 lg:px-[7%] justify-between">
              <div className="flex flex-col w-[100%] lg:w-[50%]">
                <label>Job Title (Optional)</label>
                <input
                  type="text"
                  className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col w-[100%] lg:w-[50%]">
                <label>First Name</label>
                <input
                  type="text"
                  className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
            </div>
            {/* divde holding input fields  */}
            <div className="mt-5 flex flex-col lg:flex-row gap-3 lg:gap-10 px-3 lg:px-[7%] justify-between">
              <div className="flex flex-col w-[100%] lg:w-[50%]">
                <label>Last Name</label>
                <input
                  type="text"
                  className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col w-[100%] lg:w-[50%]">
                <label>Email</label>
                <input
                  type="text"
                  className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
            </div>
            {/* divde holding input fields  */}
            <div className="mt-5 flex flex-col lg:flex-row gap-3 lg:gap-10 px-3 lg:px-[7%] justify-between">
              <div className="flex flex-col w-[100%] lg:w-[50%]">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col w-[100%] lg:w-[50%]">
                <label>Address</label>
                <input
                  type="text"
                  className="p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
            </div>
          </div>

          {/* employee's detail  */}
          <div className="bg-white pb-14 mt-6 lg:mt-10 rounded-xl">
            {/* header with title  */}
            <div className="border-solid border-b-2 border-[#B1AEAE]  p-6">
              <h5 className="flex items-center text-[15px] lg:text-2xl font-bold">
                Employer’s Details <BiEdit className="ml-2 text-[#1E40AF]" />
              </h5>
            </div>
            {/* divde holding input fields  */}
            <div className="mt-5 px-3 lg:px-[7%]  ">
              <div className="flex flex-col">
                <label>Company’s Name</label>
                <input
                  type="text"
                  className="w-[100%] lg:w-[80%] p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
              <div className="flex mt-5 flex-col">
                <label>Hiring Manager’s Name</label>
                <input
                  type="text"
                  className="w-[100%] lg:w-[80%] p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
              <div className="flex mt-5 flex-col">
                <label>Company’s Address</label>
                <input
                  type="text"
                  className="w-[100%] lg:w-[80%] p-1 border-[0.5px] mt-1 border-[#B1AEAE] rounded-md outline-none"
                />
              </div>
            </div>
          </div>

          {/* letter details  */}
          <div className="bg-white pb-14 mt-6 lg:mt-10 rounded-xl">
            {/* header with title  */}
            <div className="border-solid border-b-2 border-[#B1AEAE]  p-6">
              <h5 className="flex items-center text-[15px] lg:text-2xl font-bold">
                Letter Details
              </h5>
            </div>
            {/* divde holding input fields  */}
            <div className="mt-5 px-3 lg:px-[7%]">
              <div className="flex flex-col">
                <label>Letter Date</label>
                <input
                  type="date"
                  className="w-[100%] lg:w-[70%] p-1 border-[0.5px] mt-1 border-[#B1AEAE] outline-none"
                />
              </div>
              <div className="flex items-center gap-1 mt-5 ">
                <input
                  type="checkbox"
                  className="relative outline-none overflow-hidden h-[25px] w-[50px] checked:bg-[#22C55E] bg-[#e6e6e6e6] appearance-none rounded-3xl shadow-xl before:h-[100%] before:w-[25px] before:absolute before:content[''] before:bg-[#000] before:rounded-3xl before:scale-5 before:left-0 before:transition-all before:delay-75 checked:before:left-6 checked:before:bg-[#fff]"
                />
                <label>Show Date</label>
              </div>
              <div className="flex items-center gap-1 mt-5 ">
                <Editor
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onEditorStateChange}
                />
                {/* <textarea disabled value={getEditorContentAsHtml()} /> */}
              </div>
            </div>
          </div>
        </div>

        {/* left-side divide  */}
        <div className="w-[100%] lg:w-[40%] mt-0 lg:mt-20 flex flex-col">
          <img src={ProjectManagement} alt="" />
          <div className="mt-5 flex gap-10 justify-between">
            <Button
              text="Save"
              url=""
              variant="text-base text-[#1E40AF] text-center font-bold md:px-4 px-2 lg:py-1 py-1 flex items-center bg-opacity-0 border-[#1E40AF] border-[1.5px]  justify-center"
            />
            <Button
              icon={<GoEye className="text-xl mr-2" />}
              text="Preview"
              url=""
              variant="text-base text-[#fff] text-center font-bold md:px-4 px-2 lg:py-1 py-1 flex items-center bg-[#1E40AF]  justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterBuilderB;
