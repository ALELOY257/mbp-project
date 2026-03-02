import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import BottomNav from "@/components/nav/BottomNav";


export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  

  if (!session) redirect("/"); 

  return (
    <div>
      <BottomNav/>

      <main style={{ padding: 12 }}>{children}</main>

    </div>
  );
}