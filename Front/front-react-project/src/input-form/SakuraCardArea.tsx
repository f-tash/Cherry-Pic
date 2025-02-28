import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import OtherUserPost from "./OtherUserSakuraCard.tsx";
import InputSakuraCardItem from "./InputSakuraCardItem.tsx";
import { PhotoInfo } from "../photo-list/Photo-list-type";

const SakuraCardArea = ({ value, setValue }) => {
  const [photosInfoList, setPhotosInfoList] = useState<PhotoInfo[]>([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const endpoint = "https://cherry-pic.onrender.com/dreams"; // APIのエンドポイント

  useEffect(() => {
    // APIから写真情報のリストを取得
    const getPhotos = async () => {
      try {
        const response = await fetch(endpoint, {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        });
        const data = await response.json();
        setPhotosInfoList((prev) => {
          const newData = data.filter(
            (photo) => !prev.some((p) => p.dream_id === photo.id)
          );
          return [...prev, ...newData]; // 重複しないデータのみ追加
        });
      } catch (e) {
        alert("投稿の取得に失敗しました" + e);
      }
    };
    getPhotos();
  }, []);

  if (photosInfoList.length === 0) {
    return <Typography>Loading...</Typography>;
  }
  const dreams = [
    {
      gridColumn: 2,
      gridRow: 1,
      dream: photosInfoList[0].dream_title,
      dreamImage: photosInfoList[0].url,
    },
    {
      gridColumn: 3,
      gridRow: 1,
      dream: photosInfoList[1].dream_title,
      dreamImage: photosInfoList[1].url,
    },
    {
      gridColumn: 4,
      gridRow: 1,
      dream: photosInfoList[2].dream_title,
      dreamImage: photosInfoList[2].url,
    },
    {
      gridColumn: 1,
      gridRow: 2,
      dream: photosInfoList[3].dream_title,
      dreamImage: photosInfoList[3].url,
    },
    {
      gridColumn: 2,
      gridRow: 2,
      dream: photosInfoList[4].dream_title,
      dreamImage: photosInfoList[4].url,
    },
    {
      gridColumn: 4,
      gridRow: 2,
      dream: photosInfoList[5].dream_title,
      dreamImage: photosInfoList[5].url,
    },
    {
      gridColumn: 5,
      gridRow: 2,
      dream: photosInfoList[6].dream_title,
      dreamImage: photosInfoList[6].url,
    },
    {
      gridColumn: 2,
      gridRow: 3,
      dream: photosInfoList[7].dream_title,
      dreamImage: photosInfoList[7].url,
    },
    {
      gridColumn: 3,
      gridRow: 3,
      dream: photosInfoList[8].dream_title,
      dreamImage: photosInfoList[8].url,
    },
    {
      gridColumn: 4,
      gridRow: 3,
      dream: photosInfoList[9].dream_title,
      dreamImage: photosInfoList[9].url,
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        position: "relative",
      }}
      px={isMobile ? 10 : 0}
    >
      {/* 周りの要素 */}
      {dreams.map((dream, index) => (
        <React.Fragment key={index}>
          {!isMobile ? (
            <Box
              sx={{
                gridColumn: dream.gridColumn,
                gridRow: dream.gridRow,
              }}
            >
              <OtherUserPost
                dreamTitle={dream.dream}
                dreamImage={dream.dreamImage}
              />
            </Box>
          ) : (
            dream.gridColumn !== 3 &&
            dream.gridRow !== 2 && (
              <Box
                mx={-10}
                sx={{
                  gridColumn: dream.gridColumn,
                  gridRow: dream.gridRow,
                }}
              >
                <OtherUserPost
                  dreamTitle={dream.dream}
                  dreamImage={dream.dreamImage}
                />
              </Box>
            )
          )}
        </React.Fragment>
      ))}

      {/* 中央の要素 */}
      <Box
        sx={{
          gridColumn: 3,
          gridRow: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography my={-2} zIndex={2}>
          あなたの「夢」は？
        </Typography>
        {/* 入力フォーム */}
        <InputSakuraCardItem value={value} setValue={setValue} />
      </Box>
    </Box>
  );
};

export default SakuraCardArea;
