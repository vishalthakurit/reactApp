import React, { Component } from 'react';
import '../css/Form.css';

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
        //console.log(check.target.value);
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
        console.log(this.state.allUsers);
        ev.preventDefault();
    }

    submitForm(event){
        event.preventDefault();
        let radioChecks = this.state.radioGroup;
        let techCheckboxs = this.state.checkboxGroup;
        let selected_dev_cat; let selected_tech_cat = [];
        for (var key in radioChecks) {
            if(radioChecks[key] === true){
                selected_dev_cat = key;
            }
        }
        for (var k in techCheckboxs) {
            if(techCheckboxs[k] === true){
                selected_tech_cat.push(k);
            }
        }
        const data = {
            username : this.username.value,
            devcategory : selected_dev_cat,
            techcategory : selected_tech_cat,
            langcategory : this.langcat.value
        }
        console.log(data);
    }

    render(){
        return(
            <form onSubmit={(e) => this.submitForm(e)}>
                <label className="username_input_label">
                    User Name : 
                    <input ref={(input) => this.username = input} type="text" className="form-control" name="username" value={this.state.username} onChange={this.updateUserName.bind(this)}/>
                    <button className="save_username btn btn-primary" type="submit" onClick={this.saveUsers}>Save User</button>
                </label>
                {/* <p>UserName is :{this.state.username}</p> */}
                { /* RADIO SECTION */ }
                <div className={this.state.radioGroup['radioGroupClass']}>
                    <b><i>Developers Categories :</i></b> 
                    <label>
                        <label className="title">PHP</label> 
                        <input ref={(input) => this.devcat = input} type="radio" name="devcategory" value="phpradio" checked={this.state.radioGroup['phpradio']} onChange={this.radioHandler}></input>
                    </label>
                    <span className="separator">|</span>
                    <label>
                        <label className="title">JAVA</label> 
                        <input ref={(input) => this.devcat = input} type="radio" name="devcategory" value="javaradio" checked={this.state.radioGroup['javaradio']} onChange={this.radioHandler}></input>
                    </label>
                    <span className="separator">|</span>
                    <label>
                        <label className="title">RUBY</label>
                        <input ref={(input) => this.devcat = input} type="radio" name="devcategory" value="rubyradio" checked={this.state.radioGroup['rubyradio']} onChange={this.radioHandler} />
                    </label>
                </div>
                {/* CHECKBOX SECTION */}
                <div className={this.state.checkboxGroup['checkboxGroupClass']}>
                    <b><i>Technology Categories : </i></b>
                    <label>
                        <label className="title">REACT</label>
                        <input ref={(input) => this.techcat = input} type="checkbox" name="tech" value="reacttech" checked={this.state.checkboxGroup['reacttech']} onChange={this.checkboxHandler}></input>
                    </label>
                    <span className="separator">|</span>
                    <label>
                        <label className="title">NODE</label>
                        <input ref={(input) => this.techcat = input} type="checkbox" name="tech" value="nodetech" checked={this.state.checkboxGroup['nodetech']} onChange={this.checkboxHandler}></input>
                    </label>
                    <span className="separator">|</span>
                    <label>
                        <label className="title">ANGULAR</label>
                        <input ref={(input) => this.techcat = input} type="checkbox" name="tech" value="angulartech" checked={this.state.checkboxGroup['angulartech']} onChange={this.checkboxHandler} />
                    </label>
                </div>
                {/* SELECT FIELD */}
                <select ref={(input) => this.langcat = input} className="form-control" value={this.state.selectedValue} onChange={this.selectHandler}> 
                    <option value="ruby">Ruby</option>
                    <option value="python">Python</option>
                    <option value="express">Express</option>
                </select>
                <br/>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;