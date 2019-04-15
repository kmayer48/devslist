import React, { Component } from 'react';
import Card from '../components/card';
import cards from '../cards.json';
import Wrapper from "../components/wrapper"
import '../App.css';

class Discover extends Component {

    state = {
        cards,

    };

    // componentDidMount() {
    //     this.loadBooks();
    //   }
    
    //   loadBooks = () => {
    //     API.getBooks()
    //       .then(res =>
    //         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

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
                {this.state.cards.map(card => (

                        <Card
                        id={card.id}
                        key={card.id}
                        name={card.name}
                        skills={card.skills}
                        image={card.image}
                        >  
                        </Card>
                ))}

            </Wrapper>
           

        );
    }   
}

export default Discover;