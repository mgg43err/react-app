let initialState = {
			names: ["Noah", "John", "Kris"],
}

const sidebarReducer = (state=initialState, action) => {
  switch (action.type) { 
    case "":  /*constant*/
      //logic;
      return state;
    default:
      return state;
  }
 }

export default sidebarReducer;