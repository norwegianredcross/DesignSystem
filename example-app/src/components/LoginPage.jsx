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
  Divider,
  Label
} from '@digdir/designsystemet-react';

// Import styled-components for custom styling
import styled from 'styled-components';

// Styled components using Red Cross tokens
const LoginPageContainer = styled.div`
  font-family: var(--ds-font-family);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  background-color: var(--ds-color-background-default);
  color: var(--ds-color-text-default);
  overflow-y: auto;
`;

const Header = styled.header`
  background-color: var(--ds-color-surface-default);
  box-shadow: var(--ds-shadow-sm);
  padding: var(--ds-spacing-4);
  width: 100%;
`;

const LogoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--ds-spacing-2) 0;
`;

const RodeKorsLogo = styled.img`
  height: 40px;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: var(--ds-spacing-6);
  width: 100%;
`;

const LoginContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const LoginTitle = styled(Heading)`
  margin-bottom: var(--ds-spacing-6);
  font-weight: var(--ds-font-weight-semibold);
  color: var(--ds-color-text-default);
  border-bottom: 1px solid var(--ds-color-border-default);
  padding-bottom: var(--ds-spacing-4);
`;

const LoginColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ds-spacing-6);
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
`;

const RightColumn = styled.div`
  width: 100%;
`;

const VippsSection = styled.div`
  background-color: var(--ds-color-surface-default);
  border-radius: var(--ds-border-radius-sm);
  padding: var(--ds-spacing-6);
  height: 100%;
  box-shadow: var(--ds-shadow-sm);
`;

const SectionTitle = styled(Heading)`
  margin-bottom: var(--ds-spacing-5);
  font-weight: var(--ds-font-weight-semibold);
  color: var(--ds-color-text-default);
`;

const InfoText = styled(Paragraph)`
  margin-bottom: var(--ds-spacing-4);
  line-height: 1.5;
  color: var(--ds-color-text-default);
  
  strong {
    font-weight: var(--ds-font-weight-semibold);
  }
`;

const SubsectionTitle = styled(Heading)`
  margin: var(--ds-spacing-5) 0 var(--ds-spacing-3);
  font-weight: var(--ds-font-weight-semibold);
  color: var(--ds-color-text-default);
`;

const HelpLinkContainer = styled.div`
  text-align: right;
  margin-top: var(--ds-spacing-5);
`;

const StyledLink = styled(Link)`
  color: var(--ds-color-primary-500);
  font-size: var(--ds-font-size-sm);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalIconSpan = styled.span`
  margin-left: var(--ds-spacing-2);
  display: inline-flex;
  align-items: center;
  
  img {
    height: 12px;
  }
`;

const LoginOptions = styled.div`
  background-color: var(--ds-color-surface-default);
  border-radius: var(--ds-border-radius-sm);
  padding: var(--ds-spacing-6);
  height: 100%;
  box-shadow: var(--ds-shadow-sm);
`;

const VippsButton = styled.button`
  width: 100%;
  padding: var(--ds-spacing-3);
  background-color: var(--ds-color-orange-500);
  border: none;
  border-radius: var(--ds-border-radius-sm);
  cursor: pointer;
  margin-bottom: var(--ds-spacing-5);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: var(--ds-color-orange-600);
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
  margin: var(--ds-spacing-5) 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--ds-color-border-default);
  }
  
  span {
    padding: 0 var(--ds-spacing-4);
    color: var(--ds-color-text-placeholder);
    font-size: var(--ds-font-size-xs);
    font-weight: var(--ds-font-weight-semibold);
  }
`;

const OktaButton = styled.button`
  width: 100%;
  padding: var(--ds-spacing-3);
  background-color: var(--ds-color-surface-default);
  border: 1px solid var(--ds-color-border-default);
  border-radius: var(--ds-border-radius-sm);
  cursor: pointer;
  margin-bottom: var(--ds-spacing-5);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: var(--ds-color-background-subtle);
  }
`;

const OktaButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--ds-spacing-2);
`;

const OktaText = styled.span`
  font-weight: var(--ds-font-weight-semibold);
  color: var(--ds-color-text-default);
`;

const OktaLogo = styled.img`
  height: 24px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--ds-spacing-5);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTextfield = styled(Textfield)`
  width: 100%;
  
  & input {
    width: 100%;
    padding: var(--ds-spacing-3);
    border: 1px solid var(--ds-color-border-default);
    border-radius: var(--ds-border-radius-sm);
    font-size: var(--ds-font-size-md);
    
    &:focus {
      border-color: var(--ds-color-primary-500);
      box-shadow: 0 0 0 2px rgba(227, 34, 25, 0.2);
    }
  }
  
  & label {
    margin-bottom: var(--ds-spacing-2);
    font-weight: var(--ds-font-weight-medium);
    font-size: var(--ds-font-size-md);
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-top: calc(-1 * var(--ds-spacing-2));
  margin-bottom: var(--ds-spacing-4);
  
  a {
    color: var(--ds-color-primary-500);
    font-size: var(--ds-font-size-sm);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  padding: var(--ds-spacing-3);
  background-color: var(--ds-color-primary-500);
  color: white;
  border: none;
  border-radius: var(--ds-border-radius-sm);
  cursor: pointer;
  font-weight: var(--ds-font-weight-semibold);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--ds-spacing-2);
  
  &:hover {
    background-color: var(--ds-color-primary-600);
  }
`;

const LoginIcon = styled.span`
  display: inline-flex;
  align-items: center;
  
  img {
    height: 16px;
  }
`;

const Footer = styled.footer`
  background-color: var(--ds-color-surface-default);
  padding: var(--ds-spacing-5) var(--ds-spacing-6);
  border-top: 1px solid var(--ds-color-border-default);
  width: 100%;
`;

const FooterLinks = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--ds-spacing-4);
  }
`;

const FooterLinkGroup = styled.div`
  display: flex;
  gap: var(--ds-spacing-5);
  
  a {
    color: var(--ds-color-text-default);
    text-decoration: none;
    font-size: var(--ds-font-size-sm);
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterService = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--ds-spacing-2);
  font-size: var(--ds-font-size-sm);
`;

const ServiceLabel = styled.span`
  font-weight: var(--ds-font-weight-semibold);
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
                    <StyledTextfield 
                      id="email" 
                      label="E-post"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <StyledTextfield 
                      id="password" 
                      label="Passord"
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
          <FooterLinkGroup>
            <Link href="#">Personvern</Link>
            <Link href="#">Informasjonskapsler</Link>
          </FooterLinkGroup>
          <FooterService>
            <ServiceLabel>FRIVILLIGSERVICE:</ServiceLabel>
            <span>E-post: frivilligservice@redcross.no</span>
            <span>Telefon: 22 05 40 00 (tastvalg 3)</span>
          </FooterService>
        </FooterLinks>
      </Footer>
    </LoginPageContainer>
  );
};

export default LoginPage;
