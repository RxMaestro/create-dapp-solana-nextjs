import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Shiba Council NFT Gallery</title>
        <meta
          name="description"
          content="All your Shiba and Solana NFTs in one place."
        />
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;
