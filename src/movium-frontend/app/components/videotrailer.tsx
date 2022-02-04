import ReactPlayer from "react-player";

export default function VideoTrailer({ videoInfo }) {

  return (
    <div className=" w-full">
      <ReactPlayer url={videoInfo.videoUrl} width="100%" />
    </div>
  );
}
