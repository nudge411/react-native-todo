/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Styled from 'styled-components/native';

import {TodoListContextProvider} from '~/Context/TodoListContext';

// import Todo from './Screens/Todo';

const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <Container />;
      </Container>
    </TodoListContextProvider>
  );
};

export default App;

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;
