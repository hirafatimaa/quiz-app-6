import React from 'react';
import QuizContainer from './components/QuizContainer/QuizContainer';
import { GlobalStyle } from './App.style';
const QuizProvider = (props: any) => {
  return (
    <div>
      
      {props.children}
    </div>
  );
};

const App = () => {
  return (
    <QuizProvider>
      <GlobalStyle/>
      <QuizContainer/>
    </QuizProvider>
  )
}

export default App