import React from "react";

const FourthQuestion = ({ gameInput, onGameInputChange, onStepChange }) => {
  return (
    <form>
      <h2>
        Would you rather be trapped inside a video game or have that video game
        come to life in the real world?
      </h2>
      <section className="radio-container">
        <div className="radio-select">
          <label>
            <div className="radio-choice">
              <input
                type="radio"
                value="inside"
                onChange={onGameInputChange}
                checked={gameInput === "inside"}
              />
              <span role="img" aria-label="person, arrow, gaming consol">
                🙋 → 🎮
              </span>
            </div>
          </label>
        </div>

        <div className="radio-select">
          <label>
            <div className="radio-choice">
              <input
                type="radio"
                value="outside"
                onChange={onGameInputChange}
                checked={gameInput === "outside"}
              />
              <span role="img" aria-label="gaming consol, globe">
                🎮 → 🌍
              </span>
            </div>
          </label>
        </div>
      </section>
      <button disabled={gameInput === ""} onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default FourthQuestion;
