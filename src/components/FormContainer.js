import React, { Component } from "react";
import MdRemoveCircle from 'react-ionicons/lib/MdRemoveCircle';
import MdEdit from 'react-ionicons/lib/MdCreate';
import '../css/Todo.css'; 

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      },
      todos: [],

      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Programming", "Development", "Designing", "Testing"]
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      // () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      // () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      // () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    // console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      // () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    var index = this.state.editIndex;
    let userData = this.state.newUser;
    let allTodoData = this.state.todos;
    if(allTodoData[index]){
      allTodoData[index] = userData;
    } else {
      allTodoData.push(userData);
    }
    this.setState({
      todos: allTodoData
    })
    // console.log('Final TODO Data ==> ', this.state.todos);
    this.handleClearForm(e);

    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      }
    });
  }

  removeTodo(key) {
    var todoList = this.state.todos;
    todoList.splice(key, 1);
    this.setState({todos : todoList});
  }

  editTodo(key) {
    var todoList = this.state.todos;
    this.setState(
      prevState => ({
        newUser : {
          ...prevState.newUser,
          name : todoList[key]['name'],
          age : todoList[key]['age'],
          gender : todoList[key]['gender'],
          skills : todoList[key]['skills'],
          about : todoList[key]['about']
        },
        editIndex : key
      })
    );
  }

  render() {
    var finalTodos = this.state.todos;
    return (
      <react-fragment>
        <form className="form_container" onSubmit={this.handleFormSubmit}>
          <Input
            inputType={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handleChange={this.handleInput}
          />{" "}
          {/* Name of the user */}
          <Input
            inputType={"number"}
            name={"age"}
            title={"Age"}
            value={this.state.newUser.age}
            placeholder={"Enter your age"}
            handleChange={this.handleAge}
          />{" "}
          {/* Age */}
          <Select
            title={"Gender"}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={"Select Gender"}
            handleChange={this.handleInput}
          />{" "}
          {/* Age Selection */}
          <CheckBox
            title={"Skills"}
            name={"skills"}
            options={this.state.skillOptions}
            selectedOptions={this.state.newUser.skills}
            handleChange={this.handleCheckBox}
          />{" "}
          {/* Skill */}
          <TextArea
            title={"About you."}
            rows={10}
            value={this.state.newUser.about}
            name={"currentPetInfo"}
            handleChange={this.handleTextArea}
            placeholder={"Describe your past experience and skills"}
          />
          {/* About you */}
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />{" "}
          {/* Clear the form */}
        </form>
        <pre className="todo_view">
          {finalTodos.map((data, key) => 
            <ul key={key} className="todo_list">
              <li>
                <span className="remove_todo" onClick={() => this.removeTodo(key)}>
                  <MdRemoveCircle fontSize="25px" />
                </span>
                <span className="edit_todo" onClick={() => this.editTodo(key)}>
                  <MdEdit fontSize="25px" />
                </span>
              </li>
              <li><label className="titles">Name :</label>{data.name}</li>
              <li><label className="titles">Age :</label>{data.age}</li>
              <li><label className="titles">Gender :</label>{data.gender}</li>
              <li><label className="titles">Discription :</label>{data.about}</li>
            </ul>  
          )}
        </pre>
      </react-fragment>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
