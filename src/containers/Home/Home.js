import React, { useState } from "react";
import "./Home.style.scss";
import useWithWebSocket from "../../components/Hook/useWithWebSocket";

const communicationChannel = "URL/WEB";

const Home = () => {
  const [visible, setVisible] = useWithWebSocket(
    useState,
    false,
    communicationChannel
  );

  return <button onClick={() => setVisible(true)}>Click</button>;
};

export default Home;
