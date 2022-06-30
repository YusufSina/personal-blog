import Head from "next/head";
import Header from "../components/header/header";
import useTranslation from "next-translate/useTranslation";
import setLanguage from 'next-translate/setLanguage'

import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const { t, lang } = useTranslation("common");

  return (
    <div className="container custom-grid">
      <div className="languages">
        <span className={lang === 'en' && 'text-primary'} onClick={async() => await setLanguage('en')}>{t('English')}</span> / <span className={lang === 'tr' && 'text-primary'} onClick={async() => await setLanguage('tr')}>{t('Turkish')}</span>
      </div>
      <Head>
        <title>Yusuf Sina Yıldız · Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }




        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .custom-grid {
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .blue-colored-header {
          color: #1c6dd0;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .text-underline {
          webkit-text-decoration: underline !important;
          text-decoration: underline !important;
        }

        
        .languages {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
        }
        
        .languages > span {
          cursor: pointer;
        }


        /* Header İçin */
        .profile-pic{height:0 !important; aspect-ratio:256/285 !important; }

        .profile-pic:hover{transition: all 1s ease-in; -webkit-box-shadow: 0px 0px 10px 8px #1F2DFF; box-shadow: 0px 0px 10px 8px #1F2DFF;}

        div.d-flex span{ aspect-ratio:256/285 !important; width:256px !important; height:285px !important; transform: scale(0.7);}

        div.d-flex span:hover{transition: all 0.5s ease-in; -webkit-box-shadow: 0px 0px 10px 2px #1F2DFF; box-shadow: 0px 0px 10px 2px #1F2DFF;}

      `}</style>
    </div>
  );
}
