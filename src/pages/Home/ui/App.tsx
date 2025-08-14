import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FiltersModal } from '../../../components/FilterModals/FiltersModal'

export const App = () => {
	const { t } = useTranslation('filter')
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<section className="w-full h-dvh flex items-center justify-center flex-col gap-6">
			<h1 className="text-6xl text-gray-600 mb-12">{t('mainTitle')}</h1>

			<button
				className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
				onClick={() => setIsModalOpen(true)}
			>
				{t('filter')}
			</button>

			{isModalOpen && <FiltersModal onClose={() => setIsModalOpen(false)} />}
		</section>
	)
}
