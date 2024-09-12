import React from 'react';


const FooterTwo = () => {
    return (
        <footer className="bg-dark">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <a href="#">
                            <img src="../logo512.png" width="256" height="256" alt="Logo carnice" className={'Header_Logo'}/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center">
                            <div className="text footer-text">
                                {/*<p>Copyright © {new Date().getFullYear()} VMMP s.r.o. All Rights Reserved.</p>*/}
                                <p className="blockquote">Copyright © {new Date().getFullYear()} VMMP s.r.o.</p>
                                <figcaption className="blockquote-footer">Developed by Eduard Morozov</figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterTwo;
