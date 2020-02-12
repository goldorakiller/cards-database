import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM49",
	localId: "SM49",

	// Card informations
	name: {
		en: "Bewear",
		fr: "Chelours",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 760,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM49/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM49/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM49/high.png",
		},
	},

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mix-Up",
			fr: "Mélange",
		},
		text: {
			en: "Flip a coin. If heads, discard the top 3 cards of your opponent's deck.",
			fr: "Lancez une pièce. Si c’est face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tantrum",
			fr: "Mauvaise Humeur",
		},
		text: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
