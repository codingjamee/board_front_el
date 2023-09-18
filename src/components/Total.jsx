import { useEffect, useState } from "react";
import Feed from "./Feed";

const Total = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/total", {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setContents(data))
      .then(console.log)
      .catch(console.log);
  }, []);
  return (
    <>
      {contents.map((feed) => (
        <Feed feed={feed} />
      ))}
    </>
  );
};
export default Total;
