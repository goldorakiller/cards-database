import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-40",
	localId: 40,

	// Card informations
	name: {
		en: "Shedinja",
		fr: "Munja",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/40/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/40/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/40/high.png",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 571,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Resent",
			fr: "Ressentiment",
		},
		text: {
			en: "Once during your opponent's turn, if Shedinja would be Knocked Out by damage from an attack, you may put 4 damage counters on the Attacking Pokémon and each of your opponent's Pokémon that has the same name as the Attacking Pokémon.",
			fr: "Une seule fois lors du prochain tour de votre adversaire, si Munja est mis K.O par les dégâts d'une attaque, vous pouvez placer 4 marqueurs de dégât sur le Pokémon Attaquant ainsi que sur tous les Pokémon de votre adversaire possédant le même nom que le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Curse and Deceive",
			fr: "Sort traitre",
		},
		text: {
			en: "Put 3 damage counters on the Defending Pokémon. If Shedinja has any damage counters on it, the Defending Pokémon is now Confused.",
			fr: "Placez 3 marqueurs de dégât sur le Pokémon Défenseur. Si Munja possède des marqueurs de dégât, le Pokémon Défenseur est maintenant Confus.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
