import { Hero } from './styles'
import UsersImage from '../../assets/users.png'

function TopBackground() {
    return (
        <Hero>
            <img src={UsersImage} alt="imagem-usuarios" />
        </Hero>
    )
}

export default TopBackground