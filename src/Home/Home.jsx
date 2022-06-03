import React from 'react'
import { Image, Card, Space } from 'antd'
import { useSelector } from 'react-redux'
import { Icon } from '@iconify/react';
import './Home.css'
import 'antd/dist/antd.css'

function Home() {

    const carros = useSelector((state) => state.tabelas)

    return (
        <div className="home">

            <div className="home-container">
                <h1 className='text-image'>MUSTANG</h1>
                <Image
                    rootClassName='home-image'
                    width={'100%'}
                    //height={600}
                    preview={false}
                    src='https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                />

                <Space direction="horizontal" size="middle" style={{ display: 'flex', paddingTop: 80, maxWidth: 1052, justifyContent: 'space-evenly', }}>
                    {carros.map((carro) => (
                        <Card style={{ width: 300, borderRadius: 15, borderColor: 'black', alignItems: 'center' }}
                            cover={<img
                                alt=''
                                src={carro.imagem}
                            />}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', }}>
                                <div>{carro.nome}</div>
                                <div><Icon icon="ant-design:calendar-twotone" />{carro.ano}</div>
                                <div><Icon icon="fluent:top-speed-24-filled" />{carro.velMax}</div>
                                <div><Icon icon="bi:lightning-charge" />{carro.notaEconomia}/10</div>
                                <div><Icon icon="bi:people" />{carro.notaUsuario}/10</div>
                            </div>
                        </Card>
                    ))}
                </Space>


                <h1 className='text-image2'>O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.</h1>
                <Image
                    rootClassName='home-image'
                    width={'100%'}
                    //height={600}
                    preview={false}
                    src={'https://conteudos.xpi.com.br/wp-content/uploads/2022/01/slade-lapusnak-z-3lZfFdsj0-unsplash.jpg?w=640'}
                />

            </div>
        </div>
    )
}

export default Home