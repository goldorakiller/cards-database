import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-38",
	localId: 38,

	// Card informations
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 368,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/38/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/38/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/38/high.png",
		},
	},

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Sweet Temptation",
			fr: "Douce tentation",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This attack does 10 damage to the new Defending Pokémon.",
			fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Cette attaque inflige 10 dégâts au nouveau Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Snap",
			fr: "Claquement psy",
		},
		text: {
			en: "If Gorebyss has any Psychic Energy attached to it, this attack does 30 damage plus 20 more damage and the Defending Pokémon is now Confused.",
			fr: "Si Rosabyss possède de l'Énergie Psychic, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
