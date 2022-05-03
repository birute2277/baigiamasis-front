import React from 'react';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer column p-r-100 m-r-100">

            <Link className="footerLink" to={"/rules"}><p>Taisyklės ir privatumo politika</p></Link>

            <p className="footerP">&copy; 2022 Birutė Petrauskienė</p>

        </div>
    );
};

export default Footer;