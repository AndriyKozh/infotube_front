import React, { useState } from "react";
import axios from "axios";
import { ClipLoader, ClimbingBoxLoader } from "react-spinners";
import { css } from "@emotion/react";
import styles from "./VideoDownloader.module.css";

function VideoDownloader() {
  const [videoUrl, setVideoUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!videoUrl) {
      return;
    }

    try {
      setIsDownloading(true);
      const response = await axios.get(
        `http://localhost:3000/download?url=${encodeURIComponent(videoUrl)}`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${videoUrl}.mp4`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
    setVideoUrl("");
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    border-color: none;
  `;

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={videoUrl}
        onChange={handleInputChange}
        placeholder="Вставте URL-адресу відео..."
      />
      <button onClick={handleDownload} disabled={isDownloading}>
        {isDownloading ? (
          <ClipLoader
            color={"#36D7B7"}
            loading={isDownloading}
            css={override}
            size={50}
          />
        ) : (
          "Завантажити"
        )}
      </button>
      <div className={styles["sweet-loading"]}></div>
    </div>
  );
}

export default VideoDownloader;
