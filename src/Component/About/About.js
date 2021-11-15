import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <>
            <div className="Accordion-area">
                <div>
                    <img style={{ width: '600px' }} src={"https://i.ibb.co/JdpB755/39598453-woman-housewife-shopping-for-microwave-oven-smiling.jpg"} alt="" />
                </div>
                <div>
                    <div className="about-para">
                        <h1 className="ms-5 mb-4"><b>Why</b> Shop at Best Electronics?</h1>

                    </div>
                    <p className="ms-5 mb-4 para">Best Electronics, a concern of Zaman Group, is the fastest growing electronics retail company in Bangladesh. Our company was officially launched in 2013 with a clear vision of delivering world-class home appliances from all major global brands to the high-end consumer group of Bangladesh. In 2013, we started with just 12 showrooms in the country and by the grace of Almighty Allah, we have managed to open over 115 own showrooms in just 4.5 years. Over the years, we have managed to take authorized distributorship of almost all major home appliances brands around the world including</p>
                    <div className="Accordion">
                        <Accordion defaultActiveKey="string">
                            <Accordion.Item className="acco-item" eventKey="0">
                                <Accordion.Header>Huge Sales Network</Accordion.Header>
                                <Accordion.Body className="acc-body">
                                    As of February 2018, Best Electronics has over 115 showrooms in Bangladesh. All these showrooms are completely managed by our own staffs.


                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="acco-item" eventKey="1">
                                <Accordion.Header className="acco-item">Largest Collection</Accordion.Header>
                                <Accordion.Body>
                                    At Best Electronics, our honorable customers can enjoy a huge collection of over 700 electronics and electrical home appliances products.


                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="acco-item" eventKey="3">
                                <Accordion.Header>Global Brands</Accordion.Header>
                                <Accordion.Body>
                                    Over the years, we have earned the authorized distributorship of all major global brands like Hitachi, Sharp, Panasonic, Whirlpool, Toshiba and many more.


                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;