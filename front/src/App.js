import logo from './logo.svg';
import './App.css';
import TopBar from './features/TopBar/TopBar';
import PostsDisplay from './features/Posts/PostsDisplay';
import AddBar from './features/AddBar/AddBar';

function App() {
  
  return (
    <div className="App">
      <TopBar />
      <PostsDisplay />
      <AddBar/>
    </div>
  );
}

export default App;
