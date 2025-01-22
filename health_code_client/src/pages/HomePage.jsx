import Header from "../components/Header";
import SideBar from "../components/SideBar";
import PostsSection from "../components/PostsSection";
import ChallengesSection from "../components/ChallengesSection";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 h-full overflow-hidden">
        <SideBar />
        <div className="flex flex-col flex-1 p-4 overflow-y-auto">
          <PostsSection />
        </div>
        <div className="flex flex-col flex-1 p-4 overflow-y-auto">
          <ChallengesSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
