import Landing from "@/components/ui/landing";
import FeaturedProperty from "@/components/ui/featuredprop";
import FindProperty from "@/components/ui/findprop";
import Services from "@/components/ui/services";
import Teams from "@/components/ui/teams";
import Articles from "@/components/ui/articles";
import Partner from "@/components/ui/partner";

export default function Home() {
	return (
		<>
			<Landing />
			<FeaturedProperty />
			<FindProperty />
			<Services />
			<Teams />
			<Articles />
			<Partner />
		</>
	);
}
