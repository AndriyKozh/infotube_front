// import InfoList from "../InfoList/InfoList";

// const InfoAll = ({ info }) => {
//   console.log(info);
//   return (
//     <div>
//       {info.map((inf) => {
//         return (
//           <ul>
//             <InfoList inf={inf} />
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default InfoAll;
import React, { useState, useEffect } from "react";
import VideoItem from "../InfoList/VideoItem";

const InfoList = ({ inf }) => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  console.log(videos);

  const fetchVideos = async () => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:3000/api/allInfoUser?name=${inf}&page=${page}`
    );
    const data = await response.json();
    setVideos((prevVideos) => [...prevVideos, ...data.result]);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, [inf, page]);

  useEffect(() => {
    setVideos([]);
    setPage(1);
  }, [inf]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <ul onScroll={handleScroll} style={{ overflowY: "scroll", height: "80vh" }}>
      {videos.map((video) => (
        <VideoItem key={video.user_history_youtube_id} video={video} />
      ))}
      {loading && <div>Loading...</div>}
    </ul>
  );
};

export default InfoList;
