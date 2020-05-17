import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const TodoListContext = createContext<ITodoListContext>({
  todoList: [],
  addTodoList: (_todo: string): void => {},
  removeTodoList: (_index: number): void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  const [todoList, setTodolist] = useState<Array<string>>([]);

  const addTodoList = (todo: string) => {
    const list = [...todoList, todo];
    setTodolist(list);
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  const removeTodoList = (index: number) => {
    let list = todoList.filter((_, i) => index !== i);
    setTodolist(list);
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');
      if (list) {
        setTodolist(JSON.parse(list));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        addTodoList,
        removeTodoList,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContextProvider, TodoListContext};
