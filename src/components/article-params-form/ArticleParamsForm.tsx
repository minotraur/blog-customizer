import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select/Select';
import { RadioGroup } from '../radio-group/RadioGroup';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator/Separator';
import { useState } from 'react';

export const ArticleParamsForm = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const handleButtonClick = () => {
		setIsFormOpen(!isFormOpen);
	};
	return (
		<>
			<ArrowButton onClick={handleButtonClick} isOpen={isFormOpen} />
			<aside
				className={`${styles.container} ${
					isFormOpen && styles.container_open
				}`}>
				<form className={styles.form}>
					<Select
						selected={defaultArticleState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={() => {
							console.log('Изменение');
						}}
						onClose={() => {
							console.log('Закрытие');
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='radioFonts'
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
						title='размер шрифта'
					/>
					<Select
						selected={defaultArticleState.fontColor}
						options={fontColors}
						onChange={() => {
							console.log('Изменение');
						}}
						onClose={() => {
							console.log('Закрытие');
						}}
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						selected={defaultArticleState.backgroundColor}
						options={backgroundColors}
						onChange={() => {
							console.log('Изменение');
						}}
						onClose={() => {
							console.log('Закрытие');
						}}
						title='цвет фона'
					/>
					<Select
						selected={defaultArticleState.contentWidth}
						options={contentWidthArr}
						onChange={() => {
							console.log('Изменение');
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
