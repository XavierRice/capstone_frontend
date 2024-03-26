import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
	return (
		<footer className="bg-light footer ">
			<div className="px-5">
				<Row className="gy-5">
					<Col lg={8} className="pe-xxl-10">
						<Row className="gy-5">
							<Col sm={6} lg={4}>
								<h5 className=" footer-title-01">About</h5>
								<ul className="list-unstyled footer-link-01">
									<li>
										<a className="" href="#">
											About Us
										</a>
									</li>
									<li>
										<a className="" href="#">
											Blog
										</a>
									</li>
									<li>
										<a className="" href="#">
											Our Ingredients
										</a>
									</li>
									<li>
										<a className="" href="#">
											Our Resellers
										</a>
									</li>
								</ul>
							</Col>

							<Col sm={6} lg={4}>
								<h5 className=" footer-title-01">Connect</h5>
								<ul className="list-unstyled footer-link-01">
									<li>
										<a className="" href="#">
											Contact Us
										</a>
									</li>
									<li>
										<a className="" href="#">
											FAQs
										</a>
									</li>
									<li>
										<a className="" href="#">
											Offers & Kits
										</a>
									</li>
									<li>
										<a className="" href="#">
											Get the App
										</a>
									</li>
									<li>
										<a className="" href="#">
											Store Locator
										</a>
									</li>
								</ul>
							</Col>
						</Row>
					</Col>
					<Col lg={4}>
						<h5 className=" footer-title-01 fs-5">
							Subscribe to our newsletter
						</h5>
						<div>
							<form className="d-flex flex-row my-3 p-1 bg-white input-group">
								<input
									type="email"
									className="form-control rounded border-0"
									placeholder="Your Email"
								/>
								<button
									className="btn btn-secondary flex-shrink-0"
									type="submit"
								>
									Subscribe
								</button>
							</form>
							{/* <p className="fs-sm ">I agree to receive newsletters</p> */}
						</div>
					</Col>
					<p className="m-0 ">
						© 2023 Copyright by{" "}
						<a className="text-reset" href="#">
							Impactify
						</a>
					</p>
				</Row>
			</div>
			<div className="footer-bottom small py-3 border-top border-white border-opacity-10">
				<div></div>
			</div>
		</footer>
	);
}

export default Footer;
