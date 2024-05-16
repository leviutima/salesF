import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
    Logo,
} from "./Footer.style";


const Footer = () => {
    return (
            <Box>
                <Logo>
                    <img src="src\assets\logo-salesforce.svg" alt="" />
                </Logo>
                <FooterContainer>
                    <Row>
                        <Column>
                            <Heading>Sobre nós</Heading>
                            <FooterLink to="/Salesforce">
                                O que é a Salesforce?
                            </FooterLink>
                            <FooterLink to="/crm">
                                O que é CRM?
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Produtos</Heading>
                            <FooterLink to="/salescloud">
                                Sales Cloud
                            </FooterLink>
                            <FooterLink to="/einstein-gpt">
                                Einstein GPT
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contato</Heading>
                            <FooterLink to="/contato">
                                Fale conosco
                            </FooterLink>
                        </Column>
                    </Row>
                </FooterContainer>
            </Box>
    );
};
export default Footer;
