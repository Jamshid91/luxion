import React, { Component } from "react";
import TableItem from "./components/TableItem";
import TableList from "./components/TableList";
import { Container, Button, Form } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
class App extends Component {
  state = {
    // show: false,
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };

  // handleClose = (e) => {
  //   e.preventDefault();
  //   this.setState({ show: false });
  // };

  // hanleShow = (e) => {
  //   e.preventDefault();
  //   this.setState({ show: true });
  // };

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: `key${(+new Date()).toString(16)}`, //Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <>
        <Container style={{ paddingTop: "50px" }}>
          <Button
            variant="primary"
            className="openForm"
            // onClick={this.hanleShow}
          >
            Добавить
          </Button>
          <TableItem />
          <TableList
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />

          <Form
            style={{ marginTop: "30px" }}
            onSubmit={this.addItem}
            // show={this.state.show}
            // onHide={this.handleClose}
          >
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Категория</Form.Label>
              <Form.Control as="select" size="lg">
                <option value="-1">Выберите</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Суб-Категория</Form.Label>
              <Form.Control as="select" size="lg">
                <option value="-1">Выберите</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
                <option value="4">5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Имя Продукта</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                value={this.state.currentItem.text}
                onChange={this.handleInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Тип Продукта</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Покупаемая Цена</Form.Label>
              <Form.Control size="lg" type="number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Продаваемая Цена</Form.Label>
              <Form.Control size="lg" type="number" />
            </Form.Group>
            <Button
              style={{ marginTop: "35px" }}
              variant="outline-primary"
              size="lg"
              block
              type="submit"
            >
              Добавить
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default App;
