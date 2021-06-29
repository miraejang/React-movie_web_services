import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: 'pizza',
    image: 'https://bigseventravel.com/wp-content/uploads/2019/11/paulie-1024x727.png',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'coffee',
    image: 'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg',
    rating: 3,
  },
  {
    id: 3,
    name: 'cake',
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rainbow_cake_20402_16x9.jpg',
    rating: 4.9,
  },
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h3>I Like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      )}
    </div>
  )
}

export default App;
