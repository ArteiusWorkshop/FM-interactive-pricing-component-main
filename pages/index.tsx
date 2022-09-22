import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";
import { Desktop } from "../components/UI";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Desktop />
    </BaseLayout>
  );
};

export default Home;
