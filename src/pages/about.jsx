const About = () => {
	return (
		<div className="lg:text-center">
			<h1 className="text-6xl mb-4">Github Finder</h1>
			<p className="mb-4 text-2xl font-light">
				A React app to search GitHub profiles and see profile details.
				This project is one of the many I have made.
				<a href="https://github.com/raunak96">
					{" "}
					Find All My <strong>projects</strong> here.
				</a>{" "}
				---
				<strong>
					<a href="https://www.linkedin.com/in/raunak-kedia-3b5285177/">
						{" "}
						User Profile of Raunak Kedia
					</a>
				</strong>
				.
			</p>
			<p className="text-lg text-gray-400">
				Version <span className="text-white">1.0.0</span>
			</p>
			<p className="text-lg text-gray-400">
				Layout By:{" "}
				<a
					className="text-white"
					href="https://www.facebook.com/raunakkedia100/">
					Raunak Kedia
				</a>
			</p>
		</div>
	);
};

export default About;
