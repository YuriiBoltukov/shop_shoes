import React, { useState } from 'react';
import { DeliveryForm } from '../../interface/interface';
import style from './order.module.scss';

function Order() {
	const [form, setForm] = useState<DeliveryForm>({
		tel: '',
		adress: '',
		agreement: false,
	});

	function updateObjectState<T>(name: keyof T, value: any, state: T): T {
		return {
			...state,
			[name]: value,
		};
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = event.target as HTMLInputElement;
		const inputValue = type === 'checkbox' ? checked : value;
		setForm(updateObjectState(name as keyof DeliveryForm, inputValue, form));
	};

	function submit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log(form);
		setForm({
			tel: '',
			adress: '',
			agreement: false,
		});
	}

	return (
		<section className={style.order}>
			<h2 className={style.order_title}>Оформить заказ</h2>
			<div className={style.order_form}>
				<form className={style.order_form_body} onSubmit={submit}>
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
							id='address'
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
							checked={form.agreement}
							onChange={handleInputChange}
						/>
						<label
							className={style.order_form_body_check_label}
							htmlFor='agreement'>
							Согласен с правилами доставки
						</label>
					</div>
					<button type='submit' className={style.order_form_body_btn}>
						Оформить
					</button>
				</form>
			</div>
		</section>
	);
}

export default Order;
