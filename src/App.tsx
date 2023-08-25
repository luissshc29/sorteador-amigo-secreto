import Cabecalho from 'components/Cabecalho';
import Card from 'components/Card';
import Configuracao from 'paginas/Configuracao';
import Sorteio from 'paginas/Sorteio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <BrowserRouter>
        
            <RecoilRoot>

                <Cabecalho />

                <Routes>

                    <Route path='/' element={<Card />}>

                        <Route index element={<Configuracao />} />

                        <Route path='sorteio' element={<Sorteio />} />

                    </Route>

                </Routes>

            </RecoilRoot>

        </BrowserRouter>
    );
}

export default App;