import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-86",
	localId: 86,

	// Card informations
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 521,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/86/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/86/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/86/high.png",
		},
	},

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
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
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
		},
		damage: 70
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
