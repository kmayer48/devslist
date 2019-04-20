import React, { Component } from 'react';
import "./header.css"

class Header extends Component {
    render() {
        return (
          <header>
            <div className="jumbotron jumbotron-fluid">
              <div className="head">
                <h1>Devs List</h1>
                <div>
                  {/* <p>
                    <br />
                    <button type="button" className="btn btn-danger" onClick="/Client">
                      Find an expert
                    </button>
                  </p> */}
                </div>
              </div>
            </div>
            <div className="content-slider">
              <div className="slider">
                <div className="mask">
                  <ul>
                    <li className="anim1">
                      <div className="quote">"The best place to find developers without having to break the checks and balances of your company"</div>
                      <div className="source">- The Vierge</div>
                    </li>
                    <li className="anim2">
                      <div className="quote">"A go-to place when you're team is suddenly short [...] those events happen very often, but there's hope"</div>
                      <div className="source">- Consortium Architects</div>
                    </li>
                    <li className="anim3">
                      <div className="quote">"I can't believe it's not butter"</div>
                      <div className="source">- Butter</div>
                    </li>
                    <li className="anim4">
                      <div className="quote">"Tech companies simply cannot find the quality employees they want to hire. The solution: Dev's List"</div>
                      <div className="source">- CNNC Bussiness</div>
                    </li>
                    <li className="anim5">
                      <div className="quote">"I don't know how I got here"</div>
                      <div className="source">- A lost quote</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        );
    }
}

export default Header;

