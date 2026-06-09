cat > /mnt/user-data/outputs/bac-francais/script.js << 'ENDOFFILE'
/* ═══════════════════════════════════════════════════════════════
   DATASET — Bac de Français
   Chaque question possède désormais un champ `explanation`
   affiché après validation pour renforcer l'apprentissage.
═══════════════════════════════════════════════════════════════ */
const dataset = {

  /* ══════════════════════════════════════════════════════
     1. FIGURES DE STYLE
  ══════════════════════════════════════════════════════ */
  figures: [
    {
      text: "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine, Andromaque)",
      options: ["Allitération","Assonance","Oxymore","Litote"],
      answers: ["Allitération"],
      explanation: "La répétition du son [s] tout au long du vers crée une allitération sifflante qui imite phonétiquement le bruit des serpents."
    },
    {
      text: "« La Cigale, ayant chanté / Tout l'été… » (La Fontaine)",
      options: ["Personnification","Allégorie","Comparaison","Oxymore"],
      answers: ["Personnification"],
      explanation: "La cigale chante et a chanté « tout l'été » comme un être humain — elle possède une activité volontaire. La Fontaine prête aux animaux des comportements humains : c'est la personnification."
    },
    {
      text: "« Un vieillard en oripeaux, un mendiant transi, un spectre de misère »",
      options: ["Accumulation","Gradation","Anaphore","Chiasme"],
      answers: ["Accumulation","Gradation"],
      explanation: "C'est une accumulation (liste de trois termes) mais aussi une gradation car l'intensité croît : du vieillard pauvre au spectre, l'image se durcit progressivement."
    },
    {
      text: "« Ce garçon n'est pas un idiot. »",
      options: ["Litote","Euphémisme","Antiphrase (Ironie)","Hyperbole"],
      answers: ["Litote"],
      explanation: "La litote dit moins pour suggérer davantage : nier qu'il soit un idiot revient à affirmer discrètement qu'il est intelligent. À ne pas confondre avec l'euphémisme, qui atténue une réalité désagréable."
    },
    {
      text: "« Le Roi-Soleil » (pour désigner Louis XIV)",
      options: ["Périphrase","Antonomase","Métaphore","Métonymie"],
      answers: ["Périphrase","Antonomase"],
      explanation: "C'est une périphrase (on remplace le nom propre par un groupe de mots) et une antonomase (un nom commun ou une périphrase se substitue à un nom propre, et inversement). Les deux figures coexistent ici."
    },
    {
      text: "« Des éclairs de joie, des tonnerres d'applaudissements, une tempête de cris »",
      options: ["Métaphore","Comparaison","Personnification","Litote"],
      answers: ["Métaphore"],
      explanation: "On compare les réactions du public à des phénomènes météorologiques (éclairs, tonnerres, tempête) sans outil comparatif — c'est donc une métaphore filée."
    },
    {
      text: "« Les arbres gémissaient sous la tempête. »",
      options: ["Personnification","Allégorie","Métaphore","Comparaison"],
      answers: ["Personnification"],
      explanation: "« Gémir » est une action humaine attribuée aux arbres : c'est la personnification. L'allégorie, elle, représente une notion abstraite par un personnage ou une scène narrative."
    },
    {
      text: "« Je verserai un torrent de sang pour me venger. »",
      options: ["Hyperbole","Métaphore","Litote","Antithèse"],
      answers: ["Hyperbole"],
      explanation: "L'exagération démesurée (un torrent de sang) amplifie l'idée de vengeance bien au-delà du réel : c'est une hyperbole à effet dramatique."
    },
    {
      text: "« Un silence éloquent s'installa entre les deux rivaux. »",
      options: ["Oxymore","Antithèse","Chiasme","Périphrase"],
      answers: ["Oxymore"],
      explanation: "L'oxymore réunit en un seul groupe nominal deux termes contradictoires : le silence est par définition l'absence de parole, or 'éloquent' qualifie justement un discours qui parle bien."
    },
    {
      text: "« Le poète est comme l'albatros, voyageur ailé. »",
      options: ["Comparaison","Métaphore","Personnification","Allégorie"],
      answers: ["Comparaison"],
      explanation: "La présence de l'outil comparatif 'comme' indique une comparaison explicite. Si l'on disait 'Le poète est l'albatros', ce serait une métaphore."
    },
    {
      text: "« Boire la coupe jusqu'à la lie. »",
      options: ["Métonymie","Synecdoque","Métaphore","Périphrase"],
      answers: ["Métonymie"],
      explanation: "La 'coupe' (le contenant) désigne ce qu'elle contient : la boisson, ou ici l'épreuve à traverser. C'est une métonymie de contenant pour contenu."
    },
    {
      text: "« Sa décision n'est pas mauvaise. » (pour dire qu'elle est bonne)",
      options: ["Litote","Euphémisme","Antiphrase (Ironie)","Hyperbole"],
      answers: ["Litote"],
      explanation: "On nie le contraire pour affirmer avec discrétion : dire 'pas mauvaise' sous-entend 'bonne', voire 'excellente'. C'est la définition même de la litote."
    },
    {
      text: "« Les forces de l'ordre sont intervenues rapidement. » (pour désigner les policiers)",
      options: ["Périphrase","Métonymie","Métaphore","Antonomase"],
      answers: ["Périphrase"],
      explanation: "On remplace un mot simple (policiers) par un groupe de mots qui le décrit sans le nommer : c'est une périphrase à valeur euphémique ici."
    },
    {
      text: "« Quel beau temps ! » (alors qu'il pleut à torrents)",
      options: ["Antiphrase (Ironie)","Oxymore","Litote","Euphémisme"],
      answers: ["Antiphrase (Ironie)"],
      explanation: "L'antiphrase dit le contraire de ce qu'on pense pour se moquer ou ironiser. Ici l'énonciateur sait pertinemment que le temps est mauvais."
    },
    {
      text: "« Elle a versé des pleurs, des larmes, des torrents de désespoir. »",
      options: ["Gradation","Accumulation","Chiasme","Anaphore"],
      answers: ["Gradation","Accumulation"],
      explanation: "C'est une accumulation (liste) et une gradation ascendante : on passe des pleurs aux larmes, puis aux torrents — l'intensité croît à chaque terme."
    },
    {
      text: "« La ville lumière attire les touristes du monde entier. »",
      options: ["Périphrase","Métaphore","Métonymie","Synecdoque"],
      answers: ["Périphrase"],
      explanation: "'La ville lumière' est un groupe de mots qui remplace 'Paris' sans le nommer — c'est une périphrase. La métaphore serait présente si Paris était comparé à une lumière dans un autre contexte."
    },
    {
      text: "« Un mort-vivant errait dans les couloirs du château. »",
      options: ["Oxymore","Antithèse","Périphrase","Hyperbole"],
      answers: ["Oxymore"],
      explanation: "'Mort' et 'vivant' sont deux termes antinomiques accolés en un seul mot composé : c'est l'oxymore par excellence. L'antithèse, elle, oppose deux idées dans des groupes syntaxiques distincts."
    },
    {
      text: "« Un vent à décorner les bœufs soufflait sur la falaise. »",
      options: ["Hyperbole","Métaphore","Personnification","Litote"],
      answers: ["Hyperbole"],
      explanation: "L'image exagère la violence du vent de façon comique et démesurée : c'est une hyperbole populaire."
    },
    {
      text: "« Le cœur a ses raisons que la raison ne connaît point. » (Pascal)",
      options: ["Antithèse","Oxymore","Chiasme","Parallélisme"],
      answers: ["Antithèse"],
      explanation: "Pascal oppose deux réalités distinctes — la raison du cœur (sentiment) et la raison de l'esprit (logique) — dans une même phrase : c'est une antithèse. Le chiasme inverserait la structure syntaxique."
    },
    {
      text: "« Un roi chantait en bas, en haut mourait un dieu. » (Hugo)",
      options: ["Chiasme","Antithèse","Oxymore","Anaphore"],
      answers: ["Chiasme","Antithèse"],
      explanation: "La structure Sujet-Verbe s'inverse dans la seconde proposition (Verbe-Sujet) : c'est un chiasme. De plus, roi vs dieu et bas vs haut créent une antithèse symbolique entre le profane et le sacré."
    },
    {
      text: "« La Faucheuse vient de frapper à sa porte. » (La Faucheuse pour la Mort)",
      options: ["Allégorie","Périphrase","Comparaison","Litote"],
      answers: ["Allégorie","Périphrase"],
      explanation: "La Mort est représentée par un personnage allégorique (la Faucheuse, image iconique depuis le Moyen Âge), et ce nom propre est aussi une périphrase qui remplace le mot 'mort'."
    },
    {
      text: "« Ses cheveux d'or flottaient au vent. »",
      options: ["Métaphore","Comparaison","Périphrase","Personnification"],
      answers: ["Métaphore"],
      explanation: "Les cheveux sont identifiés à de l'or sans outil comparatif : c'est une métaphore in absentia (le terme comparé est présent, mais non l'outil de comparaison)."
    },
    {
      text: "« L'or noir est au cœur des tensions géopolitiques. » (L'or noir pour le pétrole)",
      options: ["Périphrase","Métaphore","Synecdoque","Oxymore"],
      answers: ["Périphrase","Métaphore"],
      explanation: "'L'or noir' est une périphrase (groupe de mots pour 'pétrole') et une métaphore (comparaison implicite avec l'or, précieux et convoité, adapté à la couleur sombre du pétrole)."
    },
    {
      text: "« Cette obscure clarté qui tombe des étoiles » (Corneille, Le Cid)",
      options: ["Antithèse","Oxymore","Périphrase","Hyperbole"],
      answers: ["Oxymore"],
      explanation: "'Obscure' et 'clarté' sont deux termes contradictoires réunis dans un même groupe nominal : c'est un oxymore. L'antithèse séparerait les deux termes en propositions distinctes."
    },
    {
      text: "« Je vis, je meurs ; je me brûle et me noie. » (Louise Labé)",
      options: ["Antithèse","Chiasme","Métaphore","Euphémisme"],
      answers: ["Antithèse"],
      explanation: "Vivre/mourir, brûler/se noyer : chaque paire oppose deux contraires absolus pour exprimer la violence des sentiments amoureux. C'est une suite d'antithèses."
    },
    {
      text: "« Va, je ne te hais point. » (Corneille, Le Cid)",
      options: ["Litote","Euphémisme","Métaphore","Personnification"],
      answers: ["Litote"],
      explanation: "Chimène nie la haine pour exprimer indirectement son amour. 'Je ne te hais point' dit infiniment moins que ce qu'elle ressent : c'est la litote la plus célèbre du théâtre classique."
    },
    {
      text: "« Je meurs, je suis mort, je suis enterré. » (Molière, L'Avare)",
      options: ["Gradation","Hyperbole","Anaphore","Chiasme"],
      answers: ["Gradation","Hyperbole"],
      explanation: "La série passe de mourir à être mort puis enterré : gradation descendante vers le pire. L'ensemble est aussi une hyperbole comique d'Harpagon qui exagère sa douleur de façon burlesque."
    },
    {
      text: "« La Nature est un temple où de vivants piliers… » (Baudelaire, Correspondances)",
      options: ["Métaphore","Comparaison","Allégorie","Périphrase"],
      answers: ["Métaphore"],
      explanation: "La Nature est assimilée à un temple sans outil comparatif : c'est une métaphore inaugurale qui ouvre le système des 'correspondances' baudelairiennes."
    },
    {
      text: "« La Terre est bleue comme une orange. » (Paul Éluard)",
      options: ["Comparaison","Métaphore","Oxymore","Personnification"],
      answers: ["Comparaison"],
      explanation: "L'outil comparatif 'comme' est présent : c'est bien une comparaison. Son caractère surréaliste (une orange n'est pas bleue) illustre l'image poétique irrationnelle chère à Éluard."
    },
    {
      text: "« Rome a voté, Rome est soumise, Rome est libre. »",
      options: ["Anaphore","Parallélisme","Gradation","Métonymie"],
      answers: ["Anaphore"],
      explanation: "La répétition de 'Rome' en tête de chaque proposition constitue une anaphore. Le parallélisme des structures syntaxiques est présent aussi, mais l'anaphore est la figure dominante et la plus notable."
    },
    {
      text: "« Il faut manger pour vivre, et non pas vivre pour manger. » (Molière)",
      options: ["Chiasme","Antithèse","Oxymore","Anaphore"],
      answers: ["Chiasme"],
      explanation: "Les termes 'manger' et 'vivre' s'inversent entre les deux propositions selon le schéma A-B / B-A : c'est la définition du chiasme."
    },
    {
      text: "« Un silence assourdissant envahit la pièce. »",
      options: ["Oxymore","Antithèse","Litote","Métaphore"],
      answers: ["Oxymore"],
      explanation: "'Assourdissant' qualifie un bruit extrêmement fort ; accolé à 'silence', il crée une contradiction interne en un seul groupe nominal : oxymore."
    },
    {
      text: "« Le soleil noir de la Mélancolie » (Gérard de Nerval)",
      options: ["Oxymore","Antithèse","Périphrase","Comparaison"],
      answers: ["Oxymore"],
      explanation: "Le soleil symbolise la lumière et la vie ; 'noir' en est le contraire. Cette alliance de mots contradictoires traduit l'état dépressif du poète : c'est un oxymore célèbre."
    },
    {
      text: "« Hâtez-vous lentement. » (Boileau)",
      options: ["Oxymore","Antithèse","Litote","Chiasme"],
      answers: ["Oxymore"],
      explanation: "Se hâter (aller vite) et aller lentement sont des contraires réunis en une même injonction. Boileau conseille ainsi la rigueur dans le travail créatif : oxymore à valeur proverbiale."
    },
    {
      text: "« Ô temps ! suspends ton vol, et vous, heures propices ! » (Lamartine)",
      options: ["Apostrophe","Personnification","Allégorie","Hyperbole"],
      answers: ["Apostrophe","Personnification"],
      explanation: "Le poète s'adresse directement au Temps et aux heures (apostrophe) et leur prête une volonté ('suspends ton vol') comme à des êtres capables d'obéir (personnification)."
    },
    {
      text: "« Ma jeunesse ne fut qu'un ténébreux orage » (Baudelaire)",
      options: ["Métaphore","Comparaison","Oxymore","Antithèse"],
      answers: ["Métaphore"],
      explanation: "La jeunesse est identifiée à un orage ténébreux sans outil comparatif. C'est une métaphore in praesentia : les deux termes (jeunesse / orage) sont tous deux exprimés."
    },
    {
      text: "« C'est un roc ! c'est un pic ! c'est un cap ! Que dis-je, c'est un cap ? C'est une péninsule ! » (Rostand)",
      options: ["Gradation","Hyperbole","Accumulation","Comparaison"],
      answers: ["Gradation","Hyperbole"],
      explanation: "La série roc → pic → cap → péninsule est une gradation ascendante (chaque terme désigne une masse plus grande). L'ensemble relève aussi de l'hyperbole comique pour décrire le nez de Cyrano."
    },
    {
      text: "« Les voiles s'éloignaient à l'horizon. » (pour désigner les bateaux)",
      options: ["Synecdoque","Métonymie","Périphrase","Métaphore"],
      answers: ["Synecdoque"],
      explanation: "La synecdoque désigne le tout par une de ses parties (ou inversement). Ici, 'les voiles' (partie du bateau) désigne les bateaux eux-mêmes."
    },
    {
      text: "« Le poète est semblable au prince des nuées » (Baudelaire)",
      options: ["Comparaison","Métaphore","Allégorie","Périphrase"],
      answers: ["Comparaison"],
      explanation: "L'outil comparatif 'semblable à' est explicite. C'est la comparaison inaugurale du poème L'Albatros, qui développera ensuite la métaphore filée du poète-oiseau."
    },
    {
      text: "« Tout l'univers obéit à l'Amour. » (La Fontaine)",
      options: ["Allégorie","Personnification","Hyperbole","Métonymie"],
      answers: ["Allégorie"],
      explanation: "L'Amour (avec majuscule) est une notion abstraite personnifiée en puissance souveraine : c'est une allégorie. La personnification est un procédé inclus dans l'allégorie mais moins précis ici."
    }
  ],

  /* ══════════════════════════════════════════════════════
     2. GRAMMAIRE
  ══════════════════════════════════════════════════════ */
  grammaire: [
    {
      text: "« S'il [avait fait] beau, nous serions sortis. » À quel temps et mode est le verbe entre crochets ?",
      options: ["Indicatif plus-que-parfait","Subjonctif plus-que-parfait","Conditionnel passé","Indicatif imparfait"],
      answers: ["Indicatif plus-que-parfait"],
      explanation: "Dans une hypothèse du 3e type (irréel du passé), la subordonnée introduite par 'si' se met toujours à l'indicatif plus-que-parfait (jamais au conditionnel)."
    },
    {
      text: "« Il court [de peur qu'il ne soit en retard]. » Quelle relation logique est exprimée ici ?",
      options: ["Le but (la crainte)","La cause","La conséquence","La condition"],
      answers: ["Le but (la crainte)"],
      explanation: "'De peur que' exprime une crainte et introduit une subordonnée de but négatif : on agit pour éviter quelque chose. Le verbe se met au subjonctif, comme toujours pour le but."
    },
    {
      text: "« Je ne pense pas [qu'il vienne]. » À quel mode est le verbe de la proposition subordonnée ?",
      options: ["Subjonctif","Indicatif","Conditionnel","Impératif"],
      answers: ["Subjonctif"],
      explanation: "Les verbes de doute, d'opinion à la forme négative ou interrogative (ne pas penser, ne pas croire…) imposent le subjonctif dans la subordonnée."
    },
    {
      text: "« C'est l'ami [auquel] je pense souvent. » Quelle est la classe grammaticale précise du mot entre crochets ?",
      options: ["Pronom relatif composé","Pronom interrogatif","Déterminant démonstratif","Conjonction de subordination"],
      answers: ["Pronom relatif composé"],
      explanation: "'Auquel' = 'à + lequel' : c'est un pronom relatif composé introduisant une relative. Il reprend l'antécédent 'ami' et est COI du verbe 'penser à'."
    },
    {
      text: "« Dis-moi [quand tu partiras en vacances]. » Quelle est la nature de la proposition entre crochets ?",
      options: ["Subordonnée interrogative indirecte","Subordonnée relative","Subordonnée conjonctive complétive","Subordonnée circonstancielle de temps"],
      answers: ["Subordonnée interrogative indirecte"],
      explanation: "La question directe serait 'Quand pars-tu ?'. Enchâssée après 'dis-moi', elle devient une interrogative indirecte, COD du verbe 'dis'."
    },
    {
      text: "« [Le travail terminé], les ouvriers quittèrent le chantier. » Quelle est la nature de la proposition entre crochets ?",
      options: ["Proposition subordonnée participiale","Proposition subordonnée infinitive","Proposition subordonnée relative","Proposition indépendante"],
      answers: ["Proposition subordonnée participiale"],
      explanation: "La proposition participiale (ou absolue) a son propre sujet ('le travail') différent de celui de la principale, et son verbe est au participe passé ('terminé'). Elle exprime ici une relation temporelle."
    },
    {
      text: "« Il est si fatigué [que personne ne veut le déranger]. » Quelle relation logique est introduite ici ?",
      options: ["La conséquence","La cause","L'opposition","Le but"],
      answers: ["La conséquence"],
      explanation: "La corrélation 'si… que' exprime une conséquence : la fatigue est telle qu'elle entraîne un résultat (personne ne le dérange)."
    },
    {
      text: "« Que veux-tu que je fasse de ce vieux dictionnaire ? » De quel type d'interrogation s'agit-il ?",
      options: ["Interrogation partielle","Interrogation totale","Interrogation indirecte","Interrogation rhétorique"],
      answers: ["Interrogation partielle"],
      explanation: "L'interrogation partielle porte sur un élément précis de la phrase (ici l'objet : 'que / quoi'). L'interrogation totale, elle, attend une réponse 'oui' ou 'non'."
    },
    {
      text: "« Soudain, l'orateur entra et la foule [se tut]. » Quelle est la valeur du passé simple ici ?",
      options: ["Action soudaine / de premier plan","Action durable","Action répétitive","Arrière-plan descriptif"],
      answers: ["Action soudaine / de premier plan"],
      explanation: "Le passé simple marque les actions ponctuelles, délimitées, qui font avancer la narration : ce sont les événements de premier plan. L'imparfait, lui, assure l'arrière-plan descriptif."
    },
    {
      text: "« Ne devriez-vous pas être en train de réviser votre français ? » De quel type d'interrogation s'agit-il ?",
      options: ["Interrogation rhétorique (ou oratoire)","Interrogation totale","Interrogation partielle","Interrogation indirecte"],
      answers: ["Interrogation rhétorique (ou oratoire)"],
      explanation: "L'interrogation rhétorique est une fausse question : l'énonciateur connaît la réponse et cherche à persuader ou à reprocher plutôt qu'à obtenir une information."
    },
    {
      text: "« La pièce de théâtre [que] j'ai vue hier soir était excellente. » Quelle est la fonction du pronom relatif entre crochets ?",
      options: ["Complément d'objet direct (COD) du verbe 'ai vue'","Sujet du verbe 'ai vue'","Complément du nom 'pièce'","Attribut du sujet"],
      answers: ["Complément d'objet direct (COD) du verbe 'ai vue'"],
      explanation: "'Que' remplace 'la pièce' et est COD du verbe 'ai vue'. C'est pourquoi le participe passé 'vue' s'accorde au féminin singulier : le COD est placé avant le verbe."
    },
    {
      text: "« Quoi [que] tu dises, je ne changerai pas d'avis. » Quelle relation logique est exprimée ?",
      options: ["La concession","La cause","La condition","Le but"],
      answers: ["La concession"],
      explanation: "'Quoi que' (= quelle que soit la chose que) introduit une concession : peu importe ce que tu dis, cela ne changera rien. Le verbe est au subjonctif."
    },
    {
      text: "« Je me réjouis [que tu sois là parmi nous aujourd'hui]. » Quelle est la nature de la proposition entre crochets ?",
      options: ["Subordonnée conjonctive complétive","Subordonnée relative","Subordonnée circonstancielle","Proposition principale"],
      answers: ["Subordonnée conjonctive complétive"],
      explanation: "La complétive introduite par 'que' complète le verbe 'se réjouir' (verbe de sentiment) ; elle est COD. Comme le verbe exprime un sentiment, la subordonnée est au subjonctif."
    },
    {
      text: "« Bien qu'il [fasse] froid, il est sorti sans manteau. » Quel est le mode du verbe entre crochets ?",
      options: ["Subjonctif","Indicatif","Conditionnel","Impératif"],
      answers: ["Subjonctif"],
      explanation: "'Bien que' est une locution de concession qui impose toujours le subjonctif dans la subordonnée."
    },
    {
      text: "« Il ne mange [que] des légumes. » De quel type de négation s'agit-il ?",
      options: ["Négation restrictive","Négation totale","Négation lexicale","Négation partielle"],
      answers: ["Négation restrictive"],
      explanation: "La négation restrictive 'ne… que' signifie 'seulement' : elle restreint l'action à un seul objet. Ce n'est pas une vraie négation mais une restriction (équivalent de 'uniquement')."
    },
    {
      text: "« Je me demande [si le train arrivera à l'heure]. » Quelle est la nature de cette proposition ?",
      options: ["Subordonnée interrogative indirecte","Subordonnée relative","Subordonnée conjonctive complétive","Proposition principale"],
      answers: ["Subordonnée interrogative indirecte"],
      explanation: "'Si' introduit ici une interrogation indirecte totale (la question directe serait : 'Le train arrivera-t-il à l'heure ?'). Elle est COD du verbe 'se demander'."
    },
    {
      text: "« Il travaille d'arrache-pied [pour que ses parents soient fiers]. » Quelle relation logique est exprimée ?",
      options: ["Le but","La cause","La conséquence","La concession"],
      answers: ["Le but"],
      explanation: "'Pour que' introduit toujours une subordonnée de but au subjonctif : l'action principale est accomplie en vue d'atteindre un objectif."
    },
    {
      text: "« S'il faisait beau, nous [partirions] à la mer. » À quel temps et mode est le verbe entre crochets ?",
      options: ["Conditionnel présent","Subjonctif présent","Indicatif futur simple","Indicatif imparfait"],
      answers: ["Conditionnel présent"],
      explanation: "Dans le système hypothétique du 2e type (irréel du présent) : si + imparfait → conditionnel présent dans la principale. La condition n'est pas réalisée au moment de l'énonciation."
    },
    {
      text: "« La Bruyère [peint] les travers des hommes de son siècle. » Quelle est la valeur du présent ici ?",
      options: ["Présent d'énonciation","Présent de vérité générale","Présent de narration","Présent d'habitude"],
      answers: ["Présent d'énonciation"],
      explanation: "Dans un commentaire littéraire, on utilise le présent d'énonciation pour parler de ce qu'un auteur fait dans son texte : La Bruyère 'peint' (aujourd'hui, quand on lit son œuvre)."
    },
    {
      text: "« La Terre [tourne] autour du Soleil. » Quelle est la valeur du présent ici ?",
      options: ["Présent de vérité générale","Présent d'énonciation","Présent de narration","Présent d'habitude"],
      answers: ["Présent de vérité générale"],
      explanation: "Une loi scientifique ou une vérité universelle s'exprime au présent de vérité générale : elle était vraie hier, l'est aujourd'hui et le sera demain."
    },
    {
      text: "« Il ne se passe [rien] de nouveau aujourd'hui. » De quel type de négation s'agit-il ?",
      options: ["Négation totale","Négation partielle","Négation restrictive","Négation lexicale"],
      answers: ["Négation partielle"],
      explanation: "'Rien' est un pronom indéfini à valeur négative : il nie une partie de la réalité (ce qui se passe). La négation partielle nie un élément précis, contrairement à la négation totale (ne…pas)."
    },
    {
      text: "« [Bien qu']elle ait étudié, elle redoute l'oral. » Quelle relation logique est introduite ?",
      options: ["La concession","La cause","Le but","La condition"],
      answers: ["La concession"],
      explanation: "'Bien que' marque la concession : le fait d'avoir étudié ne suffit pas à empêcher la crainte. On attendrait l'inverse logiquement — c'est ce qui définit la concession."
    },
    {
      text: "« L'eau [bout] à 100°C. » Quelle est la valeur du présent entre crochets ?",
      options: ["Présent de vérité générale","Présent d'énonciation","Présent de narration","Présent d'habitude"],
      answers: ["Présent de vérité générale"],
      explanation: "C'est une loi physique valable en tout temps et en tout lieu : présent de vérité générale (ou présent atemporel)."
    },
    {
      text: "« Je veux [que tu lises ce texte]. » Quelle est la fonction de la proposition entre crochets ?",
      options: ["Complément d'objet direct (COD)","Complément d'objet indirect (COI)","Sujet","Attribut du sujet"],
      answers: ["Complément d'objet direct (COD)"],
      explanation: "La complétive est COD du verbe 'vouloir' (on veut quelque chose). Les verbes de volonté exigent le subjonctif dans la subordonnée."
    },
    {
      text: "« [Au cas où] vous auriez un problème, prévenez-moi. » Quelle relation logique est introduite ici ?",
      options: ["La condition / L'hypothèse","La cause","La concession","Le temps"],
      answers: ["La condition / L'hypothèse"],
      explanation: "'Au cas où' introduit une hypothèse envisagée comme possible. Attention : cette locution impose le conditionnel (et non l'indicatif ou le subjonctif)."
    },
    {
      text: "« Qui n'aurait pas peur face à un tel danger ? » De quel type d'interrogation s'agit-il ?",
      options: ["Interrogation rhétorique (ou oratoire)","Interrogation totale","Interrogation partielle","Interrogation indirecte"],
      answers: ["Interrogation rhétorique (ou oratoire)"],
      explanation: "La réponse est implicite : 'tout le monde aurait peur'. Cette question ne cherche pas une réponse, elle affirme une vérité de façon persuasive — c'est l'interrogation rhétorique."
    },
    {
      text: "« L'écrivain [dont] la notoriété grandit refuse les interviews. » Quelle est la fonction du pronom relatif entre crochets ?",
      options: ["Complément du nom 'notoriété'","Complément d'objet direct","Sujet du verbe grandit","Complément d'agent"],
      answers: ["Complément du nom 'notoriété'"],
      explanation: "'Dont' remplace 'de l'écrivain' : 'la notoriété de l'écrivain'. Il est donc complément du nom 'notoriété' dans la proposition relative."
    },
    {
      text: "« Si tu révises, tu [réussiras]. » À quel temps et mode est le verbe entre crochets ?",
      options: ["Indicatif futur simple","Conditionnel présent","Indicatif présent","Subjonctif présent"],
      answers: ["Indicatif futur simple"],
      explanation: "Hypothèse du 1er type (réalisable) : si + présent → futur simple dans la principale. La condition est présentée comme réalisable."
    },
    {
      text: "« Je regarde les oiseaux [s'envoler]. » Quelle est la nature de la proposition entre crochets ?",
      options: ["Proposition subordonnée infinitive","Proposition subordonnée relative","Proposition subordonnée participiale","Proposition indépendante"],
      answers: ["Proposition subordonnée infinitive"],
      explanation: "La proposition infinitive a un sujet propre ('les oiseaux') distinct du sujet de la principale, et son verbe est à l'infinitif. Elle est COD du verbe de perception 'regarder'."
    },
    {
      text: "« Il a tant travaillé [qu'il a obtenu les félicitations du jury]. » Quelle relation logique est exprimée ?",
      options: ["La conséquence","La cause","Le but","La concession"],
      answers: ["La conséquence"],
      explanation: "La corrélation 'tant… que' marque la conséquence : l'intensité du travail entraîne un résultat. Ne pas confondre avec le but : la conséquence est un résultat effectif, le but est une intention."
    },
    {
      text: "« Tous les soirs, elle [relisait] ses fiches. » Quelle est la valeur de l'imparfait entre crochets ?",
      options: ["L'habitude / La répétition","La description","L'action coupée","Le second plan"],
      answers: ["L'habitude / La répétition"],
      explanation: "L'indicateur temporel 'tous les soirs' confirme la répétition. L'imparfait d'habitude ou itératif exprime une action qui se répète régulièrement dans le passé."
    },
    {
      text: "« Les fleurs que j'ai [cueillies] sont magnifiques. » Pourquoi le participe passé prend-il la marque du féminin pluriel ?",
      options: ["Il s'accorde avec le sujet 'j''","Il s'accorde avec le COD 'que' placé avant le verbe","Il s'accorde avec le COI 'fleurs'","L'accord est une erreur"],
      answers: ["Il s'accorde avec le COD 'que' placé avant le verbe"],
      explanation: "Règle d'accord du participe passé avec avoir : il s'accorde avec le COD si celui-ci est placé avant le verbe. 'Que' reprend 'les fleurs' (féminin pluriel), donc 'cueillies'."
    },
    {
      text: "« Selon les derniers rapports, le suspect [serait] en fuite. » Quelle est la valeur du conditionnel entre crochets ?",
      options: ["Une information incertaine / un fait non vérifié","Un souhait","Un futur dans le passé","Une condition hypothétique"],
      answers: ["Une information incertaine / un fait non vérifié"],
      explanation: "C'est le conditionnel journalistique ou épistémique : l'énonciateur rapporte une information sans en garantir la véracité. Très fréquent dans la presse pour les faits non confirmés."
    },
    {
      text: "« Le vieux pont a été détruit par la tempête. » À quelle voix est construite cette phrase ?",
      options: ["Voix passive","Voix active","Voix pronominale","Voix impersonnelle"],
      answers: ["Voix passive"],
      explanation: "La voix passive se reconnaît à l'auxiliaire 'être' + participe passé accordé + complément d'agent introduit par 'par'. Le sujet grammatical ('le pont') subit l'action."
    },
    {
      text: "« Qu'il [entre] immédiatement ! » Quelle est la valeur du subjonctif dans cette proposition indépendante ?",
      options: ["L'ordre ou l'injonction","Le souhait","L'hypothèse","L'indignation"],
      answers: ["L'ordre ou l'injonction"],
      explanation: "Dans une proposition indépendante introduite par 'que', le subjonctif exprime un ordre adressé à une 3e personne (impossible à l'impératif). C'est le subjonctif d'injonction."
    },
    {
      text: "« [Partir] est la seule solution. » Quelle est la fonction de l'infinitif entre crochets ?",
      options: ["Sujet du verbe 'est'","Complément d'objet direct (COD)","Attribut du sujet","Complément du nom"],
      answers: ["Sujet du verbe 'est'"],
      explanation: "Un infinitif peut occuper la fonction de sujet. On peut le vérifier en substituant : 'La fuite est la seule solution' — 'la fuite' est sujet. L'infinitif fonctionne ici comme un nom."
    },
    {
      text: "« [Alors que] le premier candidat était stressé, le second paraissait serein. » Quelle relation logique est exprimée ?",
      options: ["L'opposition","La cause","La conséquence","Le but"],
      answers: ["L'opposition"],
      explanation: "'Alors que' peut exprimer la simultanéité ou l'opposition. Ici, les deux attitudes contraires (stressé / serein) indiquent clairement une relation d'opposition (ou concession)."
    },
    {
      text: "« Je crains qu'il ne [vienne]. » Comment s'appelle le 'ne' employé ici ?",
      options: ["Ne explétif","Ne de négation totale","Ne de négation restrictive","Ne discordant"],
      answers: ["Ne explétif"],
      explanation: "Le 'ne explétif' apparaît après des verbes de crainte (craindre, avoir peur que…). Il n'a pas de valeur négative : il est facultatif et littéraire. 'Je crains qu'il vienne' a le même sens."
    },
    {
      text: "« Soudain, la porte s'ouvrit : le chevalier [entre]. » Quelle est la valeur du présent entre crochets ?",
      options: ["Présent de vérité générale","Présent de narration","Présent d'énonciation","Présent d'habitude"],
      answers: ["Présent de narration"],
      explanation: "Le présent de narration (ou historique) s'insère dans un récit au passé pour rendre une action plus vivante et dramatique, comme si elle se passait sous les yeux du lecteur."
    },
    {
      text: "« Le soleil [brillait] et les oiseaux chantaient quand soudain un cri retentit. » Quelle est la valeur de l'imparfait entre crochets ?",
      options: ["Arrière-plan descriptif","Habitude","Action de premier plan","Condition"],
      answers: ["Arrière-plan descriptif"],
      explanation: "L'imparfait pose le décor et l'atmosphère (arrière-plan) tandis que le passé simple ('retentit') marque l'événement soudain de premier plan. Contraste imparfait / passé simple classique."
    },
    {
      text: "« Si j'avais su, je [serais venu] plus tôt. » À quel temps et mode est le verbe entre crochets ?",
      options: ["Conditionnel passé","Conditionnel présent","Indicatif plus-que-parfait","Subjonctif passé"],
      answers: ["Conditionnel passé"],
      explanation: "Hypothèse du 3e type (irréel du passé) : si + plus-que-parfait → conditionnel passé dans la principale. L'événement ne s'est pas produit."
    },
    {
      text: "« À peine fut-il arrivé [qu'il dut repartir]. » Quelle est la nature de la proposition entre crochets ?",
      options: ["Subordonnée circonstancielle de temps","Subordonnée circonstancielle de conséquence","Subordonnée conjonctive complétive","Subordonnée relative"],
      answers: ["Subordonnée circonstancielle de temps"],
      explanation: "'À peine… que' est une locution corrélative temporelle marquant la succession immédiate : à peine + passé simple / passé antérieur → que + passé simple. La subordonnée est circonstancielle de temps."
    },
    {
      text: "« Il est indispensable que vous [sachiez] votre leçon. » À quel temps et mode est le verbe entre crochets ?",
      options: ["Subjonctif présent","Indicatif présent","Conditionnel présent","Subjonctif imparfait"],
      answers: ["Subjonctif présent"],
      explanation: "Les constructions impersonnelles exprimant la nécessité (il faut que, il est indispensable que…) imposent le subjonctif dans la subordonnée."
    }
  ],

  /* ══════════════════════════════════════════════════════
     3. MOUVEMENTS ET HISTOIRE LITTÉRAIRE
  ══════════════════════════════════════════════════════ */
  mouvements: [
    {
      text: "Quel mouvement littéraire du XVIe siècle prône la dignité de l'être humain, la curiosité intellectuelle et la confiance en la raison, notamment illustré par Érasme et Montaigne ?",
      options: ["L'Humanisme","Le Baroque","Le Classicisme","La Pléiade"],
      answers: ["L'Humanisme"],
      explanation: "L'Humanisme (XVe-XVIe s.) replace l'homme au centre de la réflexion, en rupture avec la scolastique médiévale. Montaigne ('Que sais-je ?') et Rabelais en sont les figures françaises majeures."
    },
    {
      text: "La Pléiade est un groupe de poètes français du XVIe siècle. Qui en est le chef de file et l'auteur de la célèbre Défense et illustration de la langue française (1549) ?",
      options: ["Joachim du Bellay","Pierre de Ronsard","Clément Marot","Agrippa d'Aubigné"],
      answers: ["Joachim du Bellay"],
      explanation: "Du Bellay rédige ce manifeste pour défendre et enrichir la langue française face au latin. Son recueil Les Regrets reste son œuvre poétique la plus étudiée au Bac."
    },
    {
      text: "À quel mouvement appartient Pierre de Ronsard, auteur des Odes et des Amours ?",
      options: ["La Pléiade","L'Humanisme","Le Baroque","Le Classicisme"],
      answers: ["La Pléiade"],
      explanation: "Ronsard, 'Prince des poètes', est le chef poétique de la Pléiade. Il importe les formes antiques (ode, sonnet pétrarquiste) et enrichit la langue française de nombreux néologismes."
    },
    {
      text: "Le Classicisme français atteint son apogée sous le règne de Louis XIV. Quelle valeur fondamentale ce mouvement place-t-il au-dessus de tout ?",
      options: ["La vraisemblance et la bienséance","La liberté absolue de l'écrivain","Le mystère et le sacré","L'imagination débridée"],
      answers: ["La vraisemblance et la bienséance"],
      explanation: "Le Classicisme (1660-1685) exige que l'œuvre soit vraisemblable (crédible), bienséante (ne pas choquer), et soumise aux règles (3 unités au théâtre). Boileau en est le théoricien."
    },
    {
      text: "Qui est l'auteur classique des tragédies Phèdre et Andromaque ?",
      options: ["Jean Racine","Pierre Corneille","Molière","La Bruyère"],
      answers: ["Jean Racine"],
      explanation: "Racine est le grand tragédien classique, spécialiste de la passion destructrice. Corneille lui est associé mais appartient davantage au baroque-héroïque (Le Cid). Molière écrit des comédies."
    },
    {
      text: "Les Lumières sont un mouvement philosophique et littéraire du XVIIIe siècle. Quel est leur principal instrument de diffusion des idées, co-dirigé par Diderot et d'Alembert ?",
      options: ["L'Encyclopédie","Le Dictionnaire philosophique","L'Esprit des lois","Les Lettres philosophiques"],
      answers: ["L'Encyclopédie"],
      explanation: "L'Encyclopédie (1751-1772) rassemble le savoir humain pour lutter contre les préjugés et l'obscurantisme. C'est l'œuvre collective emblématique des Lumières."
    },
    {
      text: "Voltaire, Rousseau et Montesquieu sont les grandes figures du XVIIIe siècle. À quel mouvement appartiennent-ils ?",
      options: ["Les Lumières","Le Romantisme","Le Réalisme","L'Humanisme"],
      answers: ["Les Lumières"],
      explanation: "Ces trois philosophes défendent la raison, la tolérance et la liberté contre le fanatisme et le despotisme. Leurs œuvres (Candide, Du Contrat social, L'Esprit des lois) sont fondatrices des démocraties modernes."
    },
    {
      text: "Le Romantisme est un mouvement du début du XIXe siècle. Quelle notion désigne la tristesse mélancolique et indéfinie de l'individu romantique ?",
      options: ["Le mal du siècle","La catharsis","La règle des trois unités","L'ekphrasis"],
      answers: ["Le mal du siècle"],
      explanation: "Le 'mal du siècle' (expression de Musset dans La Confession d'un enfant du siècle) traduit le désenchantement d'une génération post-révolutionnaire qui ne trouve plus de cause à défendre."
    },
    {
      text: "Victor Hugo, Lamartine et Alfred de Musset sont des représentants majeurs de quel mouvement ?",
      options: ["Le Romantisme","Le Réalisme","Le Symbolisme","Le Surréalisme"],
      answers: ["Le Romantisme"],
      explanation: "Le Romantisme (1820-1850) valorise le moi, les émotions, la nature et l'histoire. Hugo en est la figure centrale, passant de la poésie lyrique au roman social et au drame romantique."
    },
    {
      text: "Honoré de Balzac regroupe ses romans sous quel titre collectif ambitieux ?",
      options: ["La Comédie humaine","Les Rougon-Macquart","Les Misérables","L'Éducation sentimentale"],
      answers: ["La Comédie humaine"],
      explanation: "Balzac veut être 'le secrétaire de la société française' : La Comédie humaine (90+ romans) dresse un tableau encyclopédique de la société de la Restauration et de la Monarchie de Juillet."
    },
    {
      text: "Quel roman de Flaubert, sous-titré 'Mœurs de province', est considéré comme un chef-d'œuvre du Réalisme ?",
      options: ["Madame Bovary","Germinal","Bel-Ami","Nana"],
      answers: ["Madame Bovary"],
      explanation: "Madame Bovary (1857) décrit l'illusion romantique d'Emma face à la platitude de la réalité provinciale. Le procès pour immoralité intenté contre Flaubert le rend célèbre."
    },
    {
      text: "Émile Zola est le chef de file du Naturalisme. Comment appelle-t-il sa série de vingt romans consacrée à une famille sous le Second Empire ?",
      options: ["Les Rougon-Macquart","La Comédie humaine","Les Fleurs du Mal","L'Assommoir"],
      answers: ["Les Rougon-Macquart"],
      explanation: "Zola applique une méthode quasi-scientifique : il étudie l'hérédité et le milieu social à travers cinq générations des Rougon-Macquart. Germinal, L'Assommoir, Nana en font partie."
    },
    {
      text: "Baudelaire, Verlaine, Rimbaud et Mallarmé appartiennent au mouvement qui privilégie la musicalité du vers et le symbole. Comment s'appelle ce mouvement ?",
      options: ["Le Symbolisme","Le Parnasse","Le Réalisme","Le Romantisme"],
      answers: ["Le Symbolisme"],
      explanation: "Le Symbolisme (1880-1900) refuse la description réaliste et la clarté du sens : le poème suggère, evoque par des symboles et des correspondances sensorielles. Mallarmé : 'Nommer un objet, c'est supprimer les trois quarts de la jouissance du poème.'"
    },
    {
      text: "Le Surréalisme naît dans les années 1920. Quel est le nom de son manifeste fondateur (1924) et qui en est l'auteur ?",
      options: ["Manifeste du Surréalisme d'André Breton","Manifeste du Futurisme de Marinetti","Manifeste du Dadaïsme de Tzara","Manifeste du Symbolisme de Moréas"],
      answers: ["Manifeste du Surréalisme d'André Breton"],
      explanation: "André Breton définit le Surréalisme comme un 'automatisme psychique pur' visant à explorer l'inconscient. Aragon, Éluard, Dali, Ernst sont aussi associés au mouvement."
    },
    {
      text: "Quelle technique d'écriture surréaliste consiste à écrire rapidement sans contrôle de la raison ?",
      options: ["L'écriture automatique","Le courant de conscience","Le style indirect libre","La technique du cadavre exquis"],
      answers: ["L'écriture automatique"],
      explanation: "L'écriture automatique vise à contourner la censure de la conscience pour laisser s'exprimer l'inconscient. Le 'cadavre exquis' est une technique collective voisine mais distincte."
    },
    {
      text: "Quelle formule célèbre résume la philosophie existentialiste de Sartre ?",
      options: ["L'existence précède l'essence","Je pense donc je suis","L'homme est la mesure de toute chose","La vie est absurde, donc il faut se révolter"],
      answers: ["L'existence précède l'essence"],
      explanation: "Sartre affirme que l'être humain n'a pas de nature prédéfinie : il se crée lui-même par ses actes. Cette liberté absolue implique une responsabilité totale."
    },
    {
      text: "Le Nouveau Roman (années 1950-60) remet en cause les conventions romanesques. Quel auteur est connu pour La Jalousie et Les Gommes ?",
      options: ["Alain Robbe-Grillet","Samuel Beckett","Marguerite Duras","Michel Butor"],
      answers: ["Alain Robbe-Grillet"],
      explanation: "Robbe-Grillet refuse les personnages psychologisés, l'intrigue linéaire et le narrateur omniscient. Il décrit les objets avec une minutie froide qui déroute le lecteur habitué au roman classique."
    },
    {
      text: "Quel courant poétique du XIXe siècle, dont Leconte de Lisle est la figure centrale, prône l'art pour l'art et la perfection formelle ?",
      options: ["Le Parnasse","Le Symbolisme","L'Impressionnisme","Le Décadentisme"],
      answers: ["Le Parnasse"],
      explanation: "Le Parnasse (1860-1880) réagit contre l'épanchement romantique. Il prône la beauté formelle froide et impersonnelle, l'érudition et l'impassibilité. Baudelaire y est associé dans sa jeunesse avant de le dépasser."
    },
    {
      text: "La poésie baroque du XVIIe siècle se caractérise par ses images excessives. Quelle métaphore traduit l'esprit baroque ?",
      options: ["Le monde est un théâtre (theatrum mundi)","Le monde est un long fleuve tranquille","Le monde est une machine bien huilée","Le monde est une forêt de symboles"],
      answers: ["Le monde est un théâtre (theatrum mundi)"],
      explanation: "Le 'theatrum mundi' exprime l'idée baroque que le monde est illusion, apparence et instabilité — comme une scène de théâtre. Shakespeare ('All the world's a stage') l'illustre aussi."
    },
    {
      text: "Le mot 'spleen' chez Baudelaire désigne :",
      options: ["L'ennui profond et la mélancolie douloureuse","La joie mystique","Le désir de gloire","L'aspiration à la beauté parfaite"],
      answers: ["L'ennui profond et la mélancolie douloureuse"],
      explanation: "Emprunté à l'anglais, le 'spleen' baudelairien désigne une langueur existentielle liée à l'ennui ('l'Ennui', 'l'Idéal') qui s'oppose à l'Idéal inaccessible dans Les Fleurs du Mal."
    },
    {
      text: "Au XVIIe siècle, quel courant se développe dans les salons, caractérisé par un langage raffiné et l'idéalisation des sentiments ?",
      options: ["La Préciosité","Le Libertinage","Le Jansénisme","L'Honnêteté"],
      answers: ["La Préciosité"],
      explanation: "La Préciosité (1640-1660) est un mouvement mondain et féminin qui affine le langage et l'analyse sentimentale. Molière s'en moquera dans Les Précieuses ridicules (1659)."
    },
    {
      text: "Quel mouvement philosophique et littéraire, né après la Seconde Guerre mondiale, est associé à Sartre, Camus et Beauvoir ?",
      options: ["L'Existentialisme","Le Structuralisme","Le Naturalisme","Le Romantisme"],
      answers: ["L'Existentialisme"],
      explanation: "L'Existentialisme domine Saint-Germain-des-Prés dans les années 1945-1960. Sartre (L'Être et le Néant), Camus (L'Étranger, Le Mythe de Sisyphe) et de Beauvoir (Le Deuxième Sexe) en sont les piliers."
    }
  ],

  /* ══════════════════════════════════════════════════════
     4. MÉTHODOLOGIE
  ══════════════════════════════════════════════════════ */
  methodo: [
    {
      text: "Dans un commentaire de texte, la première partie de l'introduction doit amener le sujet depuis un contexte général. Comment s'appelle cette étape ?",
      options: ["L'amorce (ou accroche)","La problématique","L'annonce du plan","La thèse"],
      answers: ["L'amorce (ou accroche)"],
      explanation: "L'amorce part d'un élément général (mouvement littéraire, contexte historique, question universelle) pour aboutir à l'œuvre et à l'extrait. Elle doit être courte et pertinente, pas artificielle."
    },
    {
      text: "Quelle est la différence fondamentale entre la problématique d'un commentaire et celle d'une dissertation ?",
      options: ["Le commentaire s'appuie sur un texte précis ; la dissertation sur une question plus générale","La dissertation n'a pas de problématique","Le commentaire ne nécessite pas de plan","La dissertation ne cite aucun auteur"],
      answers: ["Le commentaire s'appuie sur un texte précis ; la dissertation sur une question plus générale"],
      explanation: "La problématique du commentaire interroge les enjeux littéraires d'un extrait précis. Celle de la dissertation formule une question générale sur une notion ou une affirmation à discuter."
    },
    {
      text: "Dans la méthode du commentaire de texte, qu'est-ce qu'un 'axe de lecture' ?",
      options: ["Une idée directrice qui structure l'analyse autour d'un aspect essentiel du texte","Un simple résumé d'un paragraphe du texte","Une liste d'exemples tirés du texte","Une biographie de l'auteur"],
      answers: ["Une idée directrice qui structure l'analyse autour d'un aspect essentiel du texte"],
      explanation: "Chaque axe (grande partie) regroupe des observations convergentes sous une idée forte. Il ne doit pas être un plan rhématique ('1. Le cadre, 2. Les personnages') mais une interprétation synthétique."
    },
    {
      text: "Une transition entre deux parties doit obligatoirement contenir deux éléments. Lesquels ?",
      options: ["Un bilan de la partie précédente et une annonce de la partie suivante","Une citation et une explication","Un exemple et une contre-thèse","Une définition et une question rhétorique"],
      answers: ["Un bilan de la partie précédente et une annonce de la partie suivante"],
      explanation: "La transition (souvent 2-3 lignes) montre que le devoir progresse logiquement : on a établi A, mais cela ne suffit pas à répondre à la problématique, car B… C'est un mouvement argumentatif, pas une liste."
    },
    {
      text: "Dans une dissertation dialectique, quelle est la structure de plan la plus courante ?",
      options: ["Thèse, antithèse, synthèse (dépassement)","Plan en deux parties : pour et contre","Plan en cinq parties successives","Plan chronologique de l'auteur"],
      answers: ["Thèse, antithèse, synthèse (dépassement)"],
      explanation: "La synthèse n'est pas un simple 'entre-deux' : elle dépasse la contradiction en proposant un point de vue plus nuancé ou une nouvelle perspective. C'est la partie la plus difficile à rédiger."
    },
    {
      text: "Lors de l'explication d'un procédé stylistique, quel est l'ordre logique à respecter ?",
      options: ["Citer (exemple) → Nommer le procédé → Interpréter l'effet","Interpréter l'effet → Nommer le procédé → Citer","Nommer le procédé → Interpréter l'effet (sans citer)","Résumer → Citer → Nommer"],
      answers: ["Citer (exemple) → Nommer le procédé → Interpréter l'effet"],
      explanation: "On ancre l'analyse dans le texte (citation), on identifie le procédé, puis on explique son effet de sens. L'erreur classique est d'inverser et de nommer la figure avant de citer."
    },
    {
      text: "Qu'est-ce que le 'paratexte' d'une œuvre ?",
      options: ["L'ensemble des éléments entourant le texte principal : titre, préface, épigraphe, dédicace, notes","Le texte principal du roman","La biographie de l'auteur publiée séparément","Les critiques publiées dans la presse"],
      answers: ["L'ensemble des éléments entourant le texte principal : titre, préface, épigraphe, dédicace, notes"],
      explanation: "Concept de Gérard Genette (Seuils, 1987). Le paratexte oriente la réception de l'œuvre avant même la lecture du texte lui-même. L'analyse d'un incipit commence souvent par lui."
    },
    {
      text: "La conclusion d'une dissertation comprend deux temps obligatoires. Lesquels ?",
      options: ["Le bilan de la démonstration et l'ouverture (perspective)","Le résumé de l'introduction et une nouvelle thèse","La réponse définitive et une citation conclusive","La réfutation de la thèse et l'annonce d'un autre sujet"],
      answers: ["Le bilan de la démonstration et l'ouverture (perspective)"],
      explanation: "Le bilan répond à la problématique de façon synthétique. L'ouverture élargit la réflexion vers une question connexe, une autre œuvre, ou une perspective contemporaine — sans relancer un nouveau débat."
    },
    {
      text: "Pour l'épreuve du Bac de français (écrit), quelles sont les trois formes d'écriture proposées au choix ?",
      options: ["Commentaire de texte, dissertation, contraction de texte / essai","Dissertation, résumé, traduction","Commentaire, résumé, synthèse de documents","Analyse linéaire, commentaire, biographie"],
      answers: ["Commentaire de texte, dissertation, contraction de texte / essai"],
      explanation: "Depuis la réforme du Bac (2021), l'écrit propose : commentaire d'un texte de l'œuvre au programme, dissertation sur cette œuvre, ou contraction + essai (voie technologique). Durée : 4 heures."
    },
    {
      text: "Lors d'un commentaire, comment appelle-t-on le type de narration où le narrateur est absent du récit et relate les événements à la 3e personne ?",
      options: ["Narrateur hétérodiégétique","Narrateur homodiégétique","Narrateur autodiégétique","Narrateur omniscient neutre"],
      answers: ["Narrateur hétérodiégétique"],
      explanation: "Genette distingue : hétérodiégétique (absent du récit), homodiégétique (présent dans le récit comme personnage secondaire), autodiégétique (héros de sa propre histoire, type autobiographie)."
    },
    {
      text: "Dans une dissertation, qu'est-ce qu'une 'thèse' ?",
      options: ["La position défendue par l'auteur ou que l'on défend dans le devoir","L'ensemble des exemples du devoir","La question posée en introduction","La conclusion finale du travail"],
      answers: ["La position défendue par l'auteur ou que l'on défend dans le devoir"],
      explanation: "La thèse est une affirmation argumentée que l'on cherche à démontrer. Dans un plan dialectique, la 'thèse' désigne aussi la première grande partie qui défend le point de vue principal."
    },
    {
      text: "Comment définit-on le 'registre' d'un texte ?",
      options: ["La tonalité dominante d'un texte qui produit un effet sur le lecteur (pathétique, comique, tragique…)","Le niveau de langue utilisé (soutenu, familier, courant)","Le point de vue du narrateur","La forme du texte (prose ou vers)"],
      answers: ["La tonalité dominante d'un texte qui produit un effet sur le lecteur (pathétique, comique, tragique…)"],
      explanation: "Le registre (ou tonalité) est distinct du niveau de langue. Un texte peut être écrit en langue soutenue et avoir un registre comique. Les registres principaux au Bac : lyrique, épique, tragique, comique, pathétique, satirique, fantastique."
    },
    {
      text: "Quelle est la principale différence entre l'analyse linéaire (oral) et le commentaire composé (écrit) ?",
      options: ["L'analyse linéaire suit l'ordre du texte ; le commentaire composé est organisé par axes thématiques","Le commentaire composé est plus court que l'analyse linéaire","L'analyse linéaire est réservée à la poésie","Le commentaire composé ne nécessite pas d'introduction"],
      answers: ["L'analyse linéaire suit l'ordre du texte ; le commentaire composé est organisé par axes thématiques"],
      explanation: "L'analyse linéaire dégage le 'mouvement du texte' en suivant son déroulement. Le commentaire composé regroupe les observations sous deux ou trois axes interprétatifs, quel que soit l'ordre du texte."
    },
    {
      text: "Dans la dissertation, la 'concession' consiste à :",
      options: ["Reconnaître une part de vérité dans la thèse adverse avant de la dépasser","Introduire une nouvelle idée sans lien avec la précédente","Citer un auteur pour appuyer sa propre thèse","Reformuler sa propre thèse en d'autres termes"],
      answers: ["Reconnaître une part de vérité dans la thèse adverse avant de la dépasser"],
      explanation: "La concession est un signe de rigueur intellectuelle : on ne caricature pas la position adverse, on lui accorde une part de vérité avant de montrer pourquoi elle est insuffisante ou limitée."
    },
    {
      text: "Que désigne le terme 'argumentation indirecte' ?",
      options: ["L'utilisation de formes narratives (fable, conte, roman) pour défendre une idée","L'emploi de métaphores uniquement","La réfutation des arguments adverses","L'absence totale d'opinion de l'auteur"],
      answers: ["L'utilisation de formes narratives (fable, conte, roman) pour défendre une idée"],
      explanation: "L'argumentation indirecte cache la thèse dans une fiction (fable de La Fontaine, conte philosophique de Voltaire). Elle évite la censure et séduit le lecteur par le plaisir narratif avant de le convaincre."
    },
    {
      text: "Qu'appelle-t-on le 'point de vue interne' (focalisation interne) dans un récit ?",
      options: ["Le narrateur ne dit que ce que sait ou ressent un personnage précis","Le narrateur sait tout sur tous les personnages","Le narrateur est extérieur et neutre","Le narrateur raconte à la première personne"],
      answers: ["Le narrateur ne dit que ce que sait ou ressent un personnage précis"],
      explanation: "Genette (Figures III, 1972) : focalisation interne (narrateur = personnage en termes de savoir), externe (narrateur sait moins que le personnage), zéro/omnisciente (narrateur sait tout)."
    },
    {
      text: "Pour l'écrit du Bac, quelle est la durée réglementaire de l'épreuve de français ?",
      options: ["4 heures","2 heures","3 heures","6 heures"],
      answers: ["4 heures"],
      explanation: "L'épreuve écrite de français (Première) dure 4 heures. Elle est coefficient 5 pour les élèves de la voie générale. La gestion du temps est donc un enjeu méthodologique en soi."
    },
    {
      text: "Lors de la rédaction d'un commentaire, à quoi sert le 'chapeau introductif' (introduction) ?",
      options: ["Situer l'auteur et l'œuvre, présenter l'extrait, annoncer la problématique et le plan","Résumer l'intégralité du texte","Donner son avis personnel sur l'auteur","Citer toutes les figures de style du texte"],
      answers: ["Situer l'auteur et l'œuvre, présenter l'extrait, annoncer la problématique et le plan"],
      explanation: "L'introduction suit le mouvement : amorce → présentation de l'auteur/œuvre/extrait → problématique → annonce du plan. Chaque élément est nécessaire et dans cet ordre."
    },
    {
      text: "Comment reformuler une idée tirée du texte sans tomber dans la paraphrase ?",
      options: ["Reformuler en ses propres mots ET analyser le procédé ou l'effet","Copier la phrase entre guillemets","Traduire le texte mot à mot","Résumer sans citer"],
      answers: ["Reformuler en ses propres mots ET analyser le procédé ou l'effet"],
      explanation: "La paraphrase répète ce que dit le texte sans l'éclairer. L'analyse ajoute une interprétation : 'l'auteur emploie X (procédé) pour produire Y (effet), ce qui signifie Z'. Sans cette étape, le commentaire ne vaut rien."
    },
    {
      text: "Quelle est la fonction d'une 'ouverture' (ou perspective) en conclusion de dissertation ?",
      options: ["Élargir la réflexion vers une question connexe ou une autre œuvre, sans relancer le débat","Résumer point par point toutes les parties du devoir","Présenter un nouveau plan alternatif","Citer une dernière fois l'auteur étudié"],
      answers: ["Élargir la réflexion vers une question connexe ou une autre œuvre, sans relancer le débat"],
      explanation: "L'ouverture montre que la question traitée s'inscrit dans une réflexion plus large. Elle doit être naturelle et précise (une œuvre, une question, un contexte), jamais artificielle ni vague."
    },
    {
      text: "Dans un devoir de français, que signifie 'problématiser' un sujet ?",
      options: ["Formuler une question précise qui met en tension des enjeux du texte ou du thème","Trouver les figures de style du texte","Chercher la biographie de l'auteur","Identifier le registre dominant"],
      answers: ["Formuler une question précise qui met en tension des enjeux du texte ou du thème"],
      explanation: "Problématiser, c'est montrer qu'il y a une tension, un paradoxe, un enjeu à résoudre : 'En quoi… ?' / 'Comment… ?' / 'Dans quelle mesure… ?'. Une problématique trop évidente (dont la réponse est 'oui') ne vaut rien."
    }
  ],

  /* ══════════════════════════════════════════════════════
     5. LES 4 OBJETS D'ÉTUDE
  ══════════════════════════════════════════════════════ */
  objets: [
    /* — POÉSIE — */
    {
      text: "Un sonnet classique est composé de :",
      options: ["Deux quatrains et deux tercets (14 vers)","Trois sizains (18 vers)","Quatre quatrains (16 vers)","Un distique et deux sizains (14 vers)"],
      answers: ["Deux quatrains et deux tercets (14 vers)"],
      explanation: "Le sonnet (forme italienne importée par la Pléiade) compte 14 vers : 2 strophes de 4 vers (ABBA ABBA ou ABAB ABAB) puis 2 strophes de 3 vers (CCD EDE ou CDC EDE)."
    },
    {
      text: "L'alexandrin est le vers le plus prestigieux de la poésie française classique. Combien de syllabes compte-t-il ?",
      options: ["12 syllabes","10 syllabes","8 syllabes","14 syllabes"],
      answers: ["12 syllabes"],
      explanation: "L'alexandrin (12 syllabes) est le vers de la tragédie classique et du poème épique. Il est structuré par une coupe principale à la 6e syllabe (la césure) : 6 + 6. Le décasyllabe (10) est l'autre grand vers."
    },
    {
      text: "Le 'e muet' en fin de mot est-il compté dans la métrique si le mot suivant commence par une consonne ?",
      options: ["Oui, il forme une syllabe (élision impossible devant consonne)","Non, il est toujours muet","Non, il est toujours élidé","Oui, mais seulement dans la poésie romantique"],
      answers: ["Oui, il forme une syllabe (élision impossible devant consonne)"],
      explanation: "Règle fondamentale de métrique : le 'e muet' en fin de mot est élidé (ne compte pas) devant une voyelle ou un 'h' aspiré. Mais devant une consonne, il compte comme une syllabe à part entière."
    },
    {
      text: "Qu'est-ce qu'un 'enjambement' en poésie ?",
      options: ["Le débordement du sens d'un vers sur le vers suivant, sans pause à la fin du premier vers","Une rime qui lie deux strophes","Une répétition de sonorités en fin de vers","Un retour à la ligne sans changement de sens"],
      answers: ["Le débordement du sens d'un vers sur le vers suivant, sans pause à la fin du premier vers"],
      explanation: "L'enjambement brise le parallélisme vers/unité syntaxique pour créer un effet de continuité, d'urgence ou d'élan. Le 'rejet' est le petit mot rejeté au début du vers suivant ; le 'contre-rejet', à la fin du vers précédent."
    },
    {
      text: "Les rimes 'embrassées' suivent le schéma :",
      options: ["ABBA","ABAB","AABB","AAAB"],
      answers: ["ABBA"],
      explanation: "ABBA = rimes embrassées (la rime extérieure 'embrasse' la rime intérieure). ABAB = rimes croisées (alternées). AABB = rimes plates (suivies). À connaître impérativement pour l'analyse d'un sonnet."
    },
    {
      text: "Qu'est-ce que le 'lyrisme' en poésie ?",
      options: ["L'expression personnelle des sentiments et des émotions du poète","La description objective du monde extérieur","La narration d'une histoire épique","Le discours satirique sur la société"],
      answers: ["L'expression personnelle des sentiments et des émotions du poète"],
      explanation: "Le lyrisme (du grec 'lyra') est associé au chant et à l'expression du 'moi'. C'est le registre dominant de la poésie romantique (Lamartine, Musset, Hugo). Il se caractérise par l'usage du 'je' et des figures d'intensité."
    },
    {
      text: "Paul Verlaine, dans son Art poétique, préconise : 'De la musique avant toute chose'. À quel mouvement se rattache cette conception ?",
      options: ["Le Symbolisme","Le Romantisme","Le Surréalisme","Le Classicisme"],
      answers: ["Le Symbolisme"],
      explanation: "Pour Verlaine, la poésie doit être d'abord musicale et suggestive, non descriptive. Ce primat de la sonorité sur le sens est l'un des fondements du Symbolisme."
    },
    /* — ROMAN — */
    {
      text: "Qu'est-ce que le 'style indirect libre' dans un roman ?",
      options: ["La fusion des paroles ou pensées d'un personnage avec la voix du narrateur, sans guillemets ni verbe introducteur","L'utilisation de guillemets pour rapporter les paroles d'un personnage","La narration à la première personne par le personnage principal","Un discours entièrement rapporté par le narrateur"],
      answers: ["La fusion des paroles ou pensées d'un personnage avec la voix du narrateur, sans guillemets ni verbe introducteur"],
      explanation: "Le style indirect libre brouille la frontière narrateur/personnage. Ex : 'Elle sortit. Quelle journée horrible !' — On ne sait pas si c'est le narrateur ou Emma Bovary qui pense cela. Flaubert en est le maître."
    },
    {
      text: "Qu'appelle-t-on l'incipit d'un roman ?",
      options: ["Le début du roman, qui pose le cadre, les personnages et accroche le lecteur","La scène finale du roman","Le titre de l'œuvre","La préface de l'éditeur"],
      answers: ["Le début du roman, qui pose le cadre, les personnages et accroche le lecteur"],
      explanation: "L'incipit (du latin 'il commence') remplit plusieurs fonctions : exposer le cadre spatio-temporel, introduire les personnages, instaurer un pacte de lecture, et surtout capter l'attention du lecteur."
    },
    {
      text: "L'excipit est :",
      options: ["La fin du roman (dernières pages ou dernier chapitre)","Le titre alternatif du roman","La dédicace du roman","La table des matières"],
      answers: ["La fin du roman (dernières pages ou dernier chapitre)"],
      explanation: "L'excipit (du latin 'il sort') clôt le récit. Il peut être ouvert (le lecteur imagine la suite), fermé (tout est résolu), ou ambigu. Il répond souvent en écho à l'incipit — c'est ce qu'on appelle une structure 'en boucle'."
    },
    {
      text: "Dans la narratologie, qu'est-ce que la 'focalisation zéro' (ou point de vue omniscient) ?",
      options: ["Le narrateur connaît tout des personnages, leurs pensées, leur passé et leur avenir","Le narrateur ne sait rien de plus que le lecteur","Le narrateur adopte le point de vue d'un seul personnage","Le narrateur est un personnage du récit"],
      answers: ["Le narrateur connaît tout des personnages, leurs pensées, leur passé et leur avenir"],
      explanation: "La focalisation zéro ('narrateur > personnage' en termes de savoir) est typique du roman réaliste du XIXe siècle. Le narrateur peut pénétrer dans toutes les consciences et anticiper les événements."
    },
    {
      text: "Qu'est-ce qu'une 'ellipse narrative' dans un roman ?",
      options: ["Un saut dans le temps : le narrateur passe sous silence une période sans la raconter","Un retour en arrière (analepse)","Une anticipation sur les événements futurs","Une description très détaillée d'un moment bref"],
      answers: ["Un saut dans le temps : le narrateur passe sous silence une période sans la raconter"],
      explanation: "L'ellipse accélère le rythme narratif. Genette classe les vitesses narratives : sommaire (résumé rapide), scène (temps réel), pause (description sans avancée du temps), ellipse (saut temporel)."
    },
    /* — THÉÂTRE — */
    {
      text: "La règle classique des trois unités (XVIIe siècle) impose :",
      options: ["Unité de temps (24h), de lieu (un seul endroit) et d'action (une seule intrigue principale)","Unité de style, de ton et de registre","Unité de personnages, de costumes et de décors","Unité de langue, de mètre et de rimes"],
      answers: ["Unité de temps (24h), de lieu (un seul endroit) et d'action (une seule intrigue principale)"],
      explanation: "Théorisées par Boileau dans l'Art poétique (1674), ces trois unités visent la vraisemblance. Hugo les brisera dans la Préface de Cromwell (1827), fondant le drame romantique."
    },
    {
      text: "Dans une pièce de théâtre, qu'est-ce qu'un 'aparté' ?",
      options: ["Une réplique prononcée par un personnage pour le public seul, que les autres personnages sont censés ne pas entendre","Une longue tirade d'un seul personnage","Un dialogue entre deux personnages secondaires","Un monologue prononcé seul en scène"],
      answers: ["Une réplique prononcée par un personnage pour le public seul, que les autres personnages sont censés ne pas entendre"],
      explanation: "L'aparté crée une complicité entre le personnage et le spectateur. Il différer du monologue : dans l'aparté, d'autres personnages sont sur scène mais 'n'entendent pas'. Très utilisé dans la comédie (Molière)."
    },
    {
      text: "Comment appelle-t-on la situation où le spectateur possède une information que les personnages n'ont pas ?",
      options: ["L'ironie dramatique (ou tragique)","Le coup de théâtre","Le deus ex machina","Le quiproquo"],
      answers: ["L'ironie dramatique (ou tragique)"],
      explanation: "L'ironie dramatique crée une tension chez le spectateur qui sait ce que le personnage ignore (ex : dans Roméo et Juliette, le spectateur sait que Juliette est vivante quand Roméo se suicide)."
    },
    {
      text: "Dans la tragédie classique, la 'catharsis' désigne :",
      options: ["La purification des passions du spectateur par la pitié et la crainte","Le dénouement heureux de la pièce","L'entrée du héros en scène","La chute du héros tragique"],
      answers: ["La purification des passions du spectateur par la pitié et la crainte"],
      explanation: "Concept d'Aristote (Poétique) : en assistant à la souffrance du héros, le spectateur éprouve pitié et crainte, et ses propres passions s'en trouvent purifiées. C'est la finalité morale de la tragédie."
    },
    {
      text: "Qu'est-ce qu'un 'quiproquo' au théâtre ?",
      options: ["Une méprise : un personnage ou une situation est pris pour un autre, créant des malentendus","Un retournement de situation inattendu","L'intervention d'un personnage divin pour résoudre l'intrigue","Un aparté adressé au public"],
      answers: ["Une méprise : un personnage ou une situation est pris pour un autre, créant des malentendus"],
      explanation: "Le quiproquo (du latin 'quid pro quo', une chose pour une autre) est un ressort comique majeur. Il repose sur la confusion d'identités, de situations ou de mots. Molière en use abondamment."
    },
    {
      text: "Qu'est-ce qu'un 'deus ex machina' au théâtre ?",
      options: ["Un procédé de dénouement où une force extérieure inattendue résout l'intrigue de façon artificielle","Une longue tirade philosophique","Une scène de reconnaissance entre deux personnages","Un aparté ironique"],
      answers: ["Un procédé de dénouement où une force extérieure inattendue résout l'intrigue de façon artificielle"],
      explanation: "Littéralement 'un dieu descendu par une machine' (dans le théâtre grec antique). C'est un dénouement jugé peu satisfaisant car il ne découle pas de la logique interne de l'intrigue."
    },
    /* — LITTÉRATURE D'IDÉES & REGISTRES — */
    {
      text: "Le registre 'pathétique' vise à susciter chez le lecteur :",
      options: ["La pitié et la compassion","Le rire et la dérision","La terreur et l'horreur","L'admiration et l'émerveillement"],
      answers: ["La pitié et la compassion"],
      explanation: "Le pathétique (du grec 'pathos', souffrance) touche les émotions par la représentation de la douleur et du malheur. Il est souvent associé au tragique et utilise des procédés d'intensité (hyperboles, apostrophes, questions rhétoriques)."
    },
    {
      text: "Le registre 'épique' est caractérisé par :",
      options: ["L'amplification, l'héroïsme, des hyperboles et une vision grandiose des événements","La douceur, la mélancolie et la musicalité","L'ironie, la dérision et la critique sociale","La sobriété, la retenue et l'équilibre"],
      answers: ["L'amplification, l'héroïsme, des hyperboles et une vision grandiose des événements"],
      explanation: "L'épique grandit les hommes et les événements au-delà du réel. Hugo est le maître du registre épique en France (La Légende des siècles, Les Misérables). Procédés : accumulations, hyperboles, images cosmiques."
    },
    {
      text: "Le registre 'satirique' consiste à :",
      options: ["Dénoncer les vices et les ridicules de la société par l'ironie et la moquerie","Exprimer la nostalgie et la tristesse","Glorifier les héros et les grandes batailles","Défendre une vérité morale universelle"],
      answers: ["Dénoncer les vices et les ridicules de la société par l'ironie et la moquerie"],
      explanation: "La satire (Juvénal, La Fontaine, Voltaire, Molière) use de l'ironie, de l'humour et de l'exagération pour critiquer les mœurs. Elle est souvent au service d'une argumentation indirecte."
    },
    {
      text: "Quelle œuvre de Voltaire illustre parfaitement le genre du conte philosophique (littérature d'idées) ?",
      options: ["Candide ou l'Optimisme","Les Confessions","Le Rouge et le Noir","Les Fleurs du Mal"],
      answers: ["Candide ou l'Optimisme"],
      explanation: "Candide (1759) critique la philosophie optimiste de Leibniz ('Tout est pour le mieux dans le meilleur des mondes possibles') à travers une argumentation indirecte : le conte et ses aventures absurdes."
    },
    {
      text: "Quelle œuvre de Rousseau est considérée comme l'acte fondateur du genre autobiographique moderne ?",
      options: ["Les Confessions","Les Rêveries du promeneur solitaire","Du Contrat social","L'Émile"],
      answers: ["Les Confessions"],
      explanation: "Rousseau ouvre Les Confessions sur une déclaration d'intention inédite : montrer un homme dans toute la vérité de la nature. Il pose le 'pacte autobiographique' (Lejeune) avant la lettre."
    },
    {
      text: "Qu'est-ce qu'une 'tirade' au théâtre ?",
      options: ["Un long discours prononcé sans interruption par un seul personnage, en présence d'autres","Une courte réplique d'un seul mot","Un dialogue rapide entre deux personnages (stichomythie)","Une chanson intercalée dans l'action"],
      answers: ["Un long discours prononcé sans interruption par un seul personnage, en présence d'autres"],
      explanation: "La tirade se distingue du monologue (personnage seul) : d'autres personnages sont présents mais écoutent. Elle permet l'éloquence, l'argumentation ou l'épanchement lyrique (ex : tirades de Cyrano de Bergerac)."
    }
  ]
};

/* ═══════════════════════════════════════════════════════════════
   NOMS DES ONGLETS (pour l'écran de fin)
═══════════════════════════════════════════════════════════════ */
const TAB_NAMES = {
  figures:    'Figures de style',
  grammaire:  'Grammaire',
  mouvements: 'Mouvements littéraires',
  methodo:    'Méthodologie',
  objets:     'Objets d\'étude'
};

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
let currentTab   = 'figures';
let questions    = [];
let currentIndex = 0;
let selected     = [];
let score        = 0;
let total        = 0;
let streak       = 0;
let bestStreak   = 0;
let isAnswered   = false;

/* ═══════════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ═══════════════════════════════════════════════════════════════
   SESSION
═══════════════════════════════════════════════════════════════ */
function startSession(tab) {
  currentTab   = tab;
  currentIndex = 0;
  selected     = [];
  score        = 0;
  total        = 0;
  streak       = 0;
  bestStreak   = 0;
  isAnswered   = false;
  questions    = shuffle(dataset[tab]);

  document.getElementById('end-screen').style.display = 'none';
  document.getElementById('quiz-area').style.display  = '';
  updateStats();
  loadQuestion();
}

function updateStats() {
  document.getElementById('score-display').textContent  = `${score} \u00a0/\u00a0 ${total}`;
  document.getElementById('streak-display').textContent = streak;
}

/* ═══════════════════════════════════════════════════════════════
   LOAD QUESTION
═══════════════════════════════════════════════════════════════ */
function loadQuestion() {
  isAnswered = false;
  selected   = [];

  const q = questions[currentIndex];

  // Progress
  document.getElementById('progress-text').textContent = `${currentIndex + 1} / ${questions.length}`;
  document.getElementById('progress-fill').style.width = `${(currentIndex / questions.length) * 100}%`;

  // Question card animation
  const card = document.getElementById('question-card');
  card.className = 'question-card anim-in';
  card.addEventListener('animationend', () => card.classList.remove('anim-in'), { once: true });
  document.getElementById('phrase-display').textContent = q.text;

  // Multi-answer hint
  const hint = document.getElementById('multi-hint');
  hint.classList.toggle('visible', q.answers.length > 1);

  // Clear feedback
  const fb = document.getElementById('feedback-area');
  fb.innerHTML = '';
  fb.className = 'feedback-area';

  // Options (shuffled)
  const optionsEl = document.getElementById('options-display');
  optionsEl.innerHTML = '';
  const shuffledOpts = shuffle(q.options);

  shuffledOpts.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-card';
    btn.dataset.option = text;

    const badge = document.createElement('span');
    badge.className = 'key-badge';
    badge.textContent = i + 1;

    const label = document.createElement('span');
    label.textContent = text;

    btn.appendChild(badge);
    btn.appendChild(label);
    btn.addEventListener('click', () => { if (!isAnswered) toggleOption(btn, text); });
    optionsEl.appendChild(btn);
  });

  // Submit button reset
  const btn = document.getElementById('submit-btn');
  btn.disabled    = false;
  btn.className   = 'btn-submit';
  btn.textContent = 'Valider la réponse';
}

/* ═══════════════════════════════════════════════════════════════
   TOGGLE OPTION
═══════════════════════════════════════════════════════════════ */
function toggleOption(card, option) {
  if (selected.includes(option)) {
    selected = selected.filter(o => o !== option);
    card.classList.remove('selected');
  } else {
    selected.push(option);
    card.classList.add('selected');
  }
}

/* ═══════════════════════════════════════════════════════════════
   VALIDATE
═══════════════════════════════════════════════════════════════ */
function validateAnswer() {
  if (isAnswered) return;
  isAnswered = true;

  const q       = questions[currentIndex];
  const correct = q.answers;

  const isCorrect = selected.length === correct.length &&
                    selected.every(a => correct.includes(a));

  total++;
  if (isCorrect) {
    score++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
  } else {
    streak = 0;
  }

  updateStats();

  // Reveal options
  document.querySelectorAll('.option-card').forEach(card => {
    const opt = card.dataset.option;
    card.classList.add('disabled');
    if (correct.includes(opt)) {
      card.classList.remove('selected');
      card.classList.add('reveal-correct');
    } else if (selected.includes(opt)) {
      card.classList.remove('selected');
      card.classList.add('reveal-wrong');
    }
  });

  // Flash card
  const card = document.getElementById('question-card');
  card.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');

  // ── Feedback area (new rich feedback) ──
  const fb = document.getElementById('feedback-area');
  fb.className = `feedback-area ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;

  const resultLine = document.createElement('div');
  resultLine.className = 'feedback-result';

  if (isCorrect) {
    const streakMsg = streak > 1 ? ` · 🔥 Série de ${streak}` : '';
    resultLine.innerHTML = `<span class="fb-icon">✓</span><strong>Correct !</strong>${streakMsg}`;
  } else {
    const plural = correct.length > 1;
    resultLine.innerHTML = `<span class="fb-icon">✗</span><strong>Bonne${plural ? 's' : ''} réponse${plural ? 's' : ''} :</strong> ${correct.join(', ')}`;
  }

  const explanationLine = document.createElement('div');
  explanationLine.className = 'feedback-explanation';
  explanationLine.textContent = q.explanation;

  fb.appendChild(resultLine);
  fb.appendChild(explanationLine);

  // Submit button state
  const btn = document.getElementById('submit-btn');
  btn.className   = `btn-submit ${isCorrect ? 'state-correct' : 'state-wrong'}`;
  btn.textContent = isCorrect ? '✓  Correct !' : '✗  Incorrect';
  btn.disabled    = true;

  // Auto-advance after a longer delay to let the user read the explanation
  setTimeout(() => {
    card.classList.remove('flash-correct', 'flash-wrong');
    currentIndex++;
    if (currentIndex >= questions.length) {
      showEndScreen();
    } else {
      loadQuestion();
    }
  }, 3500);
}

/* ═══════════════════════════════════════════════════════════════
   END SCREEN
═══════════════════════════════════════════════════════════════ */
function showEndScreen() {
  document.getElementById('quiz-area').style.display  = 'none';
  document.getElementById('end-screen').style.display = 'flex';

  const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';

  document.getElementById('end-emoji').textContent    = emoji;
  document.getElementById('end-tab-name').textContent = TAB_NAMES[currentTab];
  document.getElementById('end-score').textContent    = `${score}/${total}`;
  document.getElementById('end-pct').textContent      = `${pct}%`;
  document.getElementById('end-streak').textContent   = bestStreak;

  document.getElementById('progress-fill').style.width = '100%';
}

function restartSession() { startSession(currentTab); }

function switchTabFromEnd() {
  const tabs = Object.keys(dataset);
  const idx  = tabs.indexOf(currentTab);
  const next = tabs[(idx + 1) % tabs.length];
  switchTab(next);
}

/* ═══════════════════════════════════════════════════════════════
   TAB SWITCH
═══════════════════════════════════════════════════════════════ */
function switchTab(tab) {
  if (currentTab === tab && total === 0) return;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  startSession(tab);
}

/* ═══════════════════════════════════════════════════════════════
   KEYBOARD CONTROLS
═══════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (isAnswered) return;
  const num = parseInt(e.key);
  if (num >= 1 && num <= 4) {
    const cards = document.querySelectorAll('.option-card');
    if (cards[num - 1]) {
      const opt = cards[num - 1].dataset.option;
      toggleOption(cards[num - 1], opt);
    }
  }
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    validateAnswer();
  }
});

/* ── Init ── */
startSession('figures');
ENDOFFILE
echo "Done"
