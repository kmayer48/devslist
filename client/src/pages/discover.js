import React, { Component } from 'react';
import Card from '../components/card';
// import cards from '../cards.json';
import Wrapper from "../components/wrapper";
import API from "../utils/API";
// import StarRatingComponent from 'react-star-rating-component';
import '../App.css';
import  { Redirect } from 'react-router-dom';

class Discover extends Component {

    state = {
        cards: [],
        id:"",
        skills:"",
        name:"",
        image:[],
        currentPostion:"",
        location:"",
        
    };

    componentDidMount() {
        this.loadCards();
      }
    
      loadCards = () => {
        API.getCards()
          .then(res =>
            this.setState({ cards: res.data, key: "", skills: "", name: "", image:[] ,currentPostion:"",location:""  })

          )
          .catch(err => console.log(err));

          return <Redirect to='/profile'/>
      };
  
      

    render(){
        return(
            <Wrapper>
                {this.state.cards.map(cards => (

                        <Card
                        key={cards._id}
                        name={cards.name}
                        skills={cards.skills}
                        image={cards.image}
                        currentPostion={cards.currentPostion}
                        location={cards.location}
                        id={cards._id}
                        >   
                        </Card>
                        
                ))}

               
            </Wrapper>
           

        );
    }   
}

export default Discover;