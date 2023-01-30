import React, { useState, useEffect } from 'react';
import { getProductById, currency } from 'home/products';
import { useParams } from "react-router-dom";
const PDPContent = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(async () => {
		try {
			if (id) {
				const result = await getProductById(id);

				console.log(result);
				setProduct(result);
			}
		} catch (err) {
			console.log(err);
		}
	}, [id]);
	console.log(product);

	return (
		<div className="grid grid-cols-2 gap-5">
			{product && <img src={product.image} alt={product.name} />}
			<div>
				<div className="flex">
					{product && (
						<h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
					)}
					{product && (
						<div className="font-bold text-3xl flex-end">
							{currency.format(product.price)}
						</div>
					)}
				</div>
				{/* <div ref={addToCart}></div> */}
				{product && (
					<>
						<div className="mt-10">{product.description}</div>
						<div className="mt-10">{product.longDescription}</div>
					</>
				)}
			</div>
		</div>
	);
};

export default PDPContent;
