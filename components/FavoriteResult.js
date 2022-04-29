import React from "react";

const FavoriteResult = ({ data }) => {
  return (
    <div>
      <h3>FavoriteResult</h3>
      <div style={{ display: "flex" }}>
        {data.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <button onClick={() => {}}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FavoriteResult);
