export const Modal = ({ onClose, children }) => {
	return (
		<div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-black/50 p-4 pt-12 pb-12">
			<div className="p-4 sm:p-6 md:p-8 lg:p-[34px] bg-white rounded-lg shadow-lg w-full max-w-screen-xl relative">
				<button
					onClick={onClose}
					className="absolute top-10 right-10 text-gray-500 hover:text-gray-700 cursor-pointer"
				>
					<img
						src="/img/close.png"
						alt="close"
						className="object-cover transition-transform duration-100 hover:scale-120"
					/>
				</button>
				{children}
			</div>
		</div>
	)
}
