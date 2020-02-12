import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Mismagius",
		fr: "Magirêve",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/10/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/10/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/10/high.png",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 21,
		name: "Mikiko Takeda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Avenge",
			fr: "Venger",
		},
		text: {
			en: "Count the number of your Pokémon that have any damage counters on them. Put that many damage counters on the Defending Pokémon.",
			fr: "Comptabilisez le nombre de vos Pokémon possédant des marqueurs de dégât. Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psywave",
			fr: "Vague psy",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
