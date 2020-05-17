interface ITodoListContext {
  todoList: Array<string>;
  addTodoList: (todo: string) => void;
  removeTodoList: (index: number) => void;
}

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}
