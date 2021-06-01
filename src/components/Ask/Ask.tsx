import React, { FC, useEffect } from "react";

import { askData } from "mock-data";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchAsk } from "redux/slices";

const Ask: FC = () => {
  // const displayResult = askData.map((item) => <li>{item}</li>);
  const dispatch = useAppDispatch();
  const asks = useAppSelector((state) => state.asks);

  const displayResult = askData.map((item) => <li key={item}>{item}</li>);

  useEffect(() => {
    dispatch(fetchAsk());
  }, []);

  return (
    <div>
      <p>This is Ask Component!</p>
      <ol>{displayResult}</ol>
    </div>
  );
};

export default Ask;
