import React from 'react'

const Nyhedsbrev = () => {
    return (




        <div className="container col-12 text-right">
            <form>

                <div className="form-group row">
                    <label for="inputEmailAddress3" className="col-sm-2 col-form-label">Email Address</label>
                    <div className="col-sm-10">
                        <input type="EmailAddress" className="form-control" id="inputEmailAddress3" placeholder="Email Address" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="inputFirstName3" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="FirstName" className="form-control" id="inputFirstName3" placeholder="First Name" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="inputEfternavn3" className="col-sm-2 col-form-label">Efternavn</label>
                    <div className="col-sm-10">
                        <input type="Efternavn" className="form-control" id="inputEfternavn3" placeholder="Efternavn" />
                    </div>
                </div>




                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 m-20">Vælg nyhedsbrev</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                <label className="form-check-label" for="gridRadios1">Møllerup - alle</label>


                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" for="gridRadios2">Second radio</label>


                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label className="form-check-label" for="gridRadios2">Second radio</label>
                            </div>
                        </div>
                    </div>

                </fieldset>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-secondary">Tilmeld</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Nyhedsbrev
