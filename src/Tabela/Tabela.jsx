import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Button, Col, Row, Space, Card } from 'antd';
import 'antd/dist/antd.css';
import './Tabela.css';
import ModalTabela from './ModalTabela/ModalTabela';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteCar } from '../redux/TabelaSlice'

function Tabela() {

    const dispatch = useDispatch()

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [type, setType] = useState('');

    const carros = useSelector((state) => state.tabelas)
    //console.log('carros', carros)

    const showModal = (type) => {
        setIsModalVisible(true);
        setType(type)
    };

    const handleDelete = (id) => {
        dispatch(deleteCar({ id: id }))
    }


    return (
        <div className="Tabela" >

            <Row>
                <Col span={12} offset={6} >

                    <div style={{ marginTop: 60 }}>
                        <span style={{ fontSize: 70, paddingLeft: 80, float: 'left', }}>Lista</span>

                        <Button style={{ borderRadius: 21, float: 'right', minWidth: 200 }} type="default" onClick={() => showModal('novo')}>
                            + Adicionar Novo
                        </Button>

                        <ModalTabela
                            type={type}
                            setIsModalVisible={setIsModalVisible}
                            showModal={showModal}
                            isModalVisible={isModalVisible}
                        />
                    </div>
                </Col >
            </Row>

            <Row>

                <Col span={12} offset={6} >

                    <div className="teste">
                        <p>Nome</p>
                        <p>Ano</p>
                        <p>Velocidade máx Km/h</p>
                        <p>Nota Economia</p>
                        <p>Nota usuários</p>
                    </div>

                </Col >


                <Space direction="vertical" size="middle" style={{ display: 'flex', paddingTop: 80, maxWidth: 1052, justifyContent: 'space-evenly' }}>
                    {carros.map((carro) => (
                        <Card>
                            <div style={{ display: 'flex', flexDirection: 'row', }}>
                                <div>{carro.nome}</div>
                                <div>{carro.ano}</div>
                                <div>{carro.velMax}</div>
                                <div>{carro.notaEconomia}</div>
                                <div>{carro.notaUsuario}</div>
                                <Button
                                    style={{ borderColor: 'white', }}
                                    onClick={() => handleDelete(carro.id)}>
                                    <Icon icon="akar-icons:trash-can" />
                                </Button>
                                <Button
                                    style={{ borderColor: 'white', }}
                                    onClick={() => showModal('edit')}>
                                    <Icon icon="clarity:edit-line" />
                                </Button>

                            </div>
                        </Card>
                    ))}
                </Space>

            </Row>

        </div >

    )
}

export default Tabela