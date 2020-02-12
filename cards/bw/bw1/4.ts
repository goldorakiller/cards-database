import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Servine",
		fr: "Lianaja",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 496,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/4/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/4/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/4/high.png",
		},
	},

	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Wring Out",
			fr: "Essorage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé, et vous défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
