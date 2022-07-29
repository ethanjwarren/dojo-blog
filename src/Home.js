import { useState } from "react";
import Gallery from "./Gallery";

const Home = () => {
  const [gallery] = useState([
    {
      url: "https://picsum.photos/200/301",
      alt: "first random picture",
      id: 1,
    },
    {
      url: "https://picsum.photos/200/302",
      alt: "second random picture",
      id: 2,
    },
    {
      url: "https://picsum.photos/200/303",
      alt: "third random picture",
      id: 2,
    },
  ]);

  return (
    <div className="home">
      <Gallery gallery={gallery} />
    </div>
  );
};

export default Home;
