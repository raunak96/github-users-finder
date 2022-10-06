import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { GithubProvider } from "./contexts/github/GithubContext";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

function App() {
	return (
		<GithubProvider>
			<Router>
				<div className="flex flex-col justify-between h-screen">
					<Navbar />
					<main className="container mx-auto px-3 pb-12">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</GithubProvider>
	);
}

export default App;
