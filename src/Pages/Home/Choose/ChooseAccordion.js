import React from "react";
import { Accordion } from "react-bootstrap";

export const ChooseAccordion = () => {
	return (
		<Accordion defaultActiveKey='0'>
			<Accordion.Item eventKey='0'>
				<Accordion.Header>
					<span className='text-danger text-bold fs-5'>
						We Are Creative & Professional
					</span>
				</Accordion.Header>
				<Accordion.Body className='text-muted'>
					With over 60 years of providing world class service to their customers
					on the asset side, a need to provide a one stop shop for a” true
					customer service logistic solution” was introduced. By adding this
					dimension to an already dynamic and customer centric asset based
					provider, we feel we bring a total solution.
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey='1'>
				<Accordion.Header>
					{" "}
					<span className='text-danger text-bold fs-5'>
						We Are Creative & Professional
					</span>
				</Accordion.Header>
				<Accordion.Body className='text-muted'>
					With over 60 years of providing world class service to their customers
					on the asset side, a need to provide a one stop shop for a” true
					customer service logistic solution” was introduced. By adding this
					dimension to an already dynamic and customer centric asset based
					provider, we feel we bring a total solution.
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
