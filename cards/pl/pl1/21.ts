import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/21/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/21/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/21/high.png",
		},
	},

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Colorful Powder",
			fr: "Poudre colorée",
		},
		text: {
			en: "If Beautifly has 2 or less Energy attached to it, the Defending Pokémon is now Poisoned. If Beautifly has 3 Energy attached to it, the Defending Pokémon is now Burned and Poisoned. If Beautifly has 4 or more Energy attached to it, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Asleep, Burned, and Poisoned.",
			fr: "Si Charmillon possède un maximum de 2 Énergies, le Pokémon Défenseur est maintenant Empoisonné. Si Charmillon possède 3 Énergies, le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Si Charmillon possède au moins 4 Énergies, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Silver Scale",
			fr: "Écaille argentée",
		},
		text: {
			en: "If the Defending Pokémon has any Resistance, this attack's base damage is 60 instead of 30.",
			fr: "Si le Pokémon Défenseur possède une Résistance, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
