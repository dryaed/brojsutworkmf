import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-light bg-gradient">
            <div className="testing slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <h1 className="MainTitle WhiteText">Car rental in Prague</h1>
                                <p className="mt-5 WhiteText">We rent you cars!</p>
                                <a className="btn btn-outline-info btn-lg" href="#contacts" target="_blank">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carlist" className="container overflow-hidden text-center justify-content-center align-items-center">
                <h1 className="display-1">Auta</h1>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Standard</h5>
                                <p className="card-text">Citroen C4<br></br> 50 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../porsh.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Premium</h5>
                                <p className="card-text">Porshe 718<br></br> 300 €/den</p>
                                <a href="#" className="btn btn-primary">Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contacts">
                <h1 className="display-2">Contact Us</h1>
                <table className="table table-light table-borderless">
                    <tbody>
                    <tr>
                        <th className="text-end">Adresa:</th>
                        <td className="text-start">Frýdlantská 1312/19, Kobylisy, 182 00 Praha</td>
                    </tr>
                    <tr>
                        <th className="text-end">Telefon:</th>
                        <td className="text-start">+420 721 348 147</td>
                    </tr>
                    <tr>
                        <th className="text-end">Email:</th>
                        <td className="text-start">vmmp.sro.cze@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default LandingPage;