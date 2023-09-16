import { useEffect, useState } from "react";

const Nav = () => {
  const [btnActive, setBtnActive] = useState({});
  const clickBtn = (e) => {
    const { name } = e.target;
    setBtnActive((prev) => ({ [name]: !prev[name] }));
  };
  useEffect(() => {
    console.log(btnActive);
  }, [btnActive]);

  return (
    <div className="nav">
      <button
        className={`btn custom-btn ${btnActive["btn1"] ? "active" : ""}`}
        name="btn1"
        onClick={clickBtn}
      >
        전체
      </button>
      <button
        className={`btn custom-btn ${btnActive["btn2"] ? "active" : ""}`}
        name="btn2"
        onClick={clickBtn}
      >
        학습공유
      </button>
      <button
        className={`btn custom-btn ${btnActive["btn3"] ? "active" : ""}`}
        name="btn3"
        onClick={clickBtn}
      >
        학습질문
      </button>
      <button
        className={`btn custom-btn ${btnActive["btn4"] ? "active" : ""}`}
        name="btn4"
        onClick={clickBtn}
      >
        자유글
      </button>
    </div>
  );
};

export default Nav;
