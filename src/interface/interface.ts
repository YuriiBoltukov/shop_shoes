export interface DeliveryForm {
	tel: string;
	adress: string;
	agreement: boolean;
}

export interface Item {
	id: number;
	category: string;
	title: string;
	images: string[];
	sku: string;
	manufacturer: string;
	color: string;
	material: string;
	reason: string;
	season: string;
	heelSize: string;
	price: number;
	oldPrice?: number;
	sizes: {
		size: string;
		available: boolean;
	}[];
}

export interface CartItemProps {
	elem: Item;
	handleRemove: (id: number) => void;
}
