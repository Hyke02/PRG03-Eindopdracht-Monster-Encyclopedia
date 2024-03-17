<?php
/**
 * @return array
 */
function getMonsters()
{
    return [
        [
            "id" => 1,
            "icon" => "./images/monsters/tobi-kadachi.png",
            "name" => "Tobi-Kadachi",
            "species" => "fanged wyvern",
            "element" => "thunder",
            "habitats" => ["Ancient Forest"]
        ],
        [
            "id" => 2,
            "icon" => "./images/monsters/anjanath.png",
            "name" => "Anjanath",
            "species" => "brute wyvern",
            "element" => "fire",
            "habitats" => ["Ancient Forest", "Wildspire Waste"]
        ],
        [
            "id" => 3,
            "icon" => "./images/monsters/lunastra.png",
            "name" => "Lunastra",
            "species" => "elder dragon",
            "element" => "fire",
            "habitats" => ["Wildspire Waste"]
        ],
        [
            "id" => 4,
            "icon" => "./images/monsters/velkhana.png",
            "name" => "Velkhana",
            "species" => "elder dragon",
            "element" => "ice",
            "habitats" => ["???"]
        ],
        [
            "id" => 5,
            "icon" => "./images/monsters/deviljho.png",
            "name" => "Deviljho",
            "species" => "brute wyvern",
            "element" => "dragon",
            "habitats" => ["???"]
        ],
        [
            "id" => 6,
            "icon" => "./images/monsters/kirin.png",
            "name" => "Kirin",
            "species" => "elder dragon",
            "element" => "thunder",
            "habitats" => ["Coral Highlands"]
        ],
        [
            "id" => 7,
            "icon" => "./images/monsters/legiana.png",
            "name" => "Legiana",
            "species" => "flying wyvern",
            "element" => "ice",
            "habitats" => ["Coral Highlands", "Rotten Vale", "Hoarfrost Reach"]
        ],
        [
            "id" => 8,
            "icon" => "./images/monsters/rathalos.png",
            "name" => "Rathalos",
            "species" => "flying wyvern",
            "element" => "fire",
            "habitats" => ["Ancient Forest"]
        ],
        [
            "id" => 9,
            "icon" => "./images/monsters/yian-garuga.png",
            "name" => "Yian Garuga",
            "species" => "bird wyvern",
            "element" => "fire",
            "habitats" => ["???"]
        ],
        [
            "id" => 10,
            "icon" => "./images/monsters/odogaron.png",
            "name" => "Odogaron",
            "species" => "fanged wyvern",
            "element" => "",
            "habitats" => ["Coral Highlands", "Rotten Vale"]
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getMonsterDetails($id)
{
    $tags = [
        1 => [
            "description" => "A fanged wyvern that flies among the trees of the Ancient Forest. Its penchant to brush against the ground and the trees as it moves around builds up static electricity within its fur.",
            "art" => "./images/monsters/tobi-kadachi_fullart.png"
        ],
        2 => [
            "description" => "The Anjanath patrols the Ancient Forest looking for its favorite meal, Aptonoth. This belligerent monster will attack anything without the slightest provocation.",
            "art" => "./images/monsters/anjanath_fullart.png"
        ],
        3 => [
            "description" => "A brutal female Elder Dragon with breath of flame and expert control over fire. It is said that this control comes from the crown-like horns on its head, but this has not been confirmed.",
            "art" => "./images/monsters/lunastra_fullart.png"
        ],
        4 => [
            "description" => "An elder dragon said to freeze all in its path. According to legend, it can control the cold, and use its freezing breath to conjure massive spires of ice out of nowhere.",
            "art" => "./images/monsters/velkhana_fullart.png"
        ],
        5 => [
            "description" => "Due to its enhanced metabolism, Deviljho must constantly seek out prey. It is extremely violent, and known to snatch up large monsters in its powerful maw and flail them around.",
            "art" => "./images/monsters/deviljho_fullart.png"
        ],
        6 => [
            "description" => "Kirin are so rarely sighted that little is known of their ecology. It's been said that they envelop themselves in pure electricity when they are provoked.",
            "art" => "./images/monsters/kirin_fullart.png"
        ],
        7 => [
            "description" => "The apex monster of the Coral Highlands, whose diet primarily consists of Raphinos. It emits a chilling wind from its body, which dulls its prey's ability to escape.",
            "art" => "./images/monsters/legiana_fullart.png"
        ],
        8 => [
            "description" => 'The apex monster of the Ancient Forest, also known as the "King of the Skies." A terrible wyvern that descends upon invaders, attacking with poison claws and fiery breath.',
            "art" => "./images/monsters/rathalos_fullart.png"
        ],
        9 => [
            "description" => "A short-tempered bird wyvern marked by its hard, black scales and impressive mane. It strikes with its distinctive beak.",
            "art" => "./images/monsters/yian-garuga_fullart.png"
        ],
        10 => [
            "description" => "A terrifying monster that scours the Rotten Vale for carrion. Its highly aggressive nature means that anything, be it monster or man, is a potential meal.",
            "art" => "./images/monsters/odogaron_fullart.png"
        ]
    ];

    return $tags[$id];
}
