import React, { Component } from 'react';

class StudentElective extends Component {
    state = {
        name:'',
        PRN:'',
        firstSubject:'',
        reason1:'',
        secondSubject:'',
        reason2:''
    }
    onChangeName = (e) =>{
        this.setState({name:e.target.value});
    }

    onChangePRN = (e) =>{
        this.setState({PRN:e.target.value});
    }

    onChangefirstSubject = (e) =>{
        this.setState({firstSubject:e.target.value});
    }

    onChangereason1 = (e) =>{
        this.setState({reason1:e.target.value});
    }

    onChangereason2 = (e) =>{
        this.setState({reason2:e.target.value});
    }

    onChangesecondSubject = (e) =>{
        this.setState({secondSubject:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.PRN);
        console.log(this.state.firstSubject);
        console.log(this.state.reason1)
        console.log(this.state.secondSubject);
        console.log(this.state.reason1)
    }


    render() {
        return(
            <div>
                <div>{this.props.formName}</div>
                <br/>
                <form>
                    <label>Full Name: </label>
                    <input type="text" name = "name" placeholder="Enter Name" onChange={this.onChangeName} required/>
                    <br/>
                    <label>PRN: </label>
                    <input type="text" name = "PRN" placeholder="Enter PRN" onChange={this.onChangePRN} required/>
                    <br/>
                    <label>First Subject: </label>
                    <input type="text" name = "firstSubject" placeholder="Enter First Subject" onChange={this.onChangefirstSubject} required/>
                    <br/>
                    <label>Why this is your First Preference? </label>
                    <input type="text" name = "reason1" placeholder="Enter Reason" onChange={this.onChangereason1} required/>
                    <br/>
                    <label>Second Subject: </label>
                    <input type="text" name = "secondSubject" placeholder="Enter Second Subject" onChange={this.onChangesecondSubject} required/>
                    <br/>
                    <label>Why this is your Second Preference? </label>
                    <input type="text" name = "reason2" placeholder="Enter Reason" onChange={this.onChangereason2} required/>
                    <br/>
                    <button type="submit" onClick={this.handleSubmit} >Submit</button>
                </form>
            </div>
        );
    }
}



export default StudentElective;