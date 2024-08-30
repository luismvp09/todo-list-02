import {Container as ContainerContent} from 'semantic-ui-react'

export const Container = ({children}) => {
  return (
    <ContainerContent text>{children}</ContainerContent>
  )
}
