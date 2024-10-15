import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-light bg-gradient">
            <div
                className="testing slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center">
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
                <div className="row justify-content-center align-items-center">
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../bmw520d2019.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">BMW 520d<br></br>(2019)</h5>
                            <p className="card-text">75 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../bmw520d2023.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">BMW 520d<br></br>(2023)</h5>
                            <p className="card-text">110 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../bmw318d2018.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">BMW 318d<br></br>(2018)</h5>
                            <p className="card-text">89 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../bmwx545e.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">BMW x5 45e<br></br></h5>
                            <p className="card-text">75 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../bmw40d2020.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">BMW 40d<br></br>(2020)</h5>
                            <p className="card-text">69 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../bmw30d2020.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">BMW 30d<br></br>(2020)</h5>
                            <p className="card-text">39 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../lexusnx3002019.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">Lexus NX300<br></br>(2019)</h5>
                            <p className="card-text">42 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../minicooper2020.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">Mini Cooper<br></br>(2020)</h5>
                            <p className="card-text">67 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../rangeroverautobiography2023.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">Range Rover Autobiography<br></br>(2023)</h5>
                            <p className="card-text">269 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                    <div className="card carcard col-sm-6 mb-3 mb-sm-0">
                        <img src={"../porschecayman2019.png"} className="card-img-top" alt="carcard"/>
                        <div className="card-body">
                            <h5 className="card-title">Porsche Cayman<br></br>(2019)</h5>
                            <p className="card-text">113 €/den</p>
                            <a href="#contacts" className="btn btn-primary">Pronajem</a>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="border border-3 border-dark-subtle"></hr>
            <div id="contacts">
                <h1 className="display-2">Kontakty</h1>
                <div className="table-responsive">
                <table className="table table-light table-borderless">
                    <tbody>
                    <tr>
                        <th className="text-end"><i className="bi bi-house"></i></th>
                        <td className="text-start col-1">Adresa:</td>
                        <td className="text-start">Frýdlantská 1312/19, Kobylisy, 182 00 Praha</td>
                    </tr>
                    <tr>
                        <th className="text-end"><i className="bi bi-telegram"></i></th>
                        <td className="text-start">Telegram:</td>
                        <td className="text-start"><a href="https://t.me/+420721348147">+420 721 348 147</a></td>
                    </tr>
                    <tr>
                        <th className="text-end"><i className="bi bi-whatsapp"></i></th>
                        <td className="text-start">WhatsApp:</td>
                        <td className="text-start"><a href="https://api.whatsapp.com/send?phone=420721348147">+420 721
                            348 147</a></td>
                    </tr>
                    <tr>
                        <th className="text-end"><i className="bi bi-envelope"></i></th>
                        <td className="text-start">Email:</td>
                        <td className="text-start">vmmp.sro.cze@gmail.com</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    )
}

export default LandingPage;