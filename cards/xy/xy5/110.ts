import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-110",
	localId: 110,

	// Card informations
	name: {
		en: "Flygon",
		fr: "Libégon",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/110/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/110/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/110/high.png",
		},
	},

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 1306,
		type: AbilityType.TALENT,
		name: {
			en: "Sand Flap",
			fr: "Battement Ensablé",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose either player. That player shuffles his or her hand into his or her deck and draws 4 cards.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir l'un des joueurs. Le joueur choisi mélange sa main avec son deck et pioche 4 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
