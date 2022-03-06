import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleTitle from './components/ArticleTitle';
import ArticleText_whereToBuy from './components/ArticleText_whereToBuy';
import ArticleText_NeighborhoodGrower from './components/ArticleText_NeighborhoodGrower';

function App() {
  
  return (

    <div className="App">
      <Header />
        <ArticleText_whereToBuy />
        <ArticleText_NeighborhoodGrower />
      <Footer />
    </div>

  );
}

export default App;
