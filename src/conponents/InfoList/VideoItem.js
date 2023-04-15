// const InfoList = ({ inf }) => {
//   const {
//     title,
//     language,
//     lengthVideo,
//     okLike,
//     titleUrl,
//     viewes,
//     user_history_youtube_id,
//   } = inf;

//   return (
//     <li>
//       <div className="listInfo">
//         <p>{title}</p>
//         <p>{titleUrl}</p>
//         <div className="viewes">
//           <div>
//             <span>Viewes: </span>
//             {viewes}
//           </div>
//           <div>
//             <span>LengthVideo: </span>
//             {lengthVideo}
//           </div>
//           <div>
//             <span>Like: </span>
//             {okLike}
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default InfoList;

const VideoItem = ({ video }) => {
  const {
    title,
    language,
    lengthVideo,
    okLike,
    titleUrl,
    viewes,
    user_history_youtube_id,
  } = video;

  const videoId = new URL(titleUrl).searchParams.get("v");

  return (
    <li>
      <div className="listInfo">
        <p>{title}</p>
        <div className="videoWrapper">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="viewes">
          <div>
            <span>Viewes: </span>
            {viewes}
          </div>
          <div>
            <span>LengthVideo: </span>
            {lengthVideo}
          </div>
          <div>
            <span>Like: </span>
            {okLike}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
