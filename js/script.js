// variables
let inv = 0;
let maxInv = 50;
let wallet = 7.5;
let value = 0;
let moneyPerClick = 0.1;
let packSel = "swsh1";
let rarity;
let itemCounter = 0;
let inventory = {};
let inventoryUpgPrice = 15;
let inventoryUpgrades = 0;
let clickUpgPrice = 25;
let clickUpgrades = 0;

//settings
let popup = true;
let clickSell = true;

// statistics
let totalMoneyAccepted = 0;
let totalMoneySpent = 0;
let totalCardsSold = 0;
let totalPacksOpened = 0;
let totalEnergyPulled = 0;
let totalCommonsPulled = 0;
let totalUncommonsPulled = 0;
let totalReversePulled = 0;
let totalReverseSecretsPulled = 0;
let totalRaresPulled = 0;
let totalHoloRaresPulled = 0;
let totalUltraRaresPulled = 0;
let totalSecretRaresPulled = 0;

// dont save
let lastRand;
let random;
let selectedCards;
let cntrlIsPressed = false;

// collection
const collection = {
    swshPromo: {

    },
    swsh1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh2: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh3: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh4: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh5: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    mcd1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh6: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        subsetCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        subsetCollected: {}
    },
    swsh7: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh8: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh9: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    cele1: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh10: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {}
    },
    swsh11: {
        collectedTotal: 0,
        secretsCollectedTotal: 0,
        collected: {},
        secretsCollected: {},
        subsetCollected: {}
    }
}

loadGameState()

updateInv();
updateWallet();
updateValue();
updateStats();
updateShopItems();

document.getElementById('popupCheckbox').checked = !popup;
document.getElementById('clickCheckbox').checked = clickSell;

// tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// clear state button
const clearState = document.querySelector('.clearGameState');
let clearSave = 0;
clearState.addEventListener('click', () => {
    clearState.innerHTML = "Are you sure?";
    clearSave ++;
    if (clearSave == 2) {
        clearGameState();
    }
});

// save game button
const gameSave = document.querySelector('.saveGame');
gameSave.addEventListener('click', () => {
    gameSave.innerHTML = "Saved!";
    saveGameState();
});

// settings dropdown
const settingBtn = document.querySelector('.settings');
const settingMenu = document.querySelector('.settingsMenu');
let menuOpen = false;
settingBtn.addEventListener('click', () => {
    if (!menuOpen) {
        settingMenu.classList.add('open');
        menuOpen = true;
    } else {
        settingBtn.classList.remove('open');
        settingMenu.classList.remove('open');
        menuOpen = false;
        clearState.innerHTML = "Clear Game Save";
        gameSave.innerHTML = "Save";
        clearSave = 0;
    }
});

// settings
$('#popupCheckbox').change(function() {
    if (this.checked) {
        popup = false;
    } else {
        popup = true;
    }
    saveGameState()
});

$('#clickCheckbox').change(function() {
    if (this.checked) {
        clickSell = true;
    } else {
        clickSell = false;
    }
    resetInventory()
    saveGameState()
});

$(document).keydown(function(event){
    if(event.which=="17")
        cntrlIsPressed = true;
});

$(document).keyup(function(){
    cntrlIsPressed = false;
});

// ==================== PACKS ==================== //
const packs = {
    swshPromo: {
        name: "Sword & Shield Promos",
        price: 0,
        img: "img/swsh_promo.png"
    },
    swsh1: {
        name: "Sword & Shield Base Set", name2: "Sword & Shield",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 1,
        price: 4, cards: 202, secret: 14, img: "img/swsh1/swsh_base_set"
    },
    swsh2: {
        name: "Sword & Shield Rebel Clash", name2: "Rebel Clash",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 1,
        price: 4, cards: 192, secret: 17, img: "img/swsh2/swsh_rebel_clash"
    },
    swsh3: {
        name: "Sword & Shield Darkness Ablaze", name2: "Darkness Ablaze",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 1,
        price: 4, cards: 189, secret: 12, img: "img/swsh3/swsh_darkness_ablaze"
    },
    swsh4: {
        name: "Sword & Shield Champion's Path", name2: "Champion's Path",
        contents: [0,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards", imgNum: 1,
        price: 5, cards: 73, secret: 7, img: "img/swsh4/swsh_champions_path"
    },
    swsh5: {
        name: "Sword & Shield Vivid Voltage", name2: "Vivid Voltage",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 4,
        price: 4, cards: 185, secret: 18, img: "img/swsh5/swsh_vivid_voltage"
    },
    mcd1: {
        name: "McDonald's 25th Anniversary", name2: "McDonald's 25th",
        contents: [0,3,0,1,0], // energy, commons, uncommons, reverse, rare
        desc: "Contains 4 cards", imgNum: 1,
        price: 2, cards: 25, secret: 0, img: "img/mcd1/mcd_25th_anniversary"
    },
    swsh6: {
        name: "Sword & Shield Shining Fates", name2: "Shining Fates",
        contents: [0,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards", imgNum: 4,
        price: 5, cards: 72, secret: 1, subset: 122, img: "img/swsh6/swsh_shining_fates"
    },
    swsh7: {
        name: "Sword & Shield Battle Styles", name2: "Battle Styles",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 4,
        price: 4, cards: 163, secret: 20, img: "img/swsh7/swsh_battle_styles"
    },
    swsh8: {
        name: "Sword & Shield Chilling Reign", name2: "Chilling Reign",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 5,
        price: 4, cards: 198, secret: 35, img: "img/swsh8/swsh_chilling_reign"
    },
    swsh9: {
        name: "Sword & Shield Evolving Skies", name2: "Evolving Skies",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 4,
        price: 4, cards: 203, secret: 34, img: "img/swsh9/swsh_evolving_skies"
    },
    cele1: {
        name: "Pokemon 25th Celebrations", name2: "25th Celebrations",
        contents: [0,0,0,0,4], // energy, commons, uncommons, reverse, rare
        desc: "Contains 4 cards", imgNum: 1,
        price: 2, cards: 25, secret: 0, subset: 25, img: "img/cele1/swsh_25th_celebrations"
    },
    swsh10: {
        name: "Sword & Shield Fusion Strike", name2: "Fusion Strike",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 4,
        price: 4, cards: 264, secret: 20, img: "img/swsh10/swsh_fusion_strike"
    },
    swsh11: {
        name: "Sword & Shield Brilliant Stars", name2: "Brilliant Stars",
        contents: [1,5,3,1,1], // energy, commons, uncommons, reverse, rare
        desc: "Contains 10 cards + 1 energy", imgNum: 4,
        price: 4, cards: 172, secret: 15, subset: 30, img: "img/swsh11/swsh_brilliant_stars"
    }
}

// ==================== CARDS ==================== //
const cards = {
    // ENERGY
    energy: {
        grass: {
            name: "Grass Energy",
            price: 0.01, type: "grass", num: "26",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        fire: {
            name: "Fire Energy",
            price: 0.01, type: "fire", num: "27",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        water: {
            name: "Water Energy",
            price: 0.01, type: "water", num: "28",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        electric: {
            name: "Electric Energy",
            price: 0.01, type: "electric", num: "29",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        psychic: {
            name: "Psychic Energy",
            price: 0.01, type: "psychic",  num: "30",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        fighting: {
            name: "Fighting Energy",
            price: 0.01, type: "fighting", num: "31",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        dark: {
            name: "Dark Energy",
            price: 0.01, type: "dark", num: "32",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        metal: {
            name: "Metal Energy",
            price: 0.01, type: "metal", num: "33",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        },
        fairy: {
            name: "Fairy Energy",
            price: 0.01, type: "fairy", num: "34",
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_"+this.num+".png"}
        }
    },
    // SWORD & SHIELD BASE SET
    swsh1: {
        // ======================== COMMON ======================== //
        common: {
            card1: {
                get name() {return "Roselia"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 2, rarity: 1, type: "grass", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Roselia"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 3, rarity: 1, type: "grass", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Cottonee"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 5, rarity: 1, type: "grass", holo: 0, revPrice: 0.18,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Maractus"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 7, rarity: 1, type: "grass", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Grookey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 10, rarity: 1, type: "grass", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Grookey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 11, rarity: 1, type: "grass", holo: 0, revPrice: 0.25,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Blipbug"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 16, rarity: 1, type: "grass", holo: 0, revPrice: 0.15,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Blipbug"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 17, rarity: 1, type: "grass", holo: 0, revPrice: 0.20,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Gossifleur"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 20, rarity: 1, type: "grass", holo: 0, revPrice: 0.28,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Vulpix"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 22, rarity: 1, type: "fire", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Salandit"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 27, rarity: 1, type: "fire", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Scorbunny"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.09, num: 30, rarity: 1, type: "fire", holo: 0, revPrice: 0.27,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Scorbunny"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 31, rarity: 1, type: "fire", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Sizzlipede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 37, rarity: 1, type: "fire", holo: 0, revPrice: 0.20,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Sizzlipede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 38, rarity: 1, type: "fire", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Shellder"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 40, rarity: 1, type: "water", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Krabby"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 42, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Krabby"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 43, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Goldeen"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 45, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Goldeen"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 46, rarity: 1, type: "water", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Sobble"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 54, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Sobble"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 55, rarity: 1, type: "water", holo: 0, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Chewtle"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 60, rarity: 1, type: "water", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Snom"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 63, rarity: 1, type: "water", holo: 0, revPrice: 0.30,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Pikachu"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 65, rarity: 1, type: "electric", holo: 0, revPrice: 0.42,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Chinchou"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 67, rarity: 1, type: "electric", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Chinchou"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 68, rarity: 1, type: "electric", holo: 0, revPrice: 0.18,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Joltik"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 70, rarity: 1, type: "electric", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Yamper"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 73, rarity: 1, type: "electric", holo: 0, revPrice: 0.25,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Yamper"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 74, rarity: 1, type: "electric", holo: 0, revPrice: 0.25,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Pincurchin"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 77, rarity: 1, type: "electric", holo: 0, revPrice: 0.20,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Galarian Ponyta"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 81, rarity: 1, type: "psychic", holo: 0, revPrice: 0.32,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card33: {
                get name() {return "Gastly"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 83, rarity: 1, type: "psychic", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card34: {
                get name() {return "Munna"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 87, rarity: 1, type: "psychic", holo: 0, revPrice: 0.18,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card35: {
                get name() {return "Sinistea"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 89, rarity: 1, type: "psychic", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card36: {
                get name() {return "Diglett"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.03, num: 92, rarity: 1, type: "fighting", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card37: {
                get name() {return "Rhyhorn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 96, rarity: 1, type: "fighting", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card38: {
                get name() {return "Rhyhorn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 97, rarity: 1, type: "fighting", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card39: {
                get name() {return "Baltoy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 101, rarity: 1, type: "fighting", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card40: {
                get name() {return "Baltoy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 102, rarity: 1, type: "fighting", holo: 0, revPrice: 0.16,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card41: {
                get name() {return "Mudbray"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 105, rarity: 1, type: "fighting", holo: 0, revPrice: 0.20,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card42: {
                get name() {return "Silicobra"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 107, rarity: 1, type: "fighting", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card43: {
                get name() {return "Silicobra"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 108, rarity: 1, type: "fighting", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card44: {
                get name() {return "Clobbopus"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 111, rarity: 1, type: "fighting", holo: 0, revPrice: 0.15,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card45: {
                get name() {return "Clobbopus"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 112, rarity: 1, type: "fighting", holo: 0, revPrice: 0.18,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card46: {
                get name() {return "Galarian Zigzagoon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 117, rarity: 1, type: "dark", holo: 0, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card47: {
                get name() {return "Skorupi"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.09, num: 121, rarity: 1, type: "dark", holo: 0, revPrice: 0.16,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card48: {
                get name() {return "Croagunk"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 123, rarity: 1, type: "dark", holo: 0, revPrice: 0.30,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card49: {
                get name() {return "Nickit"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 125, rarity: 1, type: "dark", holo: 0, revPrice: 0.20,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card50: {
                get name() {return "Galarian Meowth"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 127, rarity: 1, type: "metal", holo: 0, revPrice: 0.20,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card51: {
                get name() {return "Mawile"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 129, rarity: 1, type: "metal", holo: 0, revPrice: 0.20,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card52: {
                get name() {return "Ferroseed"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 130, rarity: 1, type: "metal", holo: 0, revPrice: 0.17,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card53: {
                get name() {return "Pawniard"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.03, num: 133, rarity: 1, type: "metal", holo: 0, revPrice: 0.16,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card54: {
                get name() {return "Cufant"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 136, rarity: 1, type: "metal", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== UNCOMMON ======================== //
        uncommon: {
            card1: {
                get name() {return "Thwackey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 12, rarity: 2, type: "grass", holo: 0, revPrice: 0.57,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Thwackey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 13, rarity: 2, type: "grass", holo: 0, revPrice: 0.49,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Dottler"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 18, rarity: 2, type: "grass", holo: 0, revPrice: 0.43,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Eldegoss"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 21, rarity: 2, type: "grass", holo: 0, revPrice: 0.43,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Heatmor"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 26, rarity: 2, type: "fire", holo: 0, revPrice: 0.30,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Salazzle"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 28, rarity: 2, type: "fire", holo: 0, revPrice: 0.34,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Raboot"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 32, rarity: 2, type: "fire", holo: 0, revPrice: 1.25,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Raboot"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 33, rarity: 2, type: "fire", holo: 0,
                revPrice: 0.48,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Kingler"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 44, rarity: 2, type: "water", holo: 0, revPrice: 0.45,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Seaking"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 47, rarity: 2, type: "water", holo: 0, revPrice: 0.47,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Qwilfish"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 51, rarity: 2, type: "water", holo: 0,
                revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Mantine"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 52, rarity: 2, type: "water", holo: 0, revPrice: 0.37,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Drizzile"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 56, rarity: 2, type: "water", holo: 0, revPrice: 0.55,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Drizzile"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 57, rarity: 2, type: "water", holo: 0, revPrice: 0.41,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Galvantula"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 71, rarity: 2, type: "electric", holo: 0, revPrice: 0.27,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Haunter"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 84, rarity: 2, type: "psychic", holo: 0, revPrice: 0.44,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Dugtrio"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 93, rarity: 2, type: "fighting", holo: 0, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Hitmonlee"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 94, rarity: 2, type: "fighting", holo: 0, revPrice: 0.50,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Hitmonchan"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 95, rarity: 2, type: "fighting", holo: 0, revPrice: 0.46,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Rhydon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 98, rarity: 2, type: "fighting", holo: 0, revPrice: 0.42,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Sudowoodo"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 100, rarity: 2, type: "fighting", holo: 0, revPrice: 0.43,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Galarian Linoone"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 118, rarity: 2, type: "dark", holo: 0, revPrice: 0.51,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Ferrothorn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 131, rarity: 2, type: "metal", holo: 0, revPrice: 0.29,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Galarian Stunfisk"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 132, rarity: 2, type: "metal", holo: 0, revPrice: 0.38,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Bisharp"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 134, rarity: 2, type: "metal", holo: 0, revPrice: 0.30,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== RARE ======================== //
        rare: {
            card1: {
                get name() {return "Roserade"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 4, rarity: 3, type: "grass", holo: 0, revPrice: 0.43,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Whimsicott"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 6, rarity: 3, type: "grass", holo: 0, revPrice: 0.37,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Durant"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 8, rarity: 3, type: "grass", holo: 0, revPrice: 0.38,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Rillaboom"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.38, num: 15, rarity: 3, type: "grass", holo: 0, revPrice: 0.47,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Orbeetle"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 19, rarity: 3, type: "grass", holo: 0, revPrice: 0.38,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Ninetales"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 23, rarity: 3, type: "fire", holo: 0, revPrice: 0.59,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Turtonator"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 29, rarity: 3, type: "fire", holo: 0,
                revPrice: 0.40,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Cinderace"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.27, num: 36, rarity: 3, type: "fire", holo: 0, revPrice: 0.74,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Centiskorch"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 39, rarity: 3, type: "fire", holo: 0, revPrice: 0.35,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Cloyster"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 41, rarity: 3, type: "water", holo: 0, revPrice: 0.35,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Lapras"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 48, rarity: 3, type: "water", holo: 0, revPrice: 0.52,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Inteleon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.41, num: 59, rarity: 3, type: "water", holo: 0, revPrice: 0.48,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Drednaw"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 61, rarity: 3, type: "water", holo: 0, revPrice: 0.39,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Cramorant"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 62, rarity: 3, type: "water", holo: 0, revPrice: 0.42,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Raichu"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.25, num: 66, rarity: 3, type: "electric", holo: 0, revPrice: 0.61,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Lanturn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 69, rarity: 3, type: "electric", holo: 0, revPrice: 0.38,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Morpeko"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 78, rarity: 3, type: "electric", holo: 0, revPrice: 0.52,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Galarian Rapidash"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.59, num: 82, rarity: 3, type: "psychic", holo: 0, revPrice: 0.85,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Musharna"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 88, rarity: 3, type: "psychic", holo: 0, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Polteageist"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 90, rarity: 3, type: "psychic", holo: 0, revPrice: 0.37,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Claydol"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 103, rarity: 3, type: "fighting", holo: 0, revPrice: 0.40,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Mudsdale"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 106, rarity: 3, type: "fighting", holo: 0, revPrice: 0.40,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Sandaconda"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 109, rarity: 3, type: "fighting", holo: 0, revPrice: 0.35,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Grapploct"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 113, rarity: 3, type: "fighting", holo: 0, revPrice: 0.43,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Stonjourner"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 114, rarity: 3, type: "fighting", holo: 0, revPrice: 0.34,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Drapion"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 122, rarity: 3, type: "dark", holo: 0, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Thievul"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 126, rarity: 3, type: "dark", holo: 0, revPrice: 0.38,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Corviknight"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 135, rarity: 3, type: "metal", holo: 0, revPrice: 0.50,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== HOLO RARE ======================== //
        holoRare: {
            card1: {
                get name() {return "Rillaboom"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.29, num: 14, rarity: 4, type: "grass", holo: 3, revPrice: 0.29,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Cinderace"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.48, num: 34, rarity: 4, type: "fire", holo: 3, revPrice: 0.59,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Cinderace"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.43, num: 35, rarity: 4, type: "fire", holo: 3, revPrice: 0.44,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Inteleon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.19, num: 58, rarity: 4, type: "water", holo: 3, revPrice: 2.43,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Frosmoth"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.45, num: 64, rarity: 4, type: "water", holo: 3, revPrice: 0.51,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Boltund"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.33, num: 75, rarity: 4, type: "electric", holo: 3, revPrice: 0.37,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Boltund"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.32, num: 76, rarity: 4, type: "electric", holo: 3, revPrice: 0.39,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Gengar"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.92, num: 85, rarity: 4, type: "psychic", holo: 3, revPrice: 0.95,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Rhyperior"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.39, num: 99, rarity: 4, type: "fighting", holo: 3, revPrice: 0.32,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Sandaconda"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.26, num: 110, rarity: 4, type: "fighting", holo: 3, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Galarian Obstagoon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.37, num: 119, rarity: 4, type: "dark", holo: 3, revPrice: 0.45,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Toxicroak"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.69, num: 124, rarity: 4, type: "dark", holo: 3, revPrice: 0.73,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Galarian Perrserker"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.40, num: 128, rarity: 4, type: "metal", holo: 3, revPrice: 0.50,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Copperajah"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.37, num: 137, rarity: 4, type: "metal", holo: 3, revPrice: 0.43,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== ULTRA RARE ======================== //
        ultraRare: {
            card1: {
                get name() {return "Celebi V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.00, num: 1, rarity: 5, type: "grass", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Dhelmise V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.92, num: 9, rarity: 5, type: "grass", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Torkoal V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.22, num: 24, rarity: 5, type: "fire", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Victini V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.28, num: 25, rarity: 5, type: "fire", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Lapras V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.93, num: 49, rarity: 5, type: "water", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Lapras VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.97, num: 50, rarity: 5, type: "water", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Keldeo V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.26, num: 53, rarity: 5, type: "water", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Tapu Koko V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.36, num: 72, rarity: 5, type: "electric", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Morpeko V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.02, num: 79, rarity: 5, type: "electric", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Morpeko VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.62, num: 80, rarity: 5, type: "electric", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Wobbuffet V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.11, num: 86, rarity: 5, type: "psychic", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Indeedee V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.03, num: 91, rarity: 5, type: "psychic", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Regirock V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.02, num: 104, rarity: 5, type: "fighting", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Stonjourner V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.14, num: 115, rarity: 5, type: "fighting", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Stonjourner VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.58, num: 116, rarity: 5, type: "fighting", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Sableye V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.37, num: 120, rarity: 5, type: "dark", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Zacian V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.38, num: 138, rarity: 5, type: "metal", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Zamazenta V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.58, num: 139, rarity: 5, type: "metal", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== REVERSE SECRET ======================== //
        reverseSecret: {

        },
        // ======================== SECRET RARE ======================== //
        secretRare: {
            card1: {
                get name() {return "Lapras VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 14.45, num: 203, rarity: 7, type: "water", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Morpeko VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 9.55, num: 204, rarity: 7, type: "electric", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Stonjourner VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 5.58, num: 205, rarity: 7, type: "fighting", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Snorlax VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 26.79, num: 206, rarity: 7, type: "colorless", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Bede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 4.87, num: 207, rarity: 7, type: "supporter", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Marnie"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 28.24, num: 208, rarity: 7, type: "supporter", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Professor's Research"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 6.29, num: 209, rarity: 7, type: "supporter", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Team Yell Grunt"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.97, num: 210, rarity: 7, type: "supporter", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Zacian V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 26.22, num: 211, rarity: 7, type: "metal", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Zamazenta V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 15.99, num: 212, rarity: 7, type: "metal", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Air Balloon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 12.84, num: 213, rarity: 7, type: "tool", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Metal Saucer"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 5.31, num: 214, rarity: 7, type: "item", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Ordinary Rod"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 8.47, num: 215, rarity: 7, type: "item", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Quick Ball"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 38.09, num: 216, rarity: 7, type: "item", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        }
    }
}

// display pack shop
for (let i in Object.keys(packs)){
    if (i == 0) {
    }else {
        updatePack(Object.keys(packs)[i]);
    }
    i++;
}

// default pack
drawPack();
document.getElementById("pack").setAttribute("onclick", "openPack('"+packSel+"')");
document.getElementById(packSel + "Opt").classList.add("active");


// functions
function openPack() {
    let sum = 0;
    for (let i in packs[packSel].contents) {
        sum += packs[packSel].contents[i];
        i++;
    }
    inv += sum;
    if (inv > maxInv) {
        inv -= sum;
        return;
    }
    inv -= sum;
    let spent = packs[packSel].price;
    wallet -= spent;
    if (wallet < 0) {
        wallet += spent;
        return;
    }
    totalMoneySpent += spent;
    totalPacksOpened ++;

    if (popup) {
        // console.log($('#unboxContainer').modal({show:true}));
        console.log("attempted modal")
        $('#unboxContainer').toggle()
    }

    let i = 0;
    while (i < packs[packSel].contents[0]) {
        openEnergy();
        totalEnergyPulled ++;
        i++;
    }
    i = 0;
    randCard("common", packs[packSel].contents[1])
    while (i < packs[packSel].contents[1]) {
        openCard("common", selectedCards[i]);
        totalCommonsPulled ++;
        i++;
    }
    i = 0;
    randCard("uncommon", packs[packSel].contents[1])
    while (i < packs[packSel].contents[2]) {
        openCard("uncommon", selectedCards[i]);
        totalUncommonsPulled ++;
        i++;
    }
    i = 0;
    while (i < packs[packSel].contents[3]) {
        randReverse();
        i++;
    }
    i = 0;
    while (i < packs[packSel].contents[4]) {
        randRare();
        i++;
    }
    updateWallet();
    updateStats();
    saveGameState();
}

function openEnergy() {
    random = Math.floor(Math.random() * ObjectLength(cards.energy));

    let card = cards.energy[Object.keys(cards.energy)[random]];
    let itemId = "item"+itemCounter;

    inventory[itemId] = {
        id: itemId,
        name: card.name,
        num: card.num,
        price: card.price,
        rarity: 0,
        type: card.type,
        holo: 0,
        img: card.img
    }

    const selectedCard = itemDisp(inventory[itemId].name, inventory[itemId].price, inventory[itemId].img);
    drawItem(selectedCard, raritySwitch(inventory[itemId].rarity), itemId, inventory[itemId].holo);

    itemCounter ++;
    value += inventory[itemId].price;
    updateInv();
    updateValue();
}

function openCard(rarity, cardNum, reverse) {
    const cardSel = "card"+cardNum;
    // console.log(cardTot);
    let card = cards[packSel][rarity][cardSel];
    let itemId = "item"+itemCounter;

    if (reverse) {
        inventory[itemId] = {
            id: itemId,
            name: card.name,
            num: card.num,
            price: card.revPrice,
            rarity: card.rarity,
            type: card.type,
            holo: 2,
            img: card.img
        }
        let temp = inventory[itemId].name;
        const array = temp.split("|");
        temp = array[0] + holoCheck(inventory[itemId].holo) + " |" + array[1];
        inventory[itemId].name = temp;
    }else {
        inventory[itemId] = {
            id: itemId,
            name: card.name,
            num: card.num,
            price: card.price,
            rarity: card.rarity,
            type: card.type,
            holo: card.holo,
            img: card.img
        }
    }

    // console.log(inventory);
    const selectedCard = itemDisp(inventory[itemId].name, inventory[itemId].price, inventory[itemId].img);
    drawItem(selectedCard, raritySwitch(inventory[itemId].rarity), itemId, inventory[itemId].holo);

    itemCounter ++;
    value += inventory[itemId].price;
    updateInv();
    updateValue();
}

function randCard(rarity, cardPulls) {
    const min = 1;
    const max = ObjectLength(cards[packSel][rarity]);
    selectedCards = [];
    while (selectedCards.length < cardPulls) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(selectedCards.includes(random))
            while (selectedCards.includes(random)) {
                random = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        selectedCards.push(random);
    }
}

function selectReverseRarity() {
    const randNum = Math.random();
    if (randNum >= 0.5) {
        // console.log("common")
        return "common";
    }else if (randNum >= 0.2) {
        // console.log("uncommon")
        return "uncommon";
    }else if (randNum >= 0.05) {
        // console.log("rare")
        return "rare";
    }else {
        // console.log("holoRare")
        return "holoRare";
    }
}

function accept () {
    wallet += moneyPerClick;
    totalMoneyAccepted += moneyPerClick;
    updateWallet();
    updateStats();
}

function randReverse() {
    const randNum = Math.random();
    if (ObjectLength(cards[packSel].reverseSecret) === 0){
        const tempRarity = selectReverseRarity();
        randCard(tempRarity, 1)
        openCard(tempRarity, selectedCards[0], true);
        totalReversePulled ++;
    }else {
        if (randNum >= 0.3){
            // normal reverse
            const tempRarity = selectReverseRarity();
            randCard(tempRarity, 1)
            openCard(tempRarity, selectedCards[0], true);
            totalReversePulled ++;
        }else{
            // secret reverse
            randCard("reverseSecret", 1)
            openCard("reverseSecret", selectedCards[0]);
            totalReverseSecretsPulled ++;
        }
    }
}

function randRare() {
    const randNum = Math.random();
    if (randNum >= 0.6){
        // normal rare
        randCard("rare", 1)
        openCard("rare", selectedCards[0]);
        totalRaresPulled ++;
    }else if (randNum >= 0.2){
        // holo rare
        randCard("holoRare", 1)
        openCard("holoRare", selectedCards[0]);
        totalHoloRaresPulled ++;
    }else if (randNum >= 0.01){
        // ultra rare
        randCard("ultraRare", 1)
        openCard("ultraRare", selectedCards[0]);
        totalUltraRaresPulled ++;
    }else{
        // secret rare
        randCard("secretRare", 1)
        openCard("secretRare", selectedCards[0]);
        totalSecretRaresPulled ++;
    }
}

function drawPack() {
    const min = 1;
    const max = packs[packSel].imgNum;
    if (max != 1) {
        if (lastRand === undefined) {
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else {
            random = Math.floor(Math.random() * (max - min    )) + min;
            if (random >= lastRand) random += 1;
        }
        lastRand = random;
        random = random+".png";
    }else {
        random = 1+".png";
    }

    document.getElementById("packDisplayImage").src = packs[packSel].img+random;
    document.getElementById("packName").innerHTML = packs[packSel].name;
    document.getElementById("packPrice").innerHTML = "Price: $"+packs[packSel].price.toFixed(2);
}

function itemDisp(name, price, img) {
    const temp = [];
    temp.push(name, price, img);
    return temp;
}

function drawItem(array, rarity, itemId, holo) {
    // console.log(array)
    const name = array[0];
    const price = "$" + array[1].toFixed(2);
    const img = array[2];
    $(".inventoryItems").append('<div class="inventoryItem ' + rarity + revCheck(holo) +'" id="'+ itemId +'" title="' + name + '"><div class="cardPrice">' + price + '</div> <img src=' + img + '> </div>');
    if (clickSell) document.getElementById(itemId).setAttribute("onclick", "clickItem('"+itemId+"')");
    inv += 1;
}

function drawInventory() {
    for (let x in inventory) {
        const selectedCard = itemDisp(inventory[x].name, inventory[x].price, inventory[x].img);
        // console.log(selectedCard)
        drawItem(selectedCard, raritySwitch(inventory[x].rarity), inventory[x].id, inventory[x].holo);
    }
}

function resetInventory() {
    $('.inventoryItems').html("");
    inv = 0;
    drawInventory()
}

function raritySwitch(rarity){
    switch(rarity){
        case 0:
            return "energy";
        case 1:
            return "common";
        case 2:
            return "uncommon";
        case 3:
            return "rare";
        case 4:
            return "holoRare";
        case 5:
            return "ultraRare";
        case 6:
            return "reverseSecret";
        case 7:
            return "secretRare";
    }
}

function clickItem(itemId) {
    const div = document.getElementById(itemId);
    if (cntrlIsPressed) {
        if (div.classList.contains('locked')) {
            div.classList.remove('locked');
        } else {
            div.classList.add('locked');
        }
    }else {
        sellItem(itemId)
    }
}

function sellItem(itemId) {
    const div = document.getElementById(itemId);
    if (div.classList.contains('locked')) {
        return
    }else {
        div.parentNode.removeChild(div);
        inv -= 1;
        wallet += inventory[itemId].price;
        value -= inventory[itemId].price;
        delete inventory[itemId];
        totalCardsSold ++;

        updateInv()
        updateWallet();
        updateValue();
        updateStats();
    }
}

function selectPack(selection) {
    packSel = selection;
    let packDel = [];
    drawPack();
    for (let x in Object.keys(packs)) {
        packDel.push(Object.keys(packs)[x]);
        const element = document.getElementById(packDel[x] + "Opt");
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    }
    document.getElementById("pack").setAttribute("onclick", "openPack()");
    document.getElementById(packSel + "Opt").classList.add("active");

    saveGameState();
}

function holoCheck(check) {
    if (check === 2) {
        return "(Reverse)";
    }else if (check === 3) {
        return " (Holo)";
    }else if (check === 4) {
        return " (Secret)";
    }else {
        return "";
    }
}

function revCheck(check) {
    if (check === 1) {
        return " ultraHolo";
    }else if (check === 2) {
        return " reverseHolo";
    }else if (check === 3) {
        return " holo";
    }else if (check === 4) {
        return " secretHolo";
    }else {
        return "";
    }
}

function upgradeInventory() {
    wallet -= inventoryUpgPrice;
    if (wallet >= 0) {
        totalMoneySpent += inventoryUpgPrice;
        maxInv ++;
        inventoryUpgrades ++;
        inventoryUpgPrice *= 1.05;
    }else {
        wallet += inventoryUpgPrice;
    }
    updateInv();
    updateWallet();
    updateShopItems();
    updateStats();
    saveGameState();
}

function upgradeClick() {
    wallet -= clickUpgPrice;
    if (wallet >= 0) {
        totalMoneySpent += clickUpgPrice;
        moneyPerClick += 0.01;
        clickUpgrades ++;
        clickUpgPrice *= 1.05;
    }else {
        wallet += clickUpgPrice;
    }
    updateInv();
    updateWallet();
    updateShopItems();
    updateStats();
    saveGameState();
}

function ObjectLength(object) {
    let length = 0;
    for(const key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
}

function zeroFill(val) {
    while ((val+"").length < 3) {
        val = "0" + val;
    }
    return val;
}

function updateInv() {
    document.getElementById("inv").innerHTML = "<span class=\"infoName\">Inventory Space: </span>"+inv+"/"+maxInv;
}

function updateWallet() {
    document.getElementById("wallet").innerHTML = "<span class=\"infoName\">Wallet:</span> $"+wallet.toFixed(2);
}

function updateValue() {
    value = Math.abs(value);
    document.getElementById("value").innerHTML = "Value: $"+value.toFixed(2);
}

function updateStats() {
    document.getElementById("totalMoneyAccepted").innerHTML = "$"+totalMoneyAccepted.toFixed(2);
    document.getElementById("totalMoneySpent").innerHTML = "$"+totalMoneySpent.toFixed(2);
    document.getElementById("totalCardsSold").innerHTML = totalCardsSold;
    document.getElementById("totalPacksOpened").innerHTML = totalPacksOpened;
    document.getElementById("totalEnergyPulled").innerHTML = totalEnergyPulled;
    document.getElementById("totalCommonsPulled").innerHTML = totalCommonsPulled;
    document.getElementById("totalUncommonsPulled").innerHTML = totalUncommonsPulled;
    document.getElementById("totalRaresPulled").innerHTML = totalRaresPulled;
    document.getElementById("totalReversePulled").innerHTML = totalReversePulled;
    document.getElementById("totalHoloRaresPulled").innerHTML = totalHoloRaresPulled;
    document.getElementById("totalUltraRaresPulled").innerHTML = totalUltraRaresPulled;
    document.getElementById("totalReverseSecretsPulled").innerHTML = totalReverseSecretsPulled;
    document.getElementById("totalSecretRaresPulled").innerHTML = totalSecretRaresPulled;
}

function updatePack(packId) {
    document.getElementById(packId).innerHTML = "<div class=\"imageBorder\">\n" +
        "                                    <img src=\""+packs[packId].img+1+".png\" alt=\""+packs[packId].name+"\">\n" +
        "                                </div>\n" +
        "                                <div class=\"title\">"+packs[packId].name+"</div>\n" +
        "                                <div class=\"desc\">"+packs[packId].desc+"</div>\n" +
        "                                <div class=\"price\">Pack Price: $"+packs[packId].price.toFixed(2)+"</div>\n" +
        "                                <div class=\"amount\">Collected: "+collection[packId].collectedTotal+"/"+packs[packId].cards+"</div>";
}

function updateShopItems() {
    document.getElementById("shopInvUpgPrc").innerHTML = "Price: $"+inventoryUpgPrice.toFixed(2);
    document.getElementById("shopInvUpgAmt").innerHTML = "Amount: "+inventoryUpgrades;
    document.getElementById("shopClkUpgPrc").innerHTML = "Price: $"+clickUpgPrice.toFixed(2);
    document.getElementById("shopClkUpgAmt").innerHTML = "Amount: "+clickUpgrades;
}

function inventoryClear() {
    inventory = {};
    $('.inventoryItems').html("");
}

function saveGameState() {
    const string = {
        // "inv": inv,
        "maxInv": maxInv,
        "wallet": wallet,
        "value": value,
        "moneyPerClick": moneyPerClick,
        "packSel": packSel,
        "rarity": rarity,
        "itemCounter": itemCounter,
        "inventory": inventory,
        "inventoryUpgPrice": inventoryUpgPrice,
        "inventoryUpgrades": inventoryUpgrades,
        "clickUpgPrice": clickUpgPrice,
        "clickUpgrades": clickUpgrades,

        "popup": popup,
        "clickSell": clickSell,

        "totalMoneyAccepted": totalMoneyAccepted,
        "totalMoneySpent": totalMoneySpent,
        "totalCardsSold": totalCardsSold,
        "totalPacksOpened": totalPacksOpened,
        "totalEnergyPulled": totalEnergyPulled,
        "totalCommonsPulled": totalCommonsPulled,
        "totalUncommonsPulled": totalUncommonsPulled,
        "totalReversePulled": totalReversePulled,
        "totalReverseSecretsPulled": totalReverseSecretsPulled,
        "totalRaresPulled": totalRaresPulled,
        "totalHoloRaresPulled": totalHoloRaresPulled,
        "totalUltraRaresPulled": totalUltraRaresPulled,
        "totalSecretRaresPulled": totalSecretRaresPulled
    };

    localStorage.setItem("savegame", JSON.stringify(string));
    console.log("Game Saved.");

    document.querySelector('.saveIndicator').classList.add('open');
    setTimeout(function (){
        document.querySelector('.saveIndicator').classList.remove('open');
    },3000);
}

function loadGameState() {
    if (localStorage.getItem("savegame") !== null) {
        inventoryClear();
        const saveGame = JSON.parse(localStorage.getItem("savegame"));
        //console.log(saveGame);

        // inv = saveGame["inv"];
        maxInv = saveGame["maxInv"];
        wallet = saveGame["wallet"];
        value = saveGame["value"];
        moneyPerClick = saveGame["moneyPerClick"];
        packSel = saveGame["packSel"];
        rarity = saveGame["rarity"];
        itemCounter = saveGame["itemCounter"];
        inventory = saveGame["inventory"];
        inventoryUpgPrice = saveGame["inventoryUpgPrice"];
        inventoryUpgrades = saveGame["inventoryUpgrades"];
        clickUpgPrice = saveGame["clickUpgPrice"];
        clickUpgrades = saveGame["clickUpgrades"];

        popup = saveGame["popup"];
        clickSell = saveGame["clickSell"];

        totalMoneyAccepted = saveGame["totalMoneyAccepted"];
        totalMoneySpent = saveGame["totalMoneySpent"];
        totalCardsSold = saveGame["totalCardsSold"];
        totalPacksOpened = saveGame["totalPacksOpened"];
        totalEnergyPulled = saveGame["totalEnergyPulled"];
        totalCommonsPulled = saveGame["totalCommonsPulled"];
        totalUncommonsPulled = saveGame["totalUncommonsPulled"];
        totalReversePulled = saveGame["totalReversePulled"];
        totalReverseSecretsPulled = saveGame["totalReverseSecretsPulled"];
        totalRaresPulled = saveGame["totalRaresPulled"];
        totalHoloRaresPulled = saveGame["totalHoloRaresPulled"];
        totalUltraRaresPulled = saveGame["totalUltraRaresPulled"];
        totalSecretRaresPulled = saveGame["totalSecretRaresPulled"];

        drawInventory();

        console.log("Game Save found. Successfully loaded.");
    } else {
        console.log("No save game detected.")
    }
}

function clearGameState() {
    localStorage.removeItem("savegame");
    console.log("Game save deleted!");
    location.reload();
}

setInterval(saveGameState, 30000);