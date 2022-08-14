import { Box } from "@mui/material";
import type { NextPage } from "next";
import Header from "../components/Header";
import Headline from "../components/Headline";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          backgroundColor: "gray",
        }}
      ></Box>
      <Headline title="My Services" subtitle="Let see the services"></Headline>
    </MainLayout>
  );
};

export default Home;
