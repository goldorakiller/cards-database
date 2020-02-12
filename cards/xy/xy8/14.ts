import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-14",
	localId: 14,

	// Card informations
	name: {
		en: "Spewpa",
		fr: "Pérégrain",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 665,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/14/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/14/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/14/high.png",
		},
	},

	evolveFrom: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Protect",
			fr: "Abri",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
