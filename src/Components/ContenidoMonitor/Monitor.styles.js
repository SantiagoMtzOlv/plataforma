import styled from '@emotion/styled/macro';
import fondo from '../../assets/images/logo-bg.3cba04d.png';
import menus from '../../assets/images/menus.46a5756.png';
import max from '../../assets/images/maximization.7a10253.png';
import min from '../../assets/images/minimize.5127082.png';
import header from '../../assets/images/dialog-header.cc6302f.png';

export const contenido_monitor = styled.div`
    position: relative;
    height: 100%;
    overflow-y: hidden;
`

export const caja_direccion_dispositivo = styled.div`
    min-height: 25px;
    line-height: 25px;
    width: 600px;
    position: absolute;
    left: 50%;
    top: -25px;
    margin-left: -300px;
    z-index: 1001;
    background-color: #fff;
    box-shadow: 1px 1px 4px rgba(0,0,0,.2),-1px -1px 4px rgba(0,0,0,.2);
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding-bottom: 5px;
    padding-top: 30px;
    border-radius: 50px;
    display: none;
`

export const refrescar = styled.div`
    position: absolute;
    left: 50%;
    top: 45px;
    margin-left: -50px;
    background-color: hsla(0,0%,96%,.85);
    width: auto;
    padding: 0 5px;
    text-align: center;
    height: 25px;
    z-index: 999;
    line-height: 25px;
    font-size: 14px;
    color: #686868;
    border: 1px solid #c3c3c3;
`

export const refTemporizador = styled.font`
    width: 15px;
    display: inline-block;
    text-align: center;
    color: #bd0000;
    font-weight: 700;
`

export const caja_dispositivo_pequena = styled.div`
    height: 36px;
    width: 36px;
    position: absolute;
    left: 10px;
    top: 10px;
    background-repeat: no-repeat;
    background-image: url(../../static/img/maximization.7a10253.png);
    background-position: 50%;
    z-index: 599;
    cursor: pointer;
    display: none;
`

export const caja_dispositivo_panel = styled.div`
    position: absolute;
    bottom: 60px;
    width: 328px;
    background-color: #fff;
    z-index: 500;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2),-2px -2px 4px rgba(0,0,0,.2);
    user-select: none;
    left: 0px;
    top: 0px;
`

export const caja_dispositivo_titulo = styled.div`
    margin: 0;
    padding: 0;
`

export const barra_arrastable = styled.div`
    position: absolute;
    height: 6px;
    width: 100%;
    background-color: transparent;
    cursor: n-resize;
    z-index: 99;
`

export const barra_superior_titulo = styled.div`
    font: 400 13.3333px Arial;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    margin: 0;
    padding: 0;
    text-align: left;
    position: relative;
    padding-right: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: grab;
    color: #fff;
    background: #596673 url(${header}) no-repeat center 0;
    height: 35px;
    line-height: 36px;
    font-size: 14px;
`
export const opcion_derecha = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    height: 35px;
    width: 35px;
    background-image: url(${min});
    background-repeat: no-repeat;
    background-position: 50%;
    cursor: pointer;
`
export const contenido_panel_dispositivo = styled.div`
    position: relative;
`
export const busqueda_dispositivo = styled.div`
    background-color: #e4e4e4;
    padding: 5px 10px;
    height: 26px;
`
export const busqueda_en_linea = styled.div`
    width: 100%;
`


