import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Question from "../components/question";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Tik() {
  return(<div><div>
    <Header>
    </Header>
    <div className="thank-you">Тык!</div>
  </div></div>);
}
