import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-79",
	localId: 79,

	// Card informations
	name: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 520,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/79/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/79/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/79/high.png",
		},
	},

	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fly",
			fr: "Vol",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
