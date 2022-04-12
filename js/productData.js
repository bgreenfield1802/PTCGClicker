const product = {
    prod0: {
        name: "Galar Collection (Grookey)",
        desc: "<ul><li>Grookey foil promo card</li><li>Scorbunny and Sobble cards</li><li>Zacian V or Zamazenta V jumbo card</li><li>4x Sword & Shield Base Set booster packs</li></ul>",
        price: 20, totalContents: 11,
        contents: [
            function() { openCard("promo", 1, "swshPromo") },
            function() { openCard("common", 13, "swsh1") },
            function() { openCard("common", 22, "swsh1") },
            function() { randSel2(
                'openCard("ultraRare", 17, "swsh1", "", "", true)',
                'openCard("ultraRare", 18, "swsh1", "", "", true)'
            )},
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) }]
    },
    prod1: {
        name: "Galar Collection (Scorbunny)",
        desc: "<ul><li>Scorbunny foil promo card</li><li>Grookey and Sobble cards</li><li>Zacian V or Zamazenta V jumbo card</li><li>4x Sword & Shield Base Set booster packs</li></ul>",
        price: 20, totalContents: 11,
        contents: [
            function() { openCard("promo", 2, "swshPromo") },
            function() { openCard("common", 6, "swsh1") },
            function() { openCard("common", 22, "swsh1") },
            function() { randSel2(
                'openCard("ultraRare", 17, "swsh1", "", "", true)',
                'openCard("ultraRare", 18, "swsh1", "", "", true)'
            )},
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) }]
    },
    prod2: {
        name: "Galar Collection (Sobble)",
        desc: "<ul><li>Sobble foil promo card</li><li>Grookey and Scorbunny cards</li><li>Zacian V or Zamazenta V jumbo card</li><li>4x Sword & Shield Base Set booster packs</li></ul>",
        price: 20, totalContents: 11,
        contents: [
            function() { openCard("promo", 3, "swshPromo") },
            function() { openCard("common", 6, "swsh1") },
            function() { openCard("common", 13, "swsh1") },
            function() { randSel2(
                'openCard("ultraRare", 17, "swsh1", "", "", true)',
                'openCard("ultraRare", 18, "swsh1", "", "", true)'
            )},
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) },
            function() { openCard("", "", "swsh1", "", true) }]
    }
}
