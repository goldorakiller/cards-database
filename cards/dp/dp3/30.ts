import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-30",
	localId: 30,

	// Card informations
	name: {
		en: "Jynx",
		fr: "Lippoutou",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 124,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/30/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/30/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/30/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Icy Kiss",
			fr: "Baiser glacial",
		},
		text: {
			en: "If Jynx was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
			fr: "Si une attaque a infligé des dégâts à Lippoutou lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Lovely Kiss",
			fr: "Grobisou",
		},
		text: {
			en: "Move 2 damage counters from Jynx to the Defending Pokémon. If Smoochum is anywhere under Jynx, move 4 damage counters instead.",
			fr: "Déplacez 2 marqueurs de dégât de Lippoutou sur le Pokémon Défenseur. Si Lippouti se trouve sous Lippoutou, déplacez 4 marqueurs de dégât.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
