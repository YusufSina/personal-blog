import LanguagePicker from "../components/language-picker";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
    return (
      <>
        <div className="container custom-grid">
          <Head>
            <title>Yusuf Sina Yıldız · Software Developer</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <LanguagePicker />
  
          <main>
            <Component {...pageProps} />
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
      </>
    )
  }