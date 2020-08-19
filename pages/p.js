import Link from "next/link";

const p = () => {
  return (
    <div>
      <div>ini p</div>
      <Link href="/">
        <button>link</button>
      </Link>
    </div>
  );
};

export default p;
