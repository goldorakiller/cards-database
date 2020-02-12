import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-260",
	localId: 260,

	// Card informations
	name: {
		en: "Naganadel & Guzzlord-GX",
		fr: "Mandrillon et Engloutyran-GX",
	},

	hp: 280,

	type: [
		Type.DRAGON,
	],

	dexId: 799,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/260/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/260/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/260/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/260/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1362,
		type: AbilityType.TALENT,
		name: {
			en: "Violent Appetite",
			fr: "Appétit Insatiable",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Pokémon from your hand. If you do, heal 60 damage from this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Pokémon de votre main. Dans ce cas, soignez 60 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Jet Pierce",
			fr: "Règle des ESCOUADES",
		},
		damage: 180
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chaotic Order GX",
			fr: "Jet Perçant",
		},
		text: {
			en: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) If this Pokémon has at least 1 extra {P} Energy and 1 extra {D} Energy attached to it (in addition to this attack's cost), take 2 Prize cards. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 180
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Ordre Chaotique-GX",
		},
		text: {
			fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.) Si au moins une Énergie Psychic supplémentaire et une Énergie Darkness supplémentaire sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 2 cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
