import React, { useState, useEffect, useReducer } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';
import ThemeContext from './ThemeContext';
import reducer from './reducer';
import {initialState} from './action';

function App() {
  const [ideas, setIdeas] = useState([]);
  // const [theme, setTheme] = useState('light');
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    document.title = `Ideabox (${ideas.length})`
  })

  const addIdea = (newIdea) => {
    // setIdeas([...ideas, newIdea]);
    dispatch({type: 'ADD_IDEA', payload: newIdea})
  }

  const deleteIdea = (id) => {
    // const filteredIdeas = ideas.filter(idea => idea.id !== id);
    // setIdeas(filteredIdeas);
    dispatch({type: 'REMOVE_IDEA', payload: id})
  }

  const toggleTheme = () => {
    /** While using context 
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    */
   const action = {type: 'TOGGLE_THEME'}
   dispatch(action);
  }

  return(
    <ThemeContext.Provider value = {state.theme}>
      <main className='App'>
        <h1>IdeaBox</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Form addIdea={addIdea} />
        <Ideas ideas={state.ideas} deleteIdea={deleteIdea} />
      </main>
    </ThemeContext.Provider>
  )
}

export default App;
