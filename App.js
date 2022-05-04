import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import Todo from './components/Todo'

export default function App() {
  const [todos, setTodos] = useState([
     {id: 1, title : 'Milk'},
     {id: 2, title : 'Meat'},
     {id: 3, title : 'Eggs'},
     {id: 4, title : 'Bread'},
     {id: 5, title : 'Orange'},
     {id: 6, title : 'Yoghurt'},
     {id: 7, title : 'Coffee'},
     {id: 8, title : 'Onion'},
     {id: 9, title : 'Olive oil'},
     {id: 10, title : 'Honey'}
  ])

const addTodo = (title) => {
  const newTodo = {
    id: Date.now().toString(),
    title: title
  }

  setTodos((prevTodos) => {
    return [
      ...prevTodos,
      newTodo
    ]
  })
}

const removeTodo = id => {
  setTodos(prev => prev.filter(todo => todo.id !== id))
}

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <Form onSubmit={addTodo}  />

        <View>
          { todos.map(todo => {
            return <Todo todo={todo} key={todo.id} onRemove={removeTodo} />
          }) }
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
