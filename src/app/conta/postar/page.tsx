import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export default async function PostarPage() {
  return (
    <main>
      <h1>Postar</h1>
    </main>
  );
}
