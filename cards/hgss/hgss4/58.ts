import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-58",
	localId: 58,

	// Card informations
	name: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 436,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/58/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/58/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/58/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Iron Defense",
			fr: "Mur de fer",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Bronzor during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'attaques (y compris les dégâts) infligés à Archéomire durant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
