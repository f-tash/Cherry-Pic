import React from "react";
import { Grid, Box } from "@mui/material";
import OtherUserPost from "./OtherUserPost.tsx";

const SakuraCardArea = () => {
  const dreams = [
    { gridColumn: 1, gridRow: 1, dream: "大富豪になる！" },
    { gridColumn: 2, gridRow: 1, dream: "世界一周する！" },
    { gridColumn: 3, gridRow: 1, dream: "プログラマーになる！" },
    {
      gridColumn: 1,
      gridRow: 2,
      dream: "お客さんも自分も笑顔に幸せにできるヘアメイクさんになる!!",
    },
    {
      gridColumn: 3,
      gridRow: 2,
      dream:
        "人生楽しくやりたいことをやって自分で幸せになれるように頑張ります。カラーが得意な美容師さんを目指します。",
    },
    { gridColumn: 1, gridRow: 3, dream: "b" },
    { gridColumn: 2, gridRow: 3, dream: "c" },
    { gridColumn: 3, gridRow: 3, dream: "d" },
  ];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        position: "relative",
      }}
    >
      {/* 周りの8要素 */}
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
          gridColumn: 2,
          gridRow: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="./sakura.png" />
      </Box>
    </Box>
  );
};

export default SakuraCardArea;
