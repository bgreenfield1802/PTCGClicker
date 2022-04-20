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
    }
}
