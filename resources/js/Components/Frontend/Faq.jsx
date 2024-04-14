import { Accordion, Button, ToggleButton, Collapse } from "react-bootstrap";

const Faq = () => {
    return (
        <Accordion
            defaultActiveKey="collapseTwo"
            className="accordion wow fadeInUp delay-0-4s"
            id="faq-accordion"
        >
            <div className="accordion-item">
                <h5 className="accordion-header">
                    <Button className="accordion-button">
                        What Service We Provide ?
                    </Button>
                </h5>
                <Collapse className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <p>
                            To take a trivial example which undertakes laborious
                            physical exercise except to obtain some advantage
                            pleasure annoying consequences
                        </p>
                    </div>
                </Collapse>
            </div>
            <div className="accordion-item">
                <h5 className="accordion-header">
                    <Button className="accordion-button collapsed">
                        How Many Years Of Experience ?
                    </Button>
                </h5>
                <Collapse className="accordion-collapse">
                    <div className="accordion-body">
                        <p>
                            At vero eos et accusamus dignissimos ducimus
                            voluptatum corrupti quos dolores quas molestias
                            excepturie
                        </p>
                    </div>
                </Collapse>
            </div>
            <div className="accordion-item">
                <h5 className="accordion-header">
                    <Button className="accordion-button collapsed">
                        Have Any Professional Team Member ?
                    </Button>
                </h5>
                <Collapse className="accordion-collapse">
                    <div className="accordion-body">
                        <p>
                            To take a trivial example which undertakes laborious
                            physical exercise except to obtain some advantage
                            pleasure annoying consequences
                        </p>
                    </div>
                </Collapse>
            </div>
            <div className="accordion-item">
                <h5 className="accordion-header">
                    <Button className="accordion-button collapsed">
                        Are You Awards Winning Agency ?
                    </Button>
                </h5>
                <Collapse className="accordion-collapse ">
                    <div className="accordion-body">
                        <p>
                            To take a trivial example which undertakes laborious
                            physical exercise except to obtain some advantage
                            pleasure annoying consequences
                        </p>
                    </div>
                </Collapse>
            </div>
        </Accordion>
    );
};
export default Faq;
