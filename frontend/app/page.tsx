import HomeClient from "../components/HomeClient";

async function getHelloMessage() {
  try {
    const response = await fetch("http://localhost:3000/api/home", {
      cache: "no-store",
    });

    if (!response.ok) {
      return "Backend unavailable";
    }

    return response.text();
  } catch {
    return "Backend unavailable";
  }
}

export default async function Home() {
  const helloMessage = await getHelloMessage();

  return <HomeClient helloMessage={helloMessage} />;
}
