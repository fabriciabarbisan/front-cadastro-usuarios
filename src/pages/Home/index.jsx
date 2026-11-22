import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const userToEdit = location.state?.user

  async function registerNewUser() {

    if (!inputName.current.value || !inputEmail.current.value || !inputAge.current.value) {
      toast.warning('Preencha todos os campos.')
      return
    }

    const data = {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    }

    try {
      if (userToEdit) {
        await api.put(`/usuarios/${userToEdit.id}`, data)
        toast.success('Usuário atualizado com sucesso!')
        navigate('/lista-de-usuarios')
      } else {
        await api.post('/usuarios', data)
        toast.success('Usuário cadastrado com sucesso!')

        inputName.current.value = ''
        inputAge.current.value = ''
        inputEmail.current.value = ''
      }

    } catch (error) {
      if (error.response?.status === 409) {
        toast.error('Este email já está cadastrado.')
      } else {
        toast.error('Erro ao cadastrar o usuário.')
      }
    }
  }

  function handleKeyDown(event) {
  if (event.key !== 'Enter' || event.target.tagName === 'BUTTON') return

  event.preventDefault()

  if (event.target === inputName.current) {
    inputAge.current.focus()
  } else if (event.target === inputAge.current) {
    inputEmail.current.focus()
  } else {
    registerNewUser()
  }
}

  return (
    <Container>

      <TopBackground />

      <Form onKeyDown={handleKeyDown}>

        <Title>{userToEdit ? 'Editar Usuário' : 'Cadastrar Usuário'}</Title>

        <ContainerImputs>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} defaultValue={userToEdit?.name} />
          </div>

          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} defaultValue={userToEdit?.age} />
          </div>

        </ContainerImputs>

        <div style={{ width: '100%' }}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} defaultValue={userToEdit?.email} />
        </div>

        <Button type="button" theme="primary" onClick={registerNewUser}>
          {userToEdit ? 'Salvar Alterações' : 'Cadastrar Usuário'}
        </Button>

      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')} >
        Lista de Usuários
      </Button>

    </Container>
  )
}

export default Home
