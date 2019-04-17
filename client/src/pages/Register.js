import React from 'react';
import ImageUploader from 'react-images-upload';
import "./styleRegister.css";
import axios from "axios";
import  { Redirect } from 'react-router-dom'

const skills = ["React", "Angular", "CSS", "Html", "JavaScript", "Jquery", "Bootstrap", "Materialize", "Sass", "LESS", "Heroku", "Git", "GitHub", "Ember", "Backbone", "HandleBars", "Grunt", "Karma", "Mocha","Nodejs", "Java", "PHP", "Python", "Ruby", "Laravel", "Apache", "NGINX", "MySQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "XAMPP", "WampServer", "Laragon", "Jira", "Data-Factory", "Data-Generator" ];

class Register extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      skills: {},
      name: "",
      password: "",
      email: "",
      githubRepo: "",
      image: [],
      currentPosition: "",
      experience:"",
      location: "",
      education: "",
      certifications: "",
      professionalStatement: "",
      pictures: [],
      uploadedImage: '',
      selectedFile: null,
    };
    skills.forEach(skill => {
      this.state.skills[skill] = false;
    });
  }


//   state = {

//     name: "",
//     password: "",
//     githubRepo: "",
//     image: "",
//     currentPosition: "",
//     experience:"",
//     location: "",
//     education: "",
//     certifications: "",
//     professionalStatement: "",
//     pictures: [],
//     uploadedImage: '',
//     skills: {},
    
// }

fileSelectedHandler = event => {
  console.log(event.target.file[0]);
    this.setState({
      selectedFile: event.target.files[0]
    })
}

fileUploadHandler = () => {
  const fd = new FormData();
  fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
  axios.post('')
    .then(res => {
      console.log()
    });
}

onDrop = (picture) => {
  this.setState({
      pictures: this.state.pictures.concat(picture),
  }, () => {
    console.log(this.state)
    var FR= new FileReader();
    FR.readAsDataURL( this.state.pictures[0] );
    debugger
    this.setState({
      uploadedImage: FR.result,
    })
  });
}



change = e => {
  this.setState({
    [e.target.name]: e.target.value,
  })
}

onChange = e => {

  const { name } = e.target;
  const skills = Object.assign({}, this.state.skills);
  skills[name] = !skills[name];
  console.log(skills);

  this.setState ({
      skills
  });
}



submit = () => {
  
  let arr = [];
  Object.keys(this.state.skills).forEach(key => {
    if (this.state.skills[key]) {
      arr.push(key);
    }
  });

  arr.join(", ");

  let fields = {
    name: this.state.name,
    password: this.state.password,
    email: this.state.email,
    githubRepo: this.state.githubRepo,
    image: this.state.uploadedImage,
    currentPosition: this.state.currentPosition,
    experience: this.state.experience,
    location: this.state.location,
    education: this.state.education,
    certifications: this.state.certifications,
    professionalStatement: this.state.professionalStatement,
    skillset: arr
  }

  axios.post(fields)
    .then(res => {
      console.log()
    });

  console.log("fields", fields)
  //console.log("arr", arr.join(", "));
  this.setState({
    name: "",
    password: "",
    email: "",
    githubRepo: "",
    image: "",
    currentPosition: "",
    experience:"",
    location: "",
    education: "",
    certifications: "",
    professionalStatement: "",
  })

  return <Redirect to='/profile'/>

};

  
    render() {
      return (
        
        <div className="box">

        <h1>Developer Registration</h1>
        <h5>Show off those skills!</h5>
        <br/>
            Name
            <br/>
            <input
                name = "name"
                placeholder="John Doe"
                value={this.state.name}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
            Password
            <br/>
            <input
                type = "password"
                name = "password"
                placeholder="password"
                value={this.state.password}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
            email
            <br/>
            <input
                type = "email"
                name = "email"
                placeholder="numOneDev@google.com"
                value={this.state.email}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
            <lable>Github URL</lable>
            <br/>
            <input
                name = "githubRepo"
                placeholder="https://github.com/..."
                value={this.state.githubRepo}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
            <lable>Upload an Image</lable>
            <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />

            {/* <input type="file" onChange={this.fileSelectedHandler}/>
            <button onClick={this.fileUploadHandler}>Upload image!</button> */}


            {this.state.uploadedImage ?  <img className="profileImg" src={this.state.uploadedImage} /> : ''}
            <img className="profileImg" src={this.state.uploadedImage} onChange={e=>this.changeImg}/>
           
            <br/>
            <br/>
            <lable>Current Position</lable>
            <br/>
            <input
                name = "currentPosition"
                placeholder="Software Engineer"
                value={this.state.currentPosition}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
            <lable>Professional Experience</lable>
            <br/>
            <textarea
                name = "experience"
                placeholder="Contributed software engineering expertise in the development of..."
                value={this.state.experience}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
            <lable>Current Location</lable>
            <br/>
            <input
                name = "location"
                placeholder="Washington D.C."
                value={this.state.location}
                onChange={e => this.change(e)}
            />
            <br/>
            <br/>
          <lable>Previous Education</lable>
            <br/>
            <textarea
                name = "education"
                placeholder=" The Pennsylvainia State University - BS Computer Science"
                value={this.state.education}
                onChange={e => this.change(e)}
            />
             <br/>
            <br/>
          <label>Certifications</label>
            <br/>
            <textarea
                name = "certifications"
                placeholder=" GW Software Engineering Bootcamp Certification"
                value={this.state.certifications}
                onChange={e => this.change(e)}
            />
          <br/>
          <br/>
          Development Skills
          {Object.keys(this.state.skills).map(key => {
          const isChecked = this.state.skills[key];
          return (
            <div>
              <input
                className="checkBoxes "
                name={key}
                type="checkbox"
                checked={isChecked}
                onChange={this.onChange}
              />
              <label className="checkBoxLabels col-md-2">{key}</label>
            </div>
          );
        })}
          <br/>
          <br/>
          <br/>
          <br/>
          <button className="submitMe col-md-12" onClick={() => this.submit()}>Submit</button>  
          
        
          
        </div>
      );
    }
  
  }

  export default Register;