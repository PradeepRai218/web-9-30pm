import React, { useState } from "react";
import Header from "../common/Header";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaqList } from "../../Data/FaqList";

export default function Faq() {
  let [openQuestionId, setOpenQuestionId] = useState(FaqList[0].id); //1

  return (
    <div>
  
      <section className="py-10">
        <h1 className="text-4xl font-bold text-center">Faq</h1>
        <div className="max-w-[1000px] mx-auto mt-5">
          {openQuestionId}
          {FaqList.map((obj, index) => {
            return (
              <div key={index} className="border-1 border-[#cccc] mb-3">
                <h3 className="relative cursor-pointer p-2 text-xl font-bold bg-yellow-600 text-white">
                  {index + 1}.{obj.question}
                  <span
                    onClick={() =>
                      setOpenQuestionId(obj.id == openQuestionId ? 0 : obj.id)
                    }
                    className="absolute right-[10px] top-[10px]"
                  >
                    {openQuestionId == obj.id ? <FaMinus /> : <FaPlus />}
                  </span>
                </h3>
                <div
                  className={`p-3
                     ${openQuestionId == obj.id ? "block" : "hidden"} 
                      `}
                >
                  {obj.answer}
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="pt-[100px]">With Components</h2>
        <div className="max-w-[1000px] mx-auto mt-5">
          {FaqList.map((obj, index) => (
            <FaqItem key={index} data={obj} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FaqItem({ data }) {
  let { id, question, answer } = data;
  let [openQuestionId, setOpenQuestionId] = useState(0);
  return (
    <div className="border-1 border-[#cccc] mb-3">
      <h3
        onClick={() => setOpenQuestionId(id == openQuestionId ? 0 : id)}
        className="relative cursor-pointer p-2 text-xl font-bold bg-yellow-600 text-white"
      >
        {question}
        <span className="absolute right-[10px] top-[10px]">
          {openQuestionId == id ? <FaMinus /> : <FaPlus />}
        </span>
      </h3>
      <div
        className={`p-3
                     ${openQuestionId == id ? "block" : "hidden"}
                      `}
      >
        {answer}
      </div>
    </div>
  );
}
