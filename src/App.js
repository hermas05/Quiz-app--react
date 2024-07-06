import {useState} from 'react';
import './App.css';

function App() {

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [mark, setMark] = useState(0);
  const [flag, setflag] = useState(null);
  const handleClick =(e,correctValue)=>{
    setflag(e);
    if(correctValue){
      setMark(mark+1)
      
    }

  }
  const [next, setnext] = useState(0);
  const nextButton =(n)=>{
    if(n<questions.length)
    setnext(n); 
    setflag(null);
  }
  
  const prevButton =(n)=>{
    if(n>=0)
    setnext(n); 
  }

  const [sub,setSub]=useState(false)
  const hanldeSubmit=()=>{
    setSub(true);
  }

  return (
    <div className="App">
      
      {
        sub?<h1 className='mark'>Your score is <b>{mark}</b></h1>:
      
      <>
      <>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {next+1}</span>
        </div>
        <div className='question-text'>{questions[next].questionText}</div>
      </div>
      <div className='answer-section'>
        {
          questions[next].answerOptions.map((ans,index)=>{
            return(
              <button onClick={()=>handleClick(index,ans.isCorrect)} style={{ backgroundColor: flag===index ? "grey" : "black" }}>{ans.answerText}</button>
            );
          })
        }
        
      </div>
      </>
      <div className="next">
      <span className="mov-buttons" onClick={()=>prevButton(next-1)}>Previous</span>
      {
      next===3?<span className="mov-buttons" onClick={()=>{hanldeSubmit()}}>Submit</span>:<span className="mov-buttons" onClick={()=>nextButton(next+1)}>Next</span>
      
      }
      </div>
      </>
      }
    </div>
  );
}

export default App;
