interface ToastProps {
	type: "success" | "error" | "";
	message: string;
}

const Toast = ({ type, message }: ToastProps) => {
	return (
		<div className={`toast ${type}`}>
			{type === "success" ? (
				<svg
					className="icon"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 13l4 4L19 7"
					/>
				</svg>
			) : (
				<svg
					className="icon"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			)}

			<span className="message">{message}</span>
		</div>
	);
};

export default Toast;
