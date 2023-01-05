import useTranslation from "next-translate/useTranslation";
import Header from "../components/header/header";

export default function AboutMe() {
    const { t } = useTranslation("common");

    return (
        <>
            <Header />

            <div className="container grid text-left py-5">
                <p>{t("Hi, I am Yusuf Sina!")}</p>

                <p>
                    {
                    t('paragraph-1')
                    }
                </p>

                <p>
                    {
                    t('paragraph-2')
                    }
                </p>

                <p>
                    {
                    t('paragraph-3')
                    }
                </p>

                <div className="my-3">
                    <h5 className="blue-colored-header">{t("My Tech Stack")}</h5>
                    <p>
                    Python, .NET Core, React.js, Solidity, Ethereum, Avalanche, Waves,
                    Blockchain, MSSQL, Releational Databases, Docker, Node.js,
                    React-Native, Expo, HyperLedger Fabric
                    </p>
                </div>

                <div className="my-3">
                    <h5 className="blue-colored-header">{t("Experience")}</h5>
                    <ul>
                    <li>
                        <span
                        >
                        {" "}
                        {t('Bitexen')}
                        </span>
                        {' : '}
                        <span
                        className="fst-italic"
                        >
                        {" "}
                        {t('From June 2022 to Today, Full-time, Blockchain Developer')}
                        </span>
                        <p>
                        {/* {
                            t('experience-4-desc')
                        } */}
                        </p>
                    </li>
                    <li>
                        <span
                        >
                        {" "}
                        {t('TRA Information Technologies')}
                        </span>
                        {' : '}
                        <span
                        className="fst-italic"
                        >
                        {" "}
                        {t('From January 2021 to June 2022, Full-time, Software Developer')}
                        </span>
                        <p>
                        {
                            t('experience-1-desc')
                        }
                        </p>
                    </li>
                    <li>
                        <span
                        >
                        {" "}
                        {t('Coredet aka Ritmus')}
                        </span>
                        {' : '}
                        <span
                        className="fst-italic"
                        >
                        {" "}
                        {t('From March 2020 to August 2020, Intern, Software Developer')}
                        </span>
                        <p>
                        {
                            t('experience-2-desc')
                        }
                        </p>
                    </li>
                    <li>
                        <span
                        >
                        {" "}
                        {t('Sakarya University')}
                        </span>
                        {' : '}
                        <span
                        className="fst-italic"
                        >
                        {" "}
                        {t('From October 2019 to March 2020, Part-time, Working Student')}
                        </span>
                        <p>
                        {
                            t('experience-3-desc')
                        }
                        </p>
                    </li>
                    </ul>
                </div>

                <div className="my-3">
                    <h5 className="blue-colored-header">{t("Projects")}</h5>
                    <ul>
                    <li>
                        <a
                        href="https://fetih-yusufsina.vercel.app/"
                        target={"_blank"}
                        className="link-primary text-underline"
                        >
                        {" "}
                        {t('Fetih | Blockchain based Game')}
                        </a>
                        <p>
                        {
                            t('project-2-desc')
                        }
                        </p>
                        <p>
                        {
                            t('project-2-desc-2')
                        }
                        </p>
                        <p>
                        {" "}
                        <span className="fw-bold">{t('Tech Stack')}:</span>{" "}
                        <span className="fst-italic">
                            Solidity, Chainlink Oracle, .NET Core, React.js, PostgreSQL
                        </span>
                        </p>
                    </li>
                    <li>
                        <a
                        href="https://avalanche.blockmuseum.art"
                        target={"_blank"}
                        className="link-primary text-underline"
                        >
                        {" "}
                        {t('BlockMuseum | NFT Marketplace')}
                        </a>
                        <p>
                        {
                            t('project-1-desc')
                        }
                        </p>
                        <p>
                        {" "}
                        <span className="fw-bold">{t('Tech Stack')}:</span>{" "}
                        <span className="fst-italic">
                            Solidity, .NET Core, React.js, MongoDB, Docker, Google Cloud
                            Run
                        </span>
                        </p>
                    </li>
                    </ul>
                </div>

                <div className="my-3">
                    <h5 className="blue-colored-header">{t("Links")}</h5>
                    <ul>
                    <li>
                        <a
                        href="https://github.com/yusufsina"
                        target={"_blank"}
                        className="link-primary text-underline"
                        >
                        {" "}
                        Github
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.linkedin.com/in/yusufsina/"
                        target={"_blank"}
                        className="link-primary text-underline"
                        >
                        {" "}
                        Linkedin
                        </a>
                    </li>
                    </ul>
                </div>

                {/* <a
                    href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className="card"
                >
                    <h3>Deploy &rarr;</h3>
                    <p>
                    Instantly deploy your Next.js site to a public URL with Vercel.
                    </p>
                </a> */}
            </div>
        </>
    )
}