import React, { useState } from "react";

const Like = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="like">
      <button onClick={() => setCount(count + 1)}> Like {count}</button>
    </div>
  );
};

export default Like;
