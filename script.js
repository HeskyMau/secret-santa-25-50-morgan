const infoWindow = document.getElementById('info-window');
const contentInfo = document.getElementById('content');
const closeBtn = document.getElementById('close-btn');

const contents = [
    "Les derniers jours au travail avaient été particuliers, depuis le scandal que ton ancienne collègue avait fait. Tu l'aperçois au fond de la boutique, tenant un sac avec ses effets personnels. Elle marche lentement vers toi tel un fantôme. Lorsqu'elle t'atteint, elle s'arrête, et murmure sans même te regarder : \"Sans rancune.\" Tu sens le léger sourire dans sa voix et, en un instant, elle disparaît, comme si elle n'avait jamais été là.",
    "Dans un univers parallèle, tu sillonnes majestueusement les cieux, baguette en main, chevauchant non pas un balai, mais un noble Noir des Hébrides - comme il se doit. Escortée d'un dragonnier-militaire, tu endosses le rôle ô combien modeste de sauveuse de l'humanité : il te faut terrasser un abominable Fléau contrôleur d'esprits. Une broutille pour l'embrumée badass que tu es, en somme.",
    "Dans une autre vie, beaucoup plus jeune, tu jettes un souafle à la tête d'un jeune homme aux cheveux noirs. Puis tu te vois poursuivre ton aventure avec lui, tous deux perchés sur des balais, dans un stade avec une foule en fureur.",
    "Un soir, après avoir gagné ta maison à Cardiff, dans l'entrée, bercée d'une douce lumière bleue, tu aperçois une pile de quelques vêtements. Lorsque tu t'en rapproches, tu réalises qu'il s'agit de robes, finement brodées, léguées par une de ces dames dont la famille produit des textiles d'une qualité remarquable, quelque part, au cœur des contrées germaniques. Peut-être qu'en laissant un petit mot expliquant ceci, la donatrice s'imaginait qu'elles pourraient te servir, pour éblouir ceux de ton sang, lorsque tu songes à leur imposer ton renom.",
    "Horglup",
    "PHOTOBOMB <div class=\"img-container\"><img src=\"./img/batman.jpg\" alt=\"batman\" class=\"memories\" /> <img src=\"./img/idk.jpg\" alt=\"idk\" class=\"memories\" /></div>",
    "Dans la brume anglaise d'un matin d'hiver, tu peux sentir quelques flocons tomber sur tes cheveux. Lorsque tu tentes de les retirer, tu t'aperçois que la quantité s'accentue. Devant toi, un livre apparaît sous les flocons qui disparaissent. Tu peux y lire des inscriptions runiques d'un auteur allemand et un petit mot dans le coin de la première page : \"Peut-être que celui-ci, tu ne l'as pas encore lu\".",
    "Une fois, tu as envoyé une longue lettre dans laquelle tu as mis toute ta créativité. C'était le 3 avril 2023, lorsque tu as fait part de ton souhait de donner vie à l'Allée des Embrumes. A ce moment-là, cette jeune blonde ne pensait pas avoir fait la rencontre d'une commerçante bienveillante, pleine d'idées et à qui, presque deux ans plus tard, elle passerait le flambeau en lui faisant entièrement confiance.",
    "42",
    "Horglup, mais baveux cette fois-ci"
]

for (let i = 0; i < contents.length; ++i) {
    const crystal = document.getElementById(`crystal${i + 1}`);
    if (crystal) {
        crystal.addEventListener('click', (e) => {
            e.stopPropagation();
            contentInfo.innerHTML = contents[i];
            infoWindow.classList.add('show');
        });
    }
}

closeBtn.addEventListener('click', () => {
    infoWindow.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (infoWindow.classList.contains('show')) {
        if (!infoWindow.contains(e.target)) {
            infoWindow.classList.remove('show');
        }
    }
});
