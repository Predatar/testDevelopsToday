'use server';

import type { IRecipe } from '@/types';

export async function getRecipe({ id }: { id: string }): Promise<{ result?: IRecipe; error?: string }> {
	const API_KEY = process.env.SPOONACULAR_API_KEY; // Store API key in .env.local
	const API_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

	try {
		const response = await fetch(API_URL, { next: { revalidate: 60 } });
		if (!response.ok) throw new Error('Failed to fetch recipes');

		const data: IRecipe = await response.json();
		return { result: data || undefined };
	} catch (error) {
		console.error(error);
		return { result: undefined, error: 'Error fetching recipes' };
	}
}
