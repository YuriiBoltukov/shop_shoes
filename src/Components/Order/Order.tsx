import React, { useState } from 'react';
import { DeliveryForm } from '../../interface/interface';
import style from './order.module.scss';

function Order() {
	const [form, setForm] = useState<DeliveryForm>({
		tel: 0,
		adress: '',
		agreement: '',
	});
	function updateObjectState<T>(name: string, value: any, state: T): T {
		return {
			...state,
			[name]: value,
		};
	}
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setForm(updateObjectState(name, value, form));
	};

	function submit(event: any) {
		event.preventDefault();
		console.log(form);
		setForm({
			tel: 0,
			adress: '',
			agreement: '',
		});
	}
	return (
		<section className={style.order}>
			<h2 className={style.order_title}>Оформить заказ</h2>
			<div
				className={style.order_form}
				style={{ maxWidth: '30rem', margin: '0 auto' }}>
				<form className={style.order_form_body}>
					<div className={style.order_form_body_group}>
						<label htmlFor='phone'>Телефон</label>
						<input
							className={style.order_form_body_group_control}
							id='phone'
							name='tel'
							placeholder='Ваш телефон'
							value={form.tel}
							onChange={handleInputChange}
						/>
					</div>
					<div className={style.order_form_body_group}>
						<label htmlFor='address'>Адрес доставки</label>
						<input
							className={style.order_form_body_group_control}
							id='adress'
							name='adress'
							placeholder='Адрес доставки'
							value={form.adress}
							onChange={handleInputChange}
						/>
					</div>
					<div className={style.order_form_body_check}>
						<input
							type='checkbox'
							className={style.order_form_body_check_input}
							id='agreement'
							name='agreement'
							value={form.agreement}
							onChange={handleInputChange}
						/>
						<label
							className={style.order_form_body_check_label}
							htmlFor='agreement'>
							Согласен с правилами доставки
						</label>
					</div>
					<button
						type='submit'
						className={style.order_form_body_btn}
						onClick={submit}>
						Оформить
					</button>
				</form>
			</div>
		</section>
	);
}

export default Order;
