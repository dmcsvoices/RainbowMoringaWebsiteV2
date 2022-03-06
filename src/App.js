import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faLeaf, faCannabis, faSeedling } from "@fortawesome/free-solid-svg-icons";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleTitle from './components/ArticleTitle';
import ArticleText_whereToBuy from './components/ArticleText_whereToBuy';
import ArticleText_NeighborhoodGrower from './components/ArticleText_NeighborhoodGrower';
import ArticleText_moringaComparison from './components/ArticleText_moringaComparison';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faCheckSquare, faCoffee,  faLeaf, faCannabis, faSeedling);

function App() {
  
  return (
    <div className="mainBox">

      
      <Header />
      <div className="articleBox">
      <div className="vertNav">
        <FontAwesomeIcon className="navIcon" icon="fa-solid fa-seedling" size="3x" />
        <FontAwesomeIcon icon="fa-solid fa-leaf" size="3x"/></div>
      <div className="App">
          
            <ArticleText_whereToBuy />
            <ArticleText_NeighborhoodGrower />
            <ArticleText_moringaComparison />
          
        </div>
        
      </div>
      <Footer />
    </div>

  );
}

export default App;
