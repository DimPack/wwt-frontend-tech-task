import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FiltersModal } from '../../../components/FilterModals/FiltersModal.tsx'
import { SearchRequestFilter } from '../../../shared/api/types/SearchRequest/SearchRequestFilter.ts'
import { useFilterStore } from '../../../stores/filterStore'

export const App = () => {
	const { t } = useTranslation('filter')
	const { isModalOpen, openModal, confirmedFilters } = useFilterStore()
	const [savedFilters, setSavedFilters] = useState<SearchRequestFilter>([])

	useEffect(() => {
		const stored = localStorage.getItem('selectedFilters')
		if (stored) {
			setSavedFilters(JSON.parse(stored) as SearchRequestFilter)
		}
	}, [confirmedFilters])

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

			<div className="mt-6 w-full max-w-2xl">
				<h2 className="text-xl font-bold mb-2">{t('selectFilters')}</h2>
				<pre className="bg-gray-100 p-4 rounded">
					{JSON.stringify(savedFilters, null, 2)}
				</pre>
			</div>
		</section>
	)
}
