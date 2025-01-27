import React from "react";

const SixtQuestion = ({ mathInput, onMathInputChange, onStepChange }) => {
  return (
    <form>
      <h2>Mental break time, you deserve an easy question. What is 1+1?</h2>
      <select onChange={onMathInputChange} value={mathInput}>
        <option value="">Select:</option>
        <option value="a">a. Not this one</option>
        <option value="b">b. Still not this one</option>
        <option value="c">c. 2</option>
        <option value="d">d. You've gone too far, go back to C.</option>
      </select>
      <button disabled={mathInput === ""} onClick={onStepChange}>
        Submit Your Answers
      </button>
    </form>
  );
};

export default SixtQuestion;
