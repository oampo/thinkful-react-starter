import React from 'react';
import List from './list'

export default function Board(props) {
  function onAddInputChanged(event) {
    console.log('Input changed!');
  }

  function onAddSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
  }

  return(<div>
    <h1>{ props.title }</h1>

    <List
      title='List 1'
      cards={ [ 'Card 1', 'Card 2', 'Card 3' ] }
      onAddInputChanged={ onAddInputChanged }
      onAddSubmit={ onAddSubmit }
    />

    <List
      title='List 2'
      cards={ [ 'Card 4', 'Card 5', 'Card 6' ] }
      onAddInputChanged={ onAddInputChanged }
      onAddSubmit={ onAddSubmit }
    />

    <List 
      title='List 3'
      cards={ [ 'Card 7', 'Card 8', 'Card 9' ] }
      onAddInputChanged={ onAddInputChanged }
      onAddSubmit={ onAddSubmit }
    />
  </div>);
}
