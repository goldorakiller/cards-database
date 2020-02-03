import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-38",
	localId: 38,

	// Card informations
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/38/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/38/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/38/high.png",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Full-Belly Refresh",
			fr: "Régénération ventrale",
		},
		text: {
			en: "Remove all Special Conditions and 3 damage counters from Slowbro.",
			fr: "Retirez 3 marqueurs de dégât à Flagadoss, ainsi que tous ses États Spéciaux.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Startling Trip",
			fr: "Voyage surprenant",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Slowbro is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, Flagadoss est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

