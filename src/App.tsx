import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const questions = [
		{
			questionText: "What is my dog's name?",
			answerOptions: [
				{ answerText: 'Fido', isCorrect: false },
				{ answerText: 'Maggie', isCorrect: true },
				{ answerText: 'Spot', isCorrect: false },
				{ answerText: 'Bella', isCorrect: false },
			],
		},
		{
			questionText: "What is 2+2?",
			answerOptions: [
				{ answerText: '4', isCorrect: true },
				{ answerText: '5', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: "Why did the chicken cross the road?",
			answerOptions: [
				{ answerText: 'Because he wanted takeout', isCorrect: false },
				{ answerText: 'Because 7 ate 9', isCorrect: false },
				{ answerText: 'To get to the other side', isCorrect: true },
				{ answerText: 'To catch his cab', isCorrect: false },
			],
		},
		{
			questionText: "What is my name?",
			answerOptions: [
				{ answerText: 'Anthony', isCorrect: true },
				{ answerText: 'Joe', isCorrect: false },
				{ answerText: 'John', isCorrect: false },
				{ answerText: 'Matt', isCorrect: false },
			],
		},
    {
			questionText: "What is 4x9?",
			answerOptions: [
				{ answerText: '32', isCorrect: false },
				{ answerText: '35', isCorrect: false },
				{ answerText: '36', isCorrect: true },
				{ answerText: '512', isCorrect: false },
			],
		},
	];
}
export default App;
