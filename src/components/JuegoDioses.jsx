import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const questionsData = [
  {
    question:
      "Ayudame a contestar, jummm se ve muy poderoso y parece ser tiene el poder del trueno, quien sera?",
    options: ["a. Perceo", "b. Spartano", "c. guerrero", "d. Zeus"],
    correctAnswer: "d. Zeus",
    questionImage:
      "https://static.wixstatic.com/media/af1176_a00c4952a9124c5993c21010707a31bc~mv2.jpg/v1/crop/x_0,y_90,w_1792,h_2082/fill/w_560,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_9329.jpghttps://img.freepik.com/vector-premium/antiguo-guerrero-griego-armadura-casco-arma-mano-listo-ataque-defensa_168440-198.jpg",
    rightImage:
      "https://i.pinimg.com/originals/6b/2a/7e/6b2a7e95078a2ec9a38d4450f5e7f7fd.jpg",
  },
  {
    question:
      "Sigamos adelante!, ayudame parece que tiene el poder relacionado con el mar y tiene un tridente, quien sera?",
    options: ["a. Harmes", "b. Hercules", "c. Poseidon", "d. Ares"],
    correctAnswer: "c. Poseidon",
    questionImage:
      "https://filosofiapresocraticablog.files.wordpress.com/2016/03/poseidon.jpg?w=640",
    rightImage:
      "https://i.pinimg.com/originals/6b/2a/7e/6b2a7e95078a2ec9a38d4450f5e7f7fd.jpg",
  },
  {
    question:
      "Parece lleva un escudo jummm se ve impotente me suena esta mujer, quien crees que sea?",
    options: ["a. Atreus", "b. Loki", "c. Hera", "d.Atenea"],
    correctAnswer: "d.Atenea",
    questionImage:
      "https://img.freepik.com/vector-gratis/ilustracion-atena-dibujada-mano_23-2150100807.jpg?w=740&t=st=1700387954~exp=1700388554~hmac=c277ee9af2622daff79649b12cccb625bad4e83216294614f827a8275565fa21",
    rightImage:
      "https://www.cronica.com.mx/uploads/2021/09/27/61539821a6926.jpeg",
  },
  {
    question:
      "Lleva un arco parece una diosa de caza, me suena su nombre empieza por una vocal, ayudame",
    options: ["a. Atenas", "b. Zeus", "c. Atreus", "d.Artemisa"],
    correctAnswer: "d.Artemisa",
    questionImage:
      "https://i.pinimg.com/originals/cc/cf/9c/cccf9c5a79b8e7fb7b24747b1a3c24a1.jpg",
    rightImage:
      "https://www.cronica.com.mx/uploads/2021/09/27/61539821a6926.jpeg",
  },
  {
    question:
      "oh! parece alguien malo, aparece tambien el infierno, quien sera?",
    options: ["a. Poseidon", "b. Hades", "c. Alberto", "d.Kratos"],
    correctAnswer: "b. Hades",
    questionImage:
      "https://t4.ftcdn.net/jpg/05/82/68/51/360_F_582685167_fIpZJdywItpOTfheab2z3rHNi49QwAor.jpg",
    rightImage:
      "https://www.cronica.com.mx/uploads/2021/09/27/61539821a6926.jpeg",
  },
];

const JuegoDioses = () => {
  const navigate = useNavigate();
  const [redirectToResult, setRedirectToResult] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSelectAnswerError, setShowSelectAnswerError] = useState(false);
  const [showIncorrectAnswerError, setShowIncorrectAnswerError] =
    useState(false);
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
        alert(`Juego terminado. Puntuación final: ${score}`);
        setRedirectToResult(true);

        // Fin del juego, puedes mostrar un mensaje o realizar alguna acción

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

  const currentQuestionData = questionsData[currentQuestion];

  return (
    <div
      className="contenedor-preguntas"
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <div style={{ flex: 1, marginRight: "20px" }}>
        {currentQuestionData.questionImage && (
          <img
            src={currentQuestionData.questionImage}
            alt="Imagen Pregunta"
            style={{ width: "200px", height: "auto", marginTop: "5em" }}
          />
        )}
        <p></p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 20%)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {currentQuestionData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              style={{
                backgroundColor:
                  selectedOption === option
                    ? showIncorrectAnswerError
                      ? "red"
                      : "green"
                    : "white",
                color: "black",
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                fontSize: "18px",
              }}
            >
              {option}
            </button>
          ))}
        </div>
        {showSelectAnswerError && (
          <p
            style={{
              color: "yellow",
              marginTop: "10px",
              fontSize: "20px",
              backgroundColor: "black",
              padding: 0,
              marginInline: "100px",
            }}
          >
            Por favor, selecciona una respuesta antes de pasar a la siguiente
            pregunta.
          </p>
        )}
        {showIncorrectAnswerError && (
          <p
            style={{
              color: "yellow",
              marginTop: "10px",
              fontSize: "20px",
              backgroundColor: "black",
              padding: 0,
              marginInline: "100px",
            }}
          >
            Respuesta incorrecta. Intentalo de nuevo.
          </p>
        )}
        <p
          style={{
            color: "yellow",
            marginTop: "10px",
            fontSize: "20px",
            backgroundColor: "black",
            padding: 0,
            marginInline: "300px",
          }}
        >
          Puntuación: {score}
        </p>
        <button
          onClick={handleNextQuestion}
          style={{
            color: "black",
            marginTop: "10px",
            padding: "10px",
            boxSizing: "border-box",
            fontSize: "18px",
          }}
        >
          Siguiente Pregunta
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            position: "relative",
            backgroundImage: "url()",
            top: "20px",
          }}
        >
          <img
            style={{ width: "400px", height: "300px" }}
            src="https://www.pngmart.com/files/9/Text-Balloon-PNG-Image.png"
            alt="Dialogo"
          />
          <p
            style={{
              color: "white",
              marginTop: "3em",
              position: "absolute",
              color: "yellow",
              width: "300px",
              fontWeight: "bold",
              backgroundImage: "url()",
              top: "50px",
              left: "4em",
              fontfamily: "sans-serif",
              fontsize: "50px",
            }}
          >
            {currentQuestionData.question}
          </p>
        </div>

        {currentQuestionData.rightImage && (
          <img
            src={currentQuestionData.rightImage}
            alt="Imagen Derecha"
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "50px",
              marginTop: "3em",
            }}
          />
        )}
        {redirectToResult && navigate("/menu")}
      </div>
    </div>
  );
};

export default JuegoDioses;
