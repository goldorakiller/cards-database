import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Seviper",
		fr: "Seviper",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 336,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/51/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/51/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/51/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Buildup",
			fr: "Empoisonnement",
		},
		text: {
			en: "Seviper is now Poisoned.",
			fr: "Seviper est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poison Effect",
			fr: "Effets du poison",
		},
		text: {
			en: "If Seviper is Poisoned, this attack does 20 damage plus 60 more damage and remove the Special Condition Poisoned from Seviper.",
			fr: "Si Seviper est Empoisonné, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires. Retirez ensuite l’État Spécial Empoisonné de Seviper.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
