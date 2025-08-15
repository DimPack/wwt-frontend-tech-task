import { FC, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

import filterData from '../../shared/temp/filterData.json'

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

interface FilterFormProps {
	onSubmit: () => void
}

export const FilterForm: FC<FilterFormProps> = ({ onSubmit }) => {
	const { t } = useTranslation('filter')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-6"
		>
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
									name={group.id}
									value={option.id}
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
					type="submit"
					className="w-[150px] h-[50px] md:w-[184px] md:h-[64px] bg-[#FF5F00] text-white rounded-2xl cursor-pointer hover:bg-[#FF7F33] mx-auto"
				>
					{t('apple')}
				</button>
				<p className="text-[#078691] text-sm underline cursor-pointer">
					{t('clearParams')}
				</p>
			</div>
		</form>
	)
}
