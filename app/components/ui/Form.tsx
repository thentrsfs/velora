'use client';

import { useState } from 'react';

import { toast } from 'sonner';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!name || !email || !message) {
			toast.error('Please fill in all fields.');
			return;
		}
		toast.success('Message sent successfully.');

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form
			className='flex flex-col gap-8 max-w-lg mx-auto'
			onSubmit={handleSubmit}>
			<div>
				<label
					htmlFor='name'
					className='text-sm uppercase tracking-[0.25em] text-white/40'>
					Name
				</label>

				<input
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					required
					placeholder='Your Name'
					className='mt-4 w-full border-b border-white/10 bg-transparent pb-4 text-lg text-text placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-primary'
				/>
			</div>

			<div>
				<label
					htmlFor='email'
					className='text-sm uppercase tracking-[0.25em] text-white/40'>
					Email
				</label>

				<input
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					required
					placeholder='you@example.com'
					className='mt-4 w-full border-b border-white/10 bg-transparent pb-4 text-lg text-text placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-primary'
				/>
			</div>

			<div>
				<label
					htmlFor='message'
					className='text-sm uppercase tracking-[0.25em] text-white/40'>
					Message
				</label>

				<textarea
					id='message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					rows={4}
					placeholder='Write your message...'
					className='mt-4 w-full resize-none border-b border-white/10 bg-transparent pb-4 text-lg text-text placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-primary'
				/>
			</div>

			<button
				type='submit'
				className='group inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-text-muted transition-colors duration-300 hover:text-primary cursor-pointer'>
				Send Message
				<span className='transition-transform duration-300 group-hover:translate-x-1'>
					→
				</span>
			</button>
		</form>
	);
};

export default Form;
