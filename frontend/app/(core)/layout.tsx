import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";


export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  

  if (!session) redirect("/"); 

  return (
    <div>
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <a href="/feed">Feed</a>{" "}
      </nav>

      <main style={{ padding: 12 }}>{children}</main>

    </div>
  );
}