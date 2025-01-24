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
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Section className="todoapp">
      <Header className="header" value="todos" />

      <Form onSubmit={handleSubmit}>
        <Input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </Form>

      <Section className="main">
        <List className="todo-list">
          <ListItem className="completed">
            <View />
          </ListItem>
          <ListItem className="editing">
            <View />
            <Input className="edit" defaultValue="Editing task" />
          </ListItem>
          <ListItem>
            <View />
          </ListItem>
        </List>

        <Footer className="footer">
          <Span className="todo-count" value="how many items left" />
          <List className="filters">
            <ListItem>
              <Button className="selected" value="All" />
            </ListItem>
            <ListItem>
              <Button value="Active" />
            </ListItem>
            <ListItem>
              <Button value="Completed" />
            </ListItem>
          </List>
          <Button className="clear-completed" value="Clear completed" />
        </Footer>
      </Section>
    </Section>
  );
}

export default App;
