import React, { Component } from 'react';
import Card from '../components/card';
// import cards from '../cards.json';
import Wrapper from "../components/wrapper"
import API from "../utils/API"
import '../App.css';

class Discover extends Component {

    state = {
        cards: [],
        key:"",
        name:"",
        skills:"",
        image: ""

    };

    componentDidMount() {
        this.loadCards();
      }
    
      loadCards = () => {
        API.getCards()
          .then(res =>
            this.setState({ cards: res.data, key: "", name: "", skills: "", image: ""  })


          )
          .catch(err => console.log(err));
      };
  

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //       [name]: value
    //     });
    //   };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //       API.saveBook({
    //         title: this.state.title,
    //         author: this.state.author,
    //         synopsis: this.state.synopsis
    //       })
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };
    

    render(){
        return(
            <Wrapper>
                {this.state.cards.map(cards => (

                        <Card
                        key={cards._id}
                        name={cards.name}
                        skills={cards.skills}
                        image={cards.image}
                        >  
                        </Card>
                ))}

            </Wrapper>
           

        );
    }   
}

export default Discover;