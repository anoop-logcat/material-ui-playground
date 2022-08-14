import { Grid, Typography } from "@mui/material";

type HeadlinePropsType = {
  title: string;
  subtitle: string;
};

function Headline({ title, subtitle }: HeadlinePropsType) {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems="center"
      direction="column"
      paddingY="50px"
    >
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {subtitle}
      </Typography>
      <Typography variant="h4" fontWeight={500}>
        {title}
      </Typography>
    </Grid>
  );
}

export default Headline;
