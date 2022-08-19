// import { combineReducers } from 'redux';

const THEME_INITIAL_STATE = {
    theme: 'dark',
  };

  const actionTheme = 'CHANGE-THEME'

  const actionAtv = () => {
    return { type: actionTheme }
  } 

  const themeReducer = (state = THEME_INITIAL_STATE, action) => {
    console.log('action atv', action);
    switch (action.type) {
        case actionTheme: return {
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light'
        }
      default:
        return state;
    }
  };

//   const STATUS_INITIAL_STATE = {
//     status: 'offline',
//   };

//   const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
//     switch (action.type) {
//         // case actionTheme: return {
//         //     ...state,
//         //     theme: state.theme === 'dark' ? 'light' : 'dark'
//         // }
//       default:
//         return state;
//     }
//   };

//   const reducerCombinado = combineReducers({
//     statusReducer,
//     themeReducer
//   })

  const store = Redux.createStore(themeReducer)

  const themeButton = document.getElementById('toggle-theme');
  const statusButton = document.getElementById('toggle-status');

  themeButton.addEventListener('click', () => {

    store.dispatch( { type: actionTheme })
    const requestStore = store.getState()

    console.log(requestStore);

    const colorBody = requestStore.theme === 'dark' ? 'black' : 'white'

    const requestBody = document.querySelector('body')
    requestBody.style.backgroundColor = colorBody
  });

  statusButton.addEventListener('click', () => {
    // coloque o código aqui.
  });