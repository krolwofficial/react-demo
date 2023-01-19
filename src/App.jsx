import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Input from "./components/Input";
import dashjs, { MediaPlayerClass } from "dashjs";
import Video from "./components/Video";

function App() {
  const [url, setUrl] = useState("");

  const codeStringOne = `// create url variable, which will be updated in Input after loading typed Url
  // pass it as props to Video component 
  const App = () => { 
    const [url, setUrl] = useState("")

    return (
      <Input url={url} setUrl={setUrl} />
      <Video url={url} />
    )
  };`;

  const codeStringTwo = `import dash.js node package to your Video component - https://www.npmjs.com/package/dashjs`;

  const codeStringThree = `// create new player in your video's component
  const VideoPlayer = ({url}) => {

      const player = dashjs.MediaPlayer().create();`;

  const codeStringFour = `
  // Add useEffect hook and attach listener on comming prop's url property

  const VideoPlayer = ({url}) => {

    useEffect(() => {
      player.initialize(document.querySelector("#videoPlayer"), url, true);
    },

  [url]);"`;

  const codeStringFive = `
  // As forth argument of player.initialize() method code "0", so the video playback video will be playing from 0:00 start time, without

  const VideoPlayer = ({url}) => {

    useEffect(() => {
      player.initialize(document.querySelector("#videoPlayer"), url, true, 0);
    },

  [url]);"`;

  return (
    <div className="App">
      <Input url={url} setUrl={setUrl} />

      <Video url={url} />

      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeStringOne}
      </SyntaxHighlighter>
      <br />

      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeStringTwo}
      </SyntaxHighlighter>
      <br />

      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeStringThree}
      </SyntaxHighlighter>
      <br />

      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeStringFour}
      </SyntaxHighlighter>
      <br />

      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeStringFive}
      </SyntaxHighlighter>
      <br />
    </div>
  );
}

export default App;
