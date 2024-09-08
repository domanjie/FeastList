import { create } from "zustand"

export const useAddressStore = create((set) => ({
  address: null,
  setAddress: (address) => set((state) => ({ address: address })),
}))
export const useDeliveryCostStore = create((set, get) => ({
  totalDeliveryCost: {},
  addDeliveryCost: (vendorName, fee) =>
    set((state) => ({
      totalDeliveryCost: { ...state.totalDeliveryCost, vendorName: fee },
    })),
  getTotalDeliveryCost: () =>
    Object.values(get().totalDeliveryCost).reduce((acc, curr) => acc + curr, 0),
}))
