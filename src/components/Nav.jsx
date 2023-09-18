import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [btnActive, setBtnActive] = useState({});
  const clickBtn = (e) => {
    const { name } = e.target;
    console.log(name);
    setBtnActive((prev) => ({ [name]: !prev[name] }));
  };
  useEffect(() => {
    console.log(btnActive);
  }, [btnActive]);

  return (
    <div className="nav">
      <button className={`btn custom-btn ${btnActive["btn1"] ? "active" : ""}`}>
        <Link to="/total" name="btn1" onClick={clickBtn}>
          전체
        </Link>
      </button>
      <button className={`btn custom-btn ${btnActive["btn2"] ? "active" : ""}`}>
        <Link to="/share" name="btn2" onClick={clickBtn}>
          학습공유
        </Link>
      </button>
      <button className={`btn custom-btn ${btnActive["btn3"] ? "active" : ""}`}>
        <Link to="/question" name="btn3" onClick={clickBtn}>
          학습질문
        </Link>
      </button>
      <button className={`btn custom-btn ${btnActive["btn4"] ? "active" : ""}`}>
        <Link to="/talk" name="btn4" onClick={clickBtn}>
          자유글
        </Link>
      </button>
    </div>
  );
};

export default Nav;
