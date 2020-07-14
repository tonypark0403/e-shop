const helloMiddleWare = (store) => (next) => (action) => {
  console.log('Hello Middleware triggered:', action);
  next(action);
};

export default helloMiddleWare;
