import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Question from "../components/question";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const questions = [
  {
    text: "Как вы относитесь к тому, что на улице идет дождь?",
    variants: [
      {
        
        text: "Позитивно",

      },
      {
        text: "Негативно",
      },
    ],
    numberInfo: { index: 1, length: 20 },
  },
  {
    text: "Вам сейчас холодно?",
    variants: [
      {
        text: "Да",
      },
      {
        text: "Нет",
      },
    ],
    numberInfo: { index: 1, length: 20 },
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  if(!isEnd)
  return (
    <div>
      <Header></Header>
      <Question
        question={questions[index]}
        numberInfo={{ index: index + 1, length: questions.length }}
        onAnswer={() => {
          if (index + 1  < questions.length) setIndex(index + 1);
          else setIsEnd(true);
        }}
      ></Question>
    </div>
  );
  else
  return(<div><div>
    <Header>
    </Header>
    <div className="thank-you">Спасибо за пройденный опрос!</div>
  </div></div>);
}
