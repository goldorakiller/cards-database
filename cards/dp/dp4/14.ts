import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-14",
	localId: 14,

	// Card informations
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/14/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/14/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/14/high.png",
		},
	},

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Parallel Drain",
			fr: "Tuyau parallèle",
		},
		text: {
			en: "After your attack, remove from 1 of your Pokémon the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Après votre attaque, retirez à 1 de vos Pokémon autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Dozing Scales",
			fr: "Écailles ensommeillées",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
