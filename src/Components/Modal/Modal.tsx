import React from 'react';
import style from './modal.module.scss';

function Modal(props: any) {
	const { setShowModal } = props;
	return (
		<div className={style.modal} onClick={() => setShowModal(false)}>
			<div className={style.modal_window}>
				<p className={style.modal_window_text}>
					Товар был успешно добавлен в корзину
				</p>
				<button
					className={style.modal_window_btn}
					onClick={() => setShowModal(false)}>
					Закрыть
				</button>
			</div>
		</div>
	);
}

export default Modal;
