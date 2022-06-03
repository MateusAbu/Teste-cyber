import { createSlice } from '@reduxjs/toolkit'
import { Mustang1, Mustang2, } from '../components/imagens/Imagens'

const TabelaSlice = createSlice({
    name: 'Tabela',
    initialState: [
        {
            id: 1,
            nome: 'Mustang Novo',
            ano: 2022,
            velMax: 180,
            notaEconomia: 9,
            notaUsuario: 8,
            link: 'teste',
            imagem: Mustang1,
        }, {
            id: 2,
            nome: 'Mustang Preto',
            ano: 2021,
            velMax: 140,
            notaEconomia: 8,
            notaUsuario: 10,
            link: 'teste2',
            imagem: Mustang2,
        }
    ],
    reducers: {
        addCar: (state, action) => {
            const newCar = {
                id: Date.now(),
                nome: action.payload.nome,
                ano: action.payload.ano,
                velMax: action.payload.velMax,
                notaEconomia: action.payload.notaEconomia,
                notaUsuario: action.payload.notaUsuario,
                link: action.payload.link
            }
            state.push(newCar)
        },
        editCar: (state, action) => {
            const index = state.indexOf((car) => car.id === action.payload.id)

            state[index] = {
                id: action.payload.id,
                nome: action.payload.nome,
                ano: action.payload.ano,
                velMax: action.payload.velMax,
                notaEconomia: action.payload.notaEconomia,
                notaUsuario: action.payload.notaUsuario,
                link: action.payload.link
            }
        },
        deleteCar: (state, action) => {
            return state.filter((car) => car.id !== action.payload.id)
        }

    }
})

export const {
    addCar,
    editCar,
    deleteCar
} = TabelaSlice.actions

export default TabelaSlice.reducer