import React, { FC, useState, useEffect, useContext } from 'react'
import { _Navbar } from './Navbar.styles'

const Navbar: FC = () => {
  let changeMenuState = (state: any, id: any) => {
    document.getElementById(id)!.style.display = state
  }

  return (
    <_Navbar>
      <div id="desktop">
        <div id="promo-container">
          <label id="promo-label">¡Descuentos del 95% por Volumen!</label>
        </div>
        <div id="logos-container">
          <div id="blanc-div"></div>
          <img
            id="logo-desync"
            src="/assets/navbar/desink-logo.svg"
            alt=""
            className="logo"
          />
          <div id="minilogos-container">
            <img
              className="mini-logo"
              src="/assets/navbar/person-logo.png"
              width={20}
              height={20}
            />
            <img
              className="mini-logo"
              src="/assets/navbar/heart-logo.png"
              width={20}
              height={20}
            />
            <img
              className="mini-logo"
              src="/assets/navbar/search-logo.png"
              width={20}
              height={20}
            />
            <img
              className="mini-logo"
              src="/assets/navbar/cart-logo.png"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div id="menu-container">
          <div
            className="para-mi-container"
            onMouseEnter={() => {
              changeMenuState('flex', 'submenu-para-mi-container')
            }}
            onMouseLeave={() => {
              changeMenuState('none', 'submenu-para-mi-container')
            }}
          >
            <label className="menu-label">PARA MI</label>
            <img
              className="down-arrow"
              src="/assets/navbar/arrow-down.png"
              width={12}
              height={8}
            />
            <div id="submenu-para-mi-container" className="submenu-container">
              <div className="submenu-column">
                <label className="submenu-subtitle">Textiles</label>
                <label className="submenu-label">Playeras Básicas</label>
                <label className="submenu-label">Playeras Premium</label>
                <label className="submenu-label">Chamarras</label>
                <label className="submenu-label">Sudaderas</label>
                <label className="submenu-label">Chalecos</label>
              </div>
              <div className="submenu-column">
                <label className="submenu-subtitle">Termos y Vasos</label>
                <label className="submenu-label">Termos</label>
                <label className="submenu-label">Vasos</label>
                <label className="submenu-label">Tazas</label>
              </div>
              <div className="submenu-column">
                <label className="submenu-subtitle">Accesorios</label>
                <label className="submenu-label">Tecnología</label>
                <label className="submenu-label">Mochilas</label>
                <label className="submenu-label">Pelotas</label>
                <label className="submenu-label">Parasol</label>
                <label className="submenu-label">Sombrillas</label>
                <label className="submenu-label">Otros</label>
              </div>
              <div className="submenu-column">
                <label className="submenu-subtitle">Ecológicos</label>
                <label className="submenu-label">Libretas</label>
                <label className="submenu-label">Bolsos</label>
                <label className="submenu-label">Plumas</label>
                <label className="submenu-label">Vasos</label>
              </div>
              <div className="submenu-column">
                <label className="submenu-subtitle">Deportes</label>
                <label className="submenu-label">Golf</label>
                <label className="submenu-label">Futbol</label>
                <label className="submenu-label">Tenis</label>
                <label className="submenu-label">Básquetbol</label>
                <label className="submenu-label">Béisbol</label>
              </div>
              <div className="submenu-column">
                <label className="submenu-subtitle">Diseños Desink</label>
                <label className="submenu-label">Fashion</label>
                <label className="submenu-label">Minimalista</label>
                <label className="submenu-label">Hipster</label>
              </div>
            </div>
          </div>
          <div
            className="para-mi-container"
            onMouseEnter={() => {
              changeMenuState('flex', 'submenu-para-mi-empresa-container')
            }}
            onMouseLeave={() => {
              changeMenuState('none', 'submenu-para-mi-empresa-container')
            }}
          >
            <label className="menu-label"> PARA MI EMPRESA</label>
            <img
              className="down-arrow"
              src="/assets/navbar/arrow-down.png"
              width={12}
              height={8}
            />
            <div
              id="submenu-para-mi-empresa-container"
              className="submenu-container"
            >
              <div className="submenu-column">
                <label className="submenu-subtitle">Textiles</label>
                <label className="submenu-label">Playeras</label>
                <label className="submenu-label">Sudaderas y Chamarras</label>
              </div>
              <div className="submenu-column">
                <label className="submenu-subtitle">Promocionales</label>
                <label className="submenu-label">Termos y Vasos</label>
                <label className="submenu-label">Oficina</label>
                <label className="submenu-label">Accesorios</label>
                <label className="submenu-label">Tecnología</label>
                <label className="submenu-label">Ecológico</label>
                <label className="submenu-label">COVID-19</label>
              </div>
              <div className="submenu-column">
                <label className="submenu-subtitle">
                  Uniformes Industriales
                </label>
                <label className="submenu-label">Tecnología</label>
                <label className="submenu-label">Mochilas</label>
                <label className="submenu-label">Pelotas</label>
                <label className="submenu-label">Parasol</label>
                <label className="submenu-label">Sombrillas</label>
                <label className="submenu-label">Otros</label>
              </div>
            </div>
          </div>
          <label className="menu-label">PLAYERAS CON CAUSA</label>
          <label className="menu-label">LABORATORIO</label>
          <label className="menu-label">PERSONALIZA TU JETI</label>
          <label className="menu-label">CONTACTO</label>
        </div>
      </div>

      <div id="responsive">
        <div id="promo-container">
          <label id="promo-label">¡Descuentos del 95% por Volumen!</label>
        </div>
        <div id="responsive-logos-container">
          <div id="responsive-menu-logo-container">
            <img
              id="logo-menu"
              src="/assets/navbar/responsive-menu-logo.png"
              alt=""
              className="logo"
              onClick={() => {
                document.getElementById('sliding-menu')!.style.left = '0%'
              }}
            />
          </div>
          <img
            id="logo-desync"
            src="/assets/navbar/desink-logo.svg"
            alt=""
            className="logo"
            width={160}
            height={40}
          />
          <div id="minilogos-container">
            <img
              className="mini-logo"
              src="/assets/navbar/responsive-person-logo.png"
              width={19}
              height={18}
            />
            <img
              className="mini-logo"
              src="/assets/navbar/responsive-cart-logo.png"
              width={19}
              height={18}
            />
          </div>
        </div>
        <div id="responsive-search-bar-container">
          <input type="text" id="search-bar" />
        </div>
        <div id="sliding-menu">
          <div id="responsive-menu-logos-container">
            <img
              src="/assets/navbar/desink-logo.svg"
              alt=""
              id="sliding-menu-logo"
              width={160}
              height={40}
            />
            <img
              src="/assets/navbar/cross-logo.png"
              alt=""
              id="sliding-menu-cross"
              width={22}
              height={22}
              onClick={() => {
                document.getElementById('sliding-menu')!.style.left = '-100%'
              }}
            />
          </div>
          <div id="responsive-sections-container">
            <div
              className="responsive-para-mi-section-container"
              onClick={() => {
                let state = 'flex'
                if (
                  document.getElementById('responsive-para-mi-subsection')!
                    .style.display == 'flex'
                ) {
                  state = 'none'
                }
                changeMenuState(state, 'responsive-para-mi-subsection')
              }}
            >
              <label className="responsive-section-title">PARA MI</label>
              <img
                className="down-arrow"
                src="/assets/navbar/arrow-down.png"
                width={12}
                height={8}
              />
            </div>
            <div
              id="responsive-para-mi-subsection"
              className="responsive-para-mi-subsection"
            >
              <div
                id="responsive-mi-textiles-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-mi-textiles-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(state, 'responsive-mi-textiles-subcontainer')
                }}
              >
                <label className="submenu-subtitle">Textiles</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-mi-textiles-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-mi-playeras-container"
                  className="submenu-label"
                >
                  Playeras Básicas
                </label>
                <label
                  id="responsive-mi-premium-container"
                  className="submenu-label"
                >
                  Playeras Premium
                </label>
                <label
                  id="responsive-mi-chamarras-textiles-container"
                  className="submenu-label"
                >
                  Chamarras
                </label>
                <label
                  id="responsive-mi-sudaderas-container"
                  className="submenu-label"
                >
                  Sudaderas
                </label>
                <label
                  id="responsive-mi-chalecos-container"
                  className="submenu-label"
                >
                  Chalecos
                </label>
              </div>

              <div
                id="responsive-mi-termos-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-mi-termos-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(state, 'responsive-mi-termos-subcontainer')
                }}
              >
                <label className="submenu-subtitle">Termos y Vasos</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-mi-termos-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-mi-termos-container"
                  className="submenu-label"
                >
                  Termos
                </label>
                <label
                  id="responsive-mi-vasos-container"
                  className="submenu-label"
                >
                  Vasos
                </label>
                <label
                  id="responsive-mi-tazas-container"
                  className="submenu-label"
                >
                  Tazas
                </label>
              </div>

              <div
                id="responsive-mi-accesorios-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-mi-accesorios-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(
                    state,
                    'responsive-mi-accesorios-subcontainer'
                  )
                }}
              >
                <label className="submenu-subtitle">Accesorios</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-mi-accesorios-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-mi-tecnologias-container"
                  className="submenu-label"
                >
                  Tecnología
                </label>
                <label
                  id="responsive-mi-mochilas-container"
                  className="submenu-label"
                >
                  Mochilas
                </label>
                <label
                  id="responsive-mi-pelotas-container"
                  className="submenu-label"
                >
                  Pelotas
                </label>
                <label
                  id="responsive-mi-parasol-container"
                  className="submenu-label"
                >
                  Parasol
                </label>
                <label
                  id="responsive-mi-sombrillas-container"
                  className="submenu-label"
                >
                  Sombrillas
                </label>
                <label
                  id="responsive-mi-otros-container"
                  className="submenu-label"
                >
                  Otros
                </label>
              </div>

              <div
                id="responsive-mi-ecologicos-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-mi-ecologicos-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(
                    state,
                    'responsive-mi-ecologicos-subcontainer'
                  )
                }}
              >
                <label className="submenu-subtitle">Ecológicos</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-mi-ecologicos-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-mi-libretas-container"
                  className="submenu-label"
                >
                  Libretas
                </label>
                <label
                  id="responsive-mi-bolsos-container"
                  className="submenu-label"
                >
                  Bolsos
                </label>
                <label
                  id="responsive-mi-plumas-container"
                  className="submenu-label"
                >
                  Plumas
                </label>
                <label
                  id="responsive-mi-vasos-ecologicos-container"
                  className="submenu-label"
                >
                  Vasos
                </label>
              </div>

              <div
                id="responsive-mi-deportes-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-mi-deportes-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(state, 'responsive-mi-deportes-subcontainer')
                }}
              >
                <label className="submenu-subtitle">Deportes</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-mi-deportes-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-mi-golf-container"
                  className="submenu-label"
                >
                  Golf
                </label>
                <label
                  id="responsive-mi-futbol-container"
                  className="submenu-label"
                >
                  Futbol
                </label>
                <label
                  id="responsive-mi-tenis-container"
                  className="submenu-label"
                >
                  Tenis
                </label>
                <label
                  id="responsive-mi-basquetbol-container"
                  className="submenu-label"
                >
                  Básquetbol
                </label>
                <label
                  id="responsive-mi-beisbol-container"
                  className="submenu-label"
                >
                  Béisbol
                </label>
              </div>

              <div
                id="responsive-mi-disenos-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-mi-disenos-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(state, 'responsive-mi-disenos-subcontainer')
                }}
              >
                <label className="submenu-subtitle">Diseños Desink</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-mi-disenos-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-mi-fashion-container"
                  className="submenu-label"
                >
                  Fashion
                </label>
                <label
                  id="responsive-mi-minimalista-container"
                  className="submenu-label"
                >
                  Minimalista
                </label>
                <label
                  id="responsive-mi-hipster-container"
                  className="submenu-label"
                >
                  Hipster
                </label>
              </div>
            </div>

            <div
              className="responsive-para-mi-section-container"
              onClick={() => {
                let state = 'flex'
                if (
                  document.getElementById(
                    'responsive-para-mi-empresa-subsection'
                  )!.style.display == 'flex'
                ) {
                  state = 'none'
                }
                changeMenuState(state, 'responsive-para-mi-empresa-subsection')
              }}
            >
              <label className="responsive-section-title">
                PARA MI EMPRESA
              </label>
              <img
                className="down-arrow"
                src="/assets/navbar/arrow-down.png"
                width={12}
                height={8}
              />
            </div>
            <div
              id="responsive-para-mi-empresa-subsection"
              className="responsive-para-mi-subsection"
            >
              <div
                id="responsive-empresa-textiles-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-empresa-textiles-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(
                    state,
                    'responsive-empresa-textiles-subcontainer'
                  )
                }}
              >
                <label className="submenu-subtitle">Textiles</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-empresa-textiles-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-empresa-playeras-container"
                  className="submenu-label"
                >
                  Playeras
                </label>
                <label
                  id="responsive-empresa-sudaderas-container"
                  className="submenu-label"
                >
                  Sudaderas y Chamarras
                </label>
              </div>

              <div
                id="responsive-empresa-promocionales-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-empresa-promocionales-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(
                    state,
                    'responsive-empresa-promocionales-subcontainer'
                  )
                }}
              >
                <label className="submenu-subtitle">Promocionales</label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-empresa-promocionales-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-empresa-termos-container"
                  className="submenu-label"
                >
                  Termos y Vasos
                </label>
                <label
                  id="responsive-empresa-oficina-container"
                  className="submenu-label"
                >
                  Oficina
                </label>
                <label
                  id="responsive-empresa-accesorios-container"
                  className="submenu-label"
                >
                  Accesorios
                </label>
                <label
                  id="responsive-empresa-tecnologia-container"
                  className="submenu-label"
                >
                  Tecnología
                </label>
                <label
                  id="responsive-empresa-ecologico-container"
                  className="submenu-label"
                >
                  Ecológico
                </label>
                <label
                  id="responsive-empresa-covid-container"
                  className="submenu-label"
                >
                  COVID-19
                </label>
              </div>

              <div
                id="responsive-empresa-uniformes-container"
                className="responsive-submenu-container"
                onClick={() => {
                  let state = 'flex'
                  if (
                    document.getElementById(
                      'responsive-empresa-uniformes-subcontainer'
                    )!.style.display == 'flex'
                  ) {
                    state = 'none'
                  }
                  changeMenuState(
                    state,
                    'responsive-empresa-uniformes-subcontainer'
                  )
                }}
              >
                <label className="submenu-subtitle">
                  Uniformes Industriales
                </label>
                <img
                  src="/assets/navbar/arrow-down.png"
                  alt=""
                  className="sliding-menu-arrow"
                  width={12}
                  height={8}
                />
              </div>
              <div
                id="responsive-empresa-uniformes-subcontainer"
                className="responsive-subcontainer"
              >
                <label
                  id="responsive-empresa-uniformes-tecnologia-container"
                  className="submenu-label"
                >
                  Tecnología
                </label>
                <label
                  id="responsive-empresa-uniformes-mochilas-container"
                  className="submenu-label"
                >
                  Mochilas
                </label>
                <label
                  id="responsive-empresa-uniformes-pelotas-container"
                  className="submenu-label"
                >
                  Pelotas
                </label>
                <label
                  id="responsive-empresa-uniformes-parasol-container"
                  className="submenu-label"
                >
                  Parasol
                </label>
                <label
                  id="responsive-empresa-uniformes-sombrillas-container"
                  className="submenu-label"
                >
                  Sombrillas
                </label>
                <label
                  id="responsive-empresa-uniformes-otros-container"
                  className="submenu-label"
                >
                  Otros
                </label>
              </div>
            </div>
            <div className="responsive-para-mi-section-container">
              <label className="responsive-section-title">
                PLAYERAS CON CAUSA
              </label>
            </div>
            <div className="responsive-para-mi-section-container">
              <label className="responsive-section-title">LABORATORIO</label>
            </div>
            <div className="responsive-para-mi-section-container">
              <label className="responsive-section-title">
                PERSONALIZA TU JETI
              </label>
            </div>
            <div className="responsive-para-mi-section-container">
              <label className="responsive-section-title">CONTACTO</label>
            </div>
          </div>
        </div>
      </div>
    </_Navbar>
  )
}

export default Navbar
