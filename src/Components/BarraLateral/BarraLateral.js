import React from 'react';

import * as s from './BarraLateral.styles';

import * as io from 'react-icons/io5';
import * as bi from 'react-icons/bi';
import * as ai from 'react-icons/ai';
import * as hi from 'react-icons/hi';


import '../../../src/styles/bloqueo.css';

const BarraLateral = () => {
    return (
        <s.BarraLateralContainer>
            <s.account className='account'>
                <s.images_box></s.images_box>
                <s.menu_account_name>Nombre</s.menu_account_name>
            </s.account>
            <s.profile_submenu_box className='bloqueo'>
                <s.submenu_box>
                <s.submenu_item><io.IoPersonOutline /> Cuenta </s.submenu_item>
                <s.submenu_item><io.IoPersonSharp />  Proveedor de Servicios</s.submenu_item>
                <s.submenu_item><io.IoLockClosedSharp />  Modificar la Contraseña</s.submenu_item>
                <s.submenu_item><io.IoPerson />  Registro de Inicio de Sesión</s.submenu_item>
                <s.submenu_item><io.IoCloudDownloadOutline /> Manual de Usuario</s.submenu_item>
                </s.submenu_box>
            </s.profile_submenu_box>
            <s.top_menu>
                    <s.router_link_exact_active><s.el_menu_item><bi.BiWorld size={20}/><p>Monitor</p></s.el_menu_item></s.router_link_exact_active>
                    <s.router_link_exact_active><s.el_menu_item><hi.HiOutlineDocumentReport size={20}/><p>Reportes</p></s.el_menu_item></s.router_link_exact_active>
                    <s.router_link_exact_active><s.el_menu_item><ai.AiTwotoneCar size={20}/><p>Dispositivo</p></s.el_menu_item></s.router_link_exact_active>
            </s.top_menu>
            <s.bottom_menu>
                <a><s.bottom_menu_item><bi.BiShare size={20}/></s.bottom_menu_item></a>
                <a><s.bottom_menu_item><bi.BiCog size={20}/></s.bottom_menu_item></a>
                <a><s.bottom_menu_item><bi.BiEnvelope size={20}/></s.bottom_menu_item></a>
                <a><s.bottom_menu_item><bi.BiPowerOff size={20}/></s.bottom_menu_item></a>
            </s.bottom_menu>
        </s.BarraLateralContainer>
    );
}

export default BarraLateral;