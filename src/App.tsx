import { useState } from "react";

// interfaces
interface SelectedPages {
	all: boolean;
	page1: boolean;
	page2: boolean;
	page3: boolean;
	page4: boolean;
}

function App() {
	// states
	const [selectedPages, setSelectedPages] = useState<SelectedPages>({
		all: false,
		page1: false,
		page2: false,
		page3: false,
		page4: false,
	});

	// handle all pages checkbox change
	const handleAllPagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;

		setSelectedPages({
			all: isChecked,
			page1: isChecked,
			page2: isChecked,
			page3: isChecked,
			page4: isChecked,
		});
	};

	// handle single page checkbox change
	const handleSinglePageChange = (page: keyof Omit<SelectedPages, "all">) => {
		setSelectedPages((prev) => {
			const newState = {
				...prev,
				[page]: !prev[page],
			};

			const allPagesSelected =
				newState.page1 &&
				newState.page2 &&
				newState.page3 &&
				newState.page4;
			newState.all = allPagesSelected;

			return newState;
		});
	};

	// handle done button click
	const handleDone = () => {
		const selected = Object.entries(selectedPages)
			.filter(([key, value]) => value && key !== "all")
			.map(([key]) => key);

		console.log("selected pages:", selected);
	};

	return (
		<>
			<div className="container">
				<div className="card">
					<div className="page-list">
						{/* all pages */}
						<div className="page-item">
							<label htmlFor="allPages" className="page-label">
								All pages
							</label>
							<input
								type="checkbox"
								id="allPages"
								className="checkbox"
								checked={selectedPages.all}
								onChange={handleAllPagesChange}
							/>
						</div>

						<div className="divider">
							<hr />
						</div>

						{/* page 1 */}
						<div className="page-item">
							<label htmlFor="page1" className="page-label">
								Page 1
							</label>
							<input
								id="page1"
								type="checkbox"
								className="checkbox"
								checked={selectedPages.page1}
								onChange={() => handleSinglePageChange("page1")}
							/>
						</div>

						{/* page 2 */}
						<div className="page-item">
							<label htmlFor="page2" className="page-label">
								Page 2
							</label>
							<input
								id="page2"
								type="checkbox"
								className="checkbox"
								checked={selectedPages.page2}
								onChange={() => handleSinglePageChange("page2")}
							/>
						</div>

						{/* page 3 */}
						<div className="page-item">
							<label htmlFor="page3" className="page-label">
								Page 3
							</label>
							<input
								id="page3"
								type="checkbox"
								className="checkbox"
								checked={selectedPages.page3}
								onChange={() => handleSinglePageChange("page3")}
							/>
						</div>

						{/* page 4 */}
						<div className="page-item">
							<label htmlFor="page4" className="page-label">
								Page 4
							</label>
							<input
								id="page4"
								type="checkbox"
								className="checkbox"
								checked={selectedPages.page4}
								onChange={() => handleSinglePageChange("page4")}
							/>
						</div>

						<div className="divider">
							<hr />
						</div>

						<div className="button-container" onClick={handleDone}>
							<button className="btn">Done</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
