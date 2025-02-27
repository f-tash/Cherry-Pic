import React from "react";
import { Box, Typography } from "@mui/material";
import OtherUserPost from "./OtherUserPost.tsx";
import InputSakuraCardItem from "./InputSakuraCardItem.tsx";

const SakuraCardArea = () => {
  const dreams = [
    { gridColumn: 2, gridRow: 1, dream: "大富豪になる！" },
    { gridColumn: 3, gridRow: 1, dream: "世界一周する！" },
    { gridColumn: 4, gridRow: 1, dream: "プログラマーになる！" },
    {
      gridColumn: 1,
      gridRow: 2,
      dream: "お客さんも自分も笑顔に幸せにできるヘアメイクさんになる!!",
    },
    {
      gridColumn: 2,
      gridRow: 2,
      dream:
        "人生楽しくやりたいことをやって自分で幸せになれるように頑張ります。カラーが得意な美容師さんを目指します。",
    },
    { gridColumn: 4, gridRow: 2, dream: "幸せになる" },
    { gridColumn: 5, gridRow: 2, dream: "お店を出す" },
    { gridColumn: 2, gridRow: 3, dream: "留学して英語をマスターする" },
    {
      gridColumn: 3,
      gridRow: 3,
      dream: "フロントもバックもできるフルスタックなエンジニアになる！",
    },
    { gridColumn: 4, gridRow: 3, dream: "洋服をたくさん買う" },
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
        <InputSakuraCardItem />
      </Box>
    </Box>
  );
};

export default SakuraCardArea;
