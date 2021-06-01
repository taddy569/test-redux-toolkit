import React, { FC } from "react";

import { jobsData } from "mock-data";

const Jobs: FC<{}> = () => {
  const displayResult = jobsData.map((item) => <li>{item}</li>);
  return (
    <div>
      This is Jobs Component
      <ol>{displayResult}</ol>
    </div>
  );
};

export default Jobs;
