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
				text: "Позитивно"
			},
			{
				text: "Негативно"
			}
		],
		numberInfo: { index: 1, length: 20 }
	},
	{
		text: "Вам сейчас холодно?",
		variants: [
			{
				text: "Да"
			},
			{
				text: "Нет"
			}
		],
		numberInfo: { index: 1, length: 20 }
	}
];

function fakeRegister() {
	const name = document.getElementById("name").value;
	if (name == "" || name == undefined || name == null) {
		alert("Введите имя");
		return;
	}
	const widget = document.getElementById("chat21-container").parentElement;
	widget.nextSibling.remove();
	widget.remove();
	reloadScript(name);
}

function reloadScript(name) {
	document.getElementById("autofaqWidget").remove();
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	script.setAttribute("src", "https://chat.autofaq.ai/widget/static/js/main.js");
	script.setAttribute("data-widget-host", "https://chat.autofaq.ai");
	script.setAttribute("data-widget-service-id", "1c3476b7-4cd9-41cc-aec3-096858431fff");
	script.setAttribute("data-widget-channel-id", "e7f927e4-b205-48e5-ae17-467761056ef2");
	script.setAttribute("data-widget-user-login", "");
	script.setAttribute("data-widget-user-name", name);
	script.setAttribute("data-widget-user-email", "");
	script.setAttribute("id", "autofaqWidget");
	script.setAttribute(
		"data-widget-new-messages",
		JSON.stringify({
			"badge": true,
			"favicon": true,
			"notifications": true
		})
	);
	script.setAttribute(
		"data-widget-user-payload",
		JSON.stringify({
			"account_name": "",
			"h11_account_id": "1",
			"h11_user_id": "1",
			"registration_step": "completed"
		})
	);
	head.appendChild(script);
}

export default function Home() {
	const [index, setIndex] = useState(0);
	const [isEnd, setIsEnd] = useState(false);

	if (!isEnd)
		return (
			<div>
				<Header></Header>
				{/* <Question
        question={questions[index]}
        numberInfo={{ index: index + 1, length: questions.length }}
        onAnswer={() => {
          if (index + 1  < questions.length) setIndex(index + 1);
          else setIsEnd(true);
        }}
      ></Question> */}
				<div id="register-container">
					<div>
						<label htmlFor="name">Имя</label>
						<input id="name" name="name"></input>
						<div onClick={fakeRegister} className="completeRegistration">
							<p>Зарегистироваться</p>
						</div>
					</div>
				</div>
			</div>
		);
	else
		return (
			<div>
				<div>
					<Header></Header>
					<div className="thank-you">Спасибо за пройденный опрос!</div>
				</div>
			</div>
		);
}
