import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import OtherUserPost from "./OtherUserSakuraCard.tsx";
import InputSakuraCardItem from "./InputSakuraCardItem.tsx";
import { PhotoInfo } from "../Photo-list-type.ts";

const SakuraCardArea = ({ value, setValue }) => {
  const [photosInfoList, setPhotosInfoList] = useState<PhotoInfo[]>([]);

  useEffect(() => {
    setPhotosInfoList([
      { id: 1, title: "大富豪になる", url: "https://via.placeholder.com/150" },
      {
        id: 2,
        title: "野球選手になりたい",
        url: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "仮面ライダーになる",
        url: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        title: "世界一周旅行クルーズ",
        url: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        title: "お客さんも自分も笑顔に幸せにできるヘアメイクさんになる!!",
        url: "https://via.placeholder.com/150",
      },
      { id: 6, title: "カフェを開く", url: "https://via.placeholder.com/150" },
      { id: 7, title: "猫カフェ巡り", url: "https://via.placeholder.com/150" },
      {
        id: 8,
        title: "スポーツカーを買う",
        url: "https://via.placeholder.com/150",
      },
      {
        id: 9,
        title:
          "人生楽しくやりたいことをやって自分で幸せになれるように頑張ります。カラーが得意な美容師さんを目指します。",
        url: "https://via.placeholder.com/150",
      },
      { id: 10, title: "ゲームを作る", url: "https://via.placeholder.com/150" },
    ]);
    // 仮の写真情報をセット
  }, []);

  if (photosInfoList.length === 0) {
    return <Typography>Loading...</Typography>;
  }
  const dreams = [
    { gridColumn: 2, gridRow: 1, dream: photosInfoList[0].title },
    { gridColumn: 3, gridRow: 1, dream: photosInfoList[1].title },
    { gridColumn: 4, gridRow: 1, dream: photosInfoList[2].title },
    {
      gridColumn: 1,
      gridRow: 2,
      dream: photosInfoList[3].title,
    },
    {
      gridColumn: 2,
      gridRow: 2,
      dream: photosInfoList[4].title,
    },
    { gridColumn: 4, gridRow: 2, dream: photosInfoList[5].title },
    { gridColumn: 5, gridRow: 2, dream: photosInfoList[6].title },
    { gridColumn: 2, gridRow: 3, dream: photosInfoList[7].title },
    {
      gridColumn: 3,
      gridRow: 3,
      dream: photosInfoList[8].title,
    },
    { gridColumn: 4, gridRow: 3, dream: photosInfoList[9].title },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        position: "relative",
      }}
    >
      {/* 周りの要素 */}
      {dreams.map((dream, index) => (
        <Box
          key={index}
          sx={{
            gridColumn: dream.gridColumn,
            gridRow: dream.gridRow,
          }}
        >
          <OtherUserPost dream={dream.dream} />
        </Box>
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
        <InputSakuraCardItem value={value} setValue={setValue} />
      </Box>
    </Box>
  );
};

export default SakuraCardArea;
