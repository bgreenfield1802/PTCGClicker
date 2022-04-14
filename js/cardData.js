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
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card2: {
                get name() {return "Scorbunny"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 3.16, num: 2, rarity: 0, type: "fire", holo: 3,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card3: {
                get name() {return "Sobble"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 2.79, num: 3, rarity: 0, type: "water", holo: 3,
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
            },
            card55: {
                get name() {return "Hoothoot"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 143, rarity: 1, type: "colorless", holo: 0, revPrice: 0.18,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card56: {
                get name() {return "Minccino"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.20, num: 145, rarity: 1, type: "colorless", holo: 0, revPrice: 0.54,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card57: {
                get name() {return "Minccino"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 146, rarity: 1, type: "colorless", holo: 0, revPrice: 0.26,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card58: {
                get name() {return "Rookidee"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 150, rarity: 1, type: "colorless", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card59: {
                get name() {return "Wooloo"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 152, rarity: 1, type: "colorless", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card60: {
                get name() {return "Wooloo"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 153, rarity: 1, type: "colorless", holo: 0, revPrice: 0.23,
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
            },
            card26: {
                get name() {return "Corvisquire"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.06, num: 151, rarity: 2, type: "colorless", holo: 0, revPrice: 0.36,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card27: {
                get name() {return "Dubwool"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 154, rarity: 2, type: "colorless", holo: 0, revPrice: 0.40,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card28: {
                get name() {return "Air Balloon"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.36, num: 156, rarity: 2, type: "tool", holo: 0, revPrice: 1.79,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card29: {
                get name() {return "Bede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 157, rarity: 2, type: "supporter", holo: 0, revPrice: 0.34,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Big Charm"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.11, num: 158, rarity: 2, type: "tool", holo: 0, revPrice: 0.51,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Crushing Hammer"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.29, num: 159, rarity: 2, type: "item", holo: 0, revPrice: 0.79,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Energy Retrieval"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.27, num: 160, rarity: 2, type: "item", holo: 0, revPrice: 0.40,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card33: {
                get name() {return "Energy Search"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.61, num: 161, rarity: 2, type: "item", holo: 0, revPrice: 1.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card34: {
                get name() {return "Energy Switch"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.28, num: 162, rarity: 2, type: "item", holo: 0, revPrice: 0.74,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card35: {
                get name() {return "Evolution Incense"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.03, num: 163, rarity: 2, type: "item", holo: 0, revPrice: 5.36,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card36: {
                get name() {return "Great Ball"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.13, num: 164, rarity: 2, type: "item", holo: 0, revPrice: 1.10,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card37: {
                get name() {return "Hop"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 165, rarity: 2, type: "supporter", holo: 0, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card38: {
                get name() {return "Hyper Potion"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 166, rarity: 2, type: "item", holo: 0, revPrice: 0.45,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card39: {
                get name() {return "Lucky Egg"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 167, rarity: 2, type: "tool", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card40: {
                get name() {return "Lum Berry"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.09, num: 168, rarity: 2, type: "tool", holo: 0, revPrice: 0.25,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card41: {
                get name() {return "Metal Saucer"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 170, rarity: 2, type: "item", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card42: {
                get name() {return "Ordinary Rod"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 171, rarity: 2, type: "item", holo: 0, revPrice: 0.33,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card43: {
                get name() {return "Pal Pad"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.26, num: 172, rarity: 2, type: "item", holo: 0, revPrice: 0.35,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card44: {
                get name() {return "Poke Kid"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.15, num: 173, rarity: 2, type: "supporter", holo: 0, revPrice: 0.25,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card45: {
                get name() {return "Pokegear 3.0"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 174, rarity: 2, type: "item", holo: 0, revPrice: 0.37,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card46: {
                get name() {return "Pokemon Catcher"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.14, num: 175, rarity: 2, type: "item", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card47: {
                get name() {return "Pokemon Center Lady"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 176, rarity: 2, type: "supporter", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card48: {
                get name() {return "Potion"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 177, rarity: 2, type: "item", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card49: {
                get name() {return "Quick Ball"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.47, num: 179, rarity: 2, type: "item", holo: 0, revPrice: 1.08,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card50: {
                get name() {return "Rare Candy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.24, num: 180, rarity: 2, type: "item", holo: 0, revPrice: 0.46,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card51: {
                get name() {return "Rotom Bike"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.05, num: 181, rarity: 2, type: "item", holo: 0, revPrice: 0.18,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card52: {
                get name() {return "Sitrus Berry"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 182, rarity: 2, type: "tool", holo: 0, revPrice: 0.16,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card53: {
                get name() {return "Switch"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.23, num: 183, rarity: 2, type: "item", holo: 0, revPrice: 0.55,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card54: {
                get name() {return "Team Yell Grunt"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.08, num: 184, rarity: 2, type: "supporter", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card55: {
                get name() {return "Vitality Band"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.10, num: 185, rarity: 2, type: "tool", holo: 0, revPrice: 0.25,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card56: {
                get name() {return "Aurora Energy"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.18, num: 186, rarity: 2, type: "special energy", holo: 0, revPrice: 0.30,
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
            },
            card29: {
                get name() {return "Snorlax"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 140, rarity: 3, type: "colorless", holo: 0, revPrice: 0.51,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card30: {
                get name() {return "Noctowl"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.22, num: 144, rarity: 3, type: "colorless", holo: 0, revPrice: 0.37,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card31: {
                get name() {return "Cinccino"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.06, num: 147, rarity: 3, type: "colorless", holo: 0, revPrice: 1.66,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card32: {
                get name() {return "Drampa"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.16, num: 149, rarity: 3, type: "colorless", holo: 0, revPrice: 0.33,
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
            },
            card15: {
                get name() {return "Oranguru"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.83, num: 148, rarity: 4, type: "colorless", holo: 3, revPrice: 1.26,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Marnie"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.75, num: 169, rarity: 4, type: "supporter", holo: 3, revPrice: 2.60,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Professor's Research"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 0.33, num: 178, rarity: 4, type: "supporter", holo: 3, revPrice: 0.44,
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
            },
            card19: {
                get name() {return "Snorlax V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.92, num: 141, rarity: 5, type: "colorless", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card20: {
                get name() {return "Snorlax VMAX"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 11.75, num: 142, rarity: 5, type: "colorless", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card21: {
                get name() {return "Cramorant V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.13, num: 155, rarity: 5, type: "colorless", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            }
        },
        // ======================== FULL ART ======================== //
        fullArt: {
            card1: {
                get name() {return "Dhelmise V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.37, num: 187, rarity: 5, type: "grass", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Torkoal V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.88, num: 188, rarity: 5, type: "fire", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Lapras V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 4.36, num: 189, rarity: 5, type: "water", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Morpeko V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.58, num: 190, rarity: 5, type: "electric", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Wobbuffet V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.97, num: 191, rarity: 5, type: "psychic", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Indeedee V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 1.94, num: 192, rarity: 5, type: "psychic", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Stonjourner V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.75, num: 193, rarity: 5, type: "fighting", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Sableye V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 5.84, num: 194, rarity: 5, type: "dark", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Zacian V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 7.29, num: 195, rarity: 5, type: "metal", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Zamazenta V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 6.74, num: 196, rarity: 5, type: "metal", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Snorlax V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 8.43, num: 197, rarity: 5, type: "colorless", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Cramorant V"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.58, num: 198, rarity: 5, type: "colorless", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Bede"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 3.26, num: 199, rarity: 5, type: "supporter", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Marnie"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 41.78, num: 200, rarity: 5, type: "supporter", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Professor's Research"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 4.72, num: 201, rarity: 5, type: "supporter", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH1/SWSH1_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Team Yell Grunt"+holoCheck(this.holo)+" | "+packs.swsh1.name2+" "+zeroFill(this.num)+"/202"},
                price: 2.61, num: 202, rarity: 5, type: "supporter", holo: 5,
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
    },
    swsh2: {
        // ======================== COMMON ======================== //
        common: {
            card1: {
                get name() {return "Caterpie"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.20, num: 1, rarity: 1, type: "grass", holo: 0, revPrice: 0.33,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Scyther"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.14, num: 4, rarity: 1, type: "grass", holo: 0, revPrice: 0.29,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Lotad"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 7, rarity: 1, type: "grass", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Surskit"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 10, rarity: 1, type: "grass", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Snover"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.03, num: 12, rarity: 1, type: "grass", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Phantump"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 14, rarity: 1, type: "grass", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Grubbin"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 16, rarity: 1, type: "grass", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Applin"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 20, rarity: 1, type: "grass", holo: 0, revPrice: 0.17,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Applin"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.09, num: 21, rarity: 1, type: "grass", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Vulpix"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.10, num: 24, rarity: 1, type: "fire", holo: 0, revPrice: 0.30,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Growlithe"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.08, num: 27, rarity: 1, type: "fire", holo: 0, revPrice: 0.31,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Magmar"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 29, rarity: 1, type: "fire", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card13: {
                get name() {return "Litwick"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 31, rarity: 1, type: "fire", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card14: {
                get name() {return "Galarian Mr. Mime"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 37, rarity: 1, type: "water", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card15: {
                get name() {return "Magikarp"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.14, num: 39, rarity: 1, type: "water", holo: 0, revPrice: 0.36,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card16: {
                get name() {return "Wingull"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 41, rarity: 1, type: "water", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card17: {
                get name() {return "Tympole"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 44, rarity: 1, type: "water", holo: 0, revPrice: 0.19,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card18: {
                get name() {return "Galarian Darumaka"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 47, rarity: 1, type: "water", holo: 0, revPrice: 0.18,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card19: {
                get name() {return "Arrokuda"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 52, rarity: 1, type: "water", holo: 0, revPrice: 0.23,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            }
        },
        // ======================== UNCOMMON ======================== //
        uncommon: {
            card1: {
                get name() {return "Metapod"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.22, num: 2, rarity: 2, type: "grass", holo: 0, revPrice: 0.53,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Shuckle"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.09, num: 5, rarity: 2, type: "grass", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Heracross"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.07, num: 6, rarity: 2, type: "grass", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Lombre"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.15, num: 8, rarity: 2, type: "grass", holo: 0, revPrice: 0.42,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Masquerain"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 11, rarity: 2, type: "grass", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Lampent"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.08, num: 32, rarity: 2, type: "fire", holo: 0, revPrice: 0.27,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Heatmor"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.05, num: 34, rarity: 2, type: "fire", holo: 0, revPrice: 0.22,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Pelipper"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.06, num: 42, rarity: 2, type: "water", holo: 0, revPrice: 0.24,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Palpitoad"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.04, num: 45, rarity: 2, type: "water", holo: 0, revPrice: 0.21,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            }
        },
        // ======================== RARE ======================== //
        rare: {
            card1: {
                get name() {return "Butterfree"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.25, num: 3, rarity: 3, type: "grass", holo: 0, revPrice: 0.75,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Ludicolo"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 9, rarity: 3, type: "grass", holo: 0, revPrice: 0.60,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Abomasnow"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 13, rarity: 3, type: "grass", holo: 0, revPrice: 0.37,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Trevenant"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.24, num: 15, rarity: 3, type: "grass", holo: 0, revPrice: 0.41,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Ninetales"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.55, num: 25, rarity: 3, type: "fire", holo: 0, revPrice: 0.86,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Arcanine"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.56, num: 28, rarity: 3, type: "fire", holo: 0, revPrice: 1.10,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Magmortar"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.31, num: 30, rarity: 3, type: "fire", holo: 0, revPrice: 0.75,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Galarian Mr. Rime"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.23, num: 38, rarity: 3, type: "water", holo: 0, revPrice: 0.46,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Seismitoad"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 46, rarity: 3, type: "water", holo: 0, revPrice: 0.39,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Galarian Darmanitan"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 48, rarity: 3, type: "water", holo: 0, revPrice: 0.38,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card11: {
                get name() {return "Cramorant"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.21, num: 51, rarity: 3, type: "water", holo: 0, revPrice: 0.49,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card12: {
                get name() {return "Barraskewda"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.15, num: 53, rarity: 3, type: "water", holo: 0, revPrice: 0.47,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            }
        },
        // ======================== HOLO RARE ======================== //
        holoRare: {
            card1: {
                get name() {return "Flapple"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.59, num: 22, rarity: 4, type: "grass", holo: 3, revPrice: 0.73,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Appletun"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.32, num: 23, rarity: 4, type: "grass", holo: 3, revPrice: 0.56,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Chandelure"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.43, num: 33, rarity: 4, type: "fire", holo: 3, revPrice: 0.65,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Gyarados"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.82, num: 40, rarity: 4, type: "water", holo: 3, revPrice: 1.27,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Eiscue"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 0.38, num: 54, rarity: 4, type: "water", holo: 3, revPrice: 0.52,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            }
        },
        // ======================== ULTRA RARE ======================== //
        ultraRare: {
            card1: {
                get name() {return "Rillaboom V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.50, num: 17, rarity: 5, type: "grass", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card2: {
                get name() {return "Rillaboom VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 4.11, num: 18, rarity: 5, type: "grass", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card3: {
                get name() {return "Eldegoss V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.18, num: 19, rarity: 5, type: "grass", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card4: {
                get name() {return "Ninetales V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.59, num: 26, rarity: 5, type: "fire", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card5: {
                get name() {return "Cinderace V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.28, num: 35, rarity: 5, type: "fire", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card6: {
                get name() {return "Cinderace VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 4.17, num: 36, rarity: 5, type: "fire", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card7: {
                get name() {return "Milotic V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.18, num: 43, rarity: 5, type: "water", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card8: {
                get name() {return "Inteleon V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.17, num: 49, rarity: 5, type: "water", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card9: {
                get name() {return "Inteleon VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 2.32, num: 50, rarity: 5, type: "water", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            },
            card10: {
                get name() {return "Eiscue V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 1.14, num: 55, rarity: 5, type: "water", holo: 1,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            }
        },
        // ======================== FULL ART ======================== //
        fullArt: {
            card1: {
                get name() {return "Rillaboom V"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 4.01, num: 175, rarity: 5, type: "grass", holo: 5,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            }
        },
        // ======================== REVERSE SECRET ======================== //
        reverseSecret: {
        
        },
        // ======================== SECRET RARE ======================== //
        secretRare: {
            card1: {
                get name() {return "Rillaboom VMAX"+holoCheck(this.holo)+" | "+packs.swsh2.name2+" "+zeroFill(this.num)+"/"+packs.swsh2.cards},
                price: 16.35, num: 193, rarity: 7, type: "grass", holo: 4,
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_"+this.num+".png"}
            }
        }
    }
}
