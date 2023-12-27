import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		es: "Gardevoir",
		it: "Gardevoir",
		pt: "Gardevoir",
		de: "Guardevoir"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Refinement",
			fr: "Raffinement",
			es: "Refinamiento",
			it: "Raffinatezza",
			pt: "Requinte",
			de: "Finesse"
		},

		effect: {
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			es: "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			it: "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			pt: "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			de: "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
