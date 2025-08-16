import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ConfirmBoxProps {
	onConfirm: () => void
	onCancel: () => void
	onClose: () => void
}

export const ConfirmBox: FC<ConfirmBoxProps> = ({
	onConfirm,
	onCancel,
	onClose
}) => {
	const { t } = useTranslation('filter')

	return (
		<div className="absolute inset-0 flex items-center justify-center bg-black/30 z-50 backdrop-blur-sm">
			<div className="relative bg-white rounded-lg p-8 m-10 shadow-lg w-full text-center">
				<p className="mb-4 text-4xl">{t('questionApprove')}</p>

				<button
					onClick={onClose}
					className="absolute top-6 right-6 text-gray-500 transition hover:text-gray-700 cursor-pointer"
				>
					<img
						src="/img/close.png"
						alt="close"
						className="h-6 w-6 object-contain transition-transform hover:scale-110"
					/>
				</button>

				<div className="flex justify-center gap-4 mt-32">
					<button
						className="w-[200px] h-[50px] sm:w-[280px] sm:h-[64px] border-2 border-[#ebeaea] text-black rounded-xl cursor-pointer hover:bg-[#ebeaea] hover:text-gray-600"
						onClick={onCancel}
					>
						{t('notApprove')}
					</button>
					<button
						className="w-[200px] h-[50px] sm:w-[280px] sm:h-[64px] bg-[#FF5F00] text-white rounded-xl cursor-pointer hover:bg-[#FF7F33]"
						onClick={onConfirm}
					>
						{t('approve')}
					</button>
				</div>
			</div>
		</div>
	)
}
