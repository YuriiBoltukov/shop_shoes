import React, { useState, useRef, useEffect } from 'react';
import { search } from '../../assets/icon';
import { useSelector } from 'react-redux';
import style from './search.module.scss';

function SearchContainer() {
	const [isActive, setIsActive] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	function handleButtonClick() {
		setIsActive(true);
	}

	function handleInputBlur() {
		setIsActive(false);
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			setIsActive(false);
		}
	}

	useEffect(() => {
		if (isActive && inputRef.current !== null) {
			inputRef.current.focus();
		}
	}, [isActive, inputRef]);

	return (
		<div className={style.search_container}>
			<input
				type='text'
				placeholder='Поиск'
				className={`${style.search_input} ${isActive ? style.active : ''}`}
				onBlur={handleInputBlur}
				onKeyDown={handleKeyDown}
				ref={inputRef}
			/>
			<button
				className={`${style.search_button} ${isActive ? style.hidden : ''}`}
				onClick={handleButtonClick}>
				{search}
			</button>
		</div>
	);
}

export default SearchContainer;
