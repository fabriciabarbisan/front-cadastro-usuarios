import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'
import { Container, Form, ContainerImputs, Input, InputLabel } from './styles.js'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Title from '../../components/Title'
import { toast } from 'react-toastify'


function Home() {
  const [count, setCount] = useState(0)
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {

    if (!inputName.current.value || !inputEmail.current.value || !inputAge.current.value) {
      toast.warning('Preencha todos os campos.')
      return
    }

    try {
      await api.post('/usuarios', {
        email: inputEmail.current.value,
        name: inputName.current.value,
        age: parseInt(inputAge.current.value)
      })

      toast.success('Usuário cadastrado com sucesso!')
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error('Este email já está cadastrado.')
      } else {
        toast.error('Erro ao cadastrar o usuário.')
      }
    }
  }

  return (
    <Container>

      <TopBackground />

      <Form>

        <Title>Cadastrar Usuário</Title>

        <ContainerImputs>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>

        </ContainerImputs>

        <div style={{ width: '100%' }}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </div>

        <Button type="button" theme="primary" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>

      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')} >
        Lista de Usuários
      </Button>

    </Container>
  )
}

export default Home
