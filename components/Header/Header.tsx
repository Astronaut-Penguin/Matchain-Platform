// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./Header.module.css";

// IMPORT BOOTSTRAP
import { Navbar, Container, Nav } from "react-bootstrap";

import Image from "next/image";

//flicking
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/react-flicking/dist/flicking.css";
type HeaderProps = {
  style?: React.CSSProperties;
};

const Header: React.FC<HeaderProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <Image
          src="/logo512.png"
          width={60}
          height={60}
          className={styles.Logo}
        />
        <Image
          src="/logo512.png"
          width={60}
          height={60}
          className={styles.Profile}
        />
      </div>
      <div className={styles.NavContainer}>
        <Navbar className={styles.Nav}>
          <Container>
            <Flicking
              className="flicking-viewport keywords-flicking mb-4"
              align="center"
              circular={false}
              onMoveEnd={(e) => {
                console.log(e);
              }}
            >
              <div className={styles.Panel}>
                <Nav.Link
                  href="#home"
                  className={styles.Element}
                  bsPrefix="Element"
                >
                  HOME
                </Nav.Link>
              </div>
              <div className={styles.Panel}>
                <Nav.Link
                  href="#fighters"
                  className={styles.Element}
                  bsPrefix="Element"
                >
                  GAMES
                </Nav.Link>
              </div>
              <div className={styles.Panel}>
                <Nav.Link
                  href="#education"
                  className={styles.Element}
                  bsPrefix="Element"
                >
                  EDUCATION
                </Nav.Link>
              </div>
              <div className={styles.Panel}>
                <Nav.Link
                  href="#roadmap"
                  className={styles.Element}
                  bsPrefix="Element"
                >
                  ROADMAP
                </Nav.Link>
              </div>
              <div className={styles.Panel}>
                <Nav.Link
                  href="#about"
                  className={styles.Element}
                  bsPrefix="Element"
                >
                  ABOUT US
                </Nav.Link>
              </div>
              <div className={styles.Panel}>
                <Nav.Link
                  href="#team"
                  className={styles.Element}
                  bsPrefix="Element"
                >
                  TEAM
                </Nav.Link>
              </div>
            </Flicking>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
