import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import { theme } from '../../../styles/colors';

const fade = keyframes`
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleButtonClick = (item: any) => {
    if (item.link) {
      window.open(item.link, "_blank");
      return;
    }
    if (item.scrollTo) {
      scrollTo(item.scrollTo);
    }
  };

  return (
    <RightBlockContainer>
      <Reveal keyframes={fade} duration={1500} triggerOnce={true}>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.isAlternateColor && theme.buttonAlternate}
                        onClick={() => handleButtonClick(item)}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Reveal>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
