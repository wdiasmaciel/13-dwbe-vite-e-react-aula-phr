import { useState } from 'react'
import Exemplo01 from './components/exemplo01/Exemplo.jsx'
import Exemplo02 from './components/exemplo02/Exemplo.jsx'
import Exemplo03 from './components/exemplo03/Exemplo.jsx'
import Exemplo04 from './components/exemplo04/Exemplo.jsx'
import Exemplo05 from './components/exemplo05/Exemplo.jsx'

import './App.css'

function App() {
  const [exemplo, setExemplo] = useState('inicio')

  if (exemplo === 'exemplo01') {
    return <Exemplo01 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo02') {
    return <Exemplo02 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo03') {
    return <Exemplo03 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo04') {
    return <Exemplo04 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo05') {
    return <Exemplo05 voltar={() => setExemplo('inicio')} />
  }

  return (
    <>
      <h1>Prática 13</h1>
      <button className="botao" type="button" onClick={() => setExemplo('exemplo01')}>
        Exemplo 01
      </button>

      <button className="botao" type="button" onClick={() => setExemplo('exemplo02')}>
        Exemplo 02
      </button>

      <button className="botao" type="button" onClick={() => setExemplo('exemplo03')}>
        Exemplo 03
      </button>

      <button className="botao" type="button" onClick={() => setExemplo('exemplo04')}>
        Exemplo 04
      </button>

      <button className="botao" type="button" onClick={() => setExemplo('exemplo05')}>
        Exemplo 05
      </button>
    </>
  )
}

export default App