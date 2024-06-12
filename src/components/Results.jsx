import { calculateInvestmentResults, formatter } from '../util/investment.js';
import { Table, Row, Col } from "react-bootstrap";

export default function Results({values}) {

    const resData = calculateInvestmentResults(values);

    const initialInvestment = resData[0].valueEndOfYear - resData[0].interest - resData[0].annualInvestment;

    return (
        <Row className="justify-content-center ms-0 me-0">
            <Col sm={8}>
                <Table d-flex striped bordered hover responsive="sm" variant="dark" sm={6}>
                    <thead>
                        <tr>
                            <th style={{color: '#83e6c0'}}>Year</th>
                            <th style={{color: '#83e6c0'}}>Investment value</th>
                            <th style={{color: '#83e6c0'}}>Interest (Year)</th>
                            <th style={{color: '#83e6c0'}}>Total value at End of Year</th>
                            <th style={{color: '#83e6c0'}}>Invested capital</th>
                        </tr>
                    </thead>
                    <tbody>
                    {resData.map((data) => {
                        const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                        const totalValue = data.valueEndOfYear - totalInterest;
                        return (<tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalValue)}</td>
                        </tr>);
                    })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}