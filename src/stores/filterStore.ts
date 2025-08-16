import { create } from 'zustand'

interface FilterStore {
	confirmedFilters: string[]
	tempFilters: string[]
	isModalOpen: boolean
	setTempFilters: (filters: string[]) => void
	confirmFilters: () => void
	resetTempFilters: () => void
	openModal: () => void
	closeModal: () => void
}

export const useFilterStore = create<FilterStore>((set, get) => ({
	confirmedFilters: [],
	tempFilters: [],

	setTempFilters: filters => set({ tempFilters: filters }),

	confirmFilters: () => {
		const temp = get().tempFilters
		set({ confirmedFilters: temp })

		const filtersToSave = temp.map(id => ({
			id,
			type: 'OPTION',
			optionsIds: [id]
		}))
		localStorage.setItem('selectedFilters', JSON.stringify(filtersToSave))
	},

	resetTempFilters: () => set({ tempFilters: get().confirmedFilters }),

	isModalOpen: false,
	openModal: () => set({ isModalOpen: true }),
	closeModal: () => set({ isModalOpen: false })
}))
