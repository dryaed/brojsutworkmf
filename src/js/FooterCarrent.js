import React from 'react';


const FooterTwo = () => {
    return (
        <footer className="footer-style-2 ptb--30 bg_image--1 bg-dark" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="#">
                                    <img src="../logo192.png" alt="Logo carnice" className={'Header_Logo'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
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
