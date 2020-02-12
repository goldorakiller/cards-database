import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-35",
	localId: 35,

	// Card informations
	name: {
		en: "Aerodactyl δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/35/high.png",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1093,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Primal Light",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Aerodactyl is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Granite Head",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Aerodactyl by attacks is reduced by 10 (after applying Weakness and Resistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
