'use client';

import { useState } from "react";
import SiblingA from "./SiblingA";
import SiblingB from "./SiblingB";

const Parent = () => {
    const [data, setData] = useState('Parent Data');
    const handleDataFromA = (msg) => {
        setData(msg)
    }
  return (
    <div>
      <SiblingA onSendData={handleDataFromA} />
      <SiblingB receivedData={data} />
    </div>
  )
};

export default Parent;
