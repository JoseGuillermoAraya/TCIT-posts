import logo from './logo.svg';
import './App.css';
import TopBar from './features/TopBar/TopBar';
import PostsDisplay from './features/Posts/PostsDisplay';

function App() {
  
  return (
    <div className="App">
      <TopBar />
      <PostsDisplay/>
    </div>
  );
}

export default App;
