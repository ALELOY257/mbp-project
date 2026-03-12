import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import FeedCard from "@/components/feed/FeedCard";
import FeedCarousel from "@/components/feed/FeedCarousel";

export default async function FeedPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Feed</h1>
      <p>Logged in as: {session?.user?.email}</p>
      <FeedCarousel projects={MOCK_PROJECTS}/>

    </div>
  );
}