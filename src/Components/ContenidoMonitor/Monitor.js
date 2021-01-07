import React from 'react';

import * as s from './Monitor.styles';

import MainView from '../MainView/MainView';
import BarraInferior from '../BarraInferior/BarraInferior';
import BarraLateral from '../BarraLateral/BarraLateral';

import * as fa from 'react-icons/fa';

const ContenidoMonitor = () => {
    const [contador, setContador] = React.useState(10);
    React.useEffect(()=> {
        contador > 0 && setTimeout(() => setContador(contador -1), 1000);
        if(contador===0) {
            setContador(10);
        }
    }, [contador])

    
    return(
        <s.contenido_monitor>
            <s.caja_direccion_dispositivo><span></span></s.caja_direccion_dispositivo>

            <s.refrescar>
                <span>"Refrescarse después de "
                    <s.refTemporizador>{contador}</s.refTemporizador>
                    " segundos"
                </span>
            </s.refrescar>

            <s.caja_dispositivo_pequena style={{display:'none'}}/>

            <s.caja_dispositivo_panel style={{left:'0px', top:'0px'}}>

                <s.caja_dispositivo_titulo>
                    <s.barra_arrastable />
                    <s.barra_superior_titulo>
                    &nbsp;
                         &nbsp;<fa.FaLaptop />&nbsp;&nbsp;Mis Metas
                         <s.opcion_derecha />
                    </s.barra_superior_titulo>
                </s.caja_dispositivo_titulo>

                <s.contenido_panel_dispositivo>
                    <s.busqueda_dispositivo>
                        <s.busqueda_en_linea aria-haspopup="listbox" role="combobox" aria-owns="el-complete-8812">

                        </s.busqueda_en_linea>
                    </s.busqueda_dispositivo>
                </s.contenido_panel_dispositivo>

            </s.caja_dispositivo_panel>

            <MainView />
        </s.contenido_monitor>
            

    );

}

export default ContenidoMonitor;
