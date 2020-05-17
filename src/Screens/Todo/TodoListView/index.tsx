import React from 'react';
import styled from 'styled-components/native';

import Header from './Header';
import TodoList from './TodoList';

interface Props {}

const TodoListView = ({}: Props) => {
  return (
    <Container>
      <Header />
      <TodoList />
    </Container>
  );
};
export default TodoListView;

const Container = styled.SafeAreaView`
  flex: 0.8;
`;
