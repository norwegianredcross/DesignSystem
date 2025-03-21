import React, { useState } from 'react';
// Import images
import rodeKorsLogo from '../assets/Redcross_logo.svg';
import vippsLogo from '../assets/vipps_logo.svg';
import oktaLogo from '../assets/okta_logo.svg';
import emailIcon from '../assets/e-mail icon.svg';
import externalIcon from '../assets/icon_external_page.svg';

// Import Digdir design system components
import { 
  Button, 
  Textfield, 
  Link, 
  Heading, 
  Paragraph, 
  Card,
  Divider,
  Label
} from '@digdir/designsystemet-react';

// Custom styles to match the current design
import { styled } from 'styled-components';

// Styled components to maintain the current look
const LoginPageContainer = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--ds-color-primary-background-default, #faf7f5);
  color: var(--ds-color-primary-text-default, #333);
`;

const Header = styled.header`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  padding: 0.5rem 0;
`;

const RodeKorsLogo = styled.img`
  height: 40px;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const LoginContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const LoginTitle = styled(Heading)`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
  color: #333;
`;

const LoginColumns = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const VippsSection = styled.div`
  background-color: var(--ds-color-primary-surface-default, white);
  border-radius: var(--ds-border-radius-md, 8px);
  padding: var(--ds-size-6, 2rem);
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled(Heading)`
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const InfoText = styled(Paragraph)`
  margin-bottom: 1.5rem;
  line-height: 1.5;
  color: #333;
`;

const SubsectionTitle = styled(Heading)`
  margin: 2rem 0 1rem;
  font-weight: 500;
  color: #333;
`;

const HelpLinkContainer = styled.div`
  text-align: right;
  margin-top: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #333;
  font-size: 0.9rem;
  text-decoration: underline;
  display: inline-flex;
  align-items: center;
`;

const ExternalIconSpan = styled.span`
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
  
  img {
    height: 12px;
    width: auto;
  }
`;

const LoginOptions = styled(Card)`
  padding: 2rem;
  border-radius: 8px;
  height: 100%;
`;

const VippsButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--ds-color-orange-8, #FF5B24);
  border: none;
  border-radius: var(--ds-border-radius-md, 8px);
  cursor: pointer;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: var(--ds-color-orange-9, #e6511f);
  }
`;

const VippsButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VippsLogo = styled.img`
  height: 24px;
`;

const StyledDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  span {
    padding: 0 1rem;
    color: #777;
    font-size: 0.8rem;
  }
`;

const OktaButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const OktaButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const OktaText = styled.span`
  font-weight: 500;
  color: #333;
`;

const OktaLogo = styled.img`
  height: 24px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;

const StyledTextfield = styled(Textfield)`
  width: 100%;
  
  input {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 1.5rem;
  
  a {
    color: #333;
    font-size: 0.8rem;
    text-decoration: underline;
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--ds-color-primary-border-default, #E32219);
  color: var(--ds-color-primary-text-on-color, white);
  border: none;
  border-radius: var(--ds-border-radius-md, 8px);
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: var(--ds-color-primary-border-hover, #c91d15);
  }
`;

const LoginIcon = styled.span`
  display: inline-flex;
  align-items: center;
  
  img {
    height: 16px;
    width: auto;
  }
`;

const Footer = styled.footer`
  background-color: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  
  a {
    color: #333;
    text-decoration: underline;
    margin-right: 1.5rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const FooterService = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    margin-bottom: 0.3rem;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <LoginPageContainer>
      <Header>
        <LogoContainer>
          <RodeKorsLogo src={rodeKorsLogo} alt="Røde Kors Logo" />
        </LogoContainer>
      </Header>

      <MainContent>
        <LoginContainer>
          <LoginTitle level={1}>Login</LoginTitle>
          
          <LoginColumns>
            <LeftColumn>
              <VippsSection>
                <SectionTitle level={2}>Ny <br />VIPPS-pålogging</SectionTitle>
                
                <InfoText>
                  Hvis du er <strong>ny bruker</strong> og har registrert deg hos Vipps er det bare 
                  å logge på videre med vipps-knappen.
                </InfoText>
                
                <InfoText>
                  Hvis du er en <strong>eksisterende bruker</strong> og ønsker å logge inn med 
                  vipps for første gang, må vi koble profilen din til vipps.
                </InfoText>
                
                <SubsectionTitle level={3}>Andre alternativer</SubsectionTitle>
                
                <InfoText>
                  Bruk Okta-appen eller brukernavnet og passordet du har fått fra 
                  frivillighetstjenesten vår.
                </InfoText>
                
                <HelpLinkContainer>
                  <StyledLink href="#">
                    Trenger hjelp? 
                    <ExternalIconSpan>
                      <img src={externalIcon} alt="External link" />
                    </ExternalIconSpan>
                  </StyledLink>
                </HelpLinkContainer>
              </VippsSection>
            </LeftColumn>
            
            <RightColumn>
              <LoginOptions>
                <VippsButton>
                  <VippsButtonContent>
                    <VippsLogo src={vippsLogo} alt="Vipps" />
                  </VippsButtonContent>
                </VippsButton>
                
                <StyledDivider>
                  <span>ELLER</span>
                </StyledDivider>
                
                <OktaButton>
                  <OktaButtonContent>
                    <OktaText>OKTA FASTPASS</OktaText>
                    <OktaLogo src={oktaLogo} alt="Okta" />
                  </OktaButtonContent>
                </OktaButton>
                
                <StyledDivider>
                  <span>ELLER</span>
                </StyledDivider>
                
                <LoginForm onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="email">E-post</Label>
                    <StyledTextfield 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="password">Passord</Label>
                    <StyledTextfield 
                      id="password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>
                  
                  <ForgotPassword>
                    <Link href="#">Glemt passord?</Link>
                  </ForgotPassword>
                  
                  <LoginButton type="submit" color="danger">
                    LOGIN 
                    <LoginIcon>
                      <img src={emailIcon} alt="Email" />
                    </LoginIcon>
                  </LoginButton>
                </LoginForm>
              </LoginOptions>
            </RightColumn>
          </LoginColumns>
        </LoginContainer>
      </MainContent>
      
      <Footer>
        <FooterLinks>
          <div>
            <Link href="#">Personvern</Link>
            <Link href="#">Informasjonskapsler</Link>
          </div>
          <FooterService>
            <span>FRIVILLIGSERVICE:</span>
            <span>E-post: frivilligservice@redcross.no</span>
            <span>Telefon: 22 05 40 00 (tastvalg 3)</span>
          </FooterService>
        </FooterLinks>
      </Footer>
    </LoginPageContainer>
  );
};

export default LoginPage;
