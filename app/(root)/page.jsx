import Landing from "@/components/ui/landing";
import Featureds from "@/components/ui/featureds";
import Cities from "@/components/ui/cities";
import Services from "@/components/ui/services";
import Teams from "@/components/ui/teams";
import Blogs from "@/components/ui/blogs";
import Agent from "@/components/ui/agent";

export default function Home() {
	return (
		<>
			<Landing />
			<Featureds />
			<Cities />
			<Services />
			<Teams />
			<Blogs />
			<Agent />
		</>
	);
}
