const commonModels = () => {
  return [

  ];
};

export default [
  {
    path: '/',
    models: () => [
      ...commonModels(),
    ],
    page: () => import('./routes/index/IndexPage'),
  },
  {
    path: '/news',
    models: () => [
      // ...commonModels(),
      import('./models/news'),
    ],
    page: () => import('./routes/news/NewsPage'),
  },
];
