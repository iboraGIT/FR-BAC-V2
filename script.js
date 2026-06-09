/* ═══════════════════════════════════════════════════════════════
   DATASET — Bac de Français
   Catégories :
     1. figures    — Figures de style
     2. grammaire  — Grammaire
     3. mouvements — Mouvements & Histoire littéraire
     4. methodo    — Méthodologie (commentaire, dissertation, etc.)
     5. objets     — Les 4 Objets d'étude (poésie, roman, théâtre, littérature d'idées)
═══════════════════════════════════════════════════════════════ */
const dataset = {

  /* ──────────────────────────────────────────────────────────
     1. FIGURES DE STYLE
  ────────────────────────────────────────────────────────── */
  figures: [
    { text: "« Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine, Andromaque)", options: ["Allitération","Assonance","Oxymore","Litote"], answers: ["Allitération"] },
    { text: "« La Cigale, ayant chanté / Tout l'été… » (La Fontaine)", options: ["Personnification","Allégorie","Comparaison","Oxymore"], answers: ["Personnification"] },
    { text: "« Un vieillard en oripeaux, un mendiant transi, un spectre de misère »", options: ["Accumulation","Gradation","Anaphore","Chiasme"], answers: ["Accumulation","Gradation"] },
    { text: "« Ce garçon n'est pas un idiot. »", options: ["Litote","Euphémisme","Antiphrase (Ironie)","Hyperbole"], answers: ["Litote"] },
    { text: "« Le Roi-Soleil » (pour désigner Louis XIV)", options: ["Périphrase","Antonomase","Métaphore","Métonymie"], answers: ["Périphrase","Antonomase"] },
    { text: "« Des éclairs de joie, des tonnerres d'applaudissements, une tempête de cris »", options: ["Métaphore","Comparaison","Personnification","Litote"], answers: ["Métaphore"] },
    { text: "« Les arbres gémissaient sous la tempête. »", options: ["Personnification","Allégorie","Métaphore","Comparaison"], answers: ["Personnification"] },
    { text: "« Je verserai un torrent de sang pour me venger. »", options: ["Hyperbole","Métaphore","Litote","Antithèse"], answers: ["Hyperbole"] },
    { text: "« Un silence éloquent s'installa entre les deux rivaux. »", options: ["Oxymore","Antithèse","Chiasme","Périphrase"], answers: ["Oxymore"] },
    { text: "« Le poète est comme l'albatros, voyageur ailé. »", options: ["Comparaison","Métaphore","Personnification","Allégorie"], answers: ["Comparaison"] },
    { text: "« Boire la coupe jusqu'à la lie. »", options: ["Métonymie","Synecdoque","Métaphore","Périphrase"], answers: ["Métonymie"] },
    { text: "« Sa décision n'est pas mauvaise. » (pour dire qu'elle est bonne)", options: ["Litote","Euphémisme","Antiphrase (Ironie)","Hyperbole"], answers: ["Litote"] },
    { text: "« Les forces de l'ordre sont intervenues rapidement. » (pour désigner les policiers)", options: ["Périphrase","Métonymie","Métaphore","Antonomase"], answers: ["Périphrase"] },
    { text: "« Quel beau temps ! » (alors qu'il pleut à torrents)", options: ["Antiphrase (Ironie)","Oxymore","Litote","Euphémisme"], answers: ["Antiphrase (Ironie)"] },
    { text: "« Elle a versé des pleurs, des larmes, des torrents de désespoir. »", options: ["Gradation","Accumulation","Chiasme","Anaphore"], answers: ["Gradation","Accumulation"] },
    { text: "« La ville lumière attire les touristes du monde entier. »", options: ["Périphrase","Métaphore","Métonymie","Synecdoque"], answers: ["Périphrase"] },
    { text: "« Un mort-vivant errait dans les couloirs du château. »", options: ["Oxymore","Antithèse","Périphrase","Hyperbole"], answers: ["Oxymore"] },
    { text: "« Un vent à décorner les bœufs soufflait sur la falaise. »", options: ["Hyperbole","Métaphore","Personnification","Litote"], answers: ["Hyperbole"] },
    { text: "« Le cœur a ses raisons que la raison ne connaît point. » (Pascal)", options: ["Antithèse","Oxymore","Chiasme","Parallélisme"], answers: ["Antithèse"] },
    { text: "« Un roi chantait en bas, en haut mourait un dieu. » (Hugo)", options: ["Chiasme","Antithèse","Oxymore","Anaphore"], answers: ["Chiasme","Antithèse"] },
    { text: "« La Faucheuse vient de frapper à sa porte. » (La Faucheuse pour la Mort)", options: ["Allégorie","Périphrase","Comparaison","Litote"], answers: ["Allégorie","Périphrase"] },
    { text: "« Ses cheveux d'or flottaient au vent. »", options: ["Métaphore","Comparaison","Périphrase","Personnification"], answers: ["Métaphore"] },
    { text: "« L'or noir est au cœur des tensions géopolitiques. » (L'or noir pour le pétrole)", options: ["Périphrase","Métaphore","Synecdoque","Oxymore"], answers: ["Périphrase","Métaphore"] },
    { text: "« Cette obscure clarté qui tombe des étoiles » (Corneille, Le Cid)", options: ["Antithèse","Oxymore","Périphrase","Hyperbole"], answers: ["Oxymore"] },
    { text: "« Je vis, je meurs ; je me brûle et me noie. » (Louise Labé)", options: ["Antithèse","Chiasme","Métaphore","Euphémisme"], answers: ["Antithèse"] },
    { text: "« Va, je ne te hais point. » (Corneille, Le Cid)", options: ["Litote","Euphémisme","Métaphore","Personnification"], answers: ["Litote"] },
    { text: "« Je meurs, je suis mort, je suis enterré. » (Molière, L'Avare)", options: ["Gradation","Hyperbole","Anaphore","Chiasme"], answers: ["Gradation","Hyperbole"] },
    { text: "« La Nature est un temple où de vivants piliers… » (Baudelaire, Correspondances)", options: ["Métaphore","Comparaison","Allégorie","Périphrase"], answers: ["Métaphore"] },
    { text: "« La Terre est bleue comme une orange. » (Paul Éluard)", options: ["Comparaison","Métaphore","Oxymore","Personnification"], answers: ["Comparaison"] },
    { text: "« Rome a voté, Rome est soumise, Rome est libre. »", options: ["Anaphore","Parallélisme","Gradation","Métonymie"], answers: ["Anaphore"] },
    { text: "« Il faut manger pour vivre, et non pas vivre pour manger. » (Molière)", options: ["Chiasme","Antithèse","Oxymore","Anaphore"], answers: ["Chiasme"] },
    { text: "« Un silence assourdissant envahit la pièce. »", options: ["Oxymore","Antithèse","Litote","Métaphore"], answers: ["Oxymore"] },
    { text: "« Le soleil noir de la Mélancolie » (Gérard de Nerval)", options: ["Oxymore","Antithèse","Périphrase","Comparaison"], answers: ["Oxymore"] },
    { text: "« Hâtez-vous lentement. » (Boileau)", options: ["Oxymore","Antithèse","Litote","Chiasme"], answers: ["Oxymore"] },
    { text: "« Ô temps ! suspends ton vol, et vous, heures propices ! » (Lamartine)", options: ["Apostrophe","Personnification","Allégorie","Hyperbole"], answers: ["Apostrophe","Personnification"] },
    { text: "« Ma jeunesse ne fut qu'un ténébreux orage » (Baudelaire)", options: ["Métaphore","Comparaison","Oxymore","Antithèse"], answers: ["Métaphore"] },
    { text: "« C'est un roc ! c'est un pic ! c'est un cap ! Que dis-je, c'est un cap ? C'est une péninsule ! » (Rostand)", options: ["Gradation","Hyperbole","Accumulation","Comparaison"], answers: ["Gradation","Hyperbole"] },
    { text: "« Les voiles s'éloignaient à l'horizon. » (pour désigner les bateaux)", options: ["Synecdoque","Métonymie","Périphrase","Métaphore"], answers: ["Synecdoque"] },
    { text: "« Le poète est semblable au prince des nuées » (Baudelaire)", options: ["Comparaison","Métaphore","Allégorie","Périphrase"], answers: ["Comparaison"] },
    { text: "« Tout l'univers obéit à l'Amour. » (La Fontaine)", options: ["Allégorie","Personnification","Hyperbole","Métonymie"], answers: ["Allégorie"] }
  ],

  /* ──────────────────────────────────────────────────────────
     2. GRAMMAIRE
  ────────────────────────────────────────────────────────── */
  grammaire: [
    { text: "« S'il [avait fait] beau, nous serions sortis. » À quel temps et mode est le verbe entre crochets ?", options: ["Indicatif plus-que-parfait","Subjonctif plus-que-parfait","Conditionnel passé","Indicatif imparfait"], answers: ["Indicatif plus-que-parfait"] },
    { text: "« Il court [de peur qu'il ne soit en retard]. » Quelle relation logique est exprimée ici ?", options: ["Le but (la crainte)","La cause","La conséquence","La condition"], answers: ["Le but (la crainte)"] },
    { text: "« Je ne pense pas [qu'il vienne]. » À quel mode est le verbe de la proposition subordonnée ?", options: ["Subjonctif","Indicatif","Conditionnel","Impératif"], answers: ["Subjonctif"] },
    { text: "« C'est l'ami [auquel] je pense souvent. » Quelle est la classe grammaticale précise du mot entre crochets ?", options: ["Pronom relatif composé","Pronom interrogatif","Déterminant démonstratif","Conjonction de subordination"], answers: ["Pronom relatif composé"] },
    { text: "« Dis-moi [quand tu partiras en vacances]. » Quelle est la nature de la proposition entre crochets ?", options: ["Subordonnée interrogative indirecte","Subordonnée relative","Subordonnée conjonctive complétive","Subordonnée circonstancielle de temps"], answers: ["Subordonnée interrogative indirecte"] },
    { text: "« [Le travail terminé], les ouvriers quittèrent le chantier. » Quelle est la nature de la proposition entre crochets ?", options: ["Proposition subordonnée participiale","Proposition subordonnée infinitive","Proposition subordonnée relative","Proposition indépendante"], answers: ["Proposition subordonnée participiale"] },
    { text: "« Il est si fatigué [que personne ne veut le déranger]. » Quelle relation logique est introduite ici ?", options: ["La conséquence","La cause","L'opposition","Le but"], answers: ["La conséquence"] },
    { text: "« Que veux-tu que je fasse de ce vieux dictionnaire ? » De quel type d'interrogation s'agit-il ?", options: ["Interrogation partielle","Interrogation totale","Interrogation indirecte","Interrogation rhétorique"], answers: ["Interrogation partielle"] },
    { text: "« Soudain, l'orateur entra et la foule [se tut]. » Quelle est la valeur du passé simple ici ?", options: ["Action soudaine / de premier plan","Action durable","Action répétitive","Arrière-plan descriptif"], answers: ["Action soudaine / de premier plan"] },
    { text: "« Ne devriez-vous pas être en train de réviser votre français ? » De quel type d'interrogation s'agit-il ?", options: ["Interrogation rhétorique (ou oratoire)","Interrogation totale","Interrogation partielle","Interrogation indirecte"], answers: ["Interrogation rhétorique (ou oratoire)"] },
    { text: "« La pièce de théâtre [que] j'ai vue hier soir était excellente. » Quelle est la fonction du pronom relatif entre crochets ?", options: ["Complément d'objet direct (COD) du verbe 'ai vue'","Sujet du verbe 'ai vue'","Complément du nom 'pièce'","Attribut du sujet"], answers: ["Complément d'objet direct (COD) du verbe 'ai vue'"] },
    { text: "« Quoi [que] tu dises, je ne changerai pas d'avis. » Quelle relation logique est exprimée ?", options: ["La concession","La cause","La condition","Le but"], answers: ["La concession"] },
    { text: "« Je me réjouis [que tu sois là parmi nous aujourd'hui]. » Quelle est la nature de la proposition entre crochets ?", options: ["Subordonnée conjonctive complétive","Subordonnée relative","Subordonnée circonstancielle","Proposition principale"], answers: ["Subordonnée conjonctive complétive"] },
    { text: "« Bien qu'il [fasse] froid, il est sorti sans manteau. » Quel est le mode du verbe entre crochets ?", options: ["Subjonctif","Indicatif","Conditionnel","Impératif"], answers: ["Subjonctif"] },
    { text: "« Il ne mange [que] des légumes. » De quel type de négation s'agit-il ?", options: ["Négation restrictive","Négation totale","Négation lexicale","Négation partielle"], answers: ["Négation restrictive"] },
    { text: "« Je me demande [si le train arrivera à l'heure]. » Quelle est la nature de cette proposition ?", options: ["Subordonnée interrogative indirecte","Subordonnée relative","Subordonnée conjonctive complétive","Proposition principale"], answers: ["Subordonnée interrogative indirecte"] },
    { text: "« Il travaille d'arrache-pied [pour que ses parents soient fiers]. » Quelle relation logique est exprimée ?", options: ["Le but","La cause","La conséquence","La concession"], answers: ["Le but"] },
    { text: "« S'il faisait beau, nous [partirions] à la mer. » À quel temps et mode est le verbe entre crochets ?", options: ["Conditionnel présent","Subjonctif présent","Indicatif futur simple","Indicatif imparfait"], answers: ["Conditionnel présent"] },
    { text: "« La Bruyère [peint] les travers des hommes de son siècle. » Quelle est la valeur du présent ici ?", options: ["Présent d'énonciation","Présent de vérité générale","Présent de narration","Présent d'habitude"], answers: ["Présent d'énonciation"] },
    { text: "« La Terre [tourne] autour du Soleil. » Quelle est la valeur du présent ici ?", options: ["Présent de vérité générale","Présent d'énonciation","Présent de narration","Présent d'habitude"], answers: ["Présent de vérité générale"] },
    { text: "« Il ne se passe [rien] de nouveau aujourd'hui. » De quel type de négation s'agit-il ?", options: ["Négation totale","Négation partielle","Négation restrictive","Négation lexicale"], answers: ["Négation partielle"] },
    { text: "« [Bien qu']elle ait étudié, elle redoute l'oral. » Quelle relation logique est introduite ?", options: ["La concession","La cause","Le but","La condition"], answers: ["La concession"] },
    { text: "« L'eau [bout] à 100°C. » Quelle est la valeur du présent entre crochets ?", options: ["Présent de vérité générale","Présent d'énonciation","Présent de narration","Présent d'habitude"], answers: ["Présent de vérité générale"] },
    { text: "« Je veux [que tu lises ce texte]. » Quelle est la fonction de la proposition entre crochets ?", options: ["Complément d'objet direct (COD)","Complément d'objet indirect (COI)","Sujet","Attribut du sujet"], answers: ["Complément d'objet direct (COD)"] },
    { text: "« [Au cas où] vous auriez un problème, prévenez-moi. » Quelle relation logique est introduite ici ?", options: ["La condition / L'hypothèse","La cause","La concession","Le temps"], answers: ["La condition / L'hypothèse"] },
    { text: "« Qui n'aurait pas peur face à un tel danger ? » De quel type d'interrogation s'agit-il ?", options: ["Interrogation rhétorique (ou oratoire)","Interrogation totale","Interrogation partielle","Interrogation indirecte"], answers: ["Interrogation rhétorique (ou oratoire)"] },
    { text: "« L'écrivain [dont] la notoriété grandit refuse les interviews. » Quelle est la fonction du pronom relatif entre crochets ?", options: ["Complément du nom 'notoriété'","Complément d'objet direct","Sujet du verbe grandit","Complément d'agent"], answers: ["Complément du nom 'notoriété'"] },
    { text: "« Si tu révises, tu [réussiras]. » À quel temps et mode est le verbe entre crochets ?", options: ["Indicatif futur simple","Conditionnel présent","Indicatif présent","Subjonctif présent"], answers: ["Indicatif futur simple"] },
    { text: "« Je regarde les oiseaux [s'envoler]. » Quelle est la nature de la proposition entre crochets ?", options: ["Proposition subordonnée infinitive","Proposition subordonnée relative","Proposition subordonnée participiale","Proposition indépendante"], answers: ["Proposition subordonnée infinitive"] },
    { text: "« Il a tant travaillé [qu'il a obtenu les félicitations du jury]. » Quelle relation logique est exprimée ?", options: ["La conséquence","La cause","Le but","La concession"], answers: ["La conséquence"] },
    { text: "« Tous les soirs, elle [relisait] ses fiches. » Quelle est la valeur de l'imparfait entre crochets ?", options: ["L'habitude / La répétition","La description","L'action coupée","Le second plan"], answers: ["L'habitude / La répétition"] },
    { text: "« Les fleurs que j'ai [cueillies] sont magnifiques. » Pourquoi le participe passé prend-il la marque du féminin pluriel ?", options: ["Il s'accorde avec le sujet 'j''","Il s'accorde avec le COD 'que' placé avant le verbe","Il s'accorde avec le COI 'fleurs'","L'accord est une erreur"], answers: ["Il s'accorde avec le COD 'que' placé avant le verbe"] },
    { text: "« Selon les derniers rapports, le suspect [serait] en fuite. » Quelle est la valeur du conditionnel entre crochets ?", options: ["Une information incertaine / un fait non vérifié","Un souhait","Un futur dans le passé","Une condition hypothétique"], answers: ["Une information incertaine / un fait non vérifié"] },
    { text: "« Le vieux pont a été détruit par la tempête. » À quelle voix est construite cette phrase ?", options: ["Voix passive","Voix active","Voix pronominale","Voix impersonnelle"], answers: ["Voix passive"] },
    { text: "« Qu'il [entre] immédiatement ! » Quelle est la valeur du subjonctif dans cette proposition indépendante ?", options: ["L'ordre ou l'injonction","Le souhait","L'hypothèse","L'indignation"], answers: ["L'ordre ou l'injonction"] },
    { text: "« [Partir] est la seule solution. » Quelle est la fonction de l'infinitif entre crochets ?", options: ["Sujet du verbe 'est'","Complément d'objet direct (COD)","Attribut du sujet","Complément du nom"], answers: ["Sujet du verbe 'est'"] },
    { text: "« [Alors que] le premier candidat était stressé, le second paraissait serein. » Quelle relation logique est exprimée ?", options: ["L'opposition","La cause","La conséquence","Le but"], answers: ["L'opposition"] },
    { text: "« Je crains qu'il ne [vienne]. » Comment s'appelle le 'ne' employé ici ?", options: ["Ne explétif","Ne de négation totale","Ne de négation restrictive","Ne discordant"], answers: ["Ne explétif"] },
    { text: "« Soudain, la porte s'ouvrit : le chevalier [entre]. » Quelle est la valeur du présent entre crochets ?", options: ["Présent de vérité générale","Présent de narration","Présent d'énonciation","Présent d'habitude"], answers: ["Présent de narration"] },
    { text: "« Le soleil [brillait] et les oiseaux chantaient quand soudain un cri retentit. » Quelle est la valeur de l'imparfait entre crochets ?", options: ["Arrière-plan descriptif","Habitude","Action de premier plan","Condition"], answers: ["Arrière-plan descriptif"] },
    { text: "« Si j'avais su, je [serais venu] plus tôt. » À quel temps et mode est le verbe entre crochets ?", options: ["Conditionnel passé","Conditionnel présent","Indicatif plus-que-parfait","Subjonctif passé"], answers: ["Conditionnel passé"] },
    { text: "« À peine fut-il arrivé [qu'il dut repartir]. » Quelle est la nature de la proposition entre crochets ?", options: ["Subordonnée circonstancielle de temps","Subordonnée circonstancielle de conséquence","Subordonnée conjonctive complétive","Subordonnée relative"], answers: ["Subordonnée circonstancielle de temps"] },
    { text: "« Il est indispensable que vous [sachiez] votre leçon. » À quel temps et mode est le verbe entre crochets ?", options: ["Subjonctif présent","Indicatif présent","Conditionnel présent","Subjonctif imparfait"], answers: ["Subjonctif présent"] }
  ],

  /* ──────────────────────────────────────────────────────────
     3. MOUVEMENTS ET HISTOIRE LITTÉRAIRE
  ────────────────────────────────────────────────────────── */
  mouvements: [
    { text: "Quel mouvement littéraire du XVIe siècle prône la dignité de l'être humain, la curiosité intellectuelle et la confiance en la raison, notamment illustré par Érasme et Montaigne ?", options: ["L'Humanisme","Le Baroque","Le Classicisme","La Pléiade"], answers: ["L'Humanisme"] },
    { text: "La Pléiade est un groupe de poètes français du XVIe siècle. Qui en est le chef de file et l'auteur de la célèbre défense du français intitulée Défense et illustration de la langue française (1549) ?", options: ["Joachim du Bellay","Pierre de Ronsard","Clément Marot","Agrippa d'Aubigné"], answers: ["Joachim du Bellay"] },
    { text: "À quel mouvement appartient Pierre de Ronsard, auteur des Odes et des Amours ?", options: ["La Pléiade","L'Humanisme","Le Baroque","Le Classicisme"], answers: ["La Pléiade"] },
    { text: "Le Classicisme français atteint son apogée sous le règne de Louis XIV. Quelle valeur fondamentale ce mouvement place-t-il au-dessus de tout ?", options: ["La vraisemblance et la bienséance","La liberté absolue de l'écrivain","Le mystère et le sacré","L'imagination débridée"], answers: ["La vraisemblance et la bienséance"] },
    { text: "Qui est l'auteur classique des tragédies Phèdre et Andromaque ?", options: ["Jean Racine","Pierre Corneille","Molière","La Bruyère"], answers: ["Jean Racine"] },
    { text: "Les Lumières sont un mouvement philosophique et littéraire du XVIIIe siècle. Quel est leur principal instrument de diffusion des idées, co-dirigé par Diderot et d'Alembert ?", options: ["L'Encyclopédie","Le Dictionnaire philosophique","L'Esprit des lois","Les Lettres philosophiques"], answers: ["L'Encyclopédie"] },
    { text: "Voltaire, Rousseau et Montesquieu sont les grandes figures du XVIIIe siècle. À quel mouvement appartiennent-ils ?", options: ["Les Lumières","Le Romantisme","Le Réalisme","L'Humanisme"], answers: ["Les Lumières"] },
    { text: "Le Romantisme est un mouvement du début du XIXe siècle. Quelle notion est au cœur de ce mouvement, désignant la tristesse mélancolique et indéfinie de l'individu romantique ?", options: ["Le mal du siècle","La catharsis","La règle des trois unités","L'ekphrasis"], answers: ["Le mal du siècle"] },
    { text: "Victor Hugo, Lamartine et Alfred de Musset sont des représentants majeurs de quel mouvement ?", options: ["Le Romantisme","Le Réalisme","Le Symbolisme","Le Surréalisme"], answers: ["Le Romantisme"] },
    { text: "Le Réalisme (XIXe siècle) cherche à peindre la société avec exactitude. Honoré de Balzac regroupe ses romans sous quel titre collectif ambitieux ?", options: ["La Comédie humaine","Les Rougon-Macquart","Les Misérables","L'Éducation sentimentale"], answers: ["La Comédie humaine"] },
    { text: "Gustave Flaubert et Guy de Maupassant sont associés au Réalisme. Quel roman de Flaubert, sous-titré 'Mœurs de province', est considéré comme un chef-d'œuvre du mouvement ?", options: ["Madame Bovary","Germinal","Bel-Ami","Nana"], answers: ["Madame Bovary"] },
    { text: "Le Naturalisme est une extension du Réalisme. Émile Zola en est le chef de file. Comment appelle-t-il sa série de vingt romans consacrée à une famille sous le Second Empire ?", options: ["Les Rougon-Macquart","La Comédie humaine","Les Fleurs du Mal","Les Cahiers de Malte Laurids Brigge"], answers: ["Les Rougon-Macquart"] },
    { text: "Baudelaire, Verlaine, Rimbaud et Mallarmé appartiennent au mouvement qui privilégie la musicalité du vers, les correspondances et le symbole plutôt que le sens direct. Comment s'appelle ce mouvement ?", options: ["Le Symbolisme","Le Parnasse","Le Réalisme","Le Romantisme"], answers: ["Le Symbolisme"] },
    { text: "Les Fleurs du Mal (1857) de Baudelaire sont condamnées pour immoralité à leur publication. À quel mouvement les rattache-t-on aujourd'hui ?", options: ["Symbolisme / Parnasse (préfiguration)","Romantisme tardif","Réalisme poétique","Naturalisme"], answers: ["Symbolisme / Parnasse (préfiguration)"] },
    { text: "Le Surréalisme naît dans les années 1920. Quel est le nom de son manifeste fondateur (1924) et qui en est l'auteur ?", options: ["Manifeste du Surréalisme d'André Breton","Manifeste du Futurisme de Marinetti","Manifeste du Dadaïsme de Tzara","Manifeste du Symbolisme de Moréas"], answers: ["Manifeste du Surréalisme d'André Breton"] },
    { text: "Le Surréalisme explore l'inconscient et les rêves. Quelle technique d'écriture surréaliste consiste à écrire rapidement sans contrôle de la raison ?", options: ["L'écriture automatique","Le courant de conscience","Le style indirect libre","La technique du cadavre exquis"], answers: ["L'écriture automatique"] },
    { text: "L'Existentialisme, illustré par Sartre et Camus dans l'après-guerre, associe liberté et responsabilité. Quelle formule célèbre résume la philosophie sartrienne ?", options: ["L'existence précède l'essence","Je pense donc je suis","L'homme est la mesure de toute chose","La vie est absurde, donc il faut se révolter"], answers: ["L'existence précède l'essence"] },
    { text: "Le Nouveau Roman (années 1950-1960) remet en cause les conventions romanesques traditionnelles. Quel auteur de ce courant est notamment connu pour La Jalousie et Les Gommes ?", options: ["Alain Robbe-Grillet","Samuel Beckett","Marguerite Duras","Michel Butor"], answers: ["Alain Robbe-Grillet"] },
    { text: "La poésie baroque du XVIIe siècle se caractérise par ses images excessives et l'idée d'instabilité du monde. Agrippa d'Aubigné et Théophile de Viau en sont des figures. Quelle métaphore traduit l'esprit baroque ?", options: ["Le monde est un théâtre (theatrum mundi)","Le monde est un long fleuve tranquille","Le monde est une machine bien huilée","Le monde est une forêt de symboles"], answers: ["Le monde est un théâtre (theatrum mundi)"] },
    { text: "Au XVIIe siècle, quel courant précieux se développe dans les salons, caractérisé par un langage raffiné et l'idéalisation des sentiments ?", options: ["La Préciosité","Le Libertinage","Le Jansénisme","L'Honnêteté"], answers: ["La Préciosité"] },
    { text: "« Spleen et Idéal » est la première section des Fleurs du Mal. Le mot 'spleen' désigne chez Baudelaire :", options: ["L'ennui profond et la mélancolie douloureuse","La joie mystique","Le désir de gloire","L'aspiration à la beauté parfaite"], answers: ["L'ennui profond et la mélancolie douloureuse"] },
    { text: "Quel mouvement poétique du XIXe siècle, dont Leconte de Lisle est la figure centrale, prône l'art pour l'art et la perfection formelle, rejetant l'épanchement romantique ?", options: ["Le Parnasse","Le Symbolisme","L'Impressionnisme","Le Décadentisme"], answers: ["Le Parnasse"] }
  ],

  /* ──────────────────────────────────────────────────────────
     4. MÉTHODOLOGIE
  ────────────────────────────────────────────────────────── */
  methodo: [
    { text: "Dans un commentaire de texte, la première partie de l'introduction doit amener le sujet depuis un contexte général. Comment s'appelle cette étape ?", options: ["L'amorce (ou accroche)","La problématique","L'annonce du plan","La thèse"], answers: ["L'amorce (ou accroche)"] },
    { text: "Quelle est la différence fondamentale entre la problématique d'un commentaire de texte et celle d'une dissertation ?", options: ["Le commentaire s'appuie sur un texte précis ; la dissertation sur une question plus générale","La dissertation n'a pas de problématique","Le commentaire ne nécessite pas de plan","La dissertation ne cite aucun auteur"], answers: ["Le commentaire s'appuie sur un texte précis ; la dissertation sur une question plus générale"] },
    { text: "Dans la méthode du commentaire de texte, qu'est-ce qu'un 'axe de lecture' (ou 'grande partie') ?", options: ["Une idée directrice qui structure l'analyse autour d'un aspect essentiel du texte","Un simple résumé d'un paragraphe du texte","Une liste d'exemples tirés du texte","Une biographie de l'auteur"], answers: ["Une idée directrice qui structure l'analyse autour d'un aspect essentiel du texte"] },
    { text: "Une transition entre deux parties d'un commentaire ou d'une dissertation doit obligatoirement contenir deux éléments. Lesquels ?", options: ["Un bilan de la partie précédente et une annonce de la partie suivante","Une citation et une explication","Un exemple et une contre-thèse","Une définition et une question rhétorique"], answers: ["Un bilan de la partie précédente et une annonce de la partie suivante"] },
    { text: "Dans une dissertation littéraire, quelle est la structure de plan la plus courante et la plus attendue pour un sujet dialectique (thèse/antithèse/synthèse) ?", options: ["Plan en trois parties : thèse, antithèse, synthèse (dépassement)","Plan en deux parties : pour et contre","Plan en cinq parties successives","Plan chronologique de l'auteur"], answers: ["Plan en trois parties : thèse, antithèse, synthèse (dépassement)"] },
    { text: "Lors de l'explication d'un extrait (commentaire), on analyse un procédé stylistique. Quel est l'ordre logique à respecter pour chaque analyse ?", options: ["Citer (exemple) → Nommer le procédé → Interpréter l'effet","Interpréter l'effet → Nommer le procédé → Citer","Nommer le procédé → Interpréter l'effet (sans citer)","Résumer → Citer → Nommer"], answers: ["Citer (exemple) → Nommer le procédé → Interpréter l'effet"] },
    { text: "Qu'est-ce que le 'paratexte' d'une œuvre ?", options: ["L'ensemble des éléments entourant le texte principal : titre, préface, épigraphe, dédicace, notes","Le texte principal du roman","La biographie de l'auteur publiée séparément","Les critiques publiées dans la presse"], answers: ["L'ensemble des éléments entourant le texte principal : titre, préface, épigraphe, dédicace, notes"] },
    { text: "La conclusion d'une dissertation comprend deux temps obligatoires. Lesquels ?", options: ["Le bilan de la démonstration et l'ouverture (perspective)","Le résumé de l'introduction et une nouvelle thèse","La réponse définitive et une citation conclusive","La réfutation de la thèse et l'annonce d'un autre sujet"], answers: ["Le bilan de la démonstration et l'ouverture (perspective)"] },
    { text: "Pour l'épreuve du Bac de français (écrit), quelles sont les trois formes d'écriture proposées au choix ?", options: ["Commentaire de texte, dissertation, contraction de texte / essai","Dissertation, résumé, traduction","Commentaire, résumé, synthèse de documents","Analyse linéaire, commentaire, biographie"], answers: ["Commentaire de texte, dissertation, contraction de texte / essai"] },
    { text: "Dans le commentaire de texte, que signifie 'analyser de manière linéaire' un passage ?", options: ["Suivre l'ordre du texte pour en dégager les étapes et le mouvement du texte","Comparer le texte à d'autres œuvres","Résumer le texte paragraphe par paragraphe","Lire le texte à voix haute en classe"], answers: ["Suivre l'ordre du texte pour en dégager les étapes et le mouvement du texte"] },
    { text: "Lors de la lecture analytique ou du commentaire, comment appelle-t-on le type de narration où le narrateur est absent du récit et relate les événements à la 3e personne ?", options: ["Narrateur hétérodiégétique","Narrateur homodiégétique","Narrateur autodiégétique","Narrateur omniscient neutre"], answers: ["Narrateur hétérodiégétique"] },
    { text: "Dans une dissertation, qu'est-ce qu'une 'thèse' ?", options: ["La position défendue par l'auteur ou que l'on défend dans le devoir","L'ensemble des exemples du devoir","La question posée en introduction","La conclusion finale du travail"], answers: ["La position défendue par l'auteur ou que l'on défend dans le devoir"] },
    { text: "Dans un devoir de français, on parle de 'registre d'écriture'. Comment définit-on le registre ?", options: ["La tonalité dominante d'un texte qui produit un effet sur le lecteur (pathétique, comique, tragique…)","Le niveau de langue utilisé (soutenu, familier, courant)","Le point de vue du narrateur","La forme du texte (prose ou vers)"], answers: ["La tonalité dominante d'un texte qui produit un effet sur le lecteur (pathétique, comique, tragique…)"] },
    { text: "Quelle est la principale différence entre l'analyse linéaire (oral du Bac) et le commentaire composé (écrit du Bac) ?", options: ["L'analyse linéaire suit l'ordre du texte ; le commentaire composé est organisé par axes thématiques","Le commentaire composé est plus court que l'analyse linéaire","L'analyse linéaire est réservée à la poésie","Le commentaire composé ne nécessite pas d'introduction"], answers: ["L'analyse linéaire suit l'ordre du texte ; le commentaire composé est organisé par axes thématiques"] },
    { text: "Dans la dissertation, la 'concession' consiste à :", options: ["Reconnaître une part de vérité dans la thèse adverse avant de la dépasser","Introduire une nouvelle idée sans lien avec la précédente","Citer un auteur pour appuyer sa propre thèse","Reformuler sa propre thèse en d'autres termes"], answers: ["Reconnaître une part de vérité dans la thèse adverse avant de la dépasser"] },
    { text: "Lors de la rédaction d'un commentaire, à quoi sert le 'chapeau introductif' (ou introduction) ?", options: ["Situer l'auteur et l'œuvre, présenter l'extrait, annoncer la problématique et le plan","Résumer l'intégralité du texte","Donner son avis personnel sur l'auteur","Citer toutes les figures de style du texte"], answers: ["Situer l'auteur et l'œuvre, présenter l'extrait, annoncer la problématique et le plan"] },
    { text: "Pour l'écrit du Bac, quelle est la durée réglementaire de l'épreuve de français ?", options: ["4 heures","2 heures","3 heures","6 heures"], answers: ["4 heures"] },
    { text: "Dans un commentaire ou une dissertation, que désigne le terme 'argumentation indirecte' ?", options: ["L'utilisation de formes narratives (fable, conte, roman) pour défendre une idée","L'emploi de métaphores uniquement","La réfutation des arguments adverses","L'absence totale d'opinion de l'auteur"], answers: ["L'utilisation de formes narratives (fable, conte, roman) pour défendre une idée"] },
    { text: "Pour reformuler une idée sans plagier, quelle pratique est essentielle dans un devoir de français ?", options: ["La paraphrase transformatrice (reformuler en ses propres mots + analyser)","La copie intégrale du texte entre guillemets","L'omission de toute référence au texte","La traduction du texte dans une autre langue"], answers: ["La paraphrase transformatrice (reformuler en ses propres mots + analyser)"] },
    { text: "Qu'appelle-t-on le 'point de vue interne' (ou focalisation interne) dans un récit ?", options: ["Le narrateur ne dit que ce que sait ou ressent un personnage précis","Le narrateur sait tout sur tous les personnages","Le narrateur est extérieur et neutre","Le narrateur raconte à la première personne"], answers: ["Le narrateur ne dit que ce que sait ou ressent un personnage précis"] }
  ],

  /* ──────────────────────────────────────────────────────────
     5. LES 4 OBJETS D'ÉTUDE
  ────────────────────────────────────────────────────────── */
  objets: [
    /* POÉSIE */
    { text: "Un sonnet classique est composé de :", options: ["Deux quatrains et deux tercets (14 vers)","Trois sizains (18 vers)","Quatre quatrains (16 vers)","Un distique et deux sizains (14 vers)"], answers: ["Deux quatrains et deux tercets (14 vers)"] },
    { text: "L'alexandrin est le vers le plus prestigieux de la poésie française classique. Combien de syllabes compte-t-il ?", options: ["12 syllabes","10 syllabes","8 syllabes","14 syllabes"], answers: ["12 syllabes"] },
    { text: "Le 'e muet' en fin de mot est-il compté dans la métrique si le mot suivant commence par une consonne ?", options: ["Oui, il forme une syllabe (élision impossible devant consonne)","Non, il est toujours muet","Non, il est toujours élidé","Oui, mais seulement dans la poésie romantique"], answers: ["Oui, il forme une syllabe (élision impossible devant consonne)"] },
    { text: "Qu'est-ce qu'un 'enjambement' en poésie ?", options: ["Le débordement du sens d'un vers sur le vers suivant, sans pause à la fin du premier vers","Une rime qui lie deux strophes","Une répétition de sonorités en fin de vers","Un retour à la ligne sans changement de sens"], answers: ["Le débordement du sens d'un vers sur le vers suivant, sans pause à la fin du premier vers"] },
    { text: "Les rimes 'embrassées' suivent le schéma :", options: ["ABBA","ABAB","AABB","AAAB"], answers: ["ABBA"] },
    { text: "Qu'est-ce que le 'lyrisme' en poésie ?", options: ["L'expression personnelle des sentiments et des émotions du poète","La description objective du monde extérieur","La narration d'une histoire épique","Le discours satirique sur la société"], answers: ["L'expression personnelle des sentiments et des émotions du poète"] },
    { text: "Paul Verlaine, dans son poème Art poétique, préconise : 'De la musique avant toute chose'. À quel mouvement se rattache cette conception ?", options: ["Le Symbolisme","Le Romantisme","Le Surréalisme","Le Classicisme"], answers: ["Le Symbolisme"] },
    /* ROMAN */
    { text: "Qu'est-ce que le 'style indirect libre' dans un roman ?", options: ["La fusion des paroles ou pensées d'un personnage avec la voix du narrateur, sans guillemets ni verbe introducteur","L'utilisation de guillemets pour rapporter les paroles d'un personnage","La narration à la première personne par le personnage principal","Un discours entièrement rapporté par le narrateur"], answers: ["La fusion des paroles ou pensées d'un personnage avec la voix du narrateur, sans guillemets ni verbe introducteur"] },
    { text: "Qu'appelle-t-on l'incipit d'un roman ?", options: ["Le début du roman, qui pose le cadre, les personnages et accroche le lecteur","La scène finale du roman","Le titre de l'œuvre","La préface de l'éditeur"], answers: ["Le début du roman, qui pose le cadre, les personnages et accroche le lecteur"] },
    { text: "L'excipit est :", options: ["La fin du roman (dernières pages ou dernier chapitre)","Le titre alternatif du roman","La dédicace du roman","La table des matières"], answers: ["La fin du roman (dernières pages ou dernier chapitre)"] },
    { text: "Dans la narratologie, qu'est-ce que la 'focalisation zéro' (ou point de vue omniscient) ?", options: ["Le narrateur connaît tout des personnages, leurs pensées, leur passé et leur avenir","Le narrateur ne sait rien de plus que le lecteur","Le narrateur adopte le point de vue d'un seul personnage","Le narrateur est un personnage du récit"], answers: ["Le narrateur connaît tout des personnages, leurs pensées, leur passé et leur avenir"] },
    { text: "Qu'est-ce qu'une 'ellipse narrative' dans un roman ?", options: ["Un saut dans le temps : le narrateur passe sous silence une période sans la raconter","Un retour en arrière (analepse)","Une anticipation sur les événements futurs","Une description très détaillée d'un moment bref"], answers: ["Un saut dans le temps : le narrateur passe sous silence une période sans la raconter"] },
    /* THÉÂTRE */
    { text: "La règle classique des trois unités (XVIIe siècle) impose :", options: ["Unité de temps (24h), de lieu (un seul endroit) et d'action (une seule intrigue principale)","Unité de style, de ton et de registre","Unité de personnages, de costumes et de décors","Unité de langue, de mètre et de rimes"], answers: ["Unité de temps (24h), de lieu (un seul endroit) et d'action (une seule intrigue principale)"] },
    { text: "Dans une pièce de théâtre, qu'est-ce qu'un 'aparté' ?", options: ["Une réplique prononcée par un personnage pour le public seul, que les autres personnages sont censés ne pas entendre","Une longue tirade d'un seul personnage","Un dialogue entre deux personnages secondaires","Un monologue prononcé seul en scène"], answers: ["Une réplique prononcée par un personnage pour le public seul, que les autres personnages sont censés ne pas entendre"] },
    { text: "Comment appelle-t-on la situation où le spectateur possède une information que les personnages n'ont pas ?", options: ["L'ironie dramatique (ou tragique)","Le coup de théâtre","Le deus ex machina","Le quiproquo"], answers: ["L'ironie dramatique (ou tragique)"] },
    { text: "Dans la tragédie classique, la 'catharsis' désigne :", options: ["La purification des passions du spectateur par la pitié et la crainte","Le dénouement heureux de la pièce","L'entrée du héros en scène","La chute du héros tragique"], answers: ["La purification des passions du spectateur par la pitié et la crainte"] },
    { text: "Qu'est-ce qu'un 'quiproquo' au théâtre ?", options: ["Une méprise : un personnage ou une situation est pris pour un autre, créant des malentendus","Un retournement de situation inattendu","L'intervention d'un personnage divin pour résoudre l'intrigue","Un aparté adressé au public"], answers: ["Une méprise : un personnage ou une situation est pris pour un autre, créant des malentendus"] },
    { text: "Qu'est-ce qu'un 'deus ex machina' au théâtre ?", options: ["Un procédé de dénouement où une force extérieure inattendue résout l'intrigue de façon artificielle","Une longue tirade philosophique","Une scène de reconnaissance entre deux personnages","Un aparté ironique"], answers: ["Un procédé de dénouement où une force extérieure inattendue résout l'intrigue de façon artificielle"] },
    /* LITTÉRATURE D'IDÉES & REGISTRES */
    { text: "Le registre 'pathétique' vise à susciter chez le lecteur :", options: ["La pitié et la compassion","Le rire et la dérision","La terreur et l'horreur","L'admiration et l'émerveillement"], answers: ["La pitié et la compassion"] },
    { text: "Le registre 'épique' est caractérisé par :", options: ["L'amplification, l'héroïsme, des hyperboles et une vision grandiose des événements","La douceur, la mélancolie et la musicalité","L'ironie, la dérision et la critique sociale","La sobriété, la retenue et l'équilibre"], answers: ["L'amplification, l'héroïsme, des hyperboles et une vision grandiose des événements"] },
    { text: "Le registre 'satirique' consiste à :", options: ["Dénoncer les vices et les ridicules de la société par l'ironie et la moquerie","Exprimer la nostalgie et la tristesse","Glorifier les héros et les grandes batailles","Défendre une vérité morale universelle"], answers: ["Dénoncer les vices et les ridicules de la société par l'ironie et la moquerie"] },
    { text: "La 'littérature d'idées' est un objet d'étude du Bac. Elle inclut notamment les essais, les pamphlets et les textes philosophiques. Quelle œuvre de Voltaire illustre parfaitement ce genre par l'utilisation du conte philosophique ?", options: ["Candide ou l'Optimisme","Les Confessions","Le Rouge et le Noir","Les Fleurs du Mal"], answers: ["Candide ou l'Optimisme"] },
    { text: "L'autobiographie est un récit rétrospectif en prose qu'une personne réelle fait de sa propre existence. Quelle œuvre de Rousseau est considérée comme l'acte fondateur du genre autobiographique moderne ?", options: ["Les Confessions","Les Rêveries du promeneur solitaire","Du Contrat social","L'Émile"], answers: ["Les Confessions"] }
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

  // Feedback message
  document.getElementById('feedback-msg').textContent = '';

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

  // Feedback message
  const fb = document.getElementById('feedback-msg');
  if (!isCorrect) {
    const plural = correct.length > 1;
    fb.textContent = `Bonne${plural ? 's' : ''} réponse${plural ? 's' : ''} : ${correct.join(', ')}`;
  } else {
    fb.textContent = streak > 1 ? `🔥 Série de ${streak} bonne${streak > 1 ? 's' : ''} réponse${streak > 1 ? 's' : ''} !` : '';
  }

  // Submit button state
  const btn = document.getElementById('submit-btn');
  btn.className   = `btn-submit ${isCorrect ? 'state-correct' : 'state-wrong'}`;
  btn.textContent = isCorrect ? '✓  Correct !' : '✗  Incorrect';
  btn.disabled    = true;

  // Auto-advance after delay
  setTimeout(() => {
    card.classList.remove('flash-correct', 'flash-wrong');
    currentIndex++;
    if (currentIndex >= questions.length) {
      showEndScreen();
    } else {
      loadQuestion();
    }
  }, 1800);
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

  // Animate progress bar to 100%
  document.getElementById('progress-fill').style.width = '100%';
}

function restartSession() { startSession(currentTab); }

function switchTabFromEnd() {
  // Cycle to the next available tab
  const tabs   = Object.keys(dataset);
  const idx    = tabs.indexOf(currentTab);
  const next   = tabs[(idx + 1) % tabs.length];
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
