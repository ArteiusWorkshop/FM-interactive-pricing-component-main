import { Box, Typography } from "@mui/material";
import React from "react";

import styles from "./styles/Header.module.css";

export const Header = () => {
  return (
    <Box className={styles.header}>
      <Box>
        <Typography className={styles.title}>
          Simple, traffic-based pricing
        </Typography>
        <Typography className={styles.subtitle}>
          Sign-up for our 30-day trial. <br />
          No credit card required.
        </Typography>
      </Box>
    </Box>
  );
};
