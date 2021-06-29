import React from 'react';

function Food({name, picture}) {
  return <div>
    <h3>I Like {name}</h3>
    <img src={picture} alt={name} />
  </div>
}

const foodILike = [
  {
    name: 'pizza',
    image: 'https://bigseventravel.com/wp-content/uploads/2019/11/paulie-1024x727.png',
  }, {
    name: 'coffee',
    image: 'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg',
  }, {
    name: 'cake',
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rainbow_cake_20402_16x9.jpg',
  },
];

function renderFood(dish) {
  return <Food naswer={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>
  )
}

export default App;
