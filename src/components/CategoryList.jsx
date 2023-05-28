import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';



const [
	imgCiencia,
	imgHistoria,
	imgTecnologia,
] = imgs;

export const CategoryList = () => {
	
	return (
	
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.ciencia}
				src={imgCiencia}
				alt={`Categoría ${categories.ciencia}`}
				gradientColor='from-teal-300 via-transparent to-green-400'
			/>
			{/* Category Link Tecnologia */}
			<CategoryCard
				category={categories.tecnologia}
				src={imgTecnologia}
				alt={`Categoría ${categories.tecnologia}`}
				gradientColor='from-purple-600 via-neutral-300 to-blue-600'
			/>
			<CategoryCard
				category={categories.historia}
				src={imgHistoria}
				alt={`Categoría ${categories.historia}`}
				gradientColor='from-blue-500 via-neutral-300 to-rose-400'
			/>
	
		</div>
	
	);
};
