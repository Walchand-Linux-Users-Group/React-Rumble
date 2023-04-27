
import "./App.css";
const [flag, setFlag] = useState("flag3");
function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <marquee width="60%" direction="down" height="200px"><h1><i>"/Stage1"</i> will lead you to the first chamber of secret</h1></marquee>
      <p><strong>React's self-imposed render limit protects us from the abyss of infinite loops, reminding us to strive for efficient and effective code.</strong></p>
    </div>
  );
}

export default App;
