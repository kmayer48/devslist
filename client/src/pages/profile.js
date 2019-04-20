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

    componentDidMount() {
        API.getProfile(this.props.match.params.id)
          .then(res => this.setState({ profile: res.data }))
          .catch(err => console.log(err));
      }


      

    render(){
        return(
            <Wrapper>
                <ProfileCard>
                    <p>hello</p>
                <h1>
                {this.state.profile.name} by {this.state.profile.skills}
              </h1>
                </ProfileCard>

            </Wrapper>
           
            

        )
    }
}

export default Profile;