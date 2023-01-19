# react-demo
dash.js player instructions for remote playback
<br />
This app is based on dash.js, it solves the jumpGaps bug for remote-playback videos
<br />
<br />
To start app run this script
<br />
```
npm run dev
```
<br />
<br />
Create url variable, which will be updated in Input after loading typed Url.
Pass it as props to Video component 
<br />
```
  const App = () => { 
    const [url, setUrl] = useState("")

    return (
      <Input url={url} setUrl={setUrl} />
      <Video url={url} />
    )
  };`;
```
<br />
<br />
Import [dash.js](https://www.npmjs.com/package/dashjs) node package to your Video component
<br />
<br />
Create new player in your video's component
<br />
```
  const VideoPlayer = ({url}) => {

      const player = dashjs.MediaPlayer().create();`;
```
<br />
<br />
Add useEffect hook and attach listener on comming prop's url property
<br />
```
  const VideoPlayer = ({url}) => {

    useEffect(() => {
      player.initialize(document.querySelector("#videoPlayer"), url, true);
    },

  [url]);"`;
```
<br />
<br />
As forth argument of player.initialize() method code "0", so the video playback video will be playing from 0:00 start time, without
<br />
```
  const VideoPlayer = ({url}) => {

    useEffect(() => {
      player.initialize(document.querySelector("#videoPlayer"), url, true, 0);
    },

  [url]);"`;
```
<br />
