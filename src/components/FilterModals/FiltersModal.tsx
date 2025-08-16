import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '../../stores/filterStore'
import { ConfirmBox } from '../ConfigModal/ConfigModal.tsx'
import { FilterForm } from '../FilterForm/FilterForm.tsx'
import { Modal } from '../Modal/Modal.tsx'

export const FiltersModal = () => {
	const { t } = useTranslation('filter')
	const {
		tempFilters,
		confirmedFilters,
		closeModal,
		resetTempFilters,
		confirmFilters
	} = useFilterStore()
	const [showConfirm, setShowConfirm] = useState(false)
	const [attemptClose, setAttemptClose] = useState<() => void>(() => () => {})

	const handleCloseModal = () => {
		if (tempFilters.join(',') !== confirmedFilters.join(',')) {
			setAttemptClose(() => () => closeModal())
			setShowConfirm(true)
		} else {
			closeModal()
		}
	}

	return (
		<>
			<Modal onRequestClose={handleCloseModal}>
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center font-bold mb-4">
					{t('filter')}
				</h2>
				<FilterForm />
			</Modal>

			{showConfirm && (
				<ConfirmBox
					onConfirm={() => {
						confirmFilters()
						setShowConfirm(false)
						attemptClose()
					}}
					onCancel={() => {
						resetTempFilters()
						setShowConfirm(false)
						attemptClose()
					}}
					onClose={() => setShowConfirm(false)}
				/>
			)}
		</>
	)
}
