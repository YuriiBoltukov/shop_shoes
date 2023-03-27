import React from 'react';

function CartItem() {
	return (
		<tbody>
			<tr>
				<td scope='row'>1</td>
				<td>
					<a href='/products/1.html'>Босоножки 'MYER'</a>
				</td>
				<td>18 US</td>
				<td>1</td>
				<td>34 000 руб.</td>
				<td>34 000 руб.</td>
				<td>
					<button className='btn btn-outline-danger btn-sm'>Удалить</button>
				</td>
			</tr>
			<tr>
				<td colSpan={5} className='text-right'>
					Общая стоимость
				</td>
				<td>34 000 руб.</td>
			</tr>
		</tbody>
	);
}

export default CartItem;
