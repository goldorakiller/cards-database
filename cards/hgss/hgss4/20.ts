import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-20",
	localId: 20,

	// Card informations
	name: {
		en: "Electivire",
		fr: "Elekable",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/20/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/20/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/20/high.png",
		},
	},

	evolveFrom: {
		en: "Electabuzz",
		fr: "Elektek",
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
			Type.LIGHTNING
		],
		name: {
			en: "Plasma",
			fr: "Plasma",
		},
		text: {
			en: "Search your discard pile for a Lightning Energy card and attach it to Electivire.",
			fr: "Cherchez une carte Énergie Lightning dans votre pile de défausse et attachez-la à Elekable.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Shot",
			fr: "Tir foudroyant",
		},
		text: {
			en: "This attack does 50 damage to each of your opponent's Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire auxquels sont attachées des cartes Énergie. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
