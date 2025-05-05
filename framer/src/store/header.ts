import { create } from 'zustand';

interface ModalState {
    isModal: boolean;
    setStore: (value: boolean) => void; // 🔥 여기 중요
}

const useModal = create<ModalState>((set) => ({
    isModal: false,
    setStore: (value) => set(() => ({ isModal: value })),
}));

export default useModal;