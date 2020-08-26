import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import WeatherForecast from '../WeatherForecast'
import CoffeePrices from '../CoffeePrices'
import { DiCoffeescript } from 'react-icons/di'

interface ModalProps {
    flag?: boolean;
}

const ModalExampleBasic: React.FC<ModalProps> = ({ children, flag }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='fullscreen'
            trigger={children}
            onClick={() => setOpen(false)}
        >
            <Header icon>
                {flag ?
                    <h1>*Mais dias podem ser vistos na parte inferior da página inicial</h1> :
                    <DiCoffeescript size={60} color="white" />
                }
            </Header>
            <Modal.Content>
                {flag ? <WeatherForecast /> : <CoffeePrices />}
            </Modal.Content>

        </Modal>

    )
}

export default ModalExampleBasic