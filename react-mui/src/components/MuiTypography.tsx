import React from 'react';
import { Typography } from '@mui/material';

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component={'h1'} gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">subtitle1 heading</Typography>
      <Typography variant="subtitle2">subtitle2 heading</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim
        ut sint id eligendi nisi excepturi qui amet fuga possimus saepe hic
        repellat labore nihil maxime odio eius, sit minima!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, illum
        ex! Vel commodi ad eos quasi, vero numquam. Earum quis similique vitae
        quod accusamus necessitatibus dolorem assumenda nobis, consectetur
        dolorum.
      </Typography>
    </div>
  );
};

export default MuiTypography;
