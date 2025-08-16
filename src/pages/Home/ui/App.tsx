import { useTranslation } from 'react-i18next'

import { FiltersModal } from '../../../components/FilterModals/FiltersModal.tsx'
import { useFilterStore } from '../../../stores/filterStore.ts'

export const App = () => {
	const { t } = useTranslation('filter')
	const { isModalOpen, openModal } = useFilterStore()

	return (
		<section className="w-full h-dvh flex items-center justify-center flex-col gap-6">
			<h1 className="text-6xl text-gray-600 mb-12">{t('mainTitle')}</h1>

			<button
				className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
				onClick={openModal}
			>
				{t('filter')}
			</button>

			{isModalOpen && <FiltersModal />}
		</section>
	)
}
