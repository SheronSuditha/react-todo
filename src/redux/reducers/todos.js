const initialState = [];

export default function manage_todos(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      console.log(payload.todo);
      state = [
        ...state,
        {
          todo: payload.todo,
          id: payload.id,
        },
      ];
      return state;
      break;
    case "REMOVE_TODO":
      console.log(payload.index);
      return state.filter((todos) => todos.id !== payload.index.id);
      break;
    default:
      return state;
  }
}
