import React from 'react';
import BookCardList from './components/BooksCardList';
import SearchPanel  from './components/SearchPanel';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers'


const store = createStore(rootReducer);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <SearchPanel/>
        <BookCardList/>
      </div>
    </Provider>
    
  );
}

export default App;
