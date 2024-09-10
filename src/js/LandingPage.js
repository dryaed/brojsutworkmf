import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-light bg-gradient">
            <div
                className="testing slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <h1 className="MainTitle WhiteText">Pronajem aut v Praze</h1>
                                <p className="mt-5 WhiteText">VMMP - je autopůjčovna Praha. Nabízíme zcela nové vozy za nejlepší ceny pro krátkodobé i dlouhodobé pronájmy. Půjčení vozu nebylo nikdy předtím jednodušší!</p>
                                <a className="btn btn-outline-info btn-lg" href="#contacts">Kontaktovat nás</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carlist"
                 className="container overflow-hidden text-center justify-content-center align-items-center">
                <h1 className="display-1">Auta</h1>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">BMW 520d (2019)</h5>
                                <p className="card-text">75 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">BMW 520d (2023)</h5>
                                <p className="card-text">110 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">BMW 318d (2018)</h5>
                                <p className="card-text">89 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">BMW x5 45e</h5>
                                <p className="card-text">75 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">BMW 40d (2020)</h5>
                                <p className="card-text">69 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">BMW 30d (2020)</h5>
                                <p className="card-text">39 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Lexus NX300 (2019)</h5>
                                <p className="card-text">42 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Mini Cooper (2020)</h5>
                                <p className="card-text">67 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../c4.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Range Rover Autobiography (2023)</h5>
                                <p className="card-text">269 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="card carcard">
                            <img src={"../porsh.png"} className="card-img-top" alt="carcard"/>
                            <div className="card-body">
                                <h5 className="card-title">Porsche Cayman (2019)</h5>
                                <p className="card-text">113 €/den</p>
                                <a href="#" className="btn btn-primary">Pronajem</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border border-3 border-dark-subtle"></hr>
            <div id="contacts">
                <h1 className="display-2">Kontakty</h1>
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