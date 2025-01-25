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
  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedInputValue, setEditedInputValue] = useState("");

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

  const editTodo = (id) => {
    if (editedTodoId === id) {
      const updatedTodos = todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: editedInputValue };
        }

        return todo;
      });

      setTodoList(updatedTodos);
      setEditedTodoId(null);
      setEditedInputValue("");
    } else {
      const todoToEdit = todoList.find((todo) => todo.id === id);
      setEditedTodoId(id);
      setEditedInputValue(todoToEdit.text);
    }
  };

  return (
    <Section className="todoapp">
      <Header className="header" value="Todos" />

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
                onEdit={() => editTodo(todo.id)}
                isEditing={editedTodoId === todo.id}
                editedInputValue={editedInputValue}
                setEditedInputValue={setEditedInputValue}
              />
            </ListItem>
          ))}
        </List>

        <Footer className="footer">
          <Span
            className="todo-count"
            value={`${activeTodoCount} item${
              activeTodoCount !== 1 ? "s" : ""
            } left`}
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
