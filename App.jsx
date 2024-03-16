import { useState } from 'react'
import './App.css'

// Create an array of objects to represent the cards
const cardPairs = [
  { front: true, question: "What are the names of the Four Pillars of the Taj Mahal?", answer: "minarets." },
  { front: true, question: "Medieval books were first made by monks and nuns in a workshop called a ", answer: "Scriptorium" },
  { front: true, question: "When an image in an artwork is a person and the same size as you it is", answer: "life-size" },
  { front: true, question: "Which artistic movement is characterized by its use of bold colors and expressive brushwork", answer: "minarets." },
  { front: true, question: "Who was the architect of the Sydney Opera House?", answer: "Jørn Utzon" },
  { front: true, question: "And how many of these decorated caves have been found?", answer: "About 300." },
  { front: true, question: "What are the names of 4 major Paleolithic caves in order of their fame?", answer: "Lascaux, Altamira, Chauvet, Pesh Merle" },
  { front: true, question: "What is an aqueduct?", answer: "a structure with water conduits that used gravity to transport water" },
  { front: true, question: "What is a rotunda?", answer: "A rotunda is a large circular room, surmounted by a dome." },
];

function App() {
// Create state variables to keep track of the current card and the user's guess
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // Create a state variable to keep track of the user's guess
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
 
  // Create a state variable to keep track of the current card
  const checkAnswer = () => {
    const currentCard = cardPairs[currentCardIndex];
    if (userGuess.toLowerCase() === currentCard.answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
    setShowAnswer(true);
  };

// Create a function to show the next card
  const showNextCard = () => {
    // Generate a random index for the next card
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(randomIndex);
    setShowAnswer(false);
 };
 // Create a state variable to keep track of whether the answer is being shown
 const [showAnswer, setShowAnswer] = useState(false);

 const toggleAnswer = () => {
  setShowAnswer(!showAnswer);
};
 
// Create a function to show the previous card
const showPreviousCard = () => {
  if (currentCardIndex > 0) {
    setCurrentCardIndex(currentCardIndex - 1);
  } else {
    setCurrentCardIndex(cardPairs.length - 1);
  }
  setShowAnswer(false);
};

// Create a function to update the card display
 const updateCardDisplay = () => {
 const currentCard = cardPairs[currentCardIndex];
  // If the answer is being shown, display the answer. Otherwise, display the question.
 if (showAnswer) {
  return <div>Answer: {currentCard.answer}</div>;
 } else {
  return <div>Question: {currentCard.question}</div>;
 }
};

 return (
 // Create a div to contain the app
 <>
    <div className="App">
      <div className="Header">
        <h1>Art history Study Guide</h1>
        <h4>Test your knowledge on Art pieces and architecture around the world!</h4>
        <h4> Total Cards: {cardPairs.length}</h4>
      </div>
     <div className="Container" onClick={toggleAnswer}>
       {updateCardDisplay()}
            
     </div>
       <div>
         <input type="text" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />
         <button onClick={checkAnswer}>Submit</button>
         <p className="feedback"> {feedback}</p>
         <button onClick={showPreviousCard}>Previous Card</button>
         <button onClick={showNextCard}>Next Card</button>
       </div>
    </div>
 </>
  )
}

export default App
