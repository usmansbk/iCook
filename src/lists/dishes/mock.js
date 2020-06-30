// id - should be randomly generated
export default [
  {
    id: '1234',
    title: 'Coconut rice',
    likes: 4,
    comments: 8,
    author: {
      id: 3,
      name: 'Black Smith',
      avatar: 'https://i.pravatar.cc/300',
    },
    description:
      'Dont just stick to white and jollof rice! Try out this coconut rice recipe',
    isLiked: true,
    images: [
      'https://cdn.pixabay.com/photo/2016/02/19/11/30/shrimp-1209744__480.jpg',
      'https://cdn.pixabay.com/photo/2016/02/19/11/30/shrimp-1209744__480.jpg',
      'https://cdn.pixabay.com/photo/2016/02/19/11/30/shrimp-1209744__480.jpg',
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '123',
    title: 'Coconut rice',
    likes: 14,
    comments: 200,
    isPinned: true,
    author: {
      id: 2,
      name: 'Sandra Tomsfield thimad adf adfad adfa',
      avatar: 'https://i.pravatar.cc/300',
    },
    description:
      'Dont just stick to white and jollof rice! Try out this coconut rice recipe',
    images: [
      'https://cdn.pixabay.com/photo/2017/04/05/22/43/rice-2206668__480.jpg',
      'https://cdn.pixabay.com/photo/2017/04/05/22/43/rice-2206668__480.jpg',
      'https://cdn.pixabay.com/photo/2017/04/05/22/43/rice-2206668__480.jpg',
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: '12',
    title: 'Paella Fry rice',
    likes: 14,
    comments: 200,
    author: {
      id: 1,
      name: 'Juicy Bob',
      avatar: 'https://i.pravatar.cc/300',
    },
    description:
      'Dont just stick to white and jollof rice! Try out this coconut rice recipe',
    images: [
      'https://cdn.pixabay.com/photo/2017/06/21/22/44/paella-2428945__480.jpg',
      'https://cdn.pixabay.com/photo/2017/06/21/22/44/paella-2428945__480.jpg',
    ],
    createdAt: new Date().toISOString(),
  },
];
