import api from "../../services/api"
import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUser, Texts } from "./styles"
import { useNavigate } from "react-router-dom"
import Title from "../../components/Title"
import { useEffect, useState } from "react"
import Trash from "../../assets/trash.svg"
import { toast } from 'react-toastify'

const cores = [
  'FFB3BA', // rosa
  'FFDFBA', // pêssego
  'FFFFBA', // amarelo
  'BAFFC9', // verde menta
  'BAE1FF', // azul bebê
  'E0BBE4', // lilás
  'FEC8D8', // rosa claro
  'D4F0F0', // azul água
  'FFD6A5', // laranja suave
  'FDFFB6', // limão claro
  'CAFFBF', // verde claro
  '9BF6FF', // ciano
  'A0C4FF', // azul pervinca
  'BDB2FF', // roxo suave
  'FFC6FF', // rosa-lavanda
  'FFADAD', // coral
  'C7CEEA', // azul acinzentado
  'B5EAD7', // verde-água
  'E2F0CB', // verde pistache
  'F8C8DC', // rosa chiclete
]

function corDoUsuario(id) {
  let hash = 0
  for (const char of String(id)) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  }
  return cores[hash % cores.length]
}

function ListUsers() {

  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect(() => {

    async function getUsers() {
      const { data } = await api.get('/usuarios')

      setUsers(data)
    }

    getUsers()

  }, [])

  async function deleteUser(id) {
    try {
      await api.delete(`/usuarios/${id}`)

      const updatedUsers = users.filter((user) => user.id !== id)

      setUsers(updatedUsers)

      toast.success('Usuário excluído com sucesso!')
    } catch (error) {
      toast.error('Não foi possível excluir o usuário.')
    }
  }

  return (

    <Container>

      <TopBackground />

      <Title>Listagem de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&size=120&background=${corDoUsuario(user.id)}&color=444`} alt="Avatar do Usuário" />
            <Texts>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </Texts>
            <TrashIcon src={Trash} alt="Excluir" onClick={() => deleteUser(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate('/')}>
        Voltar
      </Button>

    </Container>
  )
}

export default ListUsers