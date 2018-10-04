import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            allUsers : [],
            radioGroup : {
                phpradio: "true",
                javaradio: "false",
                rubyradio : "false"
            }
        }
        this.saveUsers = this.saveUsers.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
    }

    updateUserName(event){
        // console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
    }

    saveUsers(ev) {
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username);
        this.setState({
            allUsers : currentUser,
            username : ""
        })
        //console.log(this.state.allUsers);
        ev.preventDefault();
    }

    radioHandler(radio) {
        console.log('radio');
        console.log(radio);
    }

    render(){
        return(
            <form>
                <label>
                    User Name : 
                    <input type="text" name="username" value={this.state.username} onChange={this.updateUserName.bind(this)}/>
                </label>
                {/* <p>UserName is :{this.state.username}</p> */}
                <div>
                    Developers Categories : 
                    <br/>
                    <label>
                        PHP :  
                        <input type="radio" name="devcategory" value="php" checked={this.state.radioGroup['phpradio']} onChange={this.radioHandler}></input>
                    </label>
                    <br />
                    <label>
                        Java :
                        <input type="radio" name="devcategory" value="java" checked={this.state.radioGroup['javaradio']} onChange={this.radioHandler}></input>
                    </label>
                    <br />
                    <label>
                        Ruby :
                        <input type="radio" name="devcategory" value="ruby" checked={this.state.radioGroup['rubyradio']} onChange={this.radioHandler}></input>
                    </label>
                </div>
                <button onClick={this.saveUsers}>Save</button>
            </form>
        )
    }
}

export default Form;