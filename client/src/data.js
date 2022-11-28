import HtmlImg from "./assets/images/skills/html.png";
import CssImg from "./assets/images/skills/css.png";
import JavascriptImg from "./assets/images/skills/javascript.png";
import ReactImg from "./assets/images/skills/react.png";
import JqueryImg from "./assets/images/skills/jquery.png";
import MongodbImg from "./assets/images/skills/mongodb.png";
import MysqlImg from "./assets/images/skills/mysql.png";
import FirebaseImg from "./assets/images/skills/firebase.png";
import NodejsImg from "./assets/images/skills/nodejs.png";
import GithubImg from "./assets/images/skills/github.png";
import ReduxImg from "./assets/images/skills/redux.png";
import MongooseImg from "./assets/images/skills/mongoose.png";
import coinWalletImg from "./assets/images/projects/coinwallet.jpg";
import movieAppImg from "./assets/images/projects/movie-app.jpg";
import codeTalksImg from "./assets/images/projects/codetalks.png";
import kodworkImg from "./assets/images/projects/kodwork.png";
import tarifkaAppImg from "./assets/images/projects/tarifka-app.png";
import patikaStoreImg from "./assets/images/projects/patikaStore.png";
import notesAppImg from "./assets/images/projects/notes-app.png";
import weartherAppImg from "./assets/images/projects/weather-forecast.png";
export const data = {
    educationList: [
        {
          heading: "Eskişehir Anatolian University",
          subHeading: "Bachelor Management Information Systems",
          fromDate: "2022",
          toDate: "Present",
        },
        {
          heading: "Kütahya Dumlupınar University",
          subHeading: "Associate Degree Electric",
          fromDate: "2017",
          toDate: "2020",
        },
      ],
      coursesList: [
        {
          heading: "The Complete 2022 Web Development Bootcamp",
          from: "Udemy",
          month: "Oct",
          date: "2022",
          hours: "65,5 Hours",
        },
        {
          heading: "React Native",
          from: "Patika.dev",
          month: "Aug",
          date: "2022",
          hours: "75 Hours",
        },
        {
          heading: "Redux",
          from: "Patika.dev",
          month: "Jul",
          date: "2022",
          hours: "6 Hours",
        },
        {
          heading: "React",
          from: "Patika.dev",
          month: "Jul",
          date: "2022",
          hours: "40 Hours",
        },
        {
          heading: "Web Development Trail with Intermediate Java",
          from: "Patika.dev",
          month: "Dec",
          date: "2021",
          hours: "103 Hours",
        },
        {
          heading: "Backend Web Development Trail with Beginner Java",
          from: "Patika.dev",
          month: "Nov",
          date: "2021",
          hours: "84 Hours",
        },
        {
          heading:
            "Android Mobile Application Development Training with Kotlin Basic Level",
          from: "BTK Academy",
          month: "Feb",
          date: "2021",
          hours: "16 Hours",
        },
        {
          heading:
            "Android Mobile Application Development Training with Kotlin Basic Level",
          from: "BTK Academy",
          month: "Dec",
          date: "2020",
          hours: "12 Hours",
        },
      ],
      interestsList: [
        "⚽ Football",
        "🍿 Watching sci-fi movies",
        "✈️ Visiting new places",
      ],
      skillsList: [
        {
          image: `${HtmlImg}`,
          title: "HTML",
        },
        {
          image: `${ CssImg }`,
          title: "CSS",
        },
        {
          image: `${ JavascriptImg }`,
          title: "JAVASCRIPT",
        },
        {
          image: `${ ReactImg }`,
          title: "REACT/REACT NATİVE",
        },
        {
          image: `${ NodejsImg }`,
          title: "NODE",
        },
        {
          image: `${ ReduxImg }`,
          title: "REDUX",
        },
        {
          image: `${ JqueryImg }`,
          title: "JQUERY",
        },
        {
          image: `${ GithubImg }`,
          title: "GITHUB",
        },
        {
          image: `${ MongodbImg }`,
          title: "MONGODB",
        },
        {
          image: `${ MongooseImg }`,
          title: "MONGOOSE",
        },
        {
          image: `${ FirebaseImg }`,
          title: "FIREBASE",
        },
        {
          image: `${ MysqlImg }`,
          title: "MYSQL",
        },
      ],
      projectList: [
        {
          name: "Coin Wallet",
          image: `${coinWalletImg}`,
          github: "https://github.com/aliulu0/CoinWallet",
          demo: "https://aliulu-coinwallet.netlify.app",
          technologies:"React, Axios, react-router-dom, Context API, Bootsrap, react-bootsrap, cartjs, react-cartjs-2"
        },
        {
          name: "Movie App",
          image: `${movieAppImg}`,
          github: "https://github.com/aliulu0/movie-app",
          demo: "https://aliulu-movie-trailer-app.netlify.app",
          technologies:"React, Axios, Material-UI, react-youtube, dotenv"
        },
        {
          name: "CodeTalks App",
          image: `${codeTalksImg}`,
          github: "https://github.com/aliulu0/ReactNativeProjects/tree/main/CodeTalks",
          demo: "",
          technologies:"React Native, firebase, redux, formik, date-fns, react-native-flash-message"
        },
        {
          name: "KodWork App",
          image: `${kodworkImg}`,
          github: "https://github.com/aliulu0/ReactNativeProjects/tree/main/Kodwork",
          demo: "",
          technologies:"React Native, redux, dotenv"
        },
        {
          name: "Tarifka App",
          image: `${tarifkaAppImg}`,
          github: "https://github.com/aliulu0/ReactNativeProjects/tree/main/TarifkaApp",
          demo: "",
          technologies:"React Native, react-navigation,Axios, react-native-dotenv, lottie-react-native"
        },
        {
          name: "PatikaStore App",
          image: `${patikaStoreImg}`,
          github: "https://github.com/aliulu0/ReactNativeProjects/tree/main/PatikaStore",
          demo: "",
          technologies:"React Native, Css"
        },
        {
          name: "Notes App",
          image: `${notesAppImg}`,
          github: "https://github.com/aliulu0/redux-notes-app",
          demo: "https://aliulu-redux-todoapp.netlify.app",
          technologies:"React.js, redux"
        },
        {
          name: "Weather Forecast",
          image: `${weartherAppImg}`,
          github: "https://github.com/aliulu0/weather-forecast",
          demo: "https://aliulu-weather-forecast.netlify.app",
          technologies:"React.js, Context API, Axios"
        },
      ]
}