import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0ba42",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            width: "100%",
            height: "300px",
            backgroundImage: "url('/main-logo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "0% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div style={{ maxWidth: "648px", margin: "auto", textAlign: "center" }}>
        <h1>CoffeeWIP</h1>
        <Link href="/collaborators">
          <a>Colaboradores</a>
        </Link>
        <br />
        <a
          href="https://github.com/Coffee-WIP/coffeewip-website"
          target="_blank"
        >
          Repositorio Git
        </a>
      </div>
    </div>
  );
}
