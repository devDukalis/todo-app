import { useState } from "react";

import Section from "../../components/Section/Sections";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import View from "../../components/View/View";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";
import Span from "../../components/Span/Span";
import Button from "../../components/Button/Button";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: window.self.crypto.randomUUID(),
        text: inputValue,
        createdTime: new Date(),
        completed: false,
      };

      setTodoList([...todoList, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodoList((prevList) => {
      return prevList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  const clearCompletedTodo = () => {
    setTodoList((prevList) => prevList.filter((todo) => !todo.completed));
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeTodoCount = todoList.filter((todo) => !todo.completed).length;

  return (
    <Section className="todoapp">
      <Header className="header" value="todos" />

      <Form onSubmit={handleSubmit}>
        <Input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form>

      <Section className="main">
        <List className="todo-list">
          {filteredTodos.map((todo) => (
            <ListItem key={todo.id}>
              <View
                value={todo.text}
                time={todo.createdTime}
                completed={todo.completed}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            </ListItem>
          ))}
        </List>

        <Footer className="footer">
          <Span
            className="todo-count"
            value={`${activeTodoCount} items left`}
          />

          <List className="filters">
            <ListItem>
              <Button
                className={filter === "all" ? "selected" : ""}
                value="All"
                onClick={() => setFilter("all")}
              />
            </ListItem>
            <ListItem>
              <Button
                className={filter === "active" ? "selected" : ""}
                value="Active"
                onClick={() => setFilter("active")}
              />
            </ListItem>
            <ListItem>
              <Button
                className={filter === "completed" ? "selected" : ""}
                value="Completed"
                onClick={() => setFilter("completed")}
              />
            </ListItem>
          </List>

          <Button
            className="clear-completed"
            value="Clear completed"
            onClick={clearCompletedTodo}
          />
        </Footer>
      </Section>
    </Section>
  );
}

export default App;
