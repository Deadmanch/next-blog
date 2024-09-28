'use client';
import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { clsx } from 'clsx';

import { updatePostComment } from '@/api/updatePostComment';
import { ICommentRequest } from '@/interfaces';
import { Button, Input, Textarea } from '@/components';
import CloseIcon from '@/public/assets/icons/close.svg';

import { createCommentSchema } from './schema';
import styles from './CommentForm.module.css';

interface CommentFormProps extends React.HTMLAttributes<HTMLFormElement> {
	postId: number;
}
export const CommentForm = ({ postId, className, ...props }: CommentFormProps) => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setIsError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ICommentRequest>({
		resolver: zodResolver(createCommentSchema)
	});

	const onSubmit = async (data: ICommentRequest) => {
		try {
			await updatePostComment(postId, data);
			setIsSuccess(true);
			reset();
		} catch (error) {
			console.error('[Failed to create comment]', error);
			setIsError('Не удалось создать комментарий');
		}
	};

	return (
		<form
			{...props}
			className={clsx(styles.commentForm, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				id='name'
				label='Ваше имя'
				error={errors.name}
				placeholder='Имя'
				{...register('name')}
				required
			/>
			<Input
				type='email'
				placeholder='Электронная почта'
				id='email'
				label='Ваша электронная почта'
				error={errors.email}
				{...register('email')}
				required
			/>
			<Textarea
				rows={5}
				placeholder='Комментарий'
				id='body'
				label='Ваш комментарий'
				error={errors.body}
				{...register('body')}
				required
			/>
			{isSuccess && (
				<div className={clsx(styles.success, styles.panel)}>
					<div className={styles.successTitle}>Ваш комментарий отправлен</div>
					<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
				</div>
			)}
			{error && (
				<div className={clsx(styles.error, styles.panel)}>
					{error}
					<CloseIcon className={styles.close} onClick={() => setIsError('')} />
				</div>
			)}
			<Button>Отправить</Button>
		</form>
	);
};
