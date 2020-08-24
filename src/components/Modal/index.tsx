import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import WeatherForecast from '../WeatherForecast'
import { TiWeatherCloudy } from 'react-icons/ti'
import { DiCoffeescript } from 'react-icons/di'
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
                {flag ? <TiWeatherCloudy size={100} color="white" /> : <DiCoffeescript size={100} color="white" />}
            </Header>
            <Modal.Content>
                {flag ? <WeatherForecast /> : <CoffeePrices />}
            </Modal.Content>

        </Modal>

    )
}

export default ModalExampleBasic