import { Title } from './styles'

function DefaultTitle({ children, theme, ...props }) {
  return (
    <Title {...props} theme={theme}>
      {children}
    </Title>
  )
}

export default DefaultTitle