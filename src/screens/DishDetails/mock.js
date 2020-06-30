// id - should be randomly generated
export default {
  id: '12',
  title: 'Paella Fry rice',
  reviews: 14,
  rating: 4,
  isLiked: true,
  comments: 200,
  author: {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Juicy Bob',
  },
  description:
    'Dont just stick to white and jollof rice! Try out this coconut rice recipe',
  images: [
    'https://media.istockphoto.com/photos/homemade-glazed-yeast-donuts-picture-id1198710908?b=1&k=6&m=1198710908&s=170667a&w=0&h=q4SwuRnVrkb72lNYlmvtA0HyCzPQHAOm1qLSVmUvpwg=',
    'https://media.istockphoto.com/photos/homemade-glazed-yeast-donuts-picture-id1198710908?b=1&k=6&m=1198710908&s=170667a&w=0&h=q4SwuRnVrkb72lNYlmvtA0HyCzPQHAOm1qLSVmUvpwg=',
  ],
  category: 'Sugar',
  createdAt: new Date().toISOString(),
  ingredients: [
    {
      id: 1,
      quantity: 3,
      unit: 'cups',
      of: 'flour',
    },
    {
      id: 2,
      quantity: 1,
      unit: 'teaspoon',
      of: 'salt',
    },
    {
      id: 3,
      quantity: 5,
      unit: 'teaspoon',
      of: 'baking powder',
    },
    {
      id: 4,
      quantity: 1,
      unit: 'teaspoon',
      of: 'cinnamon - powdered',
    },
    {
      id: 5,
      quantity: 1,
      unit: 'teaspoon',
      of: 'nutmeg - powdered',
    },
    {
      id: 6,
      quantity: 2,
      unit: 'tablespoon',
      of: 'butter',
    },
    {
      id: 7,
      quantity: 3,
      unit: 'cups',
      of: 'flour',
    },
    {
      id: 8,
      quantity: 2,
      unit: '',
      of: 'eggs beaten well',
    },
    {
      id: 9,
      quantity: 3,
      unit: 'cups',
      of: 'milk',
    },
  ],
  steps: [
    {
      id: 1,
      step: 1,
      do:
        'Sift flour with salt, baking powder, cinnamon and nutmeg and keep aside',
      image:
        'https://media.istockphoto.com/photos/homemade-glazed-yeast-donuts-picture-id1198710908?b=1&k=6&m=1198710908&s=170667a&w=0&h=q4SwuRnVrkb72lNYlmvtA0HyCzPQHAOm1qLSVmUvpwg=',
    },
    {
      id: 2,
      step: 2,
      do: 'Cream butter and sugar, Add eggs and beat well',
      image:
        'https://media.istockphoto.com/photos/homemade-glazed-yeast-donuts-picture-id1198710908?b=1&k=6&m=1198710908&s=170667a&w=0&h=q4SwuRnVrkb72lNYlmvtA0HyCzPQHAOm1qLSVmUvpwg=',
    },
    {
      id: 3,
      step: 3,
      do:
        'Sift flour with salt, baking powder, cinnamon and nutmeg and keep aside',
    },
    {
      id: 4,
      step: 4,
      do: 'Roll the dough on a lightly floured surface to 1 inch thickness',
      image:
        'https://media.istockphoto.com/photos/homemade-glazed-yeast-donuts-picture-id1198710908?b=1&k=6&m=1198710908&s=170667a&w=0&h=q4SwuRnVrkb72lNYlmvtA0HyCzPQHAOm1qLSVmUvpwg=',
    },
    {
      id: 5,
      step: 5,
      do: 'Cut with floured doughnut cutter and let stand for 15 minutes',
    },
    {
      id: 6,
      step: 6,
      do: 'Heat oil and add the doughnuts to it over high-heat',
    },
    {
      id: 7,
      step: 7,
      do: 'Turn immediately and lower heat to medium and fry till brown',
    },
    {
      id: 8,
      step: 8,
      do: 'Drain an absorbent paper and serve',
    },
  ],
  healthBenefits: [
    {
      id: 1,
      gain: 'They are highly beneficial for your mental well being',
    },
    {
      id: 2,
      gain:
        'Same researchers say that the donut and coffee combo could help enhance your memory',
    },
    {
      id: 3,
      gain:
        'Not only are they fried, but full of sugar. Sugar gives you energy',
    },
    {
      id: 4,
      gain: 'Source of Calcium',
    },
    {
      id: 5,
      gain: 'Source of Iron',
    },
  ],
};

export const comments = {
  count: 1,
  items: [
    {
      id: 1,
      author: {
        id: 1,
        name: 'Scott Martial',
        avatar: 'https://i.pravatar.cc/300',
      },
      message: 'This really helped me alot, thank you',
      createdAt: new Date().toISOString(),
      rating: 4,
    },
  ],
};
