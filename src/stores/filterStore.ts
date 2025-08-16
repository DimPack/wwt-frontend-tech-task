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

	confirmFilters: () => set({ confirmedFilters: get().tempFilters }),

	resetTempFilters: () => set({ tempFilters: get().confirmedFilters }),

	isModalOpen: false,
	openModal: () => set({ isModalOpen: true }),
	closeModal: () => set({ isModalOpen: false })
}))
