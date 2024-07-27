#   React Food Delivery App

#   Using React

#   Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store/Configure our store - configureStore({}) and provide the reducer:{} of cartReducer from step 4  
- Connect our store to our app - using provider wrap everything in <Provider store={appStore} /> // And Provide the above store 
- Create a Slice -  in another file using createSlice({}), add the keys of name, initialState, reducers(which will contain all the actions) and export actions and reducer seperate
- Subscribing to the store using a selector -  to show the data using a hook which is useSelector from redux library and pass only the items selector but not everything
- Dispatch an action - Create a function and use a hook which is useDispatch() by redux, then import an action and pass the value there.  
