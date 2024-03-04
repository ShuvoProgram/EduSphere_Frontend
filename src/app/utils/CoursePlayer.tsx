import axios from "axios";
import React, { FC, useEffect, useState, useCallback } from "react";
import { useAppSelector } from "../redux/hook";

type Props = {
  videoUrl: string;
  title: string;
  hasAccess?: boolean;
};

const CoursePlayer: FC<Props> = ({ videoUrl, hasAccess }) => {
  // State variables
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });
  const { user }: any = useAppSelector((state) => state.auth);
  const [apiCalled, setApiCalled] = useState(false);

  // Fetch data from API
  const fetchData = useCallback(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/get-vdocipherOTP`,
        {
          videoId: videoUrl,
          email: hasAccess ? user?.email : "",
        }
      )
      .then((res) => {
        setApiCalled(true);
        setVideoData(res.data);
      })
      .catch((error) => {
        // Retry after 1 second on failure
        setTimeout(fetchData, 1000);
      });
  }, [videoUrl, user, hasAccess]);

  // Fetch data when component mounts or when API is not called yet
  useEffect(() => {
    if (!apiCalled) {
      fetchData();
    }
  }, [fetchData, apiCalled, videoUrl]);

  return (
    <div style={{ paddingTop: "56.25%", position: "relative", overflow: "hidden" }}>
      {/* Render video player if video data is available */}
      {videoData.otp && videoData.playbackInfo && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}&player=4EP4NLiWKX1Sxys0`}
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
