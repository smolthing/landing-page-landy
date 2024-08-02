import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Image } from "../../common/Image";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  Para,
  Large,
  Chat,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  SocialLinkStyle
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <SocialLinkStyle
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <Image src={src} width="25px" height="25px" />
      </SocialLinkStyle>
    );
  };

  return (
    <FooterSection>
      <Container border={true} >
        <Row justify="space-between" style={{ paddingTop: "3rem" }}>
          <Col lg={6} md={12} sm={24} xs={24} style={{ paddingBottom: "2rem" }}>
            <Title>Landy</Title>
            <Row>
              <SocialLink
                href="https://github.com/smolthing/landing-page-landy"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/example"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/example"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/example/"
                src="medium.svg"
              />
            </Row>
            <Row>
              <Col>
                <Label htmlFor="select-lang">{t("Language")}</Label>
                <LanguageSwitchContainer>
                  <LanguageSwitch onClick={() => handleChange("en")}>
                    <Image
                      src="united-states.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                    />
                  </LanguageSwitch>
                  <LanguageSwitch onClick={() => handleChange("es")}>
                    <Image
                      src="spain.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                    />
                  </LanguageSwitch>
                </LanguageSwitchContainer>
              </Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24} style={{ paddingBottom: "2rem" }}>
              <Title>{t("Company")}</Title>
              <Large href="/">
                {t("About us")}
              </Large>
              <Large href="/">
                {t("Terms & Conditions")}
              </Large>
              <Large href="/">
                {t("Privacy")}
              </Large>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24} style={{ paddingBottom: "2rem" }}>
            <Language>{t("Download")}</Language>
            <Large href="https://github.com/smolthing/landing-page-landy" target="_blank">
              {t("Github repository")}
            </Large>
          </Col>
          <Col lg={6} md={12} sm={24} xs={24} style={{ paddingBottom: "2rem" }}>
            <Language>{t("Contact us")}</Language>
            <Para>
              {t(`Do you have any question? Feel free to reach out.`)}
            </Para>
            <Chat href="mailto:example@example.com">{t(`Let's Chat`)}</Chat>
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);