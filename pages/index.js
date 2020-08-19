import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setList } from "../redux/list";

const Index = ({ response }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list.data);

  return (
    <div>
      {data.map((val) => (
        <div key={val}>
          <div>{val}</div>
          <button>Click Me</button>
        </div>
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(setList(text))}>add</button>
      <Link href="/p">
        <button>link</button>
      </Link>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:2000/todo/get-todo/1");
  const response = await res.json();
  console.log(response);

  return {
    props: {
      response,
    },
  };
}

export default Index;
