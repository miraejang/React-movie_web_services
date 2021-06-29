import React from 'react';

function Food({fav}) {
  console.log(fav)
  return <h3>I Like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="pizza" />
      <Food fav="coffee" />
      <Food fav="cake" />
    </div>
  )
}

export default App;
