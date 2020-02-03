import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-32",
	localId: 32,

	// Card informations
	name: {
		en: "Grumpig",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/32/high.png",
		},
	},

	evolveFrom: {
		en: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 906,
		type: AbilityType.POKEBODY,
		name: {
			en: "Carefree",
		},
		text: {
			en: "Grumpig can't be Confused.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Ball",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

