'use client';

import { getRecipe } from '@/action/getRecipe';
import type { IRecipe } from '@/types';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useLayoutEffect, useState } from 'react';

export default function RecipeDetails() {
	const { id } = useParams<{ id: string }>();
	const router = useRouter();
	const [recipe, setRecipe] = useState<IRecipe>();

	const fetchRecipeDetails = useCallback(async () => {
		const res = await getRecipe({ id });
		setRecipe(res.result);
	}, [id]);

	useLayoutEffect(() => {
		if (id) {
			fetchRecipeDetails();
		}
	}, [fetchRecipeDetails, id]);

	return (
		<section className="min-h-screen p-4">
			<button
				onClick={() => {
					router.back();
				}}
				className="pl-2 mb-2 cursor-pointer"
			>
				Back to list
			</button>
			{recipe && (
				<>
					<h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-4">
							<h2 className="text-xl font-semibold">Ingredients:</h2>
							<ul className="list-disc pl-6">
								{recipe.extendedIngredients.map(ingredient => (
									<li key={ingredient.id}>{ingredient.name}</li>
								))}
							</ul>
						</div>
						<div>
							<Image src={recipe.image} alt={recipe.title} width={100} height={100} className="w-full h-full mb-2" />
						</div>
					</div>
					<div>
						<h2 className="text-xl font-semibold">Instructions:</h2>
						<p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
					</div>
				</>
			)}
		</section>
	);
}
