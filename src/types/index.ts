export interface IRecipe {
	id: number;
	title: string;
	image: string;
	imageType: string;
	servings: number;
	readyInMinutes: number;
	cookingMinutes: number;
	preparationMinutes: number;
	license: string;
	sourceName: string;
	sourceUrl: string;
	spoonacularSourceUrl: string;
	healthScore: number;
	spoonacularScore: number;
	pricePerServing: number;
	analyzedInstructions: Array<string>;
	cheap: boolean;
	creditsText: string;
	cuisines: Array<string>;
	dairyFree: boolean;
	diets: Array<string>;
	gaps: string;
	glutenFree: boolean;
	instructions: string;
	ketogenic: boolean;
	lowFodmap: boolean;
	occasions: Array<string>;
	sustainable: boolean;
	vegan: boolean;
	vegetarian: boolean;
	veryHealthy: boolean;
	veryPopular: boolean;
	whole30: boolean;
	weightWatcherSmartPoints: number;
	dishTypes: Array<string>;
	extendedIngredients: Array<{
		aisle: string;
		amount: number;
		consistency: string;
		id: number;
		image: string;
		measures: {
			metric: {
				amount: number;
				unitLong: string;
				unitShort: string;
			};
			us: {
				amount: number;
				unitLong: string;
				unitShort: string;
			};
		};
		meta: Array<string>;
		name: string;
		original: string;
		originalName: string;
		unit: string;
	}>;
	summary: string;
	winePairing: {
		pairedWines: Array<string>;
		pairingText: string;
		productMatches: Array<{
			id: number;
			title: string;
			description: string;
			price: string;
			imageUrl: string;
			averageRating: number;
			ratingCount: number;
			score: number;
			link: string;
		}>;
	};
}

export interface IAllRecipes {
	offset: number;
	number: number;
	results: Array<IOneRecipe>;
	totalResults: number;
}

export interface IOneRecipe {
	id: number;
	title: string;
	image: string;
	imageType: string;
}
