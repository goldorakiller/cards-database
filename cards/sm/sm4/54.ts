import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-54",
	localId: 54,

	// Card informations
	name: {
		en: "Gastrodon",
		fr: "Tritosor",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 423,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/54/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/54/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/54/high.png",
		},
	},

	evolveFrom: {
		en: "Shellos",
		fr: "Sancoki",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Eerie Fluid",
			fr: "Fluide Inquiétant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

