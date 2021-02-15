import { useTranslation } from 'react-i18next';
import {Container, Row, Col} from 'react-bootstrap';
import ContactUsForm from '../forms/contactUsForm';

function ContactUs(){
    const { t } = useTranslation();

    return(
        <Container>
            <Row>
                <Col style={{ padding: "20px" }}>
                    <ContactUsForm />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;