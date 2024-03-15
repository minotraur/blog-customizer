import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select/Select';
import { RadioGroup } from '../radio-group/RadioGroup';
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator/Separator';
import { useEffect, useRef, useState } from 'react';

export const ArticleParamsForm = () => {
	// Хуки
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [fontSelectState, setFontSelectState] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeSelectState, setFontSizeSelectState] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [fontColorSelectState, setFontColorSelectState] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [backgroundColorSelectState, setBackgroundColorSelectState] =
		useState<OptionType>(defaultArticleState.backgroundColor);
	const [contentWidthSelectState, setContentWidthSelectState] =
		useState<OptionType>(defaultArticleState.contentWidth);

	const asideRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				asideRef.current &&
				!asideRef.current.contains(event.target as Node)
			) {
				setIsFormOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Хэндлеры
	const handleButtonClick = () => {
		setIsFormOpen(!isFormOpen);
	};
	const handleFontSelectChange = (fontSelected: OptionType) => {
		setFontSelectState(fontSelected);
	};

	const handleFontSizeSelectChange = (fontSizeSelected: OptionType) => {
		setFontSizeSelectState(fontSizeSelected);
	};
	const handleFontColorSelectChange = (fontColorSelected: OptionType) => {
		setFontColorSelectState(fontColorSelected);
	};
	const handleBackgroundColorSelectChange = (
		backgroundColorSelected: OptionType
	) => {
		setBackgroundColorSelectState(backgroundColorSelected);
	};
	const handleContentWidthSelectChange = (contentWidthSelected: OptionType) => {
		setContentWidthSelectState(contentWidthSelected);
	};

	return (
		<>
			<ArrowButton onClick={handleButtonClick} isOpen={isFormOpen} />
			<aside
				className={`${styles.container} ${isFormOpen && styles.container_open}`}
				ref={asideRef}>
				<form className={styles.form}>
					<Select
						selected={fontSelectState}
						options={fontFamilyOptions}
						onChange={(fontSelected: OptionType) => {
							handleFontSelectChange(fontSelected);
						}}
						onClose={() => {
							console.log('Закрытие');
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='radioFonts'
						options={fontSizeOptions}
						selected={fontSizeSelectState}
						title='размер шрифта'
						onChange={(fontSizeSelected: OptionType) => {
							handleFontSizeSelectChange(fontSizeSelected);
						}}
					/>
					<Select
						selected={fontColorSelectState}
						options={fontColors}
						onChange={(fontColorSelected: OptionType) => {
							handleFontColorSelectChange(fontColorSelected);
						}}
						onClose={() => {
							console.log('Закрытие');
						}}
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						selected={backgroundColorSelectState}
						options={backgroundColors}
						onChange={(backgroundColorSelected: OptionType) => {
							handleBackgroundColorSelectChange(backgroundColorSelected);
						}}
						onClose={() => {
							console.log('Закрытие');
						}}
						title='цвет фона'
					/>
					<Select
						selected={contentWidthSelectState}
						options={contentWidthArr}
						onChange={(contentWidthSelected: OptionType) => {
							handleContentWidthSelectChange(contentWidthSelected);
						}}
						onClose={() => {
							console.log('Закрытие');
						}}
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
