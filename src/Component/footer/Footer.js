import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faListUl, faAddressCard, faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">

            {/*======= Footer ====== */}
            <div>
                {/*====== Contacts==== */}
                <h3>Contacts</h3>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} />Email:istiaqueahemd@gmail.com</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} />Phone:098766545</p>


            </div>
            <div>
                {/*====== About ===== */}
                <h3>About</h3>
                <p><FontAwesomeIcon className="icon" icon={faListUl} />The Company</p>
                <p><FontAwesomeIcon className="icon" icon={faListUl} />Our Values</p><p><FontAwesomeIcon className="icon" icon={faListUl} />Our Mission</p><p><FontAwesomeIcon className="icon" icon={faListUl} />Opportunity</p>
                <p><FontAwesomeIcon className="icon" icon={faListUl} />Responsibility</p>
                <small className="copy-right">CopyRight<FontAwesomeIcon className="icon" icon={faCopyright} />Istiaque</small>

            </div>
            <div>
                {/*======= Address ====== */}
                <h3>Address</h3>
                < address className="address"><FontAwesomeIcon className="icon" icon={faAddressCard} />
                    Street:  41, arambagh, motijheel c/a, 1000

                    City:   Dhaka

                    State/province/area:    Dhaka

                    Phone number  017 11303876

                    Zip code   1000

                    Country calling code  +880

                    Country  Bangladesh
                </address>
            </div>

        </div>
    );
};

export default Footer;