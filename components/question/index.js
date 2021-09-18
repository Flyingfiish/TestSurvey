import Link from "next/link";

export default function Question({ question, onAnswer, numberInfo }) {
  return (
    <div className="question">
        <div className="question-number">
            Вопрос {numberInfo.index}/{numberInfo.length}
        </div>
      <div className="question-text">{question.text}</div>
      <div className="question-variants">{getVariants(question.variants, onAnswer)}</div>
    </div>
  );
}

function getVariants(variants, onAnswer) {
  let result = [];
  if (variants) {
    for (let i = 0; i < variants.length; i++) {
      let item = <div className="question-variant" onClick={onAnswer}>{variants[i].text}</div>;
      result.push(item);
    }
  }
  return result;
}
