/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
  
var app = new Vue({
    el: "#app",
    data: {
        IsRadialMenu: !1,
        GetCurrentMenu: 1,
        IsInteraction: false,
        InteractionPlayerId: 0,
        InteractionVehicleId: 0,
        CurrentButtonName: 'Быстрые действия',
        CurrentButtonMessage: '',
        CurrentButtonDescription: '',
        IsPlayerCarUploaded: true,
        IsPlayerSleepActive: true,
        IsPlayerDrugsActive: true,
        IsPlayerHealthActive: true,
        IsLocationCarActive: true,
        IsPlayerGang: true,
        GetPlayerMetal: 52,
        GetPlayerAidKit: 52,
        GetPlayerRepairKit: 52,
        GetPlayerMask: 52,
        IsPlayerFlowersInHands: true,
        IsPlayerWeaponInHands: true,
        IsPlayerInVehicle: true,
        IsPlayerVehicleDriving: false,
        IsPlayerReceiveOffers: true,
        IsPlayerCanSendOffers: true,
        InteractionVehiclePassenger1: 'Отсутствует',
        InteractionVehiclePassenger1Id: 65535,
        InteractionVehiclePassenger2: 'Отсутствует',
        InteractionVehiclePassenger2Id: 65535,
        InteractionVehicleName: 'None',
        InteractionVehiclePassenger3: 'Отсутствует',
        InteractionVehiclePassenger3Id: 65535,
        InteractionVehicleDriver: 'Отсутствует',
        InteractionVehicleDriverId: 65535,
        IsPlayerCarAccess: false,
        IsPlayerCarLocked: true,
        IsPlayerCarKey: true,
        IsPlayerCarUpsideDown: true,
        IsPlayerNearCar: true,
        IsPlayerСanisterInHands: true,
        IsPlayerOrganization: true,
        IsPlayerCarOpenTrunk: true,
        IsPlayerCarOpenBonnet: true,
        GetPlayerTimeInGame: 0,
        GetPlayerTimeInAFK: 0,
        GetPlayerTimeHour: 0,
        GetPlayersOnline: 0,
        GetPlayerName: 'Nick_Name[52]',
        PlayerNetwork: 'Подключено (0 ms, 0.0% loss)',
        PlayerVoiceNetwork: 'Подключено (0 ms, 0.0% loss)',
        selectedButtonIndex: -1,
        buttonsCount: 8
    },
    mounted() {
        const handleEscapeAndContextMenu = () => {
            if (this.IsRadialMenu) {
                if (!this.IsInteraction) {
                    if (this.GetCurrentMenu == 11 || this.GetCurrentMenu == 12) {
                        this.updateComponent('GetCurrentMenu', 10);
                    } 
                    else 
                        if (this.GetCurrentMenu == 10) {
                        document.getElementById("interface-radial").style.animation = 'hide 0.2s forwards';
                        setTimeout(() => this.visibleComponent('IsRadialMenu', false), 500);
                    } 
                    else 
                        if (this.GetCurrentMenu == 21 || this.GetCurrentMenu == 22) {
                        this.updateComponent('GetCurrentMenu', 20);
                    } 
                    else {
                        document.getElementById("interface-radial").style.animation = 'hide 0.2s forwards';
                        setTimeout(() => this.visibleComponent('IsRadialMenu', false), 500);
                    }
                }
            }
        };
      
        let isLongPress = false;
        let preventRadialShow = false;
        let tabPressed = false;
      
        const handleTabKey = (event) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                if (!this.IsRadialMenu) {
                    if (event.type === 'keydown') {
                        tabPressed = true;
                        setTimeout(() => {
                            if (tabPressed) {
                                this.IsInteraction = true;
                                isLongPress = true;
                                preventRadialShow = true;
                            }
                        }, 250);
                    } 
                    else 
                        if (event.type === 'keyup') {
                        tabPressed = false;
                        if (isLongPress) {
                            isLongPress = false;
                            preventRadialShow = false;
                            document.getElementById("interaction").style.animation = 'hide 0.2s forwards';
                            setTimeout(() => this.IsInteraction = false, 500);
                            cef.emit('cefstudio.radial:interaction');
                        } 
                        else 
                            if (!preventRadialShow) {
                            if (!this.IsRadialMenu) {
                                this.visibleComponent('IsRadialMenu', 52, true);
                            }
                        }
                    }
                }
            }
        };

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                handleEscapeAndContextMenu();
            } else if (event.key === 'Tab') {
                handleTabKey(event);
            }
        });
      
        window.addEventListener('keyup', (event) => {
            if (event.key === 'Tab') {
                handleTabKey(event);
            } else if (this.IsRadialMenu) {
                if (event.key === 'ArrowUp') {
                    this.selectPreviousButton();
                } else if (event.key === 'ArrowDown') {
                    this.selectNextButton();
                } else if (event.key === 'Enter') {
                    this.triggerButtonAction();
                }
            }
        });
      
        window.addEventListener('contextmenu', handleEscapeAndContextMenu);
    },
    methods: {
        visibleComponent(i, m, t) {
            if (m === 52) {
                cef.emit('cefstudio.radial:check');
            } else {
                this[i] = t;
                this.GetCurrentMenu = m;
                cef.set_focus(t);
                cef.emit('cefstudio.radial:update', m, this.InteractionVehicleId);
                this.setButtonsCount(); 
                this.updateButtonHighlight();
                this.selectedButtonIndex = -1; 
                this.updateMenuName();
            }
        },
        updateComponent(i, t) {
            this[i] = t;
            if (i === 'GetCurrentMenu') {
                this.setButtonsCount(); 
                this.selectedButtonIndex = -1;
                this.updateButtonHighlight();
                this.clearHoverState(); 
                this.updateMenuName();
                if(t === 10 || t === 11 || t === 22 || t === 23 || t === 24 || t === 25) {
                    cef.emit('cefstudio.radial:update', t, this.InteractionVehicleId);
                }
            }
        },
        getButtonBorderStyle(buttonId) {
            const conditions = {
                5: () => !this.IsPlayerSleepActive,
                8: () => !this.IsPlayerDrugsActive,
                9: () => !this.IsPlayerHealthActive,
                12: () => !this.IsLocationCarActive,
                22: () => this.IsPlayerInVehicle,
                23: () => !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                24: () => !this.IsPlayerCarUploaded || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                27: () => this.IsPlayerInVehicle,
                28: () => !this.IsPlayerVehicleDriving,
                36: () => this.GetPlayerMetal === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                37: () => this.GetPlayerAidKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                38: () => !this.GetPlayerMask || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                39: () => this.GetPlayerRepairKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                40: () => !this.IsPlayerFlowersInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                41: () => !this.IsPlayerWeaponInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                43: () => this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName,
                44: () => this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName,
                46: () => this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName,
                47: () => this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName,
                48: () => !this.IsPlayerCarAccess,
                52: () => !this.IsPlayerCarUpsideDown,
                53: () => !this.IsPlayerNearCar,
                54: () => !this.IsPlayerСanisterInHands,
                56: () => !this.IsPlayerOrganization,
                57: () => !this.IsPlayerVehicleDriving,
            };
            return conditions[buttonId] && conditions[buttonId]() ? 'fill: rgba(0, 0, 0, 0.3)' : '#D9D9D9';
        },
        getButtonStyle(buttonId) {
            const conditions = {
                5: () => !this.IsPlayerSleepActive,
                8: () => !this.IsPlayerDrugsActive,
                9: () => !this.IsPlayerHealthActive,
                12: () => !this.IsLocationCarActive,
                22: () => this.IsPlayerInVehicle,
                23: () => !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                24: () => !this.IsPlayerCarUploaded || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                27: () => this.IsPlayerInVehicle,
                28: () => !this.IsPlayerVehicleDriving,
                36: () => this.GetPlayerMetal === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                37: () => this.GetPlayerAidKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                38: () => !this.GetPlayerMask || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                39: () => this.GetPlayerRepairKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                40: () => !this.IsPlayerFlowersInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                41: () => !this.IsPlayerWeaponInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                43: () => this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName,
                44: () => this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName,
                46: () => this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName,
                47: () => this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName,
                48: () => !this.IsPlayerCarAccess,
                52: () => !this.IsPlayerCarUpsideDown,
                53: () => !this.IsPlayerNearCar,
                54: () => !this.IsPlayerСanisterInHands,
                56: () => !this.IsPlayerOrganization,
                57: () => !this.IsPlayerVehicleDriving,
            };
            return conditions[buttonId] && conditions[buttonId]() ? 'fill: rgba(0, 0, 0, 0.4)' : '';
        },
        getButtonIconStyle(buttonId) {
            const conditions = {
                5: () => !this.IsPlayerSleepActive,
                8: () => !this.IsPlayerDrugsActive,
                9: () => !this.IsPlayerHealthActive,
                12: () => !this.IsLocationCarActive,
                22: () => this.IsPlayerInVehicle,
                23: () => !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                24: () => !this.IsPlayerCarUploaded || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                27: () => this.IsPlayerInVehicle,
                28: () => !this.IsPlayerVehicleDriving,
                36: () => this.GetPlayerMetal === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                37: () => this.GetPlayerAidKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                38: () => !this.GetPlayerMask || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                39: () => this.GetPlayerRepairKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                40: () => !this.IsPlayerFlowersInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                41: () => !this.IsPlayerWeaponInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                43: () => this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName,
                44: () => this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName,
                46: () => this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName,
                47: () => this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName,
                48: () => !this.IsPlayerCarAccess,
                52: () => !this.IsPlayerCarUpsideDown,
                53: () => !this.IsPlayerNearCar,
                54: () => !this.IsPlayerСanisterInHands,
                56: () => !this.IsPlayerOrganization,
                57: () => !this.IsPlayerVehicleDriving,
            };
            return conditions[buttonId] && conditions[buttonId]() ? 'opacity: 0.7' : '';
        },
        buttonHover(target, isHovered) {
            const button = target;
            const buttonBorder = target.previousElementSibling;

            this.buttonMouseOver(button);
        
            const buttonActions = {
                1: () => {
                    if (this.IsPlayerCarUploaded) {
                        this.CurrentButtonMessage = '';
                        if (isHovered) {
                            this.CurrentButtonName = 'Управление личным транспортом';
                            setTimeout(() => document.getElementById("car-arrow").style.opacity = `1`, 50);
                        }
                        if (!isHovered) setTimeout(() => document.getElementById("car-arrow").style.opacity = `0`, 50);
                    }
                },
                4: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("naviki-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("naviki-arrow").style.opacity = `0`, 50);
                },
                5: () => {
                    if (!this.IsPlayerSleepActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                8: () => {
                    if (!this.IsPlayerDrugsActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                9: () => {
                    if (!this.IsPlayerHealthActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                12: () => {
                    if (!this.IsLocationCarActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                21: () => {
                    if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                22: () => {
                    if (this.IsPlayerInVehicle) {
                        if (isHovered) this.CurrentButtonMessage = "Дуэль не доступна при нахождении в транспорте";
                    }
                },
                23: () => {
                    if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                24: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("document-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("document-arrow").style.opacity = `0`, 50);
                },
                25: () => {
                    if (!this.IsPlayerCarUploaded) {
                        if (isHovered) this.CurrentButtonMessage = "Личный транспорт не загружен";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                26: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("transfer-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("transfer-arrow").style.opacity = `0`, 50);
                },
                27: () => {
                    if (this.IsPlayerInVehicle) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны стоять на ногах";
                    }
                },
                28: () => {
                    if (!this.IsPlayerVehicleDriving) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны находиться за рулем транспорта";
                    }
                },
                29: () => {
                    if (!this.IsPlayerOrganization) {
                        if (isHovered) this.CurrentButtonDescription = "Вы не состоите в организации и не трудоустроены";
                        if (!isHovered) this.CurrentButtonDescription = "";
                    } 
                },
                36: () => {
                    if (this.GetPlayerRepairKit == 0) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету металла";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                37: () => {
                    if (this.GetPlayerAidKit == 0) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету аптечек";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                38: () => {
                    if (!this.GetPlayerMask) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету маски";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                39: () => {
                    if (this.GetPlayerRepairKit == 0) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету ремонтных наборов";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                40: () => {
                    if (!this.IsPlayerFlowersInHands) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны держать цветы в руках";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                41: () => {
                    if (!this.IsPlayerWeaponInHands) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны держать в руках оружие для передачи";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                42: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("radial-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("radial-arrow").style.opacity = `0`, 50);
                },
                43: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с пассажиром";
                    if (this.InteractionVehiclePassenger1 === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("passenger1-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("passenger1-arrow").style.opacity = `0`, 50);
                    }
                },
                44: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с пассажиром";
                    if (this.InteractionVehiclePassenger2 === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("passenger2-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("passenger2-arrow").style.opacity = `0`, 50);
                    }
                },
                45: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) {
                        this.CurrentButtonDescription = "Взаимодействовать с транспортом";
                        setTimeout(() => document.getElementById("car2-arrow").style.opacity = `1`, 50);
                    }
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("car2-arrow").style.opacity = `0`, 50);
                    }
                },
                46: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с пассажиром";
                    if (this.InteractionVehiclePassenger3 === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("passenger3-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("passenger3-arrow").style.opacity = `0`, 50);
                    }
                },
                47: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с водителем";
                    if (this.InteractionVehicleDriver === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("driver-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("driver-arrow").style.opacity = `0`, 50);
                    }
                },
                48: () => {
                    this.CurrentButtonMessage = '';
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                    } else setTimeout(() => document.getElementById("car3-arrow").style.opacity = `1`, 50);

                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("car3-arrow").style.opacity = `0`, 50);
                    }
                },
                49: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                50: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                51: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                52: () => {
                    if (!this.IsPlayerCarUpsideDown) {
                        if (isHovered) this.CurrentButtonMessage = "Транспорт не нуждается в перевороте";
                    } 
                },
                53: () => {
                    if (!this.IsPlayerNearCar) {
                        if (isHovered) this.CurrentButtonMessage = "Нужно стоять рядом с транспортом";
                    } 
                },
                54: () => {
                    if (!this.IsPlayerСanisterInHands) {
                        if (isHovered) this.CurrentButtonMessage = "Нет канистры в руках";
                    } 
                },
                55: () => {
                    if (isHovered) setTimeout(() => document.getElementById("element-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("element-arrow").style.opacity = `0`, 50);
                    }
                },
                56: () => {
                    if (!this.IsPlayerOrganization) {
                        if (isHovered) this.CurrentButtonDescription = "Вы не состоите в организации и не трудоустроены";
                        if (!isHovered) this.CurrentButtonDescription = "";
                    } 
                },
                57: () => {
                    if (!this.IsPlayerVehicleDriving) {
                        if (isHovered) this.CurrentButtonMessage = "Нужно быть за рулём транспорта";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                58: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                59: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                }
            };
        
            button.classList.toggle('hover', isHovered);
            buttonBorder.classList.toggle('hover', isHovered);
        
            if (buttonActions[button.dataset.button]) {
                buttonActions[button.dataset.button]();
            }
        },
        click(element) {
            let passengerId = 65535;
            let toplayerId = this.InteractionPlayerId;

            if (element == 1) {
                if (this.IsPlayerCarUploaded) {
                    this.updateComponent('GetCurrentMenu', 11);
                    return;
                }
            } 
            else if (element == 4) {
                this.updateComponent('GetCurrentMenu', 12);
                return;
            } 
            else if (element == 5) {
                if (!this.IsPlayerSleepActive) return;
            } 
            else if (element == 8) {
                if (!this.IsPlayerDrugsActive) return;
            } 
            else if (element == 9) {
                if (!this.IsPlayerHealthActive) return;
            } 
            else if (element == 12) {
                if (!this.IsLocationCarActive) return;
            } 
            else if (element == 21) {
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 22) {
                if (this.IsPlayerInVehicle) return;
            }
            else if (element == 23) {
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            }
            else if (element == 24) {
                this.updateComponent('GetCurrentMenu', 21);
                return;
            } 
            else if (element == 25) {
                if (!this.IsPlayerCarUploaded) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 26) {
                this.updateComponent('GetCurrentMenu', 22);
                return;
            } 
            else if (element == 27) {
                if (this.IsPlayerInVehicle) return;
            }
            else if (element == 28) {
                if (!this.IsPlayerVehicleDriving) return;
            }
            else if (element == 29) {
                if (!this.IsPlayerOrganization) return;
            }
            else if (element == 36) {
                if (this.GetPlayerMetal == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 37) {
                if (this.GetPlayerAidKit == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 38) {
                if (this.GetPlayerMask == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 39) {
                if (this.GetPlayerRepairKit == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 40) {
                if (!this.IsPlayerFlowersInHands) return;
            } 
            else if (element == 41) {
                if (!this.IsPlayerWeaponInHands) return;
            } 
            else if (element == 42) {
                this.updateComponent('GetCurrentMenu', 10);
                return;
            } 
            else if (element == 43) {
                if (this.InteractionVehiclePassenger1Id !== 65535 && this.InteractionVehiclePassenger1 !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 1;
                } else return;
            }
            else if (element == 44) {
                if (this.InteractionVehiclePassenger2Id !== 65535 && this.InteractionVehiclePassenger2 !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 2;
                } else return;
            }
            else if (element == 45) {
                this.updateComponent('GetCurrentMenu', 24);
                return;
            } 
            else if (element == 46) {
                if (this.InteractionVehiclePassenger3Id !== 65535 && this.InteractionVehiclePassenger3 !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 3;
                } else return;
            }
            else if (element == 47) {
                if (this.InteractionVehicleDriverId !== 65535 && this.InteractionVehicleDriver !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 0;
                } else return;
            }
            else if (element == 48) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 49) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 50) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 51) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 52) {
                if (!this.IsPlayerCarUpsideDown) return;
            } 
            else if (element == 53) {
                if (!this.IsPlayerNearCar) return;
            } 
            else if (element == 54) {
                if (!this.IsPlayerСanisterInHands) return;
            } 
            else if (element == 55) {
                this.updateComponent('GetCurrentMenu', 25);
                return;
            }
            else if (element == 56) {
                if (!this.IsPlayerOrganization) return;
            }
            else if (element == 57) {
                if (!this.IsPlayerVehicleDriving) return;
            }
            else if (element == 58) {
                if (!this.IsPlayerCarAccess) return;
            }
            else if (element == 59) {
                if (!this.IsPlayerCarAccess) return;
            }

            if (element < 20) {
                cef.emit('cefstudio.radial:click1', element);
            } else {
                cef.emit('cefstudio.radial:click2', element, passengerId, toplayerId);
            }
        },
        clearHoverState() {
            const buttons = document.querySelectorAll('.button');
            const buttonBorders = document.querySelectorAll('.button-border');
        
            buttons.forEach(button => {
                button.classList.remove('hover');
            });
        
            buttonBorders.forEach(border => {
                border.classList.remove('hover');
            });
        },
        buttonMouseOver(element) {
            this.CurrentButtonName = element.dataset.name;
        
            const mouseElement = document.getElementById("mouse");
            const buttonOpacityMap = {
                5: this.IsPlayerSleepActive,
                8: this.IsPlayerDrugsActive,
                9: this.IsPlayerHealthActive,
                12: this.IsLocationCarActive,
                22: this.IsPlayerInVehicle,
                27: this.IsPlayerInVehicle,
                28: this.IsPlayerVehicleDriving,
                36: this.GetPlayerMetal,
                37: this.GetPlayerAidKit,
                38: this.GetPlayerMask,
                39: this.GetPlayerRepairKit,
                40: this.IsPlayerFlowersInHands,
                41: this.IsPlayerWeaponInHands,
                48: this.IsPlayerCarAccess,
                49: this.IsPlayerCarAccess,
                50: this.IsPlayerCarAccess,
                51: this.IsPlayerCarAccess,
                52: this.IsPlayerCarUpsideDown,
                53: this.IsPlayerNearCar,
                54: this.IsPlayerСanisterInHands,
                56: this.IsPlayerOrganization,
                57: this.IsPlayerVehicleDriving,
                58: this.IsPlayerCarAccess,
                59: this.IsPlayerCarAccess,
            };
        
            const button = element.dataset.button;
            
            if (button == 43) {
                mouseElement.style.opacity = (this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName) ? '0.5' : '1';
            }
            else if (button == 44) {
                mouseElement.style.opacity = (this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName) ? '0.5' : '1';
            }
            else if (button == 46) {
                mouseElement.style.opacity = (this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName) ? '0.5' : '1';
            }
            else if (button == 47) {
                mouseElement.style.opacity = (this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName) ? '0.5' : '1';
            }
            else mouseElement.style.opacity = buttonOpacityMap[button] !== undefined ? (buttonOpacityMap[button] ? '1' : '0.5') : '1';
        },
        updateMenuName() {
            this.CurrentButtonDescription = '';
            const hoveredButtons = document.querySelectorAll('.button.hover');
    
            if (hoveredButtons.length === 0) {
                const buttonNameMap = {
                    10: 'Быстрые действия',
                    11: 'Управление личным транспортом',
                    12: 'Посмотреть удостоверение или навыки',
                    20: 'Игрок',
                    21: 'Показать документы',
                    22: 'Передать предмет',
                    23: 'Взаимодействовать',
                    24: 'Взаимодействовать',
                    25: 'Управлять элементами'
                };
                this.CurrentButtonName = buttonNameMap[this.GetCurrentMenu] || '';

                document.getElementById("mouse").style.opacity = '.5';
            }
        },
        buttonMouseOut() {
            this.CurrentButtonMessage = '';
            this.CurrentButtonDescription = '';
            setTimeout(() => this.updateMenuName(), 0);     
        },
        setButtonsCount() {
            if (this.GetCurrentMenu === 10) this.buttonsCount = 9; 
            else if (this.GetCurrentMenu === 11) this.buttonsCount = 6;
            else if (this.GetCurrentMenu === 12) this.buttonsCount = 4; 
            else if (this.GetCurrentMenu === 20) this.buttonsCount = 10; 
            else if (this.GetCurrentMenu === 21) this.buttonsCount = 5; 
            else if (this.GetCurrentMenu === 22) {
                if (this.IsPlayerGang) this.buttonsCount = 7; 
                else this.buttonsCount = 6; 
            } 
            else if (this.GetCurrentMenu === 23) this.buttonsCount = 6; 
            else if (this.GetCurrentMenu === 24) this.buttonsCount = 9; 
            else if (this.GetCurrentMenu === 25) this.buttonsCount = 3; 

            this.selectedButtonIndex = -1;
        },
        selectPreviousButton() {
            this.selectedButtonIndex--;
            if (this.selectedButtonIndex < 0) {
                this.selectedButtonIndex = this.buttonsCount - 1;
            }
            this.updateRadialButtonInfo();
            this.updateButtonHighlight();
        },
        selectNextButton() {
            this.selectedButtonIndex = (this.selectedButtonIndex + 1) % this.buttonsCount;
            this.updateRadialButtonInfo();
            this.updateButtonHighlight();
        },
        updateRadialButtonInfo() {
            const buttons = document.querySelectorAll('.button');
            const currentButton = buttons[this.selectedButtonIndex];

            this.CurrentButtonMessage = '';
        
            if (currentButton) {
                this.CurrentButtonName = currentButton.dataset.name; 
                if (currentButton.dataset.warning) {
                    this.CurrentButtonMessage = currentButton.dataset.warning;
                }
            }
        },
        updateButtonHighlight() {
            const buttons = document.querySelectorAll('.button'); 
            
            buttons.forEach((button) => {
                this.buttonHover(button, false); 
            });
        
            const currentButton = buttons[this.selectedButtonIndex];
            if (currentButton) {
                this.buttonHover(currentButton, true); 
            }
        },
        triggerButtonAction() {
            let buttonOffset = 0;
        
            if (this.GetCurrentMenu === 10) buttonOffset = 1;
            else if (this.GetCurrentMenu === 11) buttonOffset = 10;
            else if (this.GetCurrentMenu === 12) buttonOffset = 16;
            else if (this.GetCurrentMenu === 20) buttonOffset = 20;
            else if (this.GetCurrentMenu === 21) buttonOffset = 30;
            else if (this.GetCurrentMenu === 22) buttonOffset = 35;
            else if (this.GetCurrentMenu === 23) buttonOffset = 42;
            else if (this.GetCurrentMenu === 24) buttonOffset = 48;
            else if (this.GetCurrentMenu === 25) buttonOffset = 57;

            const buttonElement = document.querySelector(`.button[data-button="${this.selectedButtonIndex + buttonOffset}"]`); 
            if (buttonElement) {
                const buttonData = buttonElement.dataset.button;
                this.click(buttonData);
            }
        }
    },
});

cef.on("cefstudio.execute", (query) => eval(query));
