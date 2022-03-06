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
        <ArticleTitle titleText="Where can I get locally sourced Moringa?"/>
        <ArticleText_whereToBuy />
        <ArticleTitle titleText="Rainbow Moringa - Your neighborhood Moringa grower"/>
        <ArticleText_NeighborhoodGrower />
      <Footer />
    </div>

  );
}

export default App;
