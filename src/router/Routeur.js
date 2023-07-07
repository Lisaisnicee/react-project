import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import About from '../pages/About'
import NoMatch from './NoMatch'

const Routeur = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NoMatch />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Routeur
