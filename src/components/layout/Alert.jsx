import { useContext } from "react";
import AlertContext from "../../contexts/alert/AlertContext";

const Alert = () => {
	const { alert } = useContext(AlertContext);

	return (
		alert && (
			<div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-4`}>
				<div className="alert alert-error shadow-lg text-primary-content">
					<div>
						<svg
							className="w-6 h-6 flex-none mt-0.5"
							fill="none"
							viewBox="0 0 24 24">
							<circle
								cx="12"
								cy="12"
								r="12"
								fill="#FECDD3"></circle>
							<path
								d="M8 8l8 8M16 8l-8 8"
								stroke="#B91C1C"
								strokeWidth="2"></path>
						</svg>
						<strong>{alert?.msg ?? "Error"}</strong>
					</div>
				</div>
			</div>
		)
	);
};

export default Alert;
