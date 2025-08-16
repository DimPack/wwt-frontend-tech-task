import { FC, ReactNode, useEffect, useRef } from 'react'

interface ModalProps {
	children: ReactNode
	onRequestClose?: () => void
}

export const Modal: FC<ModalProps> = ({ children, onRequestClose }) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onRequestClose?.()
			}
		}
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [onRequestClose])

	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			onRequestClose?.()
		}
	}

	return (
		<div
			onClick={handleClickOutside}
			className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-4 pt-12 pb-12"
		>
			<div
				ref={modalRef}
				className="relative w-full max-w-screen-xl rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8 lg:p-[34px]"
			>
				<button
					onClick={onRequestClose}
					className="absolute top-6 right-6 text-gray-500 transition hover:text-gray-700 cursor-pointer"
				>
					<img
						src="/img/close.png"
						alt="close"
						className="h-6 w-6 object-contain transition-transform hover:scale-110"
					/>
				</button>
				{children}
			</div>
		</div>
	)
}
