const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };
const NEXT_COLOR = 'CHANGE-COLOR'
const PREVIOUS_COLOR = 'PREV-STATE-CLOR'

  const actionNext = { type: NEXT_COLOR, type: PREVIOUS_COLOR }

  const reducer = (state = INITIAL_STATE, actionNext) => { 
    switch(actionNext.type) {
        case NEXT_COLOR: return {
          ...state,
          index: state.index >= 5 ? 0 :  state.index + 1
        }
        case PREVIOUS_COLOR: return {
          ...state,
          index: state.index <= 0 ? 5 :  state.index - 1
        }
        default: return state
    }
    };
  
    const store = Redux.createStore(reducer);

    const nextButton = document.getElementById('next')
    const previousButton = document.getElementById('previous')

    nextButton.addEventListener('click', () => {
        store.dispatch( { type: NEXT_COLOR })

        const nameColor = document.getElementById('value')
  
        const requestStore = store.getState()

        const requestBody = document.querySelector('body')

        nameColor.innerText = requestStore.colors[requestStore.index]
        requestBody.style.backgroundColor = requestStore.colors[requestStore.index]
      })
    previousButton.addEventListener('click', () => {
        store.dispatch( { type: PREVIOUS_COLOR })
  
        const requestStore = store.getState()

        const nameColor = document.getElementById('value')

        const requestBody = document.querySelector('body')

        nameColor.innerText = requestStore.colors[requestStore.index]
        requestBody.style.backgroundColor = requestStore.colors[requestStore.index]
    })
    
    


