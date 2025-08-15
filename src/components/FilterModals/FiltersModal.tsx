import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FilterForm } from '../FilterForm/FilterForm.tsx'
import { Modal } from '../Modal/Modal.tsx'

interface FiltersModalProps {
	onClose: () => void
}

export const FiltersModal: FC<FiltersModalProps> = ({ onClose }) => {
	const { t } = useTranslation('filter')

	return (
		<Modal onClose={onClose}>
			<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center font-bold mb-4">
				{t('filter')}
			</h2>
			<FilterForm onSubmit={() => console.log('Submit filters')} />
		</Modal>
	)
}
