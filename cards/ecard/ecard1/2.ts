import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-2",
	localId: 2,

	// Card informations
	name: {
		en: "Ampharos",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/2/high.png",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 244,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Connect",
		},
		text: {
			en: "Once during your turn (before you attack), you make take one basic Energy cards attached to one of your Benched Pokémon and attach it to your Active Pokémon. This power can't be used if Ampharos is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Strike",
		},
		text: {
			en: "You may discard all Energy cards attached to Ampharos. If you do, this attack's base damage is 80 instead of 40.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
