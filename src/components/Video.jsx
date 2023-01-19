import React, { useEffect } from "react";
import dashjs, { MediaPlayerClass } from "dashjs";

const Video = ({ url }) => {
  const player = dashjs.MediaPlayer().create();

  // const url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";

  // const url = "https://qat03-vtfab-cluster.visiontrack.com:19081/VisionTrack.StreamingServer.SF/VisionTrack.StreamingServer.SF.StreamingService/dash/59dd749b6e264096877b9e0b507d2797?ticket=1812534dc4a24267bb256b5c6215042a&dashPath=manifest.mpd&parent=e935a489-9662-4446-83b4-e7b98cd6484d_ch_mc01&PartitionKey=0&PartitionKind=Int64Range";

  useEffect(() => {
    player.initialize(document.querySelector("#videoPlayer"), url, true, 0);
  }, [url]);

  return (
    <>
      <video
        id="videoPlayer"
        controls
        autoPlay
        playsInline
        style={{ width: "500px", height: "300px", paddingBottom: "50px" }}
      >
        <source type="video" src={url} />
      </video>
    </>
  );
};

export default Video;
