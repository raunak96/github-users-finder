import spinner from "../../assets/spinner.gif";

const Spinner = () => {
	return (
		<div className="w-full mt-20">
			<img
				src={spinner}
				alt="Loading..."
				width={180}
				className="text-center mx-auto"
			/>
		</div>
	);
};

export default Spinner;
