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
                infoLink: "https://store.tcgplayer.com/pokemon/swsh-sword-and-shield-promo-cards/grookey-swsh001",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card2: {
                get name() {return "Scorbunny"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 3.16, num: 2, rarity: 0, type: "fire", holo: 3,
                infoLink: "https://store.tcgplayer.com/pokemon/swsh-sword-and-shield-promo-cards/scorbunny-swsh002",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card3: {
                get name() {return "Sobble"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 2.79, num: 3, rarity: 0, type: "water", holo: 3,
                infoLink: "https://store.tcgplayer.com/pokemon/swsh-sword-and-shield-promo-cards/sobble-swsh003",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card4: {
                get name() {return "Meowth V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.27, num: 4, rarity: 0, type: "colorless", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/205465/pokemon-swsh-sword-and-shield-promo-cards-meowth-v-swsh004",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card5: {
                get name() {return "Meowth VMAX"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 2.57, num: 5, rarity: 0, type: "colorless", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/205466/pokemon-swsh-sword-and-shield-promo-cards-meowth-vmax-swsh005",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card6: {
                get name() {return "Rillaboom"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 9.00, num: 6, rarity: 0, type: "grass", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/208261/pokemon-swsh-sword-and-shield-promo-cards-rillaboom-swsh006-prerelease-promo",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card7: {
                get name() {return "Frosmoth"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 5.06, num: 7, rarity: 0, type: "water", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/208262/pokemon-swsh-sword-and-shield-promo-cards-frosmoth-swsh007-prerelease-promo",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card8: {
                get name() {return "Galarian Perrserker"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 3.76, num: 8, rarity: 0, type: "metal", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/208265/pokemon-swsh-sword-and-shield-promo-cards-galarian-perrserker-swsh008-prerelease-promo",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card9: {
                get name() {return "Cinccino"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 8.81, num: 9, rarity: 0, type: "colorless", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/208266/pokemon-swsh-sword-and-shield-promo-cards-cinccino-swsh009-prerelease-promo",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card10: {
                get name() {return "Gossifleur"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 0.57, num: 10, rarity: 0, type: "grass", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/206429/pokemon-swsh-sword-and-shield-promo-cards-gossifleur-swsh010",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card11: {
                get name() {return "Wooloo"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 0.72, num: 11, rarity: 0, type: "colorless", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/206427/pokemon-swsh-sword-and-shield-promo-cards-wooloo-swsh011",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card12: {
                get name() {return "Morpeko"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.19, num: 12, rarity: 0, type: "electric", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/206428/pokemon-swsh-sword-and-shield-promo-cards-morpeko-swsh012",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card13: {
                get name() {return "Galarian Ponyta"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 3.50, num: 13, rarity: 0, type: "psychic", holo: 3,
                infoLink: "https://www.tcgplayer.com/product/206430/pokemon-swsh-sword-and-shield-promo-cards-galarian-ponyta-swsh013",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card14: {
                get name() {return "Rillaboom V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.26, num: 14, rarity: 0, type: "grass", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/206421/pokemon-swsh-sword-and-shield-promo-cards-rillaboom-v-swsh014",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card15: {
                get name() {return "Cinderace V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.33, num: 15, rarity: 0, type: "fire", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/206419/pokemon-swsh-sword-and-shield-promo-cards-cinderace-v-swsh015",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card16: {
                get name() {return "Inteleon V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.09, num: 16, rarity: 0, type: "water", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/206418/pokemon-swsh-sword-and-shield-promo-cards-inteleon-v-swsh016",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card17: {
                get name() {return "Toxtricity V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.33, num: 17, rarity: 0, type: "electric", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/206425/pokemon-swsh-sword-and-shield-promo-cards-toxtricity-v-swsh017",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card18: {
                get name() {return "Zacian V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 2.38, num: 18, rarity: 0, type: "metal", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/214233/pokemon-swsh-sword-and-shield-promo-cards-zacian-v-swsh018",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card19: {
                get name() {return "Zamazenta V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.31, num: 19, rarity: 0, type: "metal", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/214234/pokemon-swsh-sword-and-shield-promo-cards-zamazenta-v-swsh019",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card20: {
                get name() {return "Pikachu"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 4.02, num: 20, rarity: 0, type: "electric", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/214241/pokemon-swsh-sword-and-shield-promo-cards-pikachu-swsh020",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
            card21: {
                get name() {return "Polteageist V"+holoCheck(this.holo)+" | "+packs.swshPromo.name2+" "+zeroFill(this.num)+"/"+packs.swshPromo.total},
                price: 1.77, num: 21, rarity: 0, type: "psychic", holo: 1,
                infoLink: "https://www.tcgplayer.com/product/214235/pokemon-swsh-sword-and-shield-promo-cards-polteageist-v-swsh021",
                get img() {return "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH"+zeroFill(this.num)+".png"}
            },
        }
    }
}
