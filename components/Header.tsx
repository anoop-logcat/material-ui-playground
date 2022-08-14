import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

type NavProps = {
  title: string;
  path: string;
};

function Header() {
  const navItems: NavProps[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <AppBar position="sticky" elevation={0} enableColorOnDark component={"nav"}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          MUI Playground
        </Typography>
        <Grid sx={{ display: { xs: "none", sm: "flex" } }}>
          {navItems.map((item) => (
            <Grid item key={item.title} mx={2}>
              <Link href={item.path}>
                <Button variant="text" color="secondary">
                  {item.title}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
