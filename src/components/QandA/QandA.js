import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './QandA.css';


export default function QandA() {
	return (
		<Container id="intro" className="intro py-5 min-vh-100">
			<Row>
				<Col className="text-center"><h1 className="fw-bold fs-3">Questions & Answers:</h1></Col>
			</Row>
			<Row className="justify-content-center">
				<Col className="text-center" xs={10} md={10}>
					<Accordion className="accordionMain">
						<Accordion.Item eventKey="0" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #1</Accordion.Header>
							<Accordion.Body>
								<h5>Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.</h5>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #2</Accordion.Header>
							<Accordion.Body>
							<h5>What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.</h5>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="2" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #3</Accordion.Header>
							<Accordion.Body>
							<h5>Rank your 5 favorite and 5 least favorite activities from this <a href=" https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab" target="_blank" id="list">LIST</a>.</h5>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="3" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #4</Accordion.Header>
							<Accordion.Body><h5>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</h5>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="4" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #5</Accordion.Header>
							<Accordion.Body><h5>Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.</h5>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="5" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #6</Accordion.Header>
							<Accordion.Body><h5>A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.</h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="6" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #7</Accordion.Header>
							<Accordion.Body><h5>How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site!</h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="7" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #8</Accordion.Header>
							<Accordion.Body><h5>Please attempt to deploy a function on our service. This need not be complicated. It could be "Hello World". Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.</h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="8" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #9</Accordion.Header>
							<Accordion.Body><h5>We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?</h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruree dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          				</Accordion.Item>
          			</Accordion>
				</Col>
			</Row>
		</Container>
	)
}