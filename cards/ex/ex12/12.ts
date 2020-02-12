import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-12",
	localId: 12,

	// Card informations
	name: {
		en: "Shiftry",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/12/high.png",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 214,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Fan",
		},
		text: {
			en: "Once during your turn, when you play Shiftry from your hand to evolve 1 of your Pokémon, you may choose 1 of your Evolved Pokémon in play (excluding any Shiftry). Return that Pokémon and all cards attached to it to your hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reactive Beating",
		},
		text: {
			en: "If Shiftry has any React Energy cards attached to it, the Defending Pokémon is now Confused.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross-Cut",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 30 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
