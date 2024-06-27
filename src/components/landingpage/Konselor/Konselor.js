import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AnimateFadeIn from '../../landingpage/home/animation/Animation';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

export default function DetailKonselor() {
  const StyledContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }));

  return (
    <StyledContainer>
      <AnimateFadeIn>
        <Card sx={{ maxWidth: 1200 }}>
          <CardHeader
            avatar={
              <Stack>
                <Avatar {...stringAvatar('Tia Rosmawati')} /> 
              </Stack>
            }
            title="Tia Rosmawati"
            subheader="Konselor Kesehatan"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum .. lorem ipsum .. lorem ipsum ..
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </AnimateFadeIn>
      <br></br>
      <AnimateFadeIn>
        <Card sx={{ maxWidth: 1200 }}>
          <CardHeader
            avatar={
              <Stack>
                <Avatar {...stringAvatar('Leonardo')} />
              </Stack>
            }
            title="Leonardo"
            subheader="Konselor Keamanan"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum .. lorem ipsum .. lorem ipsum ..
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </AnimateFadeIn>
      <br></br>
      <AnimateFadeIn>
        <Card sx={{ maxWidth: 1200 }}>
          <CardHeader
            avatar={
              <Stack>
                <Avatar {...stringAvatar('Jack Gun')} />
              </Stack>
            }
            title="Jack Gun"
            subheader="Konselor Pelayanan"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum .. lorem ipsum .. lorem ipsum ..
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </AnimateFadeIn>
    </StyledContainer>
  );
}
