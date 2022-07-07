// IMPORT REACT
import React from "react";

// Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

// IMPORT STYLES
import styles from "./Roadmap.module.css";

type RoadmapProps = {
  style?: React.CSSProperties;
};

const Roadmap: React.FC<RoadmapProps> = () => {
  
  //Todo: Refactor this in an array of states
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);
  const [isOpen6, setIsOpen6] = React.useState(false);
  const [isOpen7, setIsOpen7] = React.useState(false);
  const [isOpen8, setIsOpen8] = React.useState(false);
  const [isOpen9, setIsOpen9] = React.useState(false);
  const [isOpen10, setIsOpen10] = React.useState(false);


  ////////////
  // RENDER //
  ////////////

  //Todo: Refactor the roadmap items into a new components and map it, like the usual cards

  return (
    <div className={styles.Container} id='roadmap'>
        <h2 className={styles.Title}>ROADMAP</h2>

        <div className={styles.RoadMapContainer}>
            <div className={styles.Item} style={{ marginTop: "0" }}>
                {isOpen ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                    Platform UX
                    <Collapse isOpen={isOpen}>
                        <ol className={styles.List}>
                            <li>
                                Our designers worked on the proposals not only for the branding and general design of the web, but for the full UX of each future part, delivering the mock-ups and respective documents.
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen2 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen2(!isOpen2)} className={styles.Button}>
                    Open Source Showroom
                    <Collapse isOpen={isOpen2}>
                        <ol className={styles.List}>
                            <li>
                                While the UX is being designed, our programmers worked on a open source showroom that will be our first web programming lesson on our free education section. This showroom is intended to be the pillar of the new game devs, they will practice their code skills, and in UX lessons they will boost each showroom with original content.
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen3 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen3(!isOpen3)} className={styles.Button}>
                    Telegram Bot V1
                    <Collapse isOpen={isOpen3}>
                        <ol className={styles.List}>
                            <li>
                                A simple telegram Bot that shortens the UX between our different webapps and repos, simple like the fact that a programmer wont sleep enough, never.
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen4 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen4(!isOpen4)} className={styles.Button}>
                    Matchain Smart contract
                    <Collapse isOpen={isOpen4}>
                        <ol className={styles.List}>
                            <li>
                            One smart contract to rule them all. Or at least to let users buy the listed games using Toncoins at first, delivering the income to the creators and taking a small fee to buy us a coffee, black.
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen5 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen5(!isOpen5)} className={styles.Button}>
                    Matchain Platform
                    <Collapse isOpen={isOpen5}>
                        <ol className={styles.List}>
                            <li>
                            Our main platform ,the place where the users land and where every single part of our ecosystem its explained and can be accessed
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>


            <div className={styles.Item}>
                {isOpen6 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen6(!isOpen6)} className={styles.Button}>
                    First Game
                    <Collapse isOpen={isOpen6}>
                        <ol className={styles.List}>
                            <li>
                            Our first game, and the beginning of our game development lessons, will be a small 2D game.
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen7 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen7(!isOpen7)} className={styles.Button}>
                    First game development lesson
                    <Collapse isOpen={isOpen7}>
                        <ol className={styles.List}>
                            <li>
                            First lesson of the education section will be about game development on the open source game engine godot, using our previous delivered game as example.
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen8 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen8(!isOpen8)} className={styles.Button}>
                    TON implementation on dApps
                    <Collapse isOpen={isOpen8}>
                        <ol className={styles.List}>
                            <li>
                            Lesson about communicate from the webdApp implementing the Tonweb library and available tools such as tonconnect from tonkeeper
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                {isOpen9 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen9(!isOpen9)} className={styles.Button}>
                    TON smart contract development
                    <Collapse isOpen={isOpen9}>
                        <ol className={styles.List}>
                            <li>
                            Lesson about the develop of TON smart contracts, learning to code on FUNC-FIFT
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

        </div>

        <div className={styles.LastItem}>
            <div className={styles.Item} style={{ marginLeft: "4px", marginTop: '0px' }}>
                {isOpen10 ? (
                    <div className={styles.SelectedBall} />
                ) : (
                    <div className={styles.Ball} />
                )}
                <a onClick={() => setIsOpen10(!isOpen10)} className={styles.Button}>
                    Second 2D Game
                    <Collapse isOpen={isOpen10}>
                        <ol className={styles.List}>
                            <li>
                                As we deliver the pillars of our platform, the platform webapp itself, the educational section, the game hub, the first`s lesson with the required open source projects to teach and our first small game, we plan to continue delivering new games in any size and genre, this way the platform keeps feeding the hungry for new educational content, examples, and of course the required income to keep building!
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Roadmap;