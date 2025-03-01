'use client';

import { cuisines } from '@/lib/cuisines';
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [cuisine, setCuisine] = useState('');
	const [maxTime, setMaxTime] = useState('');
	const [isEnabled, setIsEnabled] = useState(false);

	// Update button state based on inputs
	const checkEnableButton = () => {
		setIsEnabled(!!query || !!cuisine || !!maxTime);
	};

	const handleSearch = () => {
		if (isEnabled) {
			router.push(`/recipes?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxTime}`);
		}
	};

	return (
		<section className="min-h-screen flex flex-col justify-center items-center p-4">
			<h1 className="text-3xl font-bold mb-6">Recipe Search</h1>
			<div className="space-y-4 w-full max-w-md">
				<input
					type="text"
					className="w-full p-2 border rounded"
					placeholder="Enter a recipe (e.g., pasta)"
					value={query}
					onChange={e => {
						setQuery(e.target.value);
						checkEnableButton();
					}}
				/>
				<select
					className="w-full p-2 border rounded"
					value={cuisine}
					onChange={e => {
						setCuisine(e.target.value);
						checkEnableButton();
					}}
				>
					<option value="" className="text-black">
						Select Cuisine
					</option>
					{cuisines.map((elem, index) => (
						<option value={elem} key={index} className="text-black">
							{elem}
						</option>
					))}
				</select>
				<input
					type="number"
					className="w-full p-2 border rounded"
					placeholder="Max preparation time (minutes)"
					value={maxTime}
          min={1}
					onChange={e => {
						setMaxTime(e.target.value);
						checkEnableButton();
					}}
				/>
				<button
					className={`w-full p-2 bg-blue-500 text-white rounded ${!isEnabled && 'opacity-50 cursor-not-allowed'}`}
					onClick={handleSearch}
					disabled={!isEnabled}
				>
					Next
				</button>
			</div>
		</section>
	);
}
