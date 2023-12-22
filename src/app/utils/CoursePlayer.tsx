import axios from "axios";
import React, { FC, useEffect, useState, useCallback } from "react";
import { useAppSelector } from "../redux/hook";

type Props = {
  videoUrl: string;
  title: string;
  hasAccess?: boolean;
};

const CoursePlayer: FC<Props> = ({ videoUrl, hasAccess }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });

  const { user }: any = useAppSelector((state) => state.auth);
  const [api, setApi] = useState(false);

  const fetchData = useCallback(() => {
    axios
      .post(
        `https://learnify-backend-three.vercel.app/api/v1/courses/get-vdocipherOTP`,
        {
          videoId: videoUrl,
          email: hasAccess ? user?.email : "",
        }
      )
      .then((res) => {
        setApi(true);
        setVideoData(res.data);
      })
      .catch((error) => {
        setTimeout(fetchData, 1000);
      });
  }, [videoUrl, user, hasAccess]);

  useEffect(() => {
    // if (!api) {
    fetchData();
    // }
  }, [fetchData, api, videoUrl]);

  return (
    <div
      style={{ paddingTop: "56.25%", position: "relative", overflow: "hidden" }}
    >
      {videoData.otp && videoData.playbackInfo && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}&player=N7Hx3Od3DLpqvwfm`}
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
