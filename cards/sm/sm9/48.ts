import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-48",
	localId: 48,

	// Card informations
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 596,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/48/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/48/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/48/high.png",
		},
	},

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},

	abilities: [{
		id: 1141,
		type: AbilityType.TALENT,
		name: {
			en: "Unnerve",
			fr: "Tension",
		},
		text: {
			en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Spider Thread",
			fr: "Fil Arachnéen",
		},
		text: {
			en: "Put a card from your discard pile into your hand.",
			fr: "Placez une carte de votre pile de défausse dans votre main.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
