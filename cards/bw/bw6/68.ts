import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-68",
	localId: 68,

	// Card informations
	name: {
		en: "Throh",
		fr: "Judokrak",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 538,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/68/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/68/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/68/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Squeeze",
			fr: "Compression",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Superpower",
			fr: "Surpuissance",
		},
		text: {
			en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
