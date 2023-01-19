# react-demo
dash.js player instructions for remote playback

This app is based on dash.js, it solves the jumpGaps bug for remote-playback videos


To start app run this script

```
npm run dev
```


Create url variable, which will be updated in Input after loading typed Url.
Pass it as props to Video component 

```
  const App = () => { 
    const [url, setUrl] = useState("")

    return (
      <Input url={url} setUrl={setUrl} />
      <Video url={url} />
    )
  };`;
```


Import [dash.js](https://www.npmjs.com/package/dashjs) node package to your Video component


Create new player in your video's component
```
  const VideoPlayer = ({url}) => {

      const player = dashjs.MediaPlayer().create();`;
```


Add useEffect hook and attach listener on comming prop's url property

```
  const VideoPlayer = ({url}) => {

    useEffect(() => {
      player.initialize(document.querySelector("#videoPlayer"), url, true);
    },

  [url]);"`;
```


As forth argument of player.initialize() method code "0", so the video playback video will be playing from 0:00 start time, without

```
  const VideoPlayer = ({url}) => {

    useEffect(() => {
      player.initialize(document.querySelector("#videoPlayer"), url, true, 0);
    },

  [url]);"`;
```
