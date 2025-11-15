import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './QandA.css';


export default function QandA() {
	return (
		<Container id="q-and-a" className="intro py-5 min-vh-100">
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
								- I used ReactJS and React-Bootstrap in building this site because these were the tools we used in the online bootcamp I attended. Honestly, the hardest part was trying to remember what I learned in that training bootcamp, given that it's been a while since I last practiced web development.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #2</Accordion.Header>
							<Accordion.Body>
							<h5>What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.</h5>
							- I like how easy it is to deploy projects using your service. One great feature I noticed is how you split the deployment process into three simple parts, which makes it easier for users to understand. I would also suggest adding indicators for required input fields.
							</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="2" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #3</Accordion.Header>
							<Accordion.Body>
							<h5>Rank your 5 favorite and 5 least favorite activities from this <a href=" https://gist.github.com/laurajodz/592402a6336410377dee1a744af846ab" target="_blank" id="list" rel="noopener noreferrer">LIST</a>.</h5>
							<Row>
								<Col>
									<h5>Top 5 Favorites</h5>
									<Row><p>1. Write and maintain Support Guides for our product.</p></Row>
									<Row><p>2. Submit bug reports and potentially bug fixes.</p></Row>
									<Row><p>3. Engage multiple users at once via chat to answer their questions and troubleshoot problems.</p></Row>
									<Row><p>4. Dig through server logs to troubleshoot a customer's website behavior.</p></Row>
									<Row><p>5. Debug a customer's build using a programming language and framework that you've never seen before.</p></Row>
								</Col>
								<Col>
									<h5>Top 5 Least Favorites</h5>
									<Row><p>1. Work with prospective customers to explain our service and the pricing model.</p></Row>
									<Row><p>2. Join a Zoom call with a VIP customer you have been helping via email, upon their request.</p></Row>
									<Row><p>3. Suggest and champion improvements to the Support team's workflow.</p></Row>
									<Row><p>4. Help manage communications during a service outage.</p></Row>
									<Row><p>5. Respond to 20+ support requests via email every day.</p></Row>
								</Col>
							</Row>
							</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="3" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #4</Accordion.Header>
							<Accordion.Body><h5>Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.</h5>
							- <a href="https://www.phind.com/blog/phind-2" id="list" target="_blank" rel="noopener noreferrer">Phind AI</a> is an AI assistant specifically made for technical people. It is very convenient because it supports features that are very helpful in coding such as IDE Integration, answers visualized using diagrams, cards, images, and other visual outputs, etc. It is also up-to-date, context aware and the solutions it provides can be verified to avoid wrong or useless snippets.
							</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="4" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #5</Accordion.Header>
							<Accordion.Body><h5>Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.</h5>
							- Complex terminologies and jargons can get confusing especially for less-technical customers. Based on my research, they are more likely to encounter terms like TTL, A record, or MX and these can be overwhelming for them. I've learned that although most hosting providers handle the automatic setting up of DNS, understanding these words can surely help them do tasks like connecting their domain manually, setting up professional email address, etc. Non-technical users also tend to do a lot of seemingly minor mistakes but can cause troublesome errors such as typing the wrong server address or IP which can sometimes prevent users from visiting their domains.
							</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="5" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #6</Accordion.Header>
							<Accordion.Body><h5>A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.</h5>
							- From what I've learned through research, these kind of errors usually appear when there's a problem with the user's configuration. It can sometimes be missing files or modules, incorrect commands, etc. First of all, I would ask them if they want to try the AI feature that provides diagnosis on the error that occurs when building. If they me to assist instead, then I would reassure the customer that these type of errors can be resolved by following simple troubleshooting procedures. This response can build trust and it is a gentle way to ask for their cooperation. Then I would ask them to check if a certain command failed in their build script. I would also ask them to double check their files, check their spellings and punctuations and ask them to follow the instructions from the platform again but this time with me as their guide.  
							</Accordion.Body>
          				</Accordion.Item>
          				<Accordion.Item eventKey="6" className="accordionItem p-4 my-2" id="myAccordion">
							<Accordion.Header>Question #7</Accordion.Header>
							<Accordion.Body><h5>How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site!</h5>
										<p>- According to my research on netlify docs, to redirect from “/netlify/anything” on my site, to https://www.google.com/search?q=anything and to redirect proxy, a _redirects file must be first created in the publish directory containing the following code:
										</p>
										<Col id="snippet">
											<Row># 301 Permanent Redirect</Row>
											<Row>/netlify/* https://www.google.com/search?q=:splat 301</Row>

											<Row># 200 Proxy Redirect</Row>
											<Row>/netlify/* https://www.google.com/search?q=:splat 200</Row>
										</Col>
							</Accordion.Body>
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