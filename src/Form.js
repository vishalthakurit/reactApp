import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            allUsers : [],
            radioGroup : {
                phpradio: false,
                javaradio: true,
                rubyradio : false,
                radioGroupClass : 'radio_section'
            },
            checkboxGroup : {
                reacttech : true,
                nodetech : false,
                angulartech : false,
                checkboxGroupClass : 'checkbox_section' 
            },
            selectedValue : 'express'
        }
        this.saveUsers = this.saveUsers.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
    }
    
    updateUserName(event){
        this.setState({
            username: event.target.value
        })
    }

    radioHandler(radio) {
        let radioButton = this.state.radioGroup;
        for (var key in radioButton) {
            radioButton[key] = false;
        }
        radioButton[radio.target.value] = radio.target.checked;   
         this.setState({
             radioGroup: radioButton
         })
    }

    checkboxHandler(check) {
        console.log(check.target.value);
        let checkboxCont = this.state.checkboxGroup;
        checkboxCont[check.target.value] = check.target.checked;
        this.setState({
            checkboxGroup : checkboxCont
        })
    }

    selectHandler(sel) {
        this.setState({
            selectedValue : sel.target.value
        })
    }

    saveUsers(ev) {
        let currentUser = this.state.allUsers;
        if (this.state.username && this.state.username !== "") {
            currentUser.push(this.state.username);
            this.setState({
                allUsers : currentUser,
                username : ""
            })
        }
        //console.log(this.state.allUsers);
        ev.preventDefault();
    }

    render(){
        return(
            <form>
                <label>
                    User Name : 
                    <input type="text" name="username" value={this.state.username} onChange={this.updateUserName.bind(this)}/>
                </label>
                {/* <p>UserName is :{this.state.username}</p> */}
                { /* RADIO SECTION */ }
                <div className={this.state.radioGroup['radioGroupClass']}>
                    Developers Categories : 
                    <br/>
                    <label>
                        PHP :  
                        <input type="radio" name="devcategory" value="phpradio" checked={this.state.radioGroup['phpradio']} onChange={this.radioHandler}></input>
                    </label>
                    <br />
                    <label>
                        JAVA :
                        <input type="radio" name="devcategory" value="javaradio" checked={this.state.radioGroup['javaradio']} onChange={this.radioHandler}></input>
                    </label>
                    <br />
                    <label>
                        RUBY :
                        <input type="radio" name="devcategory" value="rubyradio" checked={this.state.radioGroup['rubyradio']} onChange={this.radioHandler} />
                    </label>
                </div>
                {/* CHECKBOX SECTION */}
                <div className={this.state.radioGroup['checkboxGroupClass']}>
                    Technology Categories : 
                    <br/>
                    <label>
                        REACT :  
                        <input type="checkbox" name="tech" value="reacttech" checked={this.state.checkboxGroup['reacttech']} onChange={this.checkboxHandler}></input>
                    </label>
                    <br />
                    <label>
                        NODE :
                        <input type="checkbox" name="tech" value="nodetech" checked={this.state.checkboxGroup['nodetech']} onChange={this.checkboxHandler}></input>
                    </label>
                    <br />
                    <label>
                        ANGULAR :
                        <input type="checkbox" name="tech" value="angulartech" checked={this.state.checkboxGroup['angulartech']} onChange={this.checkboxHandler} />
                    </label>
                </div>
                {/* SELECT FIELD */}
                <select value={this.state.selectedValue} onChange={this.selectHandler}> 
                    <option value="ruby">Ruby</option>
                    <option value="python">Python</option>
                    <option value="express">Express</option>
                </select>
                <button onClick={this.saveUsers}>Save</button>
            </form>
        )
    }
}

export default Form;