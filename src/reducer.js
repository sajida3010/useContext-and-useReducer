const reducer = (state, action) => {
    switch(action.type) {
      case 'TOGGLE_THEME':
        const newTheme = state.theme === 'light' ? 'dark' : 'light'
        return {...state, theme: newTheme}
      case 'ADD_IDEA' :
          const append = [...state.ideas, action.payload]
          return {...state, ideas: append} ;
       case 'REMOVE_IDEA':
           const filterdata = state.ideas.filter(idea => idea.id != action.payload)
           return {...state, ideas: filterdata}
      default:
        return state
    }
}

export default reducer;