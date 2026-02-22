import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function FeedPage() {
  const session = await getServerSession(authOptions);

  // session is guaranteed by (app)/layout.tsx, but it's fine to use it here too
  return (
    <div>
      <h1>Feed</h1>
      <p>Logged in as: {session?.user?.email}</p>

      {/* Later: render posts */}
    </div>
  );
}