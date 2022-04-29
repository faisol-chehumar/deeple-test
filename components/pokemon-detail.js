import React from "react";
import Image from "next/image";

const PokemonDetail = ({ data, addFavorite }) => {
  const handleClickFavorite = (data) => {
    addFavorite(data);
  };

  return (
    <div style={{ display: "flex" }}>
      {data ? (
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "281px",
              height: "202px",
              left: "0px",
              top: "0px",
              background: "#F5F7FB",
              borderRadius: "4px",
              marginRight: "36px",
            }}
          >
            <Image
              src={data.sprites.front_default}
              width="100px"
              height="100px"
              alt="poke-img"
            />
          </div>
          <div style={{ width: "calc(100% - 281px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>{data.name}</h3>
              <button
                onClick={() => handleClickFavorite(data)}
                style={{ height: "44px" }}
              >
                Favorite
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <b>Weight</b>
                <p>{data.weight}</p>
              </div>
              <div>
                <b>Height</b>
                <p>{data.height}</p>
              </div>
            </div>
            {data.version && (
              <div style={{ display: "flex" }}>
                <h3>Version</h3>
                <div>1</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        "Not Found"
      )}
    </div>
  );
};

export default React.memo(PokemonDetail);
