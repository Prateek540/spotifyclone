import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MediaPlayer = (props) => {
  return (
    <AudioPlayer
      style={{ background: "rgb(57,57,57)", color: "rgb(224,224,224)" }}
      className="player"
      src={props.Data.url}
      header={props.Data.title + " by " + props.Data.artist}
    />
  );
};
export default MediaPlayer;
