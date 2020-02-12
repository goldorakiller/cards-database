import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-93",
	localId: 93,

	// Card informations
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 202,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/93/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/93/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/93/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},

	abilities: [{
		id: 1341,
		type: AbilityType.TALENT,
		name: {
			en: "Shady Tail",
			fr: "Ombre Caudale",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, (Prism Star) Pokémon in play (both yours and your opponent's) can't attack and have no Abilities.",
			fr: "Tant que ce Pokémon est sur votre Banc, les Pokémon  (Prisme Étoile) en jeu (les vôtres et ceux de votre adversaire) ne peuvent pas attaquer et n’ont pas de talent.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
