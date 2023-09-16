import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <button
          className={`btn custom-btn ${btnActive["btn1"] ? "active" : ""}`}
          name="btn1"
          onClick={clickBtn}
        >
          전체
        </button>
      </Link>
      <Link to="/share">
        <button
          className={`btn custom-btn ${btnActive["btn2"] ? "active" : ""}`}
          name="btn2"
          onClick={clickBtn}
        >
          학습공유
        </button>
      </Link>
      <Link to="/question">
        <button
          className={`btn custom-btn ${btnActive["btn3"] ? "active" : ""}`}
          name="btn3"
          onClick={clickBtn}
        >
          학습질문
        </button>
      </Link>
      <Link to="/talk">
        <button
          className={`btn custom-btn ${btnActive["btn4"] ? "active" : ""}`}
          name="btn4"
          onClick={clickBtn}
        >
          자유글
        </button>
      </Link>
    </div>
  );
};

export default Nav;
