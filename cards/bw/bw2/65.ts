import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-65",
	localId: 65,

	// Card informations
	name: {
		en: "Liepard",
		fr: "Léopardus",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 510,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/65/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/65/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/65/high.png",
		},
	},

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Feint Attack",
			fr: "Feinte",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon.",
			fr: "Inflige 30 dégâts à 1 des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon ciblé.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Rend",
			fr: "Déchirure",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 more damage.",
			fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
