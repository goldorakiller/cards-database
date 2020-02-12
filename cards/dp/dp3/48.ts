import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-48",
	localId: 48,

	// Card informations
	name: {
		en: "Donphan",
		fr: "Donphan",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/48/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/48/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/48/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/48/high.png",
		},
	},

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rapid Spin",
			fr: "Tour rapide",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Donphan with 1 of your Benched Pokémon, if any.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a. Vous échangez Donphan avec 1 des Pokémon de votre Banc, si vous en avez.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bash In",
			fr: "Cabosser",
		},
		text: {
			en: "If the Defending Pokémon has a Pokémon Tool card attached to it, this attack does 70 damage plus 60 more damage.",
			fr: "Si le Pokémon Défenseur possède une carte Outil Pokémon, cette attaque inflige 70 dégâts plus 60 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
