import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-41",
	localId: 41,

	// Card informations
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 576,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/41/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/41/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/41/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/41/high.png",
		},
	},

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},

	abilities: [{
		id: 763,
		type: AbilityType.TALENT,
		name: {
			en: "Teleport Room",
			fr: "Centre de Téléportation",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, put a Stadium card with a different name from your discard pile into play.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toute carte Stade en jeu. Dans ce cas, prenez une carte Stade d'un nom différent dans votre pile de défausse et mettez-la en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psy Report",
			fr: "Observation Psychique",
		},
		text: {
			en: "Your opponent reveals his or her hand.",
			fr: "Votre adversaire montre sa main.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
