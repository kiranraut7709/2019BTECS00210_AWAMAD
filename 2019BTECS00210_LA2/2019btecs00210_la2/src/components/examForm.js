import React, { Component } from 'react';

class ExamForm extends Component {
    state = {
        name:'',
        exam:'',
        city:'',
        fees:''
    }
    onChangeName = (e) =>{
        this.setState({name:e.target.value});
    }

    onChangeExam = (e) =>{
        this.setState({exam:e.target.value});
    }

    onChangeCity = (e) =>{
        this.setState({city:e.target.value});
    }

    onChangeFees = (e) =>{
        this.setState({fees:e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefaults();
        console.log(this.state.name);
        console.log(this.state.exam);
        console.log(this.state.city);
        console.log(this.state.fees);
    }


    render() {
        return(
            <div>
                <div>{this.props.formName}</div>
                <br/>
                <form>
                    <input type="text" name = "name" placeholder="Enter Name" onChange={this.onChangeName}/>
                    <br/>
                    <input type="text" name = "exam" placeholder="Enter Exam" onChange={this.onChangeExam}/>
                    <br/>
                    <input type="text" name = "city" placeholder="Enter City" onChange={this.onChangeCity}/>
                    <br/>
                    <input type="text" name = "fees" placeholder="Enter Fees" onChange={this.onChangeFees}/>
                    <br/>
                    <button type="submit" onChange={this.handleSubmit} >Submit</button>
                </form>
            </div>
        );
    }
}



export default ExamForm;