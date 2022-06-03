import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Modal, Button, Input, Image, Select } from 'antd';
import { DefaultImage, Mustang1, Mustang2, Mustang3 } from '../../components/imagens/Imagens'
import 'antd/dist/antd.css';
import './ModalTabela.css'
import { useDispatch } from 'react-redux'
import { addCar, editCar } from '../../redux/TabelaSlice';

function ModalTabela({ isModalVisible, setIsModalVisible, type }) {

    const dispatch = useDispatch()

    const [nome, setNome] = useState('');
    const [ano, setAno] = useState('');
    const [velMax, setVelMax] = useState('');
    const [notaEconomia, setNotaEconomia] = useState('');
    const [notaUsuario, setNotaUsuario] = useState('');
    const [link, setLink] = useState('');
    const [imagem, setImagem] = useState(DefaultImage);

    const { Option } = Select;

    const handleOk = (e) => {
        setIsModalVisible(false);
        e.preventDefault()
        dispatch(addCar({
            nome: nome,
            ano: ano,
            velMax: velMax,
            notaEconomia: notaEconomia,
            notaUsuario: notaUsuario,
            link: link,
            imagem: imagem,
        }))
    };

    const handleEditCar = () => {
        setIsModalVisible(false);
        dispatch(editCar({
            nome: nome,
            ano: ano,
            velMax: velMax,
            notaEconomia: notaEconomia,
            notaUsuario: notaUsuario,
            link: link,
            imagem: imagem,
        }))
    }

    const handleCancel = () => {
        setIsModalVisible(false);
        setNome('')
        setAno('')
        setVelMax('')
        setNotaEconomia('')
        setNotaUsuario('')
        setLink('')
        setImagem(DefaultImage)
    };

    return (
        <Modal
            footer={null}
            visible={isModalVisible}
            onCancel={handleCancel}
            closeIcon={<Icon icon="ant-design:close-circle-outlined" inline={true} />}
        >

            <div style={{ display: 'flex' }}>

                <div className="left-side" style={{ display: 'flex', flexDirection: 'column', padding: 15, }}>

                    <span style={{ textAlign: "righ", fontWeight: 600, marginTop: 10, paddingBottom: 10 }}>Adicionar Novo</span>
                    <Image
                        width={200}
                        src={imagem}
                    />
                    <Select defaultValue="Selecionar Imagem" style={{ width: 'auto' }} onChange={(e) => setImagem(e)}>
                        <Option value={Mustang1}>Mustang Vermelho 2022</Option>
                        <Option value={Mustang2}>Mustang Preto 2022</Option>
                        <Option value={Mustang3}>Mustang Vermelho 67</Option>
                    </Select>

                </div>

                <div className="righ-side" style={{ display: 'flex', flexDirection: 'column', padding: 15, }}>

                    <div style={{ textAlign: "righ", marginTop: 10 }}>
                        <span>Nome:</span>
                    </div>
                    <Input
                        value={nome}
                        style={{ width: 200 }}
                        onChange={(e) => setNome(e.target.value)}
                        allowClear
                        type='text'
                    />

                    <div style={{ textAlign: "righ", marginTop: 10 }}>
                        <span>Ano:</span>
                    </div>
                    <Input
                        value={ano}
                        style={{ width: 200 }}
                        onChange={(e) => setAno(e.target.value)}
                        allowClear
                        type='number'
                    />

                    <div style={{ textAlign: "righ", marginTop: 10 }}>
                        <span>Velocidade Máxima Km/h:</span>
                    </div>
                    <Input
                        value={velMax}
                        style={{ width: 200 }}
                        onChange={(e) => setVelMax(e.target.value)}
                        allowClear
                        type='number'
                    />

                    <div style={{ textAlign: "righ", marginTop: 10 }}>
                        <span>Nota economia:</span>
                    </div>
                    <Input
                        value={notaEconomia}
                        style={{ width: 200 }}
                        onChange={(e) => setNotaEconomia(e.target.value)}
                        allowClear
                        type='number'
                    />

                    <div style={{ textAlign: "righ", marginTop: 10 }}>
                        <span>Nota usuários:</span>
                    </div>
                    <Input
                        value={notaUsuario}
                        style={{ width: 200 }}
                        onChange={(e) => setNotaUsuario(e.target.value)}
                        allowClear
                        type='number'
                    />

                    <div style={{ textAlign: "righ", marginTop: 10 }}>
                        <span>Link produto:</span>
                    </div>
                    <Input
                        value={link}
                        style={{ width: 200 }}
                        onChange={(e) => setLink(e.target.value)}
                        allowClear
                        type='text'
                    />

                </div>

            </div>

            <div className='footer' style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Button style={{ borderColor: 'white', fontWeight: 600, }} onClick={() => handleCancel()}>
                    Cancelar
                </Button>
                {type === 'novo' ? <Button style={{ borderRadius: 21, background: '#1D2527', color: 'white', minWidth: 250 }} onClick={(e) => handleOk(e)}>
                    + Adicionar Novo
                </Button>
                    :
                    <Button style={{ borderRadius: 21, background: '#1D2527', color: 'white', minWidth: 250 }} onClick={() => handleEditCar()}>
                        Salvar
                    </Button>
                }

            </div>


        </Modal>

    )
}

export default ModalTabela