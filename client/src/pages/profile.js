import React, {Component} from 'react';
import Wrapper from "../components/wrapper"
import ProfileCard from "../components/profileCard";
// import cards from '../cards.json';
import '../App.css';
import API from '../utils/API';

class Profile extends Component {
    state = {
        profile:{}
    };

    
    componentDidMount(){
        this.loadCards();
    } 
    loadCards = () => {
        API.getProfile(this.props.match.params.id)
        .then(res => {console.log(this.props.match.params.id);this.setState({ profile: res.data })})
        .catch(err => console.log(err));
    }
      

    render(){
        return(
            <Wrapper>
                <ProfileCard>
                <h1>
                {this.state.profile.name} by {this.state.profile.skills}
              </h1>
                </ProfileCard>

            </Wrapper>
           
            

        )
    }
}

export default Profile;