import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import WeatherForecast from '../WeatherForecast'
import CoffeePrices from '../CoffeePrices'

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
                <h1>*Mais dias podem ser vistos na parte inferior da página inicial</h1>
            </Header>
            <Modal.Content>
                {flag ? <WeatherForecast /> : <CoffeePrices />}
            </Modal.Content>

        </Modal>

    )
}

export default ModalExampleBasic