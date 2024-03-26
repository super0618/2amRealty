import BlogSlide from "@/components/blog-slide";

export default function () {
	return (
		<div className="bg-gray-50 pt-32 pb-12">
			<div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<BlogSlide
					thumb="/images/blogs/thumb3.jpg"
					user="/images/blogs/user3.png"
					username="Ali Tufan"
					type="Business"
					title="Finding the Right Seller"
					description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
				/>
				<BlogSlide
					thumb="/images/blogs/thumb2.jpg"
					user="/images/blogs/user2.png"
					username="Ali Tufan"
					type="Construction"
					title="Avoiding Financial Stress"
					description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
				/>
				<BlogSlide
					thumb="/images/blogs/thumb1.jpg"
					user="/images/blogs/user1.png"
					username="Ali Tufan"
					type="Business"
					title="Markets"
					description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
				/>
				<BlogSlide
					thumb="/images/blogs/thumb1.jpg"
					user="/images/blogs/user1.png"
					username="Ali Tufan"
					type="Business"
					title="Why You Should Not Make"
					description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
				/>
				<BlogSlide
					thumb="/images/blogs/thumb2.jpg"
					user="/images/blogs/user2.png"
					username="Ali Tufan"
					type="Construction"
					title="Renovated Apartment"
					description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
				/>
				<BlogSlide
					thumb="/images/blogs/thumb3.jpg"
					user="/images/blogs/user3.png"
					username="Ali Tufan"
					type="Business"
					title="Use a Buyer's Agent"
					description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
				/>
			</div>
		</div>
	);
}
