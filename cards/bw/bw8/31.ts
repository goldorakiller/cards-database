import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-31",
	localId: 31,

	// Card informations
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/31/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/31/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/31/high.png",
		},
	},

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: 264,
		type: AbilityType.TALENT,
		name: {
			en: "Rain Dish",
			fr: "Cuvette",
		},
		text: {
			en: "At any time between turns, heal 20 damage from this Pokémon.",
			fr: "N'importe quand entre chaque tour, soignez 20 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Groovy Dance",
			fr: "Danse Enivrée",
		},
		text: {
			en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Confused.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
