import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InputForm.css";
import ShopList from "./ShopList";


const InputForm = (props) => {
  const [inputList ,setinputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent= (event) => {
    setinputList(event.target.value);
  }
  const listOfItem = () => {
    let item = {
      id : Math.random() * 0.5,
      name : inputList
    }
    setItems((oldItems) => {
      return [...oldItems, item];
    });
    setinputList("");
  }

  const deleteItems = (id) => {

  const newArr = Items.filter(el=>el.id !==id)
  setItems(newArr)

}

  return (
    <>
    <div className="text-area-container">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Add Items to List"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={inputList}
            onChange={itemEvent}
          required/>
          <Button variant="outline-secondary" id="button-addon1" onClick={listOfItem}>
            Add to list
          </Button>
        </InputGroup>
      </div>
      <br />
        <div>
            <ShopList items={Items} deleteHandler={deleteItems}/>
        </div>

</>  
);
};

export default InputForm;
