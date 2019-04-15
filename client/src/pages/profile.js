import React, {Component} from 'react';
import Wrapper from "../components/wrapper"
import ProfileCard from "../components/profileCard";
// import cards from '../cards.json';
import '../App.css';

class Profile extends Component {
    // state = {
    //     cards,
    // };

    render(){
        return(
            <Wrapper>
                <ProfileCard></ProfileCard>

            </Wrapper>
           
            

        )
    }
}

export default Profile;