import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import BottomNav from "@/components/nav/BottomNav";


export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  

  if (!session) redirect("/"); 

  return (
    <div className="min-h-screen bg-background">
      

      <main className="pb-28 px-4">{children}</main>

      <BottomNav/>
    </div>
  );
}