import styled from 'styled-components'

export const _Navbar = styled.div`
  #promo-container {
    width: 100%;
    height: 46px;
    background: #ff6c0e;
    display: flex;
    align-items: center;
    justify-content: center;

    #promo-label {
      font-size: 14px;
      font-weight: 700;
      color: white;
    }

    @media (max-width: 800px) {
      height: 31px;
    }
  }

  #logos-container {
    width: 100%;
    height: 120.92px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid;
    border-color: #e2e1e1;

    #blanc-div {
      width: 15%;
    }

    #logo-desync {
      cursor: pointer;
    }

    #minilogos-container {
      padding-top: 20px;
      width: 15%;
      display: flex;
      justify-content: space-evenly;

      .mini-logo {
        cursor: pointer;
      }
    }
  }

  #menu-container {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .para-mi-container {
      height: 50px;
      display: flex;
      align-items: center;

      .down-arrow {
        margin-top: 5px;
        margin-left: 5px;
      }

      .submenu-container {
        position: absolute;
        top: 220px;
        left: 5%;
        z-index: 50;
        width: 90%;
        height: 310px;
        box-shadow: -1px 1px 4px grey;
        display: none;
        justify-content: space-evenly;
        transition: all 0.4s ease;
        background: #ffffff;

        .submenu-column {
          display: flex;
          flex-direction: column;

          .submenu-subtitle {
            color: #ff6c0e;
            font-size: 18px;
            font-weight: 600;
            margin-top: 33px;
            margin-bottom: 18px;
            padding-bottom: 4px;
            border-bottom: 1px solid;
            border-color: #e2e1e1;
            cursor: pointer;
          }

          .submenu-label {
            height: 18px;
            font-size: 16px;
            font-weight: 400;
            color: #5d656d;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
      }
    }
    .menu-label {
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
    }
  }

  #responsive {
    display: none;
  }

  @media (max-width: 1200px) {
    .menu-label {
      font-size: 15px !important;
    }
  }

  @media (max-width: 800px) {
    #desktop {
      display: none;
    }

    #responsive {
      display: block;
    }

    #minilogos-container {
      display: flex;
      width: 20%;
      justify-content: flex-end;

      .mini-logo {
        margin-left: 20%;
      }
    }
  }

  #responsive-logos-container {
    display: flex;
    padding-top: 20px;
    padding-left: 10%;
    width: 90%;
    justify-content: space-between;
    align-items: flex-end;
  }

  #responsive-menu-logo-container {
    width: 20%;
  }

  #responsive-search-bar-container {
    padding-top: 13px;
    text-align: center;
  }

  #search-bar {
    height: 27px;
    width: 55%;
    border-radius: 25px;
    border-color: #dddede;
    background-image: url('/assets/navbar/responsive-search-logo.png');
    background-repeat: no-repeat;
    background-position: 98% 50%;
  }

  #sliding-menu {
    top: 0;
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    left: -100%;
    transition: all 0.4s ease;
    overflow: auto;
    overflow-y: auto;
    z-index: 999;
    background: #fff;

    #responsive-menu-logos-container {
      width: 90%;
      padding-top: 20px;
      padding-left: 5%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    #responsive-sections-container {
      padding-top: 67px;

      .responsive-para-mi-section-container {
        padding-left: 31px;
        padding-bottom: 36px;
        display: flex;

        .responsive-section-title {
          font-size: 18px;
          font-weight: 400;
        }

        .down-arrow {
          margin-left: 13px;
          align-self: center;
        }
      }

      .responsive-para-mi-subsection {
        display: flex;
        flex-direction: column;
        padding-left: 10%;
        padding-bottom: 12px;
        display: none;

        .responsive-submenu-container {
          width: 80%;
          margin-top: 33px;
          padding-bottom: 4px;
          margin-bottom: 12px;
          border-bottom: 1px solid;
          border-color: #e2e1e1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          cursor: pointer;

          .submenu-subtitle {
            color: #ff6c0e;
            font-size: 18px;
            font-weight: 600;
          }
        }

        #responsive-mi-textiles-container {
          margin-top: 0px;
        }

        #responsive-empresa-textiles-container {
          margin-top: 0px;
        }

        .responsive-subcontainer {
          display: flex;
          flex-direction: column;
          display: none;
        }

        .submenu-label {
          padding-left: 3%;
          padding-bottom: 10px;
          height: 18px;
          font-size: 16px;
          font-weight: 400;
          color: #5d656d;
          margin-bottom: 10px;
          cursor: pointer;
        }
      }
    }
  }
`
