
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import VertNav from "./components/VertNav";
import HorzNav from "./components/HorzNav";
import Footer from './components/Footer';
import ArticleTitle from './components/ArticleTitle';
import ArticleText_whereToBuy from './components/ArticleText_whereToBuy';
import ArticleText_NeighborhoodGrower from './components/ArticleText_NeighborhoodGrower';
import ArticleText_moringaComparison from './components/ArticleText_moringaComparison';
import ContactForm from './components/ContactForm'

function App() {
  
  return (
    <div className="mainBox">

      
      <Header />
      <div className="articleBox">
        <VertNav />

      <div className="App">
            <ArticleText_whereToBuy />
            <ArticleText_NeighborhoodGrower />
            <ArticleText_moringaComparison />
            <ContactForm />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
