import React from 'react';
import styled from 'styled-components/native';

interface Props {
  text: string;
  onDelete: () => void;
}

const TodoItem = (props: Props) => {
  const {text, onDelete} = props;
  return (
    <Container>
      <Label>{text}</Label>
      <DeleteButton onPress={onDelete}>
        <Icon source={require('~/Assets/Images/remove.png')} />
      </DeleteButton>
    </Container>
  );
};

export default TodoItem;

const Container = styled.View`
  flex-flow: row nowrap;
  background-color: #fff;
  margin: 2% 5%;
  padding: 4% 5%;
  border-radius: 16px;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-right: 5%;
  flex: 1;
`;

const DeleteButton = styled.TouchableOpacity``;

const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;
