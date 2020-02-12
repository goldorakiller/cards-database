import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-122",
	localId: 122,

	// Card informations
	name: {
		en: "Lucario",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/122/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 581,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Stance",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Lucario LV. X from your hand onto your Active Lucario, you may use this power. Prevent all effects of an attack, including damage, done to Lucario during your opponent's next turn. (If Lucario is no longer your Active Pokémon, this effect ends.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Close Combat",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Lucario by attacks is increased by 30 (after applying Weakness and Resistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
