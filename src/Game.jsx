import React, { useState } from 'react';

const questionsData = [
  {
    question: '¿Cuál es la capital de Francia?',
    options: ['Londres', 'París', 'Berlín', 'Madrid'],
    correctAnswer: 'París',
  },
  {
    question: '¿Cuántos planetas hay en nuestro sistema solar?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '8',
  },
  // Agrega más preguntas según sea necesario
];

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSelectAnswerError, setShowSelectAnswerError] = useState(false);
  const [showIncorrectAnswerError, setShowIncorrectAnswerError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    const isCorrect = option === questionsData[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      setShowIncorrectAnswerError(false);
    } else {
      // Restar un punto si la respuesta es incorrecta
      setScore(Math.max(score - 1, 0));
      setShowIncorrectAnswerError(true);
    }

    // Resaltar el botón seleccionado
    setSelectedOption(option);
    // Ocultar el mensaje de error de "seleccione una respuesta"
    setShowSelectAnswerError(false);
  };

  const handleNextQuestion = () => {
    if (selectedOption || showIncorrectAnswerError) {
      // Pasar a la siguiente pregunta solo si se ha seleccionado una respuesta o ya se mostró un error
      if (currentQuestion < questionsData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        // Reiniciar el botón seleccionado y los estados de error
        setSelectedOption(null);
        setShowSelectAnswerError(false);
        setShowIncorrectAnswerError(false);
      } else {
        // Fin del juego, puedes mostrar un mensaje o realizar alguna acción
        alert(`Juego terminado. Puntuación final: ${score}`);
        // Reiniciar el juego si lo deseas
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setShowSelectAnswerError(false);
        setShowIncorrectAnswerError(false);
      }
    } else {
      // Mostrar un mensaje de error si se intenta avanzar sin seleccionar una respuesta
      setShowSelectAnswerError(true);
    }
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Pregunta {currentQuestion + 1}</h2>
      <p style={{ color: 'white' }}>{questionsData[currentQuestion].question}</p>
      <ul>
        {questionsData[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswerClick(option)}
              style={{
                backgroundColor:
                  selectedOption === option
                    ? showIncorrectAnswerError
                      ? 'red'
                      : 'green'
                    : 'white',
                color: 'black',
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {showSelectAnswerError && (
        <p style={{ color: 'red' }}>
          Por favor, selecciona una respuesta antes de pasar a la siguiente pregunta.
        </p>
      )}
      {showIncorrectAnswerError && (
        <p style={{ color: 'red' }}>
          Respuesta incorrecta. Se restará un punto en la siguiente pregunta.
        </p>
      )}
      <p style={{ color: 'white' }}>Puntuación: {score}</p>
      <button onClick={handleNextQuestion} style={{ color: 'black' }}>
        Siguiente Pregunta
      </button>
    </div>
  );
};

export default Game;
