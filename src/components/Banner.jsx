import { Box, useMediaQuery } from "@material-ui/core";
import React from "react";

const Banner = () => {
  const bk_1 = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div>
      <Box marginTop="50px">
        <img src={bk_1 ? "./banner.png" : "./banner_mob.png"} height="auto" width="100%" alt="" />
      </Box>
    </div>
  );
};

export default Banner;
