import { useState } from "react";
const Accordion = ({ sections }) => {
  const [ind, setInd] = useState(null);
  function handleClick(index) {
    setInd(ind === index ? null : index);
  }
  return (
    <>
      {sections.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>{item.title}</button>
          <br></br>
          {ind === index && <button>{item.content}</button>}
        </div>
      ))}
    </>
  );
};
export default Accordion;
