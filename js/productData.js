const swsh1Pack = function() { openCard("", "", "swsh1", "", true) };
const swsh2Pack = function() { openCard("", "", "swsh2", "", true) };
const swsh3Pack = function() { openCard("", "", "swsh3", "", true) };

const product = {
    prod0: {
        name: "Galar Collection (Grookey)",
        desc: "<ul><li>Grookey foil promo card</li><li>Scorbunny and Sobble cards</li><li>Zacian V or Zamazenta V jumbo card</li><li>4x Sword & Shield booster packs</li></ul>",
        price: 19.99, totalContents: 11,
        contents: [
            function() { openCard("promo", 1, "swshPromo") },
            function() { openCard("common", 13, "swsh1") },
            function() { openCard("common", 22, "swsh1") },
            function() { randSel2(
                'openCard("ultraRare", 17, "swsh1", "", "", true)',
                'openCard("ultraRare", 18, "swsh1", "", "", true)'
            )},
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod1: {
        name: "Galar Collection (Scorbunny)",
        desc: "<ul><li>Scorbunny foil promo card</li><li>Grookey and Sobble cards</li><li>Zacian V or Zamazenta V jumbo card</li><li>4x Sword & Shield booster packs</li></ul>",
        price: 19.99, totalContents: 11,
        contents: [
            function() { openCard("promo", 2, "swshPromo") },
            function() { openCard("common", 6, "swsh1") },
            function() { openCard("common", 22, "swsh1") },
            function() { randSel2(
                'openCard("ultraRare", 17, "swsh1", "", "", true)',
                'openCard("ultraRare", 18, "swsh1", "", "", true)'
            )},
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod2: {
        name: "Galar Collection (Sobble)",
        desc: "<ul><li>Sobble foil promo card</li><li>Grookey and Scorbunny cards</li><li>Zacian V or Zamazenta V jumbo card</li><li>4x Sword & Shield booster packs</li></ul>",
        price: 19.99, totalContents: 11,
        contents: [
            function() { openCard("promo", 3, "swshPromo") },
            function() { openCard("common", 6, "swsh1") },
            function() { openCard("common", 13, "swsh1") },
            function() { randSel2(
                'openCard("ultraRare", 17, "swsh1", "", "", true)',
                'openCard("ultraRare", 18, "swsh1", "", "", true)'
            )},
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod3: {
        name: "Sword & Shield Elite Trainer Box (Zacian)",
        desc: "<ul><li>8x Sword & Shield Base Set booster packs</li><li>45 Energy cards</li></ul>",
        price: 39.99, totalContents: 9,
        contents: [
            function() { openCard("", "", "energy", "", true) },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod4: {
        name: "Sword & Shield Elite Trainer Box (Zamazenta)",
        desc: "<ul><li>8x Sword & Shield Base Set booster packs</li><li>45 Energy cards</li></ul>",
        price: 39.99, totalContents: 9,
        contents: [
            function() { openCard("", "", "energy", "", true) },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod5: {
        name: "Toxtricity V Box",
        desc: "<ul><li>Toxtricity V foil promo card</li><li>Toxtricity V jumbo card</li><li>4x Sword & Shield booster packs</li></ul>",
        price: 19.99, totalContents: 9,
        contents: [
            function() { openCard("promo", 17, "swshPromo") },
            function() { openCard("promo", 17, "swshPromo", "", "", true) },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod6: {
        name: "Galar Partners Tin (Grookey)",
        desc: "<ul><li>Rillaboom V foil promo card</li><li>5x Sword & Shield booster packs</li></ul>",
        price: 24.99, totalContents: 9,
        contents: [
            function() { openCard("promo", 14, "swshPromo") },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod7: {
        name: "Galar Partners Tin (Scorbunny)",
        desc: "<ul><li>Cinderace V foil promo card</li><li>5x Sword & Shield booster packs</li></ul>",
        price: 24.99, totalContents: 9,
        contents: [
            function() { openCard("promo", 15, "swshPromo") },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod8: {
        name: "Galar Partners Tin (Sobble)",
        desc: "<ul><li>Inteleon V foil promo card</li><li>5x Sword & Shield booster packs</li></ul>",
        price: 24.99, totalContents: 9,
        contents: [
            function() { openCard("promo", 16, "swshPromo") },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod9: {
        name: "Meowth VMAX Special Collection",
        desc: "<ul><li>Meowth V foil promo card</li><li>Meowth VMAX foil promo card</li><li>Meowth VMAX jumbo card</li><li>5x Sword & Shield booster packs</li></ul>",
        price: 24.99, totalContents: 11,
        contents: [
            function() { openCard("promo", 4, "swshPromo") },
            function() { openCard("promo", 5, "swshPromo") },
            function() { openCard("promo", 5, "swshPromo", "", "", true) },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod10: {
        name: "Collector Chest (Spring 2020)",
        desc: "<ul><li>Grookey foil promo card</li><li>Scorbunny foil promo card</li><li>Sobble foil promo card</li><li>5x Sword & Shield booster packs</li></ul>",
        price: 24.99, totalContents: 8,
        contents: [
            function() { openCard("promo", 1, "swshPromo") },
            function() { openCard("promo", 2, "swshPromo") },
            function() { openCard("promo", 3, "swshPromo") },
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod11: {
        name: "Sword & Shield Build & Battle Box",
        desc: "<ul><li>1 of 4 unique foil promo cards</li><li>23-card Evolution pack</li><li>4x Sword & Shield Base Set booster packs</li></ul>",
        price: 19.99, totalContents: 27,
        contents: [
            function() { randSel4(
                'openCard("promo", 6, "swshPromo")',
                'openCard("promo", 7, "swshPromo")',
                'openCard("promo", 8, "swshPromo")',
                'openCard("promo", 9, "swshPromo")'
            )},
            swsh1Pack, swsh1Pack, swsh1Pack, swsh1Pack]
    },
    prod12: {
        name: "Polteageist V Box",
        desc: "<ul><li>Polteageist V foil promo card</li><li>Polteageist V jumbo card</li><li>4x Sword & Shield booster packs</li></ul>",
        price: 19.99, totalContents: 9,
        contents: [
            function() { openCard("promo", 21, "swshPromo") },
            function() { openCard("promo", 21, "swshPromo", "", "", true) },
            swsh1Pack, swsh1Pack, swsh2Pack, swsh2Pack]
    },
    prod13: {
        name: "Sword & Shield Figure Collection",
        desc: "<ul><li>Pikachu full art foil promo card</li><li>Figure of Grookey, Scorbunny, and Sobble</li><li>4x Sword & Shield booster packs</li></ul>",
        price: 19.99, totalContents: 6,
        contents: [
            function() { openCard("promo", 20, "swshPromo") },
            swsh1Pack, swsh1Pack, swsh2Pack, swsh2Pack]
    },
}
