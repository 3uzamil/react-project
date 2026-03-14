import React, { useState } from "react";
import { QuestionData } from "./QuestionData";
import Header from "../../components/Header";
let Faq = () => {
  let [showAns, setShowAns] = useState(0);
  let items = QuestionData.map((itemsData, i) => {
    let faq = {
      itemsData,
      showAns,
      setShowAns,
    };
    return <FaqItems faq={faq} key={i} />;
  });
  return (
    <>
    <Header />
    <div>
      <h1 className="faqHeading">FAQ</h1>
      {items}
    </div>
    </>
  );
}

function FaqItems({faq}) {
  let {itemsData,showAns,setShowAns} = faq;
//   console.log(itemsData)
  return (
    <div className="faqItems">
      <h2 onClick={() => setShowAns(showAns == itemsData.id ? 0 : itemsData.id )}>{itemsData.question}</h2>
      <p className={showAns == itemsData.id ? "show" : ""}>
        {itemsData.answer}
      </p>
    </div>
  );
}

export default Faq;
