import React, { Component } from "react";

class Login extends Component {
    render() {
        return(
            <div className="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">
                        <div className="modal-c-tabs">
                            <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fas fa-user mr-1"></i>
                                Login</a>

                            <div className="tab-content">
                                <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                                    <div className="modal-body mb-1">
                                        <div className="md-form form-sm mb-5">
                                            <i className="fas fa-envelope prefix"></i>
                                            <input type="email" id="modalLRInput10" className="form-control form-control-sm validate" />
                                            <label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;