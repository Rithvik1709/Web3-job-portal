import PostJob from "../components/PostJob";
import JobList from "../components/JobList";
import AIRecommendations from "../components/AIRecommendations";
import DAO from "../components/DAO";

export default function Home() {
    return (
        <div>
            <h1>Web3 Job Portal</h1>
            <PostJob />
            <JobList />
            <AIRecommendations />
            <DAO />
        </div>
    );
}