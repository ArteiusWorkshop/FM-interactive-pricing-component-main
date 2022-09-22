import React, { useState } from "react";
import { Box, Button, Slider, Switch, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "./styles/Card.module.css";
import Chip from "@mui/material/Chip";
import Image from "next/image";

export const Card = () => {
  const [pageviews, setPageviews] = useState(100);
  const [value, setValue] = useState(16);
  const [discount, setDiscount] = useState(false);

  const calcValue = (value: number) => {
    const price = value * 0.16;
    const total = discount === true ? price - price * 0.25 : price;
    setValue(total);
  };

  const handleChange = (value: any) => {
    setPageviews(value.target.value);
    calcValue(value.target.value);
  };

  const handleDiscountClick = () => {
    setDiscount(!discount);
    setPageviews(pageviews);
    const price = pageviews * 0.16;
    const total = discount === !true ? price - price * 0.25 : price;
    setValue(total);
  };

  return (
    <Box className={styles.card}>
      <Box>
        <Typography className={styles.title}>{pageviews}K Pageviews</Typography>
      </Box>
      <Box className={styles.slider}>
        <Slider
          sx={{
            height: "10px",
            color: "hsl(174, 77%, 80%)",
            "& .MuiSlider-valueLabel": {
              display: "none",
            },
            "& .MuiSlider-thumb": {
              height: "40px",
              width: "40px",
              color: "hsl(174, 86%, 45%)",
              backgroundImage: "url(/img/icon-slider.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              "&:hover, &:active": {
                boxShadow: "0 0 10px 5px hsl(174, 86%, 45%)",
              },
            },
            "& .MuiSlider-rail": {
              color: "hsl(224, 65%, 95%)",
            },
          }}
          defaultValue={100}
          min={10}
          max={200}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box className={styles.priceBox}>
        <Typography className={styles.price}>${value.toFixed(2)}</Typography>
        <Typography className={styles.month}> / month</Typography>
      </Box>
      <Box className={styles.billing}>
        <Box paddingRight={1}>
          <Typography> Monthly Billing</Typography>
        </Box>
        <Box>
          <Switch
            checked={discount}
            onClick={handleDiscountClick}
            sx={{
              width: 42,
              height: 26,
              padding: 0,
              "& .MuiSwitch-switchBase": {
                padding: 0,
                margin: "2px",
                transitionDuration: "300ms",
                "&.Mui-checked": {
                  transform: "translateX(16px)",
                  color: "hsl(174, 86%, 45%)",
                  "& + .MuiSwitch-track": {
                    backgroundColor: "hsl(174, 77%, 80%)",
                    opacity: 1,
                    border: 0,
                  },
                },
                "&.Mui-focusVisible .MuiSwitch-thumb": {
                  color: "hsl(174, 86%, 45%)",
                  border: "6px solid hsl(174, 86%, 45%)",
                },
              },
              "& .MuiSwitch-thumb": {
                boxSizing: "border-box",
                width: 22,
                height: 22,
              },
              "& .MuiSwitch-track": {
                borderRadius: 26 / 2,
                backgroundColor: "hsl(174, 77%, 10%)",
              },
            }}
          />
        </Box>
        <Box paddingLeft={1}>
          <Typography>Yearly Billing</Typography>
        </Box>
        <Box>
          <Chip label="-25%" size="small" className={styles.chip} />
        </Box>
      </Box>

      <Box width="100%" className={styles.footer}>
        <Divider />
        <Box className={styles.inner}>
          <Box>
            <Box className={styles.cta}>
              <Box>
                <Image src="/img/icon-check.svg" width="9px" height="8px" />
              </Box>
              <Box paddingLeft={2}>
                <Typography paddingTop={1}> Unlimited websites</Typography>
              </Box>
            </Box>
            <Box className={styles.cta}>
              <Box>
                <Image src="/img/icon-check.svg" width="9px" height="8px" />
              </Box>
              <Box paddingLeft={2}>
                <Typography paddingTop={1}> 100% data ownership</Typography>
              </Box>
            </Box>
            <Box className={styles.cta}>
              <Box>
                <Image src="/img/icon-check.svg" width="9px" height="8px" />
              </Box>
              <Box paddingLeft={2}>
                <Typography paddingTop={1}> Email reports</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className={styles.buttonBox}>
              <Button variant="contained" className={styles.button}>
                Start my trial
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
