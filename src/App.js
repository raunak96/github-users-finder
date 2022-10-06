import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/layout/Alert";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { AlertProvider } from "./contexts/alert/AlertContext";
import { GithubProvider } from "./contexts/github/GithubContext";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import User from "./pages/user";

function App() {
	return (
		<AlertProvider>
			<GithubProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen">
						<Navbar />
						<main className="container mx-auto px-3 pb-12">
							<Alert />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="about" element={<About />} />
								<Route
									path="user/:username"
									element={<User />}
								/>
								<Route path="*" element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</GithubProvider>
		</AlertProvider>
	);
}

export default App;
