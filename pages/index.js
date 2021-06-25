import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { NEXT_URL } from "../config/index";

export default function Home({ data, data1 }) {
  const url = data[0].url;
  const url1 = data1[0].url;

  const router = useRouter();
  const onClick = () => {
    router.reload();
  };
  const myLoader = ({ url }) => {
    return url;
  };
  const myLoader1 = ({ url1 }) => {
    return url1;
  };

  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>Rate It</h1>
        <h4>Click The Image You Prefer</h4>
      </div>
      <div className={styles.images}>
        <button onClick={onClick}>
          <Image
            loader={myLoader}
            src={url}
            className={styles.image}
            layout="fill"
          />
        </button>
        <button onClick={onClick}>
          <Image
            loader={myLoader1}
            src={url1}
            className={styles.image}
            layout="fill"
          />
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_URL}/api/image`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  const res1 = await fetch(`${NEXT_URL}/api/image`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data1 = await res1.json();

  return {
    props: { data, data1 },
  };
}
