import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import filterData from '../../shared/temp/filterData.json'
import { useFilterStore } from '../../stores/filterStore'
import { ConfirmBox } from '../ConfigModal/ConfigModal.tsx'

interface FilterOption {
	id: string
	name: string
	description?: string
}
interface FilterGroup {
	id: string
	name: string
	description?: string
	options: FilterOption[]
}

export const FilterForm: FC = () => {
	const { t } = useTranslation('filter')
	const {
		tempFilters,
		setTempFilters,
		confirmFilters,
		resetTempFilters,
		closeModal
	} = useFilterStore()

	const [showConfirm, setShowConfirm] = useState(false)
	const [attemptClose, setAttemptClose] = useState<() => void>(() => () => {})

	const toggleOption = (id: string) => {
		if (tempFilters.includes(id)) {
			setTempFilters(tempFilters.filter(item => item !== id))
		} else {
			setTempFilters([...tempFilters, id])
		}
	}

	const handleApplyClick = () => {
		setAttemptClose(() => () => {
			confirmFilters()
			closeModal()
		})
		setShowConfirm(true)
	}

	const handleClear = () => setTempFilters([])

	return (
		<div className="space-y-6">
			{(filterData.filterItems as FilterGroup[]).map(group => (
				<div
					key={group.id}
					className="border-b-2 border-[#B4B4B4] pb-[45px] first:border-t-2 first:border-[#B4B4B4] first:pt-[64px]"
				>
					<h3 className="text-lg font-semibold mb-2">{group.name}</h3>
					{group.description && (
						<p className="text-sm text-gray-500 mb-3">{group.description}</p>
					)}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{group.options.map(option => (
							<label
								key={option.id}
								className="flex items-center gap-2 cursor-pointer"
							>
								<input
									type="checkbox"
									checked={tempFilters.includes(option.id)}
									onChange={() => toggleOption(option.id)}
									className="w-4 h-4"
								/>
								<span>{option.name}</span>
							</label>
						))}
					</div>
				</div>
			))}

			<div className="flex flex-wrap justify-center items-center gap-3 pt-4">
				<button
					type="button"
					onClick={handleApplyClick}
					className="w-[150px] h-[50px] md:w-[184px] md:h-[64px] bg-[#FF5F00] text-white rounded-2xl cursor-pointer hover:bg-[#FF7F33] mx-auto"
				>
					{t('apple')}
				</button>

				<p
					className="text-[#078691] text-sm underline cursor-pointer"
					onClick={handleClear}
				>
					{t('clearParams')}
				</p>
			</div>

			{showConfirm && (
				<ConfirmBox
					onConfirm={() => {
						attemptClose()
						setShowConfirm(false)
					}}
					onCancel={() => {
						resetTempFilters()
						setShowConfirm(false)
					}}
					onClose={() => setShowConfirm(false)}
				/>
			)}
		</div>
	)
}
