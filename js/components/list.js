import React from 'react';
import Card from './card'

export default function List(props) {
  return(<div>
    <h1>{ props.title }</h1>

    { props.cards.map((cardTitle, index) => {
        return(<Card key={ index } title={ cardTitle } />)
      })
    }

    <form onSubmit={ props.onAddSubmit }>
      <input type='text' onChange={ props.onAddInputChanged } />
      <input type='submit' />
    </form>
  </div>);
}
