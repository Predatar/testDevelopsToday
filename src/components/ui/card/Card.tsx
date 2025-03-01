import type { IOneRecipe } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface PropsType {
	recipe: IOneRecipe;
}

const Card: FC<PropsType> = ({ recipe }) => {
	return (
		<div key={recipe.id} className="border rounded overflow-hidden">
			<Image src={recipe.image} alt={recipe.title} width={100} height={100} className="w-full h-48 object-cover" />
			<div className="p-4">
				<h3 className="text-lg font-semibold">{recipe.title}</h3>
				<Link href={`/recipes/${recipe.id}`} passHref className="cursor-pointer">
					<span className="text-blue-500 mt-3">View Recipe</span>
				</Link>
			</div>
		</div>
	);
};

export default Card;
