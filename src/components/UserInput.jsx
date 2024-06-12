import { Row, Col } from "react-bootstrap";

export default function UserInput({userInput, onChange}) { 
    return(
        <>
            <section id="user-input">
                <Row>
                    <Col>
                        <label>Enter intial Amount: </label>
                        <input 
                        type='number' 
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', event.target.value)}
                        />
                    </Col>
                    <Col>
                        <label>Enter annual placement: </label>
                        <input
                        type='number' 
                        required 
                        value={userInput.annualInvestment}
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Expected return : </label>
                        <input
                        type='number' 
                        required 
                        value={userInput.expectedReturn}
                        onChange={(event) => onChange('expectedReturn', event.target.value)}
                        />
                    </Col>
                    <Col>
                        <label>Enter duration of this placement: </label>
                        <input
                        type='number' 
                        required 
                        value={userInput.duration}
                        onChange={(event) => onChange('duration', event.target.value)}
                        />
                    </Col>
                </Row>
            </section>
        </>
    )
}