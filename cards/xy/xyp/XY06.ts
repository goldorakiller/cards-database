import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY06",
	localId: "XY06",

	// Card informations
	name: {
		en: "Yveltal",
		fr: "Xerneas",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY06/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY06/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY06/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY06/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Oblivion Wing",
			fr: "Géo-Contrôle",
		},
		text: {
			en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez une carte Énergie Fairy dans votre deck et attachez-la au Pokémon choisi. Mélangez ensuite votre deck.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Blade",
			fr: "Javelot Arc-En-Ciel",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
