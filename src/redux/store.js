import { configureStore } from '@reduxjs/toolkit'
import TabelaReducer from './TabelaSlice'

export default configureStore({
    reducer: {
        tabelas: TabelaReducer,
    }
})