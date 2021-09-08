import React from 'react';
import SearchPanel  from './components/SearchPanel';
import BooksCardListContainer from './components/BooksCardListContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers'
import SearchPanelContainer from './components/SearchPanelContainer';



const store = createStore(rootReducer);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <SearchPanelContainer/>
        <BooksCardListContainer/>
      </div>
    </Provider>
  );
}

export default App;
