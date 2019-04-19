import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Loginpage extends Component {
    render() {
        return (
            <div className="login-container">
            <div className="wrapper">
                <form className="form-signin">
                    <div className="tab-content">
                        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#login" role="tab"><i class="fas fa-user mr-1"></i>
                                Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#register" role="tab"><i class="fas fa-user-plus mr-1"></i>
                                Register</a>
                            </li>
                        </ul>
                        <div class="tab-pane fade in show active" id="login" role="tabpanel">
                            <div class="modal-body mb-1">
                                <div class="md-form form-sm mb-5">
                                    <i class="fas fa-envelope prefix"></i>
                                        <input type="email" id="modalLRInput10" class="form-control form-control-sm validate" />
                                        <label data-error="wrong" data-success="right" for="modalLRInput10">Username</label>
                                </div>

                                <div class="md-form form-sm mb-4">
                                    <i class="fas fa-lock prefix"></i>
                                        <input type="password" id="modalLRInput11" class="form-control form-control-sm validate" />
                                    <label data-error="wrong" data-success="right" for="modalLRInput11">Your password</label>
                                </div>
                                <div class="text-center mt-2">
                                    <Link to="/profile"><button class="btn btn-danger">Log in <i class="fas fa-sign-in ml-1"></i></button></Link>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="register" role="tabpanel">
                            <div class="md-form form-sm mb-5">
                                <div class="text-center form-sm mt-2"> <br></br><br></br>
                                    <Link to="/Register"><button class="btn btn-danger">Sign up <i class="fas fa-sign-in ml-1"></i></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default Loginpage;