import React from "react";

const List = () => {
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {new Array(2).fill(null).map((_, idx) => {
        const text = `상품${idx + 1} $40`;
        return (
          <div className="food" key={idx}>
            <h4>{text}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default List;
