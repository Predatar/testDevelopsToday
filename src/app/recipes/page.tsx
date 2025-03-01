'use client';

import { getAllRecipes } from '@/action/getRecipes';
import Card from '@/components/ui/card/Card';
import type { IAllRecipes } from '@/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Recipe() {
	const router = useSearchParams();
	const query = router.get('query');
	const cuisine = router.get('cuisine');
	const maxReadyTime = router.get('maxReadyTime');
	const [recipes, setRecipes] = useState<IAllRecipes>();
	const [loading, setLoading] = useState(true);

	const fetchRecipes = useCallback(async () => {
		setLoading(true);
		const res = await getAllRecipes({ cuisine, maxReadyTime, query });

		setRecipes(res.result);
		setLoading(false);
	}, [cuisine, maxReadyTime, query]);

	useEffect(() => {
		if (query || cuisine || maxReadyTime) {
			fetchRecipes();
		}
	}, [query, cuisine, maxReadyTime, fetchRecipes]);

	if (loading) return <div>Loading...</div>;

	return (
		<section className="min-h-screen p-">
			<h1 className="text-3xl font-bold pt-1.5 text-center">Recipes</h1>
			<nav className="p-1 mb-6">
				<Link href="/">Back to search</Link>
			</nav>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
				{recipes?.results.map((recipe, index) => 
					<Card recipe={recipe} key={index}></Card>
				)}
			</div>
		</section>
	);
};