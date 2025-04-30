// src/pages/Home/index.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Button,
  Card,
  CardBlock,
} from "@digdir/designsystemet-react";
import styles from "./styles.module.css";

import yourHeroImage from "../../assets/testimg.png";
import cardImage1 from "../../assets/Image.png";
import cardImage2 from "../../assets/Image.png";
import cardImage3 from "../../assets/Image.png";
import { PersonIcon as Person } from "@navikt/aksel-icons";

const navLinks = [
  { id: "konferanssenter", href: "/conference", label: "Konferanssenter" },
  { id: "frivillig", href: "#", label: "Bli frivillig" },
  { id: "arbeid", href: "#", label: "Vårt arbeid" },
  { id: "kontakt", href: "#", label: "Kontakt oss" },
];

const handleLoginClick = () => {
  alert("Header button clicked!");
};

const handleMembershipClick = () => {
  alert("Membership button clicked!");
};

const HomePage: React.FC = () => {
  const logoSvg = (
    <svg
      width="151"
      height="48"
      viewBox="0 0 151 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="logo" clipPath="url(#clip0_13847_119023)">
        <g id="a">
          <path
            id="Vector"
            d="M150.742 0.518772H0.018898V47.4812H150.742V0.518772Z"
            fill="white"
          />
        </g>
        <g id="b">
          <g id="Group">
            <path
              id="Vector_2"
              d="M46.6812 14.127C47.7323 13.958 49.309 13.8267 51.0546 13.8267C52.8002 13.8267 54.7148 14.1457 55.7659 14.9716C56.6293 15.6661 57.0985 16.6797 57.0985 18.0124C57.0985 19.345 55.7846 21.1469 54.5271 21.5974V21.6537C55.5406 22.0667 56.1037 23.0427 56.4604 24.3754C56.9108 26.0084 57.3613 27.9041 57.6429 28.4672H54.2831C54.039 28.0543 53.7012 26.8718 53.2695 25.0886C52.8753 23.268 52.2559 22.7799 50.9232 22.7612H49.9284V28.486H46.6624V14.1457L46.6812 14.127ZM49.9472 20.3774H51.2423C52.8753 20.3774 53.8513 19.5515 53.8513 18.2939C53.8513 17.0363 52.9504 16.2855 51.43 16.2668C50.6229 16.2668 50.1724 16.3231 49.9472 16.3794V20.3961V20.3774Z"
              fill="black"
            />
            <path
              id="Vector_3"
              d="M66.8214 18.2376L67.835 16.7548L68.9799 17.5619L68.0039 19.0072C69.1301 19.9832 69.7683 21.4097 69.7683 23.1741C69.7683 26.9281 67.0091 28.7112 64.2687 28.7112C61.5283 28.7112 62.5043 28.5423 61.7723 28.1481L60.7211 29.6873L59.6513 28.8239L60.6085 27.4161C59.4636 26.4964 58.7691 25.0699 58.7691 23.2116C58.7691 19.8894 61.0215 17.6933 64.2687 17.6933C67.5159 17.6933 66.1081 17.8622 66.8402 18.2564L66.8214 18.2376ZM65.4136 20.3962C65.0946 20.1521 64.7192 20.002 64.2499 20.002C62.5418 20.002 61.9037 21.71 61.9037 23.1741C61.9037 24.6382 62.0163 24.3754 62.2978 24.8634H62.3354C62.3354 24.8822 65.4136 20.3962 65.4136 20.3962ZM63.1425 25.9708C63.4428 26.2524 63.837 26.365 64.2499 26.365C65.714 26.365 66.5961 25.1074 66.5961 23.268C66.5961 21.4285 66.5023 22.123 66.2771 21.635H66.2207C66.2207 21.6162 63.1612 25.9896 63.1612 25.9896L63.1425 25.9708Z"
              fill="black"
            />
            <path
              id="Vector_4"
              d="M82.1001 13.1509V25.3139C82.1001 26.4964 82.1377 27.754 82.194 28.4672H79.2846L79.1345 26.9093H79.0969C78.4212 28.0918 77.1636 28.6925 75.7934 28.6925C73.297 28.6925 71.2886 26.5527 71.2886 23.2867C71.2698 19.7204 73.4847 17.6745 76.0187 17.6745C78.5526 17.6745 78.3274 18.125 78.7966 18.857H78.8341V13.1322H82.1189L82.1001 13.1509ZM78.8154 22.3858C78.8154 22.2168 78.7966 21.9728 78.7778 21.8039C78.5901 20.9217 77.8769 20.1897 76.8633 20.1897C75.3805 20.1897 74.5921 21.5223 74.5921 23.1929C74.5921 24.8634 75.4743 26.1022 76.8445 26.1022C78.2147 26.1022 78.5526 25.464 78.7403 24.5255C78.7966 24.2815 78.8341 24.0563 78.8341 23.7747V22.3858H78.8154Z"
              fill="black"
            />
            <path
              id="Vector_5"
              d="M87.2431 24.244C87.3557 25.5954 88.6884 26.2524 90.2276 26.2524C91.7667 26.2524 92.2547 26.1022 93.1369 25.8207L93.5686 28.0355C92.4987 28.4672 91.1661 28.6737 89.7583 28.6737C86.1732 28.6737 84.1273 26.609 84.1273 23.3055C84.1273 20.002 85.7791 17.6745 89.458 17.6745C93.1369 17.6745 94.1693 20.3211 94.1693 22.9301C94.1693 25.5391 94.1129 23.9812 94.0566 24.2252H87.2619L87.2431 24.244ZM91.1097 21.9916C91.1097 21.1845 90.7719 19.8518 89.2515 19.8518C87.7312 19.8518 87.3182 21.1094 87.2244 21.9916H91.1097Z"
              fill="black"
            />
            <path
              id="Vector_6"
              d="M100.589 13.9393H103.855V20.3586H103.911C104.23 19.7955 104.587 19.2887 104.906 18.7632L108.209 13.9393H112.245L107.44 20.1334L112.508 28.486H108.66L105.093 22.2168L103.836 23.756V28.5048H100.57V13.958L100.589 13.9393Z"
              fill="black"
            />
            <path
              id="Vector_7"
              d="M123.769 23.0803C123.769 26.9469 121.029 28.7112 118.195 28.7112C115.361 28.7112 112.733 26.6841 112.733 23.268C112.733 19.8518 114.985 17.6745 118.364 17.6745C121.742 17.6745 123.751 19.8894 123.751 23.0615L123.769 23.0803ZM116.13 23.1929C116.13 25.0136 116.881 26.365 118.289 26.365C119.696 26.365 120.372 25.0886 120.372 23.1929C120.372 21.2971 119.771 20.0208 118.289 20.0208C116.806 20.0208 116.13 21.635 116.13 23.1929Z"
              fill="black"
            />
            <path
              id="Vector_8"
              d="M125.797 21.391C125.797 19.8331 125.759 18.8195 125.703 17.9185H128.537L128.65 19.8518H128.744C129.288 18.3127 130.583 17.6745 131.597 17.6745C132.61 17.6745 132.047 17.6745 132.291 17.712V20.7903C132.047 20.7528 131.765 20.6965 131.409 20.6965C130.208 20.6965 129.382 21.3347 129.156 22.3482C129.119 22.5547 129.1 22.8175 129.1 23.0803V28.4297H125.815V21.3534L125.797 21.391Z"
              fill="black"
            />
            <path
              id="Vector_9"
              d="M133.98 25.5954C134.581 25.9708 135.839 26.4025 136.815 26.4025C137.791 26.4025 138.222 26.0647 138.222 25.5203C138.222 24.976 137.903 24.7132 136.664 24.3191C134.487 23.587 133.642 22.4045 133.661 21.1469C133.661 19.1761 135.351 17.6933 137.96 17.6933C140.569 17.6933 140.287 17.9748 140.944 18.2939L140.362 20.5651C139.893 20.3023 138.973 19.9644 138.072 19.9644C137.171 19.9644 136.815 20.2835 136.815 20.8279C136.815 21.3722 137.228 21.5787 138.523 22.0291C140.531 22.7236 141.376 23.7372 141.394 25.2951C141.394 27.266 139.837 28.7112 136.815 28.7112C133.793 28.7112 134.206 28.4109 133.398 27.9792L133.98 25.633V25.5954Z"
              fill="black"
            />
          </g>
        </g>
        <g id="c">
          <path
            id="Vector_10"
            d="M28.099 9.90376H18.714V38.0587H28.099V9.90376Z"
            fill="#D52B1E"
          />
          <path
            id="Vector_11"
            d="M37.484 19.2887H9.32904V28.6737H37.484V19.2887Z"
            fill="#D52B1E"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_13847_119023">
          <rect
            width="150.873"
            height="47"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.topBarContentWrapper}>
          <a href="#" className={styles.topBarLink}>
            <Person title="Frivillig logg inn ikon" fontSize="1.5rem" />
            Frivillig logg inn
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="30"
            viewBox="0 0 2 30"
            fill="none"
          >
            <path d="M1 1L1 29" stroke="#BCBCBC" strokeLinecap="round" />
          </svg>
          <a href="#" className={styles.topBarLink}>
            Korsveien
          </a>
        </div>
      </div>

      <Header
        logo={logoSvg}
        links={navLinks}
        buttonLabel="Støtt arbeidet vårt"
        onButtonClick={handleLoginClick}
        variant="default"
      />

      <main>
        <div className={styles.heroContainer}>
          <Image
            src={yourHeroImage}
            alt="A descriptive caption for your image"
            width={1920}
            height={960}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="primary" onClick={handleMembershipClick}>
            Bli medlem og støtt ditt lokalmiljø!
          </Button>
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.headingLarge}>Heading Large</h2>

          <div className={styles.cardRowContainer}>
            <Card
              asChild
              data-color="primary"
              variant="tinted"
              className={styles.warningCard}
            >
              <a
                href="/link-for-card-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardBlock style={{ padding: 0 }}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={cardImage1}
                      alt="Placeholder image 1"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardBlock>
                <CardBlock>
                  <h3 className="ds-heading--sm">LinkCard</h3>
                  <p>
                    Most provide as with carried business are much better more
                    the perfected designer. Writing slightly explain desk unable
                    at supposedly about this
                  </p>
                </CardBlock>
              </a>
            </Card>

            <Card
              asChild
              data-color="primary"
              variant="tinted"
              className={styles.warningCard}
            >
              <a
                href="/link-for-card-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardBlock style={{ padding: 0 }}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={cardImage2}
                      alt="Placeholder image 2"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardBlock>
                <CardBlock>
                  <h3 className="ds-heading--sm">LinkCard</h3>
                  <p>
                    Most provide as with carried business are much better more
                    the perfected designer. Writing slightly explain desk unable
                    at supposedly about this
                  </p>
                </CardBlock>
              </a>
            </Card>

            <Card asChild variant="tinted" className={styles.warningCard}>
              <a
                href="/link-for-card-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardBlock style={{ padding: 0 }}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={cardImage3}
                      alt="Placeholder image 3"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardBlock>
                <CardBlock>
                  <h3 className="ds-heading--sm">LinkCard</h3>
                  <p>
                    Most provide as with carried business are much better more
                    the perfected designer. Writing slightly explain desk unable
                    at supposedly about this
                  </p>
                </CardBlock>
              </a>
            </Card>
          </div>

          <h2 className={styles.headingLarge}>Heading Large</h2>

          <div className={styles.cardRowContainer}>
            <Card
              asChild
              data-color="primary"
              variant="tinted"
              className={styles.warningCard}
            >
              <a
                href="https://example.com/link1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardBlock>
                  <h3 className="ds-heading--xs">LinkCard</h3>
                  <p>
                    Most provide as with carried business are much better more
                    the perfected designer. Writing slightly explain desk unable
                    at supposedly about this
                  </p>
                </CardBlock>
              </a>
            </Card>

            <Card
              asChild
              data-color="primary"
              variant="tinted"
              className={styles.warningCard}
            >
              <a
                href="https://example.com/link2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardBlock>
                  <h3 className="ds-heading--xs">LinkCard</h3>
                  <p>
                    Most provide as with carried business are much better more
                    the perfected designer. Writing slightly explain desk unable
                    at supposedly about this
                  </p>
                </CardBlock>
              </a>
            </Card>

            <Card
              asChild
              data-color="primary"
              variant="tinted"
              className={styles.warningCard}
            >
              <a
                href="https://designsystemet.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardBlock>
                  <h3 className="ds-heading--xs">LinkCard</h3>
                  <p>
                    Most provide as with carried business are much better more
                    the perfected designer. Writing slightly explain desk unable
                    at supposedly about this
                  </p>
                </CardBlock>
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer logo={logoSvg} />
    </div>
  );
};

export default HomePage;
