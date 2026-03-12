
import { MOCK_PROJECTS } from "@/lib/mock-data";
import FeedCard from "@/components/feed/FeedCard";
import FeedCarousel from "@/components/feed/FeedCarousel";

export default async function FeedPage() {

  return (
    <div>
      <h1>Feed</h1>

      <FeedCarousel projects={MOCK_PROJECTS}/>

    </div>
  );
}