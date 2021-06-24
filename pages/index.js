import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home({ data, data1 }) {
  const router = useRouter();
  const onClick = () => {
    router.reload();
  };
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>Rate It</h1>
        <h4>Click The Image You Prefer</h4>
      </div>
      <div className={styles.images}>
        <button onClick={onClick}>
          <img src={data[0].url} className={styles.image} />
        </button>
        <button onClick={onClick}>
          <img src={data1[0].url} className={styles.image} />
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/image`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  const res1 = await fetch(`http://localhost:3000/api/image`, {
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
