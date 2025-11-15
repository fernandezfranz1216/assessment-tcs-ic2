import { Navbar } from 'react-bootstrap';
import IntroSection from '../components/IntroSection/IntroSection';
import QandA from '../components/QandA/QandA';
import './Home.css';

export default function Home() {
	return (
		<>
			<Navbar id="navbar" expand="lg" className="nav mb-5">
	            <Navbar.Brand href="/" id="brand">Franz Fernandez</Navbar.Brand>
            </Navbar>
            <div id="me">
				<IntroSection />
			</div>
			<div id="q-and-a">
				<QandA />
			</div>
			<div className="footer text-center" id="footer">
				<p>Created by FRANZ FERNANDEZ | Assessment for Technical Customer Support - IC2 position</p>
			</div>
		</>
	)
}