import { Container, Row, Col } from 'react-bootstrap';
import './IntroSection.css';

export default function IntroSection() {
	return (
		<Container id="intro" className="intro py-5 align-items-center">
			<Row className="justify-content-center">
				<Col className="text-center" xs={10} md={8}>
					<h1 className="fw-bold fs-1">Hi! My name is Franz</h1>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col className="text-center" xs={10} md={8}>
					<p className="fs-3">a Technical Customer Support - IC2 applicant. And below are my responses to the assessment questions.</p>
				</Col>
			</Row>
		</Container>
	)
}