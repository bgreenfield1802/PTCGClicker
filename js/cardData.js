function zeroFill(val) {
    while ((val+"").length < 3) {
        val = "0" + val;
    }
    return val;
}

const cards = {
    // ENERGY
    energy: {
        grass: {
            name: "Grass Energy",
            price: 0.01, type: "grass", num: -9,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_26.png"}
        },
        fire: {
            name: "Fire Energy",
            price: 0.01, type: "fire", num: -8,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_27.png"}
        },
        water: {
            name: "Water Energy",
            price: 0.01, type: "water", num: -7,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_28.png"}
        },
        electric: {
            name: "Electric Energy",
            price: 0.01, type: "electric", num: -6,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_29.png"}
        },
        psychic: {
            name: "Psychic Energy",
            price: 0.01, type: "psychic",  num: -5,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_30.png"}
        },
        fighting: {
            name: "Fighting Energy",
            price: 0.01, type: "fighting", num: -4,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_31.png"}
        },
        dark: {
            name: "Dark Energy",
            price: 0.01, type: "dark", num: -3,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_32.png"}
        },
        metal: {
            name: "Metal Energy",
            price: 0.01, type: "metal", num: -2,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_33.png"}
        },
        fairy: {
            name: "Fairy Energy",
            price: 0.01, type: "fairy", num: -1,
            get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/NRG/NRG_EN_34.png"}
        }
    },
    // SWORD & SHIELD PROMOS
    swshPromo: {
        promo: {
            card1: {
                get name() {return "Grooky"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.cards},
                price: 2.58, num: 1, rarity: 0, type: "grass", holo: 3,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card2: {
                get name() {return "Scorbunny"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 3.16, num: 2, rarity: 0, type: "fire", holo: 3,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card3: {
                get name() {return "Sobble"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 2.79, num: 3, rarity: 0, type: "water", holo: 3,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            }
        }
    },
    // SWORD & SHIELD BASE SET
    swsh1: {
        // ======================== COMMON ======================== //
        common: {
            card1: {
                get name() {return "Roselia"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 2, rarity: 1, type: "grass", holo: 0, revPrice: 0.23,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Roselia"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 3, rarity: 1, type: "grass", holo: 0, revPrice: 0.21,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Cottonee"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 5, rarity: 1, type: "grass", holo: 0, revPrice: 0.18,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Maractus"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 7, rarity: 1, type: "grass", holo: 0, revPrice: 0.23,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Grookey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 10, rarity: 1, type: "grass", holo: 0, revPrice: 0.19,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Grookey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 11, rarity: 1, type: "grass", holo: 0, revPrice: 0.25,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Blipbug"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 16, rarity: 1, type: "grass", holo: 0, revPrice: 0.15,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Blipbug"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 17, rarity: 1, type: "grass", holo: 0, revPrice: 0.20,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Gossifleur"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 20, rarity: 1, type: "grass", holo: 0, revPrice: 0.28,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Vulpix"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 22, rarity: 1, type: "fire", holo: 0, revPrice: 0.21,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Salandit"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 27, rarity: 1, type: "fire", holo: 0, revPrice: 0.24,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Scorbunny"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.09, num: 30, rarity: 1, type: "fire", holo: 0, revPrice: 0.27,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Scorbunny"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 31, rarity: 1, type: "fire", holo: 0, revPrice: 0.24,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Sizzlipede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 37, rarity: 1, type: "fire", holo: 0, revPrice: 0.20,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Sizzlipede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 38, rarity: 1, type: "fire", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Shellder"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 40, rarity: 1, type: "water", holo: 0, revPrice: 0.21,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Krabby"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 42, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Krabby"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 43, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Goldeen"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 45, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Goldeen"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 46, rarity: 1, type: "water", holo: 0, revPrice: 0.24,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Sobble"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 54, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Sobble"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 55, rarity: 1, type: "water", holo: 0, revPrice: 0.31,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Chewtle"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 60, rarity: 1, type: "water", holo: 0, revPrice: 0.21,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Snom"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 63, rarity: 1, type: "water", holo: 0, revPrice: 0.30,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Pikachu"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 65, rarity: 1, type: "electric", holo: 0, revPrice: 0.42,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Chinchou"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 67, rarity: 1, type: "electric", holo: 0, revPrice: 0.21,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Chinchou"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 68, rarity: 1, type: "electric", holo: 0, revPrice: 0.18,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Joltik"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 70, rarity: 1, type: "electric", holo: 0, revPrice: 0.19,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Yamper"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 73, rarity: 1, type: "electric", holo: 0, revPrice: 0.25,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Yamper"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 74, rarity: 1, type: "electric", holo: 0, revPrice: 0.25,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Pincurchin"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 77, rarity: 1, type: "electric", holo: 0, revPrice: 0.20,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Galarian Ponyta"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 81, rarity: 1, type: "psychic", holo: 0, revPrice: 0.32,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card33: {
                get name() {return "Gastly"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 83, rarity: 1, type: "psychic", holo: 0, revPrice: 0.23,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card34: {
                get name() {return "Munna"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 87, rarity: 1, type: "psychic", holo: 0, revPrice: 0.18,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card35: {
                get name() {return "Sinistea"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 89, rarity: 1, type: "psychic", holo: 0, revPrice: 0.24,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card36: {
                get name() {return "Diglett"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.03, num: 92, rarity: 1, type: "fighting", holo: 0, revPrice: 0.19,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card37: {
                get name() {return "Rhyhorn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 96, rarity: 1, type: "fighting", holo: 0, revPrice: 0.19,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card38: {
                get name() {return "Rhyhorn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 97, rarity: 1, type: "fighting", holo: 0, revPrice: 0.24,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card39: {
                get name() {return "Baltoy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 101, rarity: 1, type: "fighting", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card40: {
                get name() {return "Baltoy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 102, rarity: 1, type: "fighting", holo: 0, revPrice: 0.16,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card41: {
                get name() {return "Mudbray"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 105, rarity: 1, type: "fighting", holo: 0, revPrice: 0.20,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card42: {
                get name() {return "Silicobra"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 107, rarity: 1, type: "fighting", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card43: {
                get name() {return "Silicobra"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 108, rarity: 1, type: "fighting", holo: 0, revPrice: 0.19,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card44: {
                get name() {return "Clobbopus"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 111, rarity: 1, type: "fighting", holo: 0, revPrice: 0.15,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card45: {
                get name() {return "Clobbopus"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 112, rarity: 1, type: "fighting", holo: 0, revPrice: 0.18,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card46: {
                get name() {return "Galarian Zigzagoon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 117, rarity: 1, type: "dark", holo: 0, revPrice: 0.31,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card47: {
                get name() {return "Skorupi"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.09, num: 121, rarity: 1, type: "dark", holo: 0, revPrice: 0.16,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card48: {
                get name() {return "Croagunk"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 123, rarity: 1, type: "dark", holo: 0, revPrice: 0.30,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card49: {
                get name() {return "Nickit"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 125, rarity: 1, type: "dark", holo: 0, revPrice: 0.20,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card50: {
                get name() {return "Galarian Meowth"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 127, rarity: 1, type: "metal", holo: 0, revPrice: 0.20,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card51: {
                get name() {return "Mawile"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 129, rarity: 1, type: "metal", holo: 0, revPrice: 0.20,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card52: {
                get name() {return "Ferroseed"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 130, rarity: 1, type: "metal", holo: 0, revPrice: 0.17,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card53: {
                get name() {return "Pawniard"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.03, num: 133, rarity: 1, type: "metal", holo: 0, revPrice: 0.16,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card54: {
                get name() {return "Cufant"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.04, num: 136, rarity: 1, type: "metal", holo: 0, revPrice: 0.21,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card55: {
                get name() {return "Hoothoot"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 143, rarity: 1, type: "colorless", holo: 0, revPrice: 0.18,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card56: {
                get name() {return "Minccino"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 145, rarity: 1, type: "colorless", holo: 0, revPrice: 0.54,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card57: {
                get name() {return "Minccino"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 146, rarity: 1, type: "colorless", holo: 0, revPrice: 0.26,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card58: {
                get name() {return "Rookidee"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 150, rarity: 1, type: "colorless", holo: 0, revPrice: 0.19,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card59: {
                get name() {return "Wooloo"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 152, rarity: 1, type: "colorless", holo: 0, revPrice: 0.23,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card60: {
                get name() {return "Wooloo"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 153, rarity: 1, type: "colorless", holo: 0, revPrice: 0.23,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== UNCOMMON ======================== //
        uncommon: {
            card1: {
                get name() {return "Thwackey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 12, rarity: 2, type: "grass", holo: 0, revPrice: 0.57,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Thwackey"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 13, rarity: 2, type: "grass", holo: 0, revPrice: 0.49,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Dottler"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 18, rarity: 2, type: "grass", holo: 0, revPrice: 0.43,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Eldegoss"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 21, rarity: 2, type: "grass", holo: 0, revPrice: 0.43,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Heatmor"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 26, rarity: 2, type: "fire", holo: 0, revPrice: 0.30,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Salazzle"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 28, rarity: 2, type: "fire", holo: 0, revPrice: 0.34,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Raboot"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 32, rarity: 2, type: "fire", holo: 0, revPrice: 1.25,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Raboot"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 33, rarity: 2, type: "fire", holo: 0,
                infoLink: "",
                revPrice: 0.48,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Kingler"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 44, rarity: 2, type: "water", holo: 0, revPrice: 0.45,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Seaking"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 47, rarity: 2, type: "water", holo: 0, revPrice: 0.47,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Qwilfish"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 51, rarity: 2, type: "water", holo: 0,
                infoLink: "",
                revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Mantine"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 52, rarity: 2, type: "water", holo: 0, revPrice: 0.37,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Drizzile"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 56, rarity: 2, type: "water", holo: 0, revPrice: 0.55,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Drizzile"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 57, rarity: 2, type: "water", holo: 0, revPrice: 0.41,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Galvantula"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 71, rarity: 2, type: "electric", holo: 0, revPrice: 0.27,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Haunter"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 84, rarity: 2, type: "psychic", holo: 0, revPrice: 0.44,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Dugtrio"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 93, rarity: 2, type: "fighting", holo: 0, revPrice: 0.31,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Hitmonlee"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 94, rarity: 2, type: "fighting", holo: 0, revPrice: 0.50,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Hitmonchan"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 95, rarity: 2, type: "fighting", holo: 0, revPrice: 0.46,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Rhydon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 98, rarity: 2, type: "fighting", holo: 0, revPrice: 0.42,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Sudowoodo"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 100, rarity: 2, type: "fighting", holo: 0, revPrice: 0.43,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Galarian Linoone"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.12, num: 118, rarity: 2, type: "dark", holo: 0, revPrice: 0.51,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Ferrothorn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 131, rarity: 2, type: "metal", holo: 0, revPrice: 0.29,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Galarian Stunfisk"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.07, num: 132, rarity: 2, type: "metal", holo: 0, revPrice: 0.38,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Bisharp"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 134, rarity: 2, type: "metal", holo: 0, revPrice: 0.30,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Corvisquire"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 151, rarity: 2, type: "colorless", holo: 0, revPrice: 0.36,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Dubwool"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 154, rarity: 2, type: "colorless", holo: 0, revPrice: 0.40,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Air Balloon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.36, num: 156, rarity: 2, type: "tool", holo: 0, revPrice: 1.79,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Bede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 157, rarity: 2, type: "supporter", holo: 0, revPrice: 0.34,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Big Charm"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 158, rarity: 2, type: "tool", holo: 0, revPrice: 0.51,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Crushing Hammer"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.29, num: 159, rarity: 2, type: "item", holo: 0, revPrice: 0.79,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Energy Retrieval"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.27, num: 160, rarity: 2, type: "item", holo: 0, revPrice: 0.40,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card33: {
                get name() {return "Energy Search"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.61, num: 161, rarity: 2, type: "item", holo: 0, revPrice: 1.24,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card34: {
                get name() {return "Energy Switch"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.28, num: 162, rarity: 2, type: "item", holo: 0, revPrice: 0.74,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card35: {
                get name() {return "Evolution Incense"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.03, num: 163, rarity: 2, type: "item", holo: 0, revPrice: 5.36,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card36: {
                get name() {return "Great Ball"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 164, rarity: 2, type: "item", holo: 0, revPrice: 1.10,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card37: {
                get name() {return "Hop"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 165, rarity: 2, type: "supporter", holo: 0, revPrice: 0.31,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card38: {
                get name() {return "Hyper Potion"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 166, rarity: 2, type: "item", holo: 0, revPrice: 0.45,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card39: {
                get name() {return "Lucky Egg"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 167, rarity: 2, type: "tool", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card40: {
                get name() {return "Lum Berry"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.09, num: 168, rarity: 2, type: "tool", holo: 0, revPrice: 0.25,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card41: {
                get name() {return "Metal Saucer"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 170, rarity: 2, type: "item", holo: 0, revPrice: 0.24,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card42: {
                get name() {return "Ordinary Rod"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 171, rarity: 2, type: "item", holo: 0, revPrice: 0.33,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card43: {
                get name() {return "Pal Pad"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.26, num: 172, rarity: 2, type: "item", holo: 0, revPrice: 0.35,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card44: {
                get name() {return "Poke Kid"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 173, rarity: 2, type: "supporter", holo: 0, revPrice: 0.25,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card45: {
                get name() {return "Pokegear 3.0"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 174, rarity: 2, type: "item", holo: 0, revPrice: 0.37,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card46: {
                get name() {return "Pokemon Catcher"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 175, rarity: 2, type: "item", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card47: {
                get name() {return "Pokemon Center Lady"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 176, rarity: 2, type: "supporter", holo: 0, revPrice: 0.23,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card48: {
                get name() {return "Potion"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 177, rarity: 2, type: "item", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card49: {
                get name() {return "Quick Ball"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.47, num: 179, rarity: 2, type: "item", holo: 0, revPrice: 1.08,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card50: {
                get name() {return "Rare Candy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 180, rarity: 2, type: "item", holo: 0, revPrice: 0.46,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card51: {
                get name() {return "Rotom Bike"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 181, rarity: 2, type: "item", holo: 0, revPrice: 0.18,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card52: {
                get name() {return "Sitrus Berry"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 182, rarity: 2, type: "tool", holo: 0, revPrice: 0.16,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card53: {
                get name() {return "Switch"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.23, num: 183, rarity: 2, type: "item", holo: 0, revPrice: 0.55,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card54: {
                get name() {return "Team Yell Grunt"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 184, rarity: 2, type: "supporter", holo: 0, revPrice: 0.22,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card55: {
                get name() {return "Vitality Band"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 185, rarity: 2, type: "tool", holo: 0, revPrice: 0.25,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card56: {
                get name() {return "Aurora Energy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 186, rarity: 2, type: "special energy", holo: 0, revPrice: 0.30,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== RARE ======================== //
        rare: {
            card1: {
                get name() {return "Roserade"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 4, rarity: 3, type: "grass", holo: 0, revPrice: 0.43,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Whimsicott"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 6, rarity: 3, type: "grass", holo: 0, revPrice: 0.37,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Durant"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 8, rarity: 3, type: "grass", holo: 0, revPrice: 0.38,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Rillaboom"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.38, num: 15, rarity: 3, type: "grass", holo: 0, revPrice: 0.47,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Orbeetle"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 19, rarity: 3, type: "grass", holo: 0, revPrice: 0.38,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Ninetales"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 23, rarity: 3, type: "fire", holo: 0, revPrice: 0.59,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Turtonator"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 29, rarity: 3, type: "fire", holo: 0, revPrice: 0.40,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Cinderace"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.27, num: 36, rarity: 3, type: "fire", holo: 0, revPrice: 0.74,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Centiskorch"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 39, rarity: 3, type: "fire", holo: 0, revPrice: 0.35,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Cloyster"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 41, rarity: 3, type: "water", holo: 0, revPrice: 0.35,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Lapras"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 48, rarity: 3, type: "water", holo: 0, revPrice: 0.52,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Inteleon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.41, num: 59, rarity: 3, type: "water", holo: 0, revPrice: 0.48,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Drednaw"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 61, rarity: 3, type: "water", holo: 0, revPrice: 0.39,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Cramorant"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 62, rarity: 3, type: "water", holo: 0, revPrice: 0.42,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Raichu"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.25, num: 66, rarity: 3, type: "electric", holo: 0, revPrice: 0.61,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Lanturn"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 69, rarity: 3, type: "electric", holo: 0, revPrice: 0.38,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Morpeko"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 78, rarity: 3, type: "electric", holo: 0, revPrice: 0.52,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Galarian Rapidash"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.59, num: 82, rarity: 3, type: "psychic", holo: 0, revPrice: 0.85,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Musharna"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 88, rarity: 3, type: "psychic", holo: 0, revPrice: 0.31,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Polteageist"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 90, rarity: 3, type: "psychic", holo: 0, revPrice: 0.37,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Claydol"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 103, rarity: 3, type: "fighting", holo: 0, revPrice: 0.40,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Mudsdale"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.17, num: 106, rarity: 3, type: "fighting", holo: 0, revPrice: 0.40,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Sandaconda"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.21, num: 109, rarity: 3, type: "fighting", holo: 0, revPrice: 0.35,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Grapploct"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 113, rarity: 3, type: "fighting", holo: 0, revPrice: 0.43,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Stonjourner"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 114, rarity: 3, type: "fighting", holo: 0, revPrice: 0.34,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Drapion"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.19, num: 122, rarity: 3, type: "dark", holo: 0, revPrice: 0.31,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Thievul"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 126, rarity: 3, type: "dark", holo: 0, revPrice: 0.38,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Corviknight"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 135, rarity: 3, type: "metal", holo: 0, revPrice: 0.50,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Snorlax"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 140, rarity: 3, type: "colorless", holo: 0, revPrice: 0.51,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Noctowl"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 144, rarity: 3, type: "colorless", holo: 0, revPrice: 0.37,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Cinccino"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.06, num: 147, rarity: 3, type: "colorless", holo: 0, revPrice: 1.66,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Drampa"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 149, rarity: 3, type: "colorless", holo: 0, revPrice: 0.33,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== HOLO RARE ======================== //
        holoRare: {
            card1: {
                get name() {return "Rillaboom"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.29, num: 14, rarity: 4, type: "grass", holo: 3, revPrice: 0.29,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Cinderace"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.48, num: 34, rarity: 4, type: "fire", holo: 3, revPrice: 0.59,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Cinderace"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.43, num: 35, rarity: 4, type: "fire", holo: 3, revPrice: 0.44,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Inteleon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.19, num: 58, rarity: 4, type: "water", holo: 3, revPrice: 2.43,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Frosmoth"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.45, num: 64, rarity: 4, type: "water", holo: 3, revPrice: 0.51,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Boltund"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.33, num: 75, rarity: 4, type: "electric", holo: 3, revPrice: 0.37,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Boltund"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.32, num: 76, rarity: 4, type: "electric", holo: 3, revPrice: 0.39,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Gengar"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.92, num: 85, rarity: 4, type: "psychic", holo: 3, revPrice: 0.95,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Rhyperior"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.39, num: 99, rarity: 4, type: "fighting", holo: 3, revPrice: 0.32,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Sandaconda"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.26, num: 110, rarity: 4, type: "fighting", holo: 3, revPrice: 0.31,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Galarian Obstagoon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.37, num: 119, rarity: 4, type: "dark", holo: 3, revPrice: 0.45,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Toxicroak"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.69, num: 124, rarity: 4, type: "dark", holo: 3, revPrice: 0.73,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Galarian Perrserker"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.40, num: 128, rarity: 4, type: "metal", holo: 3, revPrice: 0.50,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Copperajah"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.37, num: 137, rarity: 4, type: "metal", holo: 3, revPrice: 0.43,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Oranguru"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.83, num: 148, rarity: 4, type: "colorless", holo: 3, revPrice: 1.26,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Marnie"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.75, num: 169, rarity: 4, type: "supporter", holo: 3, revPrice: 2.60,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Professor's Research"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.33, num: 178, rarity: 4, type: "supporter", holo: 3, revPrice: 0.44,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== ULTRA RARE ======================== //
        ultraRare: {
            card1: {
                get name() {return "Celebi V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.00, num: 1, rarity: 5, type: "grass", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Dhelmise V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.92, num: 9, rarity: 5, type: "grass", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Torkoal V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.22, num: 24, rarity: 5, type: "fire", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Victini V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.28, num: 25, rarity: 5, type: "fire", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Lapras V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.93, num: 49, rarity: 5, type: "water", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Lapras VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.97, num: 50, rarity: 5, type: "water", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Keldeo V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.26, num: 53, rarity: 5, type: "water", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Tapu Koko V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.36, num: 72, rarity: 5, type: "electric", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Morpeko V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.02, num: 79, rarity: 5, type: "electric", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Morpeko VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.62, num: 80, rarity: 5, type: "electric", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Wobbuffet V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.11, num: 86, rarity: 5, type: "psychic", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Indeedee V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.03, num: 91, rarity: 5, type: "psychic", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Regirock V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.02, num: 104, rarity: 5, type: "fighting", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Stonjourner V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.14, num: 115, rarity: 5, type: "fighting", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Stonjourner VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.58, num: 116, rarity: 5, type: "fighting", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Sableye V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.37, num: 120, rarity: 5, type: "dark", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Zacian V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.38, num: 138, rarity: 5, type: "metal", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Zamazenta V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.58, num: 139, rarity: 5, type: "metal", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Snorlax V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.92, num: 141, rarity: 5, type: "colorless", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Snorlax VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 11.75, num: 142, rarity: 5, type: "colorless", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Cramorant V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.13, num: 155, rarity: 5, type: "colorless", holo: 1,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== FULL ART ======================== //
        fullArt: {
            card1: {
                get name() {return "Dhelmise V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.37, num: 187, rarity: 5, type: "grass", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Torkoal V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.88, num: 188, rarity: 5, type: "fire", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Lapras V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 4.36, num: 189, rarity: 5, type: "water", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Morpeko V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.58, num: 190, rarity: 5, type: "electric", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Wobbuffet V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.97, num: 191, rarity: 5, type: "psychic", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Indeedee V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.94, num: 192, rarity: 5, type: "psychic", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Stonjourner V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.75, num: 193, rarity: 5, type: "fighting", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Sableye V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 5.84, num: 194, rarity: 5, type: "dark", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Zacian V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 7.29, num: 195, rarity: 5, type: "metal", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Zamazenta V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 6.74, num: 196, rarity: 5, type: "metal", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Snorlax V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 8.43, num: 197, rarity: 5, type: "colorless", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Cramorant V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.58, num: 198, rarity: 5, type: "colorless", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Bede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.26, num: 199, rarity: 5, type: "supporter", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Marnie"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 41.78, num: 200, rarity: 5, type: "supporter", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Professor's Research"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 4.72, num: 201, rarity: 5, type: "supporter", holo: 5,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Team Yell Grunt"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.61, num: 202, rarity: 5, type: "supporter", holo: 5,
                infoLink: "",
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
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Morpeko VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 9.55, num: 204, rarity: 7, type: "electric", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Stonjourner VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 5.58, num: 205, rarity: 7, type: "fighting", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Snorlax VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 26.79, num: 206, rarity: 7, type: "colorless", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Bede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 4.87, num: 207, rarity: 7, type: "supporter", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Marnie"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 28.24, num: 208, rarity: 7, type: "supporter", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Professor's Research"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 6.29, num: 209, rarity: 7, type: "supporter", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Team Yell Grunt"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.97, num: 210, rarity: 7, type: "supporter", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Zacian V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 26.22, num: 211, rarity: 7, type: "metal", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Zamazenta V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 15.99, num: 212, rarity: 7, type: "metal", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Air Balloon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 12.84, num: 213, rarity: 7, type: "tool", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Metal Saucer"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 5.31, num: 214, rarity: 7, type: "item", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Ordinary Rod"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 8.47, num: 215, rarity: 7, type: "item", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Quick Ball"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 38.09, num: 216, rarity: 7, type: "item", holo: 4,
                infoLink: "",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        }
    },
    // SWORD & SHIELD REBEL CLASH
    swsh2: {
        // ======================== COMMON ======================== //
        common: {
            card1: {
                get name() {return "Caterpie"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.20, num: 1, rarity: 1, type: "grass", holo: 0, revPrice: 0.33,
                infoLink: "https://www.tcgplayer.com/product/213071/pokemon-swsh02-rebel-clash-caterpie?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Scyther"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.14, num: 4, rarity: 1, type: "grass", holo: 0, revPrice: 0.29,
                infoLink: "https://www.tcgplayer.com/product/213074/pokemon-swsh02-rebel-clash-scyther?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Lotad"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 7, rarity: 1, type: "grass", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213077/pokemon-swsh02-rebel-clash-lotad?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Surskit"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 10, rarity: 1, type: "grass", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213080/pokemon-swsh02-rebel-clash-surskit?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Snover"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.03, num: 12, rarity: 1, type: "grass", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213082/pokemon-swsh02-rebel-clash-snover?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Phantump"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 14, rarity: 1, type: "grass", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213084/pokemon-swsh02-rebel-clash-phantump?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Grubbin"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 16, rarity: 1, type: "grass", holo: 0, revPrice: 0.23,
                infoLink: "https://www.tcgplayer.com/product/213086/pokemon-swsh02-rebel-clash-grubbin?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Applin"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 20, rarity: 1, type: "grass", holo: 0, revPrice: 0.17,
                infoLink: "https://www.tcgplayer.com/product/213093/pokemon-swsh02-rebel-clash-applin-20?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Applin"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.09, num: 21, rarity: 1, type: "grass", holo: 0, revPrice: 0.24,
                infoLink: "https://www.tcgplayer.com/product/213094/pokemon-swsh02-rebel-clash-applin-21?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Vulpix"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.10, num: 24, rarity: 1, type: "fire", holo: 0, revPrice: 0.30,
                infoLink: "https://www.tcgplayer.com/product/213099/pokemon-swsh02-rebel-clash-vulpix?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Growlithe"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.08, num: 27, rarity: 1, type: "fire", holo: 0, revPrice: 0.31,
                infoLink: "https://www.tcgplayer.com/product/213103/pokemon-swsh02-rebel-clash-growlithe?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Magmar"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 29, rarity: 1, type: "fire", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213105/pokemon-swsh02-rebel-clash-magmar?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Litwick"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 31, rarity: 1, type: "fire", holo: 0, revPrice: 0.23,
                infoLink: "https://www.tcgplayer.com/product/213107/pokemon-swsh02-rebel-clash-litwick?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Galarian Mr. Mime"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 37, rarity: 1, type: "water", holo: 0, revPrice: 0.19,
                infoLink: "https://www.tcgplayer.com/product/213115/pokemon-swsh02-rebel-clash-galarian-mr-mime?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Magikarp"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.14, num: 39, rarity: 1, type: "water", holo: 0, revPrice: 0.36,
                infoLink: "https://www.tcgplayer.com/product/213117/pokemon-swsh02-rebel-clash-magikarp?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Wingull"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 41, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213119/pokemon-swsh02-rebel-clash-wingull?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Tympole"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 44, rarity: 1, type: "water", holo: 0, revPrice: 0.19,
                infoLink: "https://www.tcgplayer.com/product/213123/pokemon-swsh02-rebel-clash-tympole?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Galarian Darumaka"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 47, rarity: 1, type: "water", holo: 0, revPrice: 0.18,
                infoLink: "https://www.tcgplayer.com/product/213126/pokemon-swsh02-rebel-clash-galarian-darumaka?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Arrokuda"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 52, rarity: 1, type: "water", holo: 0, revPrice: 0.23,
                infoLink: "https://www.tcgplayer.com/product/213133/pokemon-swsh02-rebel-clash-arrokuda?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Voltorb"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 56, rarity: 1, type: "electric", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213137/pokemon-swsh02-rebel-clash-voltorb?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Electabuzz"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 58, rarity: 1, type: "electric", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213139/pokemon-swsh02-rebel-clash-electabuzz?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Shinx"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 60, rarity: 1, type: "electric", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213141/pokemon-swsh02-rebel-clash-shinx?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Helioptile"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 63, rarity: 1, type: "electric", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213146/pokemon-swsh02-rebel-clash-helioptile?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Toxel"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 68, rarity: 1, type: "electric", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213152/pokemon-swsh02-rebel-clash-toxel?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Clefairy"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.10, num: 74, rarity: 1, type: "psychic", holo: 0, revPrice: 0.17,
                infoLink: "https://www.tcgplayer.com/product/213160/pokemon-swsh02-rebel-clash-clefairy?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Natu"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 76, rarity: 1, type: "psychic", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213162/pokemon-swsh02-rebel-clash-natu?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Galarian Corsola"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 78, rarity: 1, type: "psychic", holo: 0, revPrice: 0.25,
                infoLink: "https://www.tcgplayer.com/product/213164/pokemon-swsh02-rebel-clash-galarian-corsola?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Galarian Corsola"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 81, rarity: 1, type: "psychic", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213167/pokemon-swsh02-rebel-clash-sandygast?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Hatenna"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 83, rarity: 1, type: "psychic", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213169/pokemon-swsh02-rebel-clash-hatenna?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Milcery"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 86, rarity: 1, type: "psychic", holo: 0, revPrice: 0.24,
                infoLink: "https://www.tcgplayer.com/product/213172/pokemon-swsh02-rebel-clash-milcery?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Dreepy"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 89, rarity: 1, type: "psychic", holo: 0, revPrice: 0.29,
                infoLink: "https://www.tcgplayer.com/product/213175/pokemon-swsh02-rebel-clash-dreepy?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Galarian Farfetch'd"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 94, rarity: 1, type: "fighting", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213182/pokemon-swsh02-rebel-clash-galarian-farfetchd?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card33: {
                get name() {return "Nosepass"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 96, rarity: 1, type: "fighting", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213184/pokemon-swsh02-rebel-clash-nosepass?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card34: {
                get name() {return "Meditite"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.03, num: 97, rarity: 1, type: "fighting", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213185/pokemon-swsh02-rebel-clash-meditite?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card35: {
                get name() {return "Barboach"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 99, rarity: 1, type: "fighting", holo: 0, revPrice: 0.23,
                infoLink: "https://www.tcgplayer.com/product/213187/pokemon-swsh02-rebel-clash-barboach?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card36: {
                get name() {return "Galarian Yamask"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 101, rarity: 1, type: "fighting", holo: 0, revPrice: 0.18,
                infoLink: "https://www.tcgplayer.com/product/213189/pokemon-swsh02-rebel-clash-galarian-yamask?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card37: {
                get name() {return "Binacle"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 103, rarity: 1, type: "fighting", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213191/pokemon-swsh02-rebel-clash-binacle?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card38: {
                get name() {return "Rolycoly"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 105, rarity: 1, type: "fighting", holo: 0, revPrice: 0.18,
                infoLink: "https://www.tcgplayer.com/product/213193/pokemon-swsh02-rebel-clash-rolycoly?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card39: {
                get name() {return "Koffing"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 112, rarity: 1, type: "dark", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213204/pokemon-swsh02-rebel-clash-koffing?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card40: {
                get name() {return "Stunky"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 114, rarity: 1, type: "dark", holo: 0, revPrice: 0.19,
                infoLink: "https://www.tcgplayer.com/product/213206/pokemon-swsh02-rebel-clash-stunky?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card41: {
                get name() {return "Trubbish"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 117, rarity: 1, type: "dark", holo: 0, revPrice: 0.23,
                infoLink: "https://www.tcgplayer.com/product/213209/pokemon-swsh02-rebel-clash-trubbish?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card42: {
                get name() {return "Vullaby"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 119, rarity: 1, type: "dark", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213213/pokemon-swsh02-rebel-clash-vullaby?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card43: {
                get name() {return "Impidimp"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 123, rarity: 1, type: "dark", holo: 0, revPrice: 0.24,
                infoLink: "https://www.tcgplayer.com/product/213219/pokemon-swsh02-rebel-clash-impidimp?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card44: {
                get name() {return "Galarian Meowth"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.20, num: 126, rarity: 1, type: "metal", holo: 0, revPrice: 0.28,
                infoLink: "https://www.tcgplayer.com/product/213222/pokemon-swsh02-rebel-clash-galarian-meowth?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card45: {
                get name() {return "Bronzor"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 129, rarity: 1, type: "metal", holo: 0, revPrice: 0.24,
                infoLink: "https://www.tcgplayer.com/product/213225/pokemon-swsh02-rebel-clash-bronzor?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card46: {
                get name() {return "Honedge"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 133, rarity: 1, type: "metal", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213229/pokemon-swsh02-rebel-clash-honedge?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card47: {
                get name() {return "Pidove"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 143, rarity: 1, type: "colorless", holo: 0, revPrice: 0.18,
                infoLink: "https://www.tcgplayer.com/product/213243/pokemon-swsh02-rebel-clash-pidove?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card48: {
                get name() {return "Bunnelby"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 146, rarity: 1, type: "colorless", holo: 0, revPrice: 0.19,
                infoLink: "https://www.tcgplayer.com/product/213246/pokemon-swsh02-rebel-clash-bunnelby?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card49: {
                get name() {return "Stufful"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 149, rarity: 1, type: "colorless", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213249/pokemon-swsh02-rebel-clash-stufful?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card50: {
                get name() {return "Skwovet"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 151, rarity: 1, type: "colorless", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213251/pokemon-swsh02-rebel-clash-skwovet?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
        },
        // ======================== UNCOMMON ======================== //
        uncommon: {
            card1: {
                get name() {return "Metapod"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.22, num: 2, rarity: 2, type: "grass", holo: 0, revPrice: 0.53,
                infoLink: "https://www.tcgplayer.com/product/213072/pokemon-swsh02-rebel-clash-metapod?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Shuckle"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.09, num: 5, rarity: 2, type: "grass", holo: 0, revPrice: 0.24,
                infoLink: "https://www.tcgplayer.com/product/213075/pokemon-swsh02-rebel-clash-shuckle?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Heracross"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 6, rarity: 2, type: "grass", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213076/pokemon-swsh02-rebel-clash-heracross?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Lombre"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.15, num: 8, rarity: 2, type: "grass", holo: 0, revPrice: 0.42,
                infoLink: "https://www.tcgplayer.com/product/213078/pokemon-swsh02-rebel-clash-lombre?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Masquerain"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 11, rarity: 2, type: "grass", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213081/pokemon-swsh02-rebel-clash-masquerain?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Lampent"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.08, num: 32, rarity: 2, type: "fire", holo: 0, revPrice: 0.27,
                infoLink: "https://www.tcgplayer.com/product/213108/pokemon-swsh02-rebel-clash-lampent?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Heatmor"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 34, rarity: 2, type: "fire", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213110/pokemon-swsh02-rebel-clash-heatmor?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Pelipper"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 42, rarity: 2, type: "water", holo: 0, revPrice: 0.24,
                infoLink: "https://www.tcgplayer.com/product/213120/pokemon-swsh02-rebel-clash-pelipper?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Palpitoad"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 45, rarity: 2, type: "water", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213124/pokemon-swsh02-rebel-clash-palpitoad?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Electrode"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.08, num: 57, rarity: 2, type: "electric", holo: 0, revPrice: 0.15,
                infoLink: "https://www.tcgplayer.com/product/213138/pokemon-swsh02-rebel-clash-electrode?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Luxio"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 61, rarity: 2, type: "electric", holo: 0, revPrice: 0.26,
                infoLink: "https://www.tcgplayer.com/product/213142/pokemon-swsh02-rebel-clash-luxio?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Heliolisk"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 64, rarity: 2, type: "electric", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213147/pokemon-swsh02-rebel-clash-heliolisk?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Charjabug"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 65, rarity: 2, type: "electric", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213148/pokemon-swsh02-rebel-clash-charjabug?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Morpeko"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.15, num: 73, rarity: 2, type: "electric", holo: 0, revPrice: 0.26,
                infoLink: "https://www.tcgplayer.com/product/213159/pokemon-swsh02-rebel-clash-morpeko?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Xatu"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 77, rarity: 2, type: "psychic", holo: 0, revPrice: 0.25,
                infoLink: "https://www.tcgplayer.com/product/213163/pokemon-swsh02-rebel-clash-xatu?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Palossand"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 82, rarity: 2, type: "psychic", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213168/pokemon-swsh02-rebel-clash-palossand?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Hattrem"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 84, rarity: 2, type: "psychic", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213170/pokemon-swsh02-rebel-clash-hattrem?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Indeedee"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 88, rarity: 2, type: "psychic", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213174/pokemon-swsh02-rebel-clash-indeedee?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Drakloak"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.14, num: 90, rarity: 2, type: "psychic", holo: 0, revPrice: 0.27,
                infoLink: "https://www.tcgplayer.com/product/213176/pokemon-swsh02-rebel-clash-drakloak?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Medicham"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 98, rarity: 2, type: "fighting", holo: 0, revPrice: 0.17,
                infoLink: "https://www.tcgplayer.com/product/213186/pokemon-swsh02-rebel-clash-medicham?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Carkol"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 106, rarity: 2, type: "fighting", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213194/pokemon-swsh02-rebel-clash-carkol?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Falinks"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.18, num: 109, rarity: 2, type: "fighting", holo: 0, revPrice: 0.28,
                infoLink: "https://www.tcgplayer.com/product/213200/pokemon-swsh02-rebel-clash-falinks?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Skuntank"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.09, num: 115, rarity: 2, type: "dark", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213207/pokemon-swsh02-rebel-clash-skuntank?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Morgrem"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 124, rarity: 2, type: "dark", holo: 0, revPrice: 0.25,
                infoLink: "https://www.tcgplayer.com/product/213220/pokemon-swsh02-rebel-clash-morgrem?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Bronzong"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 130, rarity: 2, type: "metal", holo: 0, revPrice: 0.19,
                infoLink: "https://www.tcgplayer.com/product/213226/pokemon-swsh02-rebel-clash-bronzong?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Durant"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 132, rarity: 2, type: "metal", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213228/pokemon-swsh02-rebel-clash-durant?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Doublade"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 134, rarity: 2, type: "metal", holo: 0, revPrice: 0.23,
                infoLink: "https://www.tcgplayer.com/product/213230/pokemon-swsh02-rebel-clash-doublade?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Chatot"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 142, rarity: 2, type: "colorless", holo: 0, revPrice: 0.22,
                infoLink: "https://www.tcgplayer.com/product/213242/pokemon-swsh02-rebel-clash-chatot?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Tranquill"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 144, rarity: 2, type: "colorless", holo: 0, revPrice: 0.21,
                infoLink: "https://www.tcgplayer.com/product/213244/pokemon-swsh02-rebel-clash-tranquill?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Hawlucha"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 148, rarity: 2, type: "colorless", holo: 0, revPrice: 0.18,
                infoLink: "https://www.tcgplayer.com/product/213248/pokemon-swsh02-rebel-clash-hawlucha?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Bewear"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 150, rarity: 2, type: "colorless", holo: 0, revPrice: 0.27,
                infoLink: "https://www.tcgplayer.com/product/213250/pokemon-swsh02-rebel-clash-bewear?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Burning Scarf"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.15, num: 155, rarity: 2, type: "tool", holo: 0, revPrice: 0.20,
                infoLink: "https://www.tcgplayer.com/product/213258/pokemon-swsh02-rebel-clash-burning-scarf?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card33: {
                get name() {return "Capacious Bucket"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.68, num: 156, rarity: 2, type: "item", holo: 0, revPrice: 1.08,
                infoLink: "https://www.tcgplayer.com/product/213259/pokemon-swsh02-rebel-clash-capacious-bucket?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card34: {
                get name() {return "Cursed Shovel"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.23, num: 157, rarity: 2, type: "tool", holo: 0, revPrice: 0.38,
                infoLink: "https://www.tcgplayer.com/product/213260/pokemon-swsh02-rebel-clash-cursed-shovel?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card35: {
                get name() {return "Dan"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 158, rarity: 2, type: "supporter", holo: 0, revPrice: 0.18,
                infoLink: "https://www.tcgplayer.com/product/213261/pokemon-swsh02-rebel-clash-dan?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card36: {
                get name() {return "Full Heal"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 159, rarity: 2, type: "item", holo: 0, revPrice: 0.18,
                infoLink: "https://www.tcgplayer.com/product/213262/pokemon-swsh02-rebel-clash-full-heal?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card37: {
                get name() {return "Galar Mine"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.95, num: 160, rarity: 2, type: "stadium", holo: 0, revPrice: 2.16,
                infoLink: "https://www.tcgplayer.com/product/213263/pokemon-swsh02-rebel-clash-galar-mine?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card38: {
                get name() {return "Milo"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.12, num: 161, rarity: 2, type: "supporter", holo: 0, revPrice: 0.23,
                infoLink: "https://www.tcgplayer.com/product/213264/pokemon-swsh02-rebel-clash-milo?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card39: {
                get name() {return "Nugget"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 162, rarity: 2, type: "item", holo: 0, revPrice: 0.17,
                infoLink: "https://www.tcgplayer.com/product/213267/pokemon-swsh02-rebel-clash-nugget?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card40: {
                get name() {return "Oleana"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.09, num: 163, rarity: 2, type: "supporter", holo: 0, revPrice: 0.19,
                infoLink: "https://www.tcgplayer.com/product/213268/pokemon-swsh02-rebel-clash-oleana?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card41: {
                get name() {return "Poke Ball"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.12, num: 164, rarity: 2, type: "item", holo: 0, revPrice: 0.17,
                infoLink: "https://www.tcgplayer.com/product/213271/pokemon-swsh02-rebel-clash-poke-ball?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card42: {
                get name() {return "Scoop Up Net"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.74, num: 165, rarity: 2, type: "item", holo: 0, revPrice: 3.23,
                infoLink: "https://www.tcgplayer.com/product/213272/pokemon-swsh02-rebel-clash-scoop-up-net?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card43: {
                get name() {return "Skyla"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.26, num: 166, rarity: 2, type: "supporter", holo: 0, revPrice: 0.90,
                infoLink: "https://www.tcgplayer.com/product/213274/pokemon-swsh02-rebel-clash-skyla?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card44: {
                get name() {return "Sonia"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.19, num: 167, rarity: 2, type: "supporter", holo: 0, revPrice: 0.80,
                infoLink: "https://www.tcgplayer.com/product/213275/pokemon-swsh02-rebel-clash-sonia?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card45: {
                get name() {return "Tool Scrapper"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.22, num: 168, rarity: 2, type: "item", holo: 0, revPrice: 0.70,
                infoLink: "https://www.tcgplayer.com/product/213278/pokemon-swsh02-rebel-clash-tool-scrapper?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card46: {
                get name() {return "Training Court"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.22, num: 169, rarity: 2, type: "stadium", holo: 0, revPrice: 3.80,
                infoLink: "https://www.tcgplayer.com/product/213280/pokemon-swsh02-rebel-clash-training-court?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card47: {
                get name() {return "Turffield Stadium"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.09, num: 170, rarity: 2, type: "stadium", holo: 0, revPrice: 0.45,
                infoLink: "https://www.tcgplayer.com/product/213281/pokemon-swsh02-rebel-clash-turffield-stadium?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card48: {
                get name() {return "Capture Energy"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.26, num: 171, rarity: 2, type: "special energy", holo: 0, revPrice: 3.88,
                infoLink: "https://www.tcgplayer.com/product/213282/pokemon-swsh02-rebel-clash-capture-energy?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card49: {
                get name() {return "Horror P Energy"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.97, num: 172, rarity: 2, type: "special energy", holo: 0, revPrice: 2.33,
                infoLink: "https://www.tcgplayer.com/product/213283/pokemon-swsh02-rebel-clash-horror-p-energy?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card50: {
                get name() {return "Speed L Energy"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.50, num: 173, rarity: 2, type: "special energy", holo: 0, revPrice: 2.86,
                infoLink: "https://www.tcgplayer.com/product/213284/pokemon-swsh02-rebel-clash-speed-l-energy?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card51: {
                get name() {return "Twin Energy"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.97, num: 174, rarity: 2, type: "special energy", holo: 0, revPrice: 1.10,
                infoLink: "https://www.tcgplayer.com/product/213285/pokemon-swsh02-rebel-clash-twin-energy?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
        },
        // ======================== RARE ======================== //
        rare: {
            card1: {
                get name() {return "Butterfree"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.25, num: 3, rarity: 3, type: "grass", holo: 0, revPrice: 0.75,
                infoLink: "https://www.tcgplayer.com/product/213073/pokemon-swsh02-rebel-clash-butterfree?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Ludicolo"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 9, rarity: 3, type: "grass", holo: 0, revPrice: 0.60,
                infoLink: "https://www.tcgplayer.com/product/213079/pokemon-swsh02-rebel-clash-ludicolo?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Abomasnow"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 13, rarity: 3, type: "grass", holo: 0, revPrice: 0.37,
                infoLink: "https://www.tcgplayer.com/product/213083/pokemon-swsh02-rebel-clash-abomasnow?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Trevenant"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.24, num: 15, rarity: 3, type: "grass", holo: 0, revPrice: 0.41,
                infoLink: "https://www.tcgplayer.com/product/213085/pokemon-swsh02-rebel-clash-trevenant?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Ninetales"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.55, num: 25, rarity: 3, type: "fire", holo: 0, revPrice: 0.86,
                infoLink: "https://www.tcgplayer.com/product/213100/pokemon-swsh02-rebel-clash-ninetales?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Arcanine"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.56, num: 28, rarity: 3, type: "fire", holo: 0, revPrice: 1.10,
                infoLink: "https://www.tcgplayer.com/product/213104/pokemon-swsh02-rebel-clash-arcanine?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Magmortar"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.31, num: 30, rarity: 3, type: "fire", holo: 0, revPrice: 0.75,
                infoLink: "https://www.tcgplayer.com/product/213106/pokemon-swsh02-rebel-clash-magmortar?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Galarian Mr. Rime"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.23, num: 38, rarity: 3, type: "water", holo: 0, revPrice: 0.46,
                infoLink: "https://www.tcgplayer.com/product/213116/pokemon-swsh02-rebel-clash-galarian-mr-rime?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Seismitoad"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 46, rarity: 3, type: "water", holo: 0, revPrice: 0.39,
                infoLink: "https://www.tcgplayer.com/product/213125/pokemon-swsh02-rebel-clash-seismitoad?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Galarian Darmanitan"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 48, rarity: 3, type: "water", holo: 0, revPrice: 0.38,
                infoLink: "https://www.tcgplayer.com/product/213127/pokemon-swsh02-rebel-clash-galarian-darmanitan?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Cramorant"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 51, rarity: 3, type: "water", holo: 0, revPrice: 0.49,
                infoLink: "https://www.tcgplayer.com/product/213132/pokemon-swsh02-rebel-clash-cramorant?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Barraskewda"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.15, num: 53, rarity: 3, type: "water", holo: 0, revPrice: 0.47,
                infoLink: "https://www.tcgplayer.com/product/213134/pokemon-swsh02-rebel-clash-barraskewda?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Electivire"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.28, num: 59, rarity: 3, type: "electric", holo: 0, revPrice: 0.84,
                infoLink: "https://www.tcgplayer.com/product/213140/pokemon-swsh02-rebel-clash-electivire?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Toxtricity"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.25, num: 69, rarity: 3, type: "electric", holo: 0, revPrice: 0.51,
                infoLink: "https://www.tcgplayer.com/product/213153/pokemon-swsh02-rebel-clash-toxtricity?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Sigilyph"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.23, num: 80, rarity: 3, type: "psychic", holo: 0, revPrice: 0.59,
                infoLink: "https://www.tcgplayer.com/product/213166/pokemon-swsh02-rebel-clash-sigilyph?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Alcremie"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 87, rarity: 3, type: "psychic", holo: 0, revPrice: 0.55,
                infoLink: "https://www.tcgplayer.com/product/213173/pokemon-swsh02-rebel-clash-alcremie?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Whiscash"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 100, rarity: 3, type: "fighting", holo: 0, revPrice: 0.74,
                infoLink: "https://www.tcgplayer.com/product/213188/pokemon-swsh02-rebel-clash-whiscash?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Galarian Runerigus"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.27, num: 102, rarity: 3, type: "fighting", holo: 0, revPrice: 0.51,
                infoLink: "https://www.tcgplayer.com/product/213190/pokemon-swsh02-rebel-clash-galarian-runerigus?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Barbaracle"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.22, num: 104, rarity: 3, type: "fighting", holo: 0, revPrice: 0.35,
                infoLink: "https://www.tcgplayer.com/product/213192/pokemon-swsh02-rebel-clash-barbaracle?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Spiritomb"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.18, num: 116, rarity: 3, type: "dark", holo: 0, revPrice: 0.44,
                infoLink: "https://www.tcgplayer.com/product/213208/pokemon-swsh02-rebel-clash-spiritomb?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Garbodor"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.40, num: 118, rarity: 3, type: "dark", holo: 0, revPrice: 0.41,
                infoLink: "https://www.tcgplayer.com/product/213210/pokemon-swsh02-rebel-clash-garbodor?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Mandibuzz"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.22, num: 120, rarity: 3, type: "dark", holo: 0, revPrice: 0.42,
                infoLink: "https://www.tcgplayer.com/product/213214/pokemon-swsh02-rebel-clash-mandibuzz?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Galarian Perrserker"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.19, num: 127, rarity: 3, type: "metal", holo: 0, revPrice: 0.40,
                infoLink: "https://www.tcgplayer.com/product/213223/pokemon-swsh02-rebel-clash-galarian-perrserker?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card24: {
                get name() {return "Scizor"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.46, num: 128, rarity: 3, type: "metal", holo: 0, revPrice: 0.69,
                infoLink: "https://www.tcgplayer.com/product/213224/pokemon-swsh02-rebel-clash-scizor?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card25: {
                get name() {return "Probopass"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.19, num: 131, rarity: 3, type: "metal", holo: 0, revPrice: 0.42,
                infoLink: "https://www.tcgplayer.com/product/213227/pokemon-swsh02-rebel-clash-probopass?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card26: {
                get name() {return "Aegislash"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.28, num: 135, rarity: 3, type: "metal", holo: 0, revPrice: 0.44,
                infoLink: "https://www.tcgplayer.com/product/213231/pokemon-swsh02-rebel-clash-aegislash?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Zacian"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.59, num: 139, rarity: 3, type: "metal", holo: 0, revPrice: 0.65,
                infoLink: "https://www.tcgplayer.com/product/213237/pokemon-swsh02-rebel-clash-zacian?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Zamazenta"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.56, num: 140, rarity: 3, type: "metal", holo: 0, revPrice: 0.92,
                infoLink: "https://www.tcgplayer.com/product/213240/pokemon-swsh02-rebel-clash-zamazenta?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Snorlax"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.29, num: 141, rarity: 3, type: "colorless", holo: 0, revPrice: 0.78,
                infoLink: "https://www.tcgplayer.com/product/213241/pokemon-swsh02-rebel-clash-snorlax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Unfezant"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.19, num: 145, rarity: 3, type: "colorless", holo: 0, revPrice: 0.40,
                infoLink: "https://www.tcgplayer.com/product/213245/pokemon-swsh02-rebel-clash-unfezant?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Diggersby"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.20, num: 147, rarity: 3, type: "colorless", holo: 0, revPrice: 0.36,
                infoLink: "https://www.tcgplayer.com/product/213247/pokemon-swsh02-rebel-clash-diggersby?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Greedent"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.23, num: 152, rarity: 3, type: "colorless", holo: 0, revPrice: 0.43,
                infoLink: "https://www.tcgplayer.com/product/213252/pokemon-swsh02-rebel-clash-greedent?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
        },
        // ======================== HOLO RARE ======================== //
        holoRare: {
            card1: {
                get name() {return "Flapple"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.59, num: 22, rarity: 4, type: "grass", holo: 3, revPrice: 0.73,
                infoLink: "https://www.tcgplayer.com/product/213095/pokemon-swsh02-rebel-clash-flapple?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Appletun"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.32, num: 23, rarity: 4, type: "grass", holo: 3, revPrice: 0.56,
                infoLink: "https://www.tcgplayer.com/product/213098/pokemon-swsh02-rebel-clash-appletun?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Chandelure"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.43, num: 33, rarity: 4, type: "fire", holo: 3, revPrice: 0.65,
                infoLink: "https://www.tcgplayer.com/product/213109/pokemon-swsh02-rebel-clash-chandelure?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Gyarados"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.82, num: 40, rarity: 4, type: "water", holo: 3, revPrice: 1.27,
                infoLink: "https://www.tcgplayer.com/product/213118/pokemon-swsh02-rebel-clash-gyarados?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Eiscue"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.38, num: 54, rarity: 4, type: "water", holo: 3, revPrice: 0.52,
                infoLink: "https://www.tcgplayer.com/product/213135/pokemon-swsh02-rebel-clash-eiscue?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Luxray"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.32, num: 62, rarity: 4, type: "electric", holo: 3, revPrice: 0.53,
                infoLink: "https://www.tcgplayer.com/product/213143/pokemon-swsh02-rebel-clash-luxray?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Vikavolt"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.36, num: 66, rarity: 4, type: "electric", holo: 3, revPrice: 0.48,
                infoLink: "https://www.tcgplayer.com/product/213149/pokemon-swsh02-rebel-clash-vikavolt?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Clefable"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.64, num: 75, rarity: 4, type: "psychic", holo: 3, revPrice: 0.65,
                infoLink: "https://www.tcgplayer.com/product/213161/pokemon-swsh02-rebel-clash-clefable?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Galarian Cursola"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.67, num: 79, rarity: 4, type: "psychic", holo: 3, revPrice: 0.99,
                infoLink: "https://www.tcgplayer.com/product/213165/pokemon-swsh02-rebel-clash-galarian-cursola?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Hatterene"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.34, num: 85, rarity: 4, type: "psychic", holo: 3, revPrice: 0.62,
                infoLink: "https://www.tcgplayer.com/product/213171/pokemon-swsh02-rebel-clash-hatterene?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Dragapult"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.66, num: 91, rarity: 4, type: "psychic", holo: 3, revPrice: 0.83,
                infoLink: "https://www.tcgplayer.com/product/213177/pokemon-swsh02-rebel-clash-dragapult?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Galarian Sirfetch'd"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.63, num: 95, rarity: 4, type: "fighting", holo: 3, revPrice: 0.56,
                infoLink: "https://www.tcgplayer.com/product/213183/pokemon-swsh02-rebel-clash-galarian-sirfetchd?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Coalossal"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.75, num: 107, rarity: 4, type: "fighting", holo: 3, revPrice: 0.71,
                infoLink: "https://www.tcgplayer.com/product/213195/pokemon-swsh02-rebel-clash-coalossal?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Stonjourner"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.36, num: 111, rarity: 4, type: "fighting", holo: 3, revPrice: 0.44,
                infoLink: "https://www.tcgplayer.com/product/213203/pokemon-swsh02-rebel-clash-stonjourner?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Galarian Weezing"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.63, num: 113, rarity: 4, type: "dark", holo: 3, revPrice: 0.85,
                infoLink: "https://www.tcgplayer.com/product/213205/pokemon-swsh02-rebel-clash-galarian-weezing?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Grimmsnarl"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.57, num: 125, rarity: 4, type: "dark", holo: 3, revPrice: 0.73,
                infoLink: "https://www.tcgplayer.com/product/213205/pokemon-swsh02-rebel-clash-galarian-weezing?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Duraludon"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.55, num: 138, rarity: 4, type: "metal", holo: 3, revPrice: 0.64,
                infoLink: "https://www.tcgplayer.com/product/213236/pokemon-swsh02-rebel-clash-duraludon?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Boss's Orders"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 3.01, num: 154, rarity: 4, type: "supporter", holo: 3, revPrice: 3.02,
                infoLink: "https://www.tcgplayer.com/product/213255/pokemon-swsh02-rebel-clash-bosss-orders?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
        },
        // ======================== ULTRA RARE ======================== //
        ultraRare: {
            card1: {
                get name() {return "Rillaboom V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.50, num: 17, rarity: 5, type: "grass", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213087/pokemon-swsh02-rebel-clash-rillaboom-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Rillaboom VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 4.11, num: 18, rarity: 5, type: "grass", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213089/pokemon-swsh02-rebel-clash-rillaboom-vmax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Eldegoss V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.18, num: 19, rarity: 5, type: "grass", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213091/pokemon-swsh02-rebel-clash-eldegoss-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Ninetales V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.59, num: 26, rarity: 5, type: "fire", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213101/pokemon-swsh02-rebel-clash-ninetales-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Cinderace V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.28, num: 35, rarity: 5, type: "fire", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213111/pokemon-swsh02-rebel-clash-cinderace-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Cinderace VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 4.17, num: 36, rarity: 5, type: "fire", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213113/pokemon-swsh02-rebel-clash-cinderace-vmax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Milotic V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.18, num: 43, rarity: 5, type: "water", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213121/pokemon-swsh02-rebel-clash-milotic-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Inteleon V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.17, num: 49, rarity: 5, type: "water", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213128/pokemon-swsh02-rebel-clash-inteleon-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Inteleon VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.32, num: 50, rarity: 5, type: "water", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213130/pokemon-swsh02-rebel-clash-inteleon-vmax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Eiscue V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.14, num: 55, rarity: 5, type: "water", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213136/pokemon-swsh02-rebel-clash-eiscue-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Boltund V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.75, num: 67, rarity: 5, type: "electric", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213150/pokemon-swsh02-rebel-clash-boltund-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Toxtricity V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.33, num: 70, rarity: 5, type: "electric", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213154/pokemon-swsh02-rebel-clash-toxtricity-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Toxtricity VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 3.81, num: 71, rarity: 5, type: "electric", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213156/pokemon-swsh02-rebel-clash-toxtricity-vmax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Pincurchin V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.04, num: 72, rarity: 5, type: "electric", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213158/pokemon-swsh02-rebel-clash-pincurchin-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Dragapult V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.48, num: 92, rarity: 5, type: "psychic", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213178/pokemon-swsh02-rebel-clash-dragapult-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Dragapult VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 3.30, num: 93, rarity: 5, type: "psychic", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213180/pokemon-swsh02-rebel-clash-dragapult-vmax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Sandaconda V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.02, num: 108, rarity: 5, type: "fighting", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213198/pokemon-swsh02-rebel-clash-sandaconda-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Falinks V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.47, num: 110, rarity: 5, type: "fighting", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213201/pokemon-swsh02-rebel-clash-falinks-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Malamar V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.77, num: 121, rarity: 5, type: "dark", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213215/pokemon-swsh02-rebel-clash-malamar-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Malamar VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 3.49, num: 122, rarity: 5, type: "dark", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213217/pokemon-swsh02-rebel-clash-malamar-vmax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Copperajah V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.17, num: 136, rarity: 5, type: "metal", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213232/pokemon-swsh02-rebel-clash-copperajah-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card22: {
                get name() {return "Copperajah VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 5.19, num: 137, rarity: 5, type: "metal", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213234/pokemon-swsh02-rebel-clash-copperajah-vmax?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card23: {
                get name() {return "Dubwool V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.07, num: 153, rarity: 5, type: "colorless", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/213253/pokemon-swsh02-rebel-clash-dubwool-v?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
        },
        // ======================== FULL ART ======================== //
        fullArt: {
            card1: {
                get name() {return "Rillaboom V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 3.89, num: 175, rarity: 5, type: "grass", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213088/pokemon-swsh02-rebel-clash-rillaboom-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Eldegoss V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 3.31, num: 176, rarity: 5, type: "grass", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213092/pokemon-swsh02-rebel-clash-eldegoss-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Ninetales V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 18.18, num: 177, rarity: 5, type: "fire", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213102/pokemon-swsh02-rebel-clash-ninetales-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Cinderace V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 6.23, num: 178, rarity: 5, type: "fire", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213112/pokemon-swsh02-rebel-clash-cinderace-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Milotic V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 12.84, num: 179, rarity: 5, type: "water", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213122/pokemon-swsh02-rebel-clash-milotic-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Inteleon V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 5.29, num: 180, rarity: 5, type: "water", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213129/pokemon-swsh02-rebel-clash-inteleon-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Boltund V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 5.25, num: 181, rarity: 5, type: "electric", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213151/pokemon-swsh02-rebel-clash-boltund-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Toxtricity V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 4.45, num: 182, rarity: 5, type: "electric", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213155/pokemon-swsh02-rebel-clash-toxtricity-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Dragapult V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 6.88, num: 183, rarity: 5, type: "psychic", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213179/pokemon-swsh02-rebel-clash-dragapult-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Sandaconda V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.33, num: 184, rarity: 5, type: "fighting", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213199/pokemon-swsh02-rebel-clash-sandaconda-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Falinks V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 3.56, num: 185, rarity: 5, type: "fighting", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213202/pokemon-swsh02-rebel-clash-falinks-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Malamar V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 5.04, num: 186, rarity: 5, type: "dark", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213216/pokemon-swsh02-rebel-clash-malamar-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Copperajah V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.98, num: 187, rarity: 5, type: "metal", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213233/pokemon-swsh02-rebel-clash-copperajah-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Dubwool V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.22, num: 188, rarity: 5, type: "colorless", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213254/pokemon-swsh02-rebel-clash-dubwool-v-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Boss's Orders"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 31.77, num: 189, rarity: 5, type: "supporter", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213256/pokemon-swsh02-rebel-clash-bosss-orders-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Milo"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 4.44, num: 190, rarity: 5, type: "supporter", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213265/pokemon-swsh02-rebel-clash-milo-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Oleana"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 7.00, num: 191, rarity: 5, type: "supporter", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213269/pokemon-swsh02-rebel-clash-oleana-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Sonia"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 24.83, num: 192, rarity: 5, type: "supporter", holo: 5,
                infoLink: "https://www.tcgplayer.com/product/213276/pokemon-swsh02-rebel-clash-sonia-full-art?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
        },
        // ======================== REVERSE SECRET ======================== //
        reverseSecret: {
        
        },
        // ======================== SECRET RARE ======================== //
        secretRare: {
            card1: {
                get name() {return "Rillaboom VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 16.35, num: 193, rarity: 7, type: "grass", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213090/pokemon-swsh02-rebel-clash-rillaboom-vmax-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Cinderace VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 17.16, num: 194, rarity: 7, type: "fire", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213114/pokemon-swsh02-rebel-clash-cinderace-vmax-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Inteleon VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 12.12, num: 195, rarity: 7, type: "water", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213131/pokemon-swsh02-rebel-clash-inteleon-vmax-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Toxtricity VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 13.76, num: 196, rarity: 7, type: "electric", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213157/pokemon-swsh02-rebel-clash-toxtricity-vmax-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Dragapult VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 16.88, num: 197, rarity: 7, type: "psychic", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213181/pokemon-swsh02-rebel-clash-dragapult-vmax-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Malamar VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 8.25, num: 198, rarity: 7, type: "dark", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213218/pokemon-swsh02-rebel-clash-malamar-vmax-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Copperajah VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 10.43, num: 199, rarity: 7, type: "metal", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213235/pokemon-swsh02-rebel-clash-copperajah-vmax-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Boss's Orders"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 25.35, num: 200, rarity: 7, type: "supporter", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213257/pokemon-swsh02-rebel-clash-bosss-orders-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Milo"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 7.13, num: 201, rarity: 7, type: "supporter", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213266/pokemon-swsh02-rebel-clash-milo-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Oleana"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 7.96, num: 202, rarity: 7, type: "supporter", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213270/pokemon-swsh02-rebel-clash-oleana-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Sonia"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 17.46, num: 203, rarity: 7, type: "supporter", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213277/pokemon-swsh02-rebel-clash-sonia-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Frosmoth"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 16.47, num: 204, rarity: 7, type: "water", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213287/pokemon-swsh02-rebel-clash-frosmoth-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Galarian Perrserker"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 14.13, num: 205, rarity: 7, type: "metal", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213288/pokemon-swsh02-rebel-clash-galarian-perrserker-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Big Charm"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 12.58, num: 206, rarity: 7, type: "tool", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213289/pokemon-swsh02-rebel-clash-big-charm-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Scoop Up Net"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 15.85, num: 207, rarity: 7, type: "item", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213273/pokemon-swsh02-rebel-clash-scoop-up-net-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Tool Scrapper"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 8.76, num: 208, rarity: 7, type: "item", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213279/pokemon-swsh02-rebel-clash-tool-scrapper-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Twin Energy"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 9.45, num: 209, rarity: 7, type: "special energy", holo: 4,
                infoLink: "https://www.tcgplayer.com/product/213286/pokemon-swsh02-rebel-clash-twin-energy-secret?partner=POKELLECTOR&utm_campaign=affiliate&utm_medium=POKELLECTOR&utm_source=POKELLECTOR&Language=English",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
        }
    },
    // SWORD & SHIELD DARKNESS ABLAZE
    swsh3: {

    }
}
