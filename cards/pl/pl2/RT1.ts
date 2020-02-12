import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-RT1",
	localId: "RT1",

	// Card informations
	name: {
		en: "Fan Rotom",
		fr: "Motisma Hélice Niv. 46",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT1/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT1/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT1/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 114,
		name: "Motofumi Fujiwara"
	},

	abilities: [{
		id: 499,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fan Shift",
			fr: "Mutation hélice",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Fan Rotom's type is Colorless until the end of your turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Hélice est de type Colorless jusqu'à la fin de votre tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spin Storm",
			fr: "Orage virevoltant",
		},
		text: {
			en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy attached to Fan Rotom.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Motisma Hélice.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
