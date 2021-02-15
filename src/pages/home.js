import { useTranslation } from 'react-i18next';
import {Container, Row, Col} from 'react-bootstrap';
import '../lang/i18n';

function Home(){
    const { t } = useTranslation();

    return(
        <Container>
            <Row>
                <Col style={{ padding: "20px" }}>
                    <h1>
                        {t("TITLE")}
                    </h1>
                    <p>
                        {t("DESCRIPTION")}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;