'use server';

import type { IAllRecipes } from '@/types';

export async function getAllRecipes({
	query,
	cuisine,
	maxReadyTime,
}: {
	query: string | null;
	cuisine: string | null;
	maxReadyTime: string | null;
}): Promise<{ result?: IAllRecipes; error?: string }> {
	const API_KEY = process.env.SPOONACULAR_API_KEY; // Store API key in .env.local
	const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query || ''}&cuisine=${
		cuisine || ''
	}&maxReadyTime=${maxReadyTime || ''}&apiKey=${API_KEY}`;

	try {
		const response = await fetch(API_URL, { next: { revalidate: 60 } });
		if (!response.ok) throw new Error('Failed to fetch recipes');

		const data = await response.json();
		return { result: data || undefined };
	} catch (error) {
		console.error(error);
		return { result: undefined, error: 'Error fetching recipes' };
	}
}
