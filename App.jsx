import { useState } from 'react'
import './App.css'

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
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const showNextCard = () => {
    // Generate a random index for the next card
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    setCurrentCardIndex(randomIndex);
    setShowAnswer(false);
 };
 
 const [showAnswer, setShowAnswer] = useState(false);

 const toggleAnswer = () => {
  setShowAnswer(!showAnswer);
};


 const updateCardDisplay = () => {
 const currentCard = cardPairs[currentCardIndex];
  if (showAnswer) {
  return <div>Answer: {currentCard.answer}</div>;
 } else {
  return <div>Question: {currentCard.question}</div>;
 }
};
 
 return (
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
         <button onClick={showNextCard}>Next Card</button>
       </div>
    </div>
 </>
  )
}

export default App
