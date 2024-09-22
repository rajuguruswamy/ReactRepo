import React, { useState } from 'react';
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);
  console.log({ format });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormat(updatedFormat);
  };

  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
          <Button variant="text" href="http://www.google.com">
            Text
          </Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>

          <Button variant="contained" color="error">
            Error
          </Button>

          <Button variant="contained" color="warning">
            Warning
          </Button>

          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>

        <Stack spacing={2} direction={'row'}>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>

          <Button variant="text" color="error">
            Error
          </Button>

          <Button variant="text" color="warning">
            Warning
          </Button>

          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </Stack>

        <Stack spacing={2} direction={'row'}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>

          <Button variant="outlined" color="error">
            Error
          </Button>

          <Button variant="outlined" color="warning">
            Warning
          </Button>

          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>

        <Stack spacing={2} direction={'row'}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>

          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>

        <Stack spacing={2} direction={'row'}>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => {
              alert('Clicked');
            }}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>

          <IconButton aria-label="send" color="success" size="small">
            <SendIcon />
          </IconButton>
        </Stack>

        <Stack direction={'row'}>
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert('hello')}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction={'row'}>
          <ToggleButtonGroup
            aria-label="Text formating"
            value={format}
            onChange={handleFormatChange}
            size="small"
            color="success"
            orientation="vertical"
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiButton;
