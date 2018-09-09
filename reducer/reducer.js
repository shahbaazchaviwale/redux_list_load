const initialState = { age : 20 , history: [], getLoadedData: '',
    list: [
        {
            "name": "amar",
            "age": 30,
            "city": "New York"
        },
        {
            "name": "zkbar",
            "age": 30,
            "city": "New York"
        },
        {
            "name": "baim",
            "age": 30,
            "city": "New York"
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INC":
        return { ...state, age: (state.age += action.value), history: state.history.concat(
            { id: Math.random(), age: state.age }
          ) };
        break;
      case "DEC":
        return { ...state, age: (state.age -= action.value), history: state.history.concat(
            { id: Math.random(), age: state.age }
          ) };
      case "DEL":
        return { ...state, history: state.history.filter(el => el.id !== action.item) };
      case "LOAD":
        console.log("load=>", action.load);
        return { ...state, getLoadedData: (state.getLoadedData += action.load) };
      case "LIST":
        return { ...state, list: state.list };
      case "ASC":
        return { ...state,
            list: [].concat(action.arr_list) };
      case "DSC":
        return { ...state,
            list: [].concat(action.arr_list) };
      default:
        return state;
    }

}
