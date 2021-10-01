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
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerOptionClick = (isCorrect: any) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  
  return (
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <button><a href="https://ajrac.github.io/quizv2/">Try Again</a></button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  );
}

export default App;
