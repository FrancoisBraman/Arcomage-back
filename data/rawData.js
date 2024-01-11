/* eslint-disable */

const data = [
  {
    id: 0,
    name: 'Brick Shortage',
    desc: 'All players lose 8 Updates',
    type: 'update',
    cost: 0,
    image: '0_brickShortage.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('update', -8);
      to.change('update', -8);
      return this;
    },
  },
  {
    id: 1,
    name: 'Lucky Cache',
    desc: '+2 Updates. +2 Cryptos. Play again',
    type: 'update',
    cost: 0,
    image: '1_LuckyCache.webp',
    special: {
      playagain: true,
    },
    effect: function effect(from) {
      from.change('update', +2);
      from.change('crypto', +2);
      return this;
    },
  },
  {
    id: 2,
    name: 'Friendly Terrain',
    desc: '+1 Firewall. Play again',
    type: 'update',
    cost: 1,
    image: '2_friendlyTerrain.webp',
    special: {
      playagain: true,
    },
    effect: function effect(from) {
      from.change('firewall', +1);
      return this;
    },
  },
  {
    id: 3,
    name: 'Miners',
    desc: '+1 Software',
    type: 'update',
    cost: 3,
    image: '3_miners.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('software', +1);
      return this;
    },
  },
  {
    id: 4,
    name: 'Mother Lode',
    desc: 'If software < enemy software, +2 softwares. Else, +1 software',
    type: 'update',
    cost: 4,
    image: '4_motherLode.webp',
    special: {},
    effect: function effect(from, to) {
      if (from.software < to.software) {
        from.change('software', +2);
      } else {
        from.change('software', +1);
      }
      return this;
    },
  },
  {
    id: 5,
    name: 'Dwarven Miners',
    desc: '+4 Firewall, +1 Software',
    type: 'update',
    cost: 7,
    image: '5_dwarvenMiners.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +4);
      from.change('software', +1);
      return this;
    },
  },
  {
    id: 6,
    name: 'Work Overtime',
    desc: '+5 Firewall. You lose 6 Crypto',
    type: 'update',
    cost: 2,
    image: '6_workOvertime.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +5);
      from.change('crypto', -6);
      return this;
    },
  },
  {
    id: 7,
    name: 'Copping the Tech',
    desc: 'If software < enemy software, software = enemy software',
    type: 'update',
    cost: 5,
    image: '7_coppingTheTech.webp',
    special: {},
    effect: function effect(from, to) {
      if (from.software < to.software) {
        from.set('software', to.software);
      }
      return this;
    },
  },
  {
    id: 8,
    name: 'Basic Wall',
    desc: '+3 Firewall',
    type: 'update',
    cost: 2,
    image: '8_basicWall.webp',
    special: {},
    effect: function effect(from) {
			from.change('firewall', +3);
			return this;
		},
  },
  {
    id: 9,
    name: 'Sturdy Wall',
    desc: '+4 Firewall',
    type: 'update',
    cost: 3,
    image: '9_sturdyWall.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +4);
      return this;
    },
  },
  {
    id: 10,
    name: 'Innovations',
    desc: "+1 To all player's softwares, you gain 4 Crypto",
    type: 'update',
    cost: 2,
    image: '10_innovations.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('software', +1);
      to.change('software', +1);
      from.change('crypto', +4);
      return this;
    },
  },
  {
    id: 11,
    name: 'Foundations',
    desc: 'If firewall = 0, +6 firewall, else +3 firewall',
    type: 'update',
    cost: 3,
    image: '11_Foundations.webp',
    special: {},
    effect: function effect(from, to) {
      if (from.firewall === 0) {
        from.change('firewall', +6);
      } else {
        from.change('firewall', +3);
      }
      return this;
    },
  },
  {
    id: 12,
    name: 'Tremors',
    desc: 'All Firewalls take 5 damage. Play again',
    type: 'update',
    cost: 7,
    image: '12_tremor.webp',
    special: {
      playagain: true,
    },
    effect: function effect(from, to) {
			from.change('firewall', -5);
			to.change('firewall', -5);
			return this;
		},
  },
  {
    id: 13,
    name: 'Secret Room',
    desc: '+1 Data miner. Play again',
    type: 'update',
    cost: 8,
    image: '13_secretRoom.webp',
    special: {
      playagain: true,
    },
    effect: function effect(from, to) {
      from.change('dataMiner', +1);
      return this;
    },
  },
  {
    id: 14,
    name: 'Earthquake',
    desc: "-1 To all player's softwares",
    type: 'update',
    cost: 0,
    image: '14_Earthquake.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('software', -1);
      to.change('software', -1);
      return this;
    },
  },
  {
    id: 15,
    name: 'Big Wall',
    desc: '+6 Firewall',
    type: 'update',
    cost: 5,
    image: '15_bigWall.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +6);
      return this;
    },
  },
  {
    id: 16,
    name: 'Collapse!',
    desc: '-1 Enemy quarry',
    type: 'update',
    cost: 4,
    image: '16_Collapse.webp',
    special: {},
    effect: function effect(from, to) {
      to.change('software', -1);
      return this;
    },
  },
	{
    id: 17,
    name: 'New Equipment',
    desc: '+2 Quarry',
    type: 'update',
    cost: 6,
    image: '17_newEquipment.webp',
    special: {},
    effect: function effect(from) {
      from.change('software', +2);
      return this;
		},
	},
  {
    id: 18,
    name: 'Strip Mine',
    desc: '-1 Software. +10 Firewall. You gain 5 Crypto',
    type: 'update',
    cost: 0,
    image: '18_stripMine.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('software', -1);
      from.change('firewall', +10);
      from.change('crypto', +5);
      return this;
    },
  },
  {
    id: 19,
    name: 'Reinforced Wall',
    desc: '+8 Firewall',
    type: 'update',
    cost: 8,
    image: '18_Strip_Mine_v2.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +8);
      return this;
    },
  },
  {
    id: 20,
    name: 'Porticulus',
    desc: '+5 Wall, +1 hacker',
    type: 'update',
    cost: 9,
    image: '19_reinforcedWall.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +5);
      from.change('hacker', +1);
      return this;
    },
  },
  {
    id: 21,
    name: 'Crystal Rocks',
    desc: '+7 Firewall, gain 7 Crypto',
    type: 'update',
    cost: 9,
    image: '20_Porticulus.webp',
    special: {},
    effect: function effect(from) {
      from.change('firewall', +7);
      from.change('crypto', +7);
      return this;
		},
  },
  {
    id: 22,
    name: 'Harmonic Ore',
    desc: '+6 Firewall, +3 data center',
    type: 'update',
    cost: 11,
    image: '21_crystalRocks.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +6);
      from.change('dataCenter', +3);
      return this;
    },
  },
  {
    id: 23,
    name: 'Mondo Wall',
    desc: '+12 Firewall',
    type: 'update',
    cost: 13,
    image: '22_harmonicOre.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +12);
      return this;
    },
  },
  {
    id: 24,
    name: 'Focused Designs',
    desc: '+8 Firewall, +5 Data center',
    type: 'update',
    cost: 15,
    image: '23_mondoWall.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +8);
      from.change('dataCenter', +5);
      return this;
    },
  },
  {
    id: 25,
    name: 'Great Wall',
    desc: '+15 Firewall',
    type: 'update',
    cost: 16,
    image: '24_focusedDesigns.webp',
    special: {},
		effect: function effect(from) {
		from.change('firewall', +15);
		return this;
		},
  },
  {
    id: 26,
    name: 'Rock Launcher',
    desc: '+6 Firewall. 10 Damage to enemy',
    type: 'update',
    cost: 18,
    image: '25_greatWall.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +6);
      to.damage(10);
      return this;
    },
  },
  {
    id: 27,
    name: "Dragon's Heart",
    desc: '+20 Firewall. +8 Data center',
    type: 'update',
    cost: 24,
    image: '26_rockLauncher.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +20);
      from.change('dataCenter', +8);
      return this;
    },
  },
  {
    id: 28,
    name: 'Forced Labor',
    desc: '+9 Firewall, lose 5 virus',
    type: 'update',
    cost: 7,
    image: '28_forcedLabor.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +9);
      from.change('virus', -5);
      return this;
    },
  },
  {
    id: 29,
    name: 'Rock Garden',
    desc: '+1 Firewall. +1 Data center. +2 Virus',
    type: 'update',
    cost: 1,
    image: '29_rockGarden.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +1);
      from.change('dataCenter', +1);
      from.change('virus', +2);
      return this;
		},
  },
  {
    id: 30,
    name: 'Flood Water',
    desc: 'Player(s) w/ lowest Firewall are -1 Hacker and 2 damage to Data center',
    type: 'update',
    cost: 6,
    image: '30_floodWater.webp',
    special: {},
    effect: function effect(from, to) {
      if (from.firewall < to.firewall) {
        from.change('hacker', -1);
        from.change('dataCenter', -2);
      } else if (from.firewall > to.firewall) {
        to.change('hacker', -1);
        to.change('dataCenter', -2);
      } else {
        from.change('hacker', -1);
        from.change('dataCenter', -2);
        to.change('hacker', -1);
        to.change('dataCenter', -2);
      }
      return this;
    },
  },
  {
    id: 31,
    name: 'Barracks',
    desc: '+6 Virus, +6 firewall. If hacker < enemy hacker, +1 hacker',
    type: 'update',
    cost: 10,
    image: '31_barracks.webp',
    special: {},
		effect: function effect(from, to) {
			from.change('virus', +6);
			from.change('firewall', +6);
			if(from.hacker < to.hacker) {
				from.change('hacker', +1);
			}
			return this;
		},
  },
  {
    id: 32,
    name: 'Battlements',
    desc: '+7 Firewall, 6 damage to enemy',
    type: 'update',
    cost: 14,
    image: '32_battlements.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('firewall', +7);
      to.damage(6);
      return this;
		},
  },
  {
    id: 33,
    name: 'Shift',
    desc: 'Switch your firewall with enemy firewall',
    type: 'update',
    cost: 17,
    image: '33_shift.webp',
    special: {},
    effect: function effect(from, to) {
      const currentFirewall = from.firewall;
      from.set('firewall', to.firewall);
      to.set('firewall', currentFirewall);
      return this;
		},
  },
  {
    id: 34,
    name: 'Quartz',
    desc: '+1 Data center. Play again',
    type: 'crypto',
    cost: 1,
    image: '34_quartz.webp',
    special: {
      playagain: true,
    },
    effect: function effect(from) {
			from.change('dataCenter', +1);
			return this;
		},
  },
  {
    id: 35,
    name: 'Smoky Quartz',
    desc: '1 Damage to enemy data center. Play again',
    type: 'crypto',
    cost: 2,
    image: '35_smokyQuartz.webp',
    special: {
      playagain: true,
    },
    effect: function effect(from, to) {
      to.change('dataCenter', -1);
      return this;
		},
  },
  {
    id: 36,
    name: 'Amethyst',
    desc: '+3 Data center',
    type: 'crypto',
    cost: 2,
    image: '36_amethyst.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +3);
      return this;
		},
  },
  {
    id: 37,
    name: 'Spell Weavers',
    desc: '+1 Data miner',
    type: 'crypto',
    cost: 3,
    image: '37_spellWeavers.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataMiner', +1);
      return this;
		},
  },
  {
    id: 38,
    name: 'Prism',
    desc: 'Draw 1 card. Discard 1 card. Play again',
    type: 'crypto',
    cost: 2,
    image: '38_prism.webp',
    special: {
      drawDiscardPlayagain: true,
    },
    effect: function effect(from, to) {
      return this;
		},
  },
  {
    id: 39,
    name: 'Lodestone',
    desc: "+3 Data center. This card can't be discarded without playing it",
    type: 'crypto',
    cost: 5,
    image: '39_lodestone.webp',
    special: {
      undiscardable: true,
    },
    effect: function effect(from, to) {
      from.change('dataCenter', +3);
      return this;
		},
  },
  {
    id: 40,
    name: 'Solar Flare',
    desc: '+2 Data center. 2 Damage to enemy data center',
    type: 'crypto',
    cost: 4,
    image: '40_solarFlare.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +2);
      to.change('dataCenter', -2);
      return this;
		},
  },
  {
    id: 41,
    name: 'Crystal Matrix',
    desc: '+1 Data miner. +3 Data center. +1 Enemy Data center',
    type: 'crypto',
    cost: 6,
    image: '41_crystalMatrix.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataMiner', +1);
      from.change('dataCenter', +3);
      to.change('dataCenter', +1);
      return this;
		},
  },
  {
    id: 42,
    name: 'Cryptotone Flaw',
    desc: '3 Damage to enemy data center',
    type: 'crypto',
    cost: 2,
    image: '42_CryptotoneFlaw.webp',
    special: {},
    effect: function effect(from, to) {
      to.change('dataCenter', -3);
      return this;
		},
  },
  {
    id: 43,
    name: 'Ruby',
    desc: '+5 Data center',
    type: 'crypto',
    cost: 3,
    image: '43_ruby.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +5);
      return this;
		},
  },
  {
    id: 44,
    name: 'Gem Spear',
    desc: '5 Damage to enemy Data center',
    type: 'crypto',
    cost: 4,
    image: '44_Cryptopear.webp',
    special: {},
    effect: function effect(from, to) {
      to.change('dataCenter', -5);
      return this;
		},
  },
  {
    id: 45,
    name: 'Power Burn',
    desc: '5 Damage to your data center. +2 Data miner',
    type: 'crypto',
    cost: 3,
    image: '45_powerBurn.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', -5);
      from.change('dataMiner', +2);
      return this;
		},
  },
  {
    id: 46,
    name: 'Harmonic Vibe',
    desc: '+1 Data miner. +3 Data center. +3 Firewall',
    type: 'crypto',
    cost: 7,
    image: '46_harmonicVibe.webp',
    special: {},
		effect: function effect(from, to) {
		from.change('dataMiner', +1);
		from.change('dataCenter', +3);
		from.change('firewall', +3);
		return this;
		},
  },
  {
    id: 47,
    name: 'Parity',
    desc: "All player's Data miner equals the highest player's Data miner",
    type: 'crypto',
    cost: 7,
    image: '47_parity.webp',
    special: {},
    effect: function effect(from, to) {
      const max = Math.max(from.dataMiner, to.dataMiner);
      from.set('dataMiner', max);
      to.set('dataMiner', max);
      return this;
		},
  },
  {
    id: 48,
    name: 'Emerald',
    desc: '+8 Data center',
    type: 'crypto',
    cost: 6,
    image: '48_emerald.webp',
    special: {},
    effect: function effect(from) {
			from.change('dataCenter', +8);
			return this;
		},
  },
  {
    id: 49,
    name: 'Pearl of Wisdom',
    desc: '+5 Data center. +1 Data miner',
    type: 'crypto',
    cost: 9,
    image: '49_pearlOfWisdom.webp',
    special: {},
    effect: function effect(from) {
			from.change('dataCenter', +5);
			from.change('dataMiner', +1);
			return this;
		},
  },
  {
    id: 50,
    name: 'Shatterer',
    desc: '-1 Data miner. 9 Damage to enemy data center',
    type: 'crypto',
    cost: 8,
    image: '50_shatterer.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataMiner', -1);
      to.change('dataCenter', -9);
      return this;
		},
  },
  {
    id: 51,
    name: 'Crumblestone',
    desc: '+5 Data center. Enemy loses 6 updates',
    type: 'crypto',
    cost: 7,
    image: '51_crumblestone.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +5);
      to.change('update', -6);
      return this;
		},
  },
  {
    id: 52,
    name: 'Sapphire',
    desc: '+11 Data center',
    type: 'crypto',
    cost: 10,
    image: '52_sapphire.webp',
    special: {},
		effect: function effect(from) {
		from.change('dataCenter', +11);
		return this;
		},
  },
  {
    id: 53,
    name: 'Discord',
    desc: '7 Damage to all data centers, all players data miner -1',
    type: 'crypto',
    cost: 5,
    image: '53_discord.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', -7);
      to.change('dataCenter', -7);
      from.change('dataMiner', -1);
      to.change('dataMiner', -1);
      return this;
		},
  },
  {
    id: 54,
    name: 'Fire Ruby',
    desc: '+6 Data center. 4 Damage to enemy Data center',
    type: 'crypto',
    cost: 13,
    image: '54_fireRuby.webp',
    special: {},
    effect: function effect(from, to) {
			from.change('dataCenter', +6);
			to.change('dataCenter', -4);
			return this;
			},
  },
  {
    id: 55,
    name: "Quarry's Help",
    desc: '+7 Data center. Lose 10 bricks',
    type: 'crypto',
    cost: 4,
    image: '55_quarrysHelp.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +7);
      from.change('update', -10);
      return this;
		},
  },
  {
    id: 56,
    name: 'Crystal Shield',
    desc: '+8 Data center. +3 Firewall',
    type: 'crypto',
    cost: 12,
    image: '56_crystalShield.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +8);
      from.change('firewall', +3);
      return this;
		},
  },
  {
    id: 57,
    name: 'Empathy Gem',
    desc: '+8 Data center. +1 Hacker',
    type: 'crypto',
    cost: 14,
    image: '57_empathyGem.webp',
    special: {},
		effect: function effect(from) {
		from.change('dataCenter', +8);
		from.change('hacker', +1);
		return this;
		},
  },
  {
    id: 58,
    name: 'Diamond',
    desc: '+15 Data center',
    type: 'crypto',
    cost: 16,
    image: '58_diamond.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +15);
      return this;
		},
  },
  {
    id: 59,
    name: 'Sanctuary',
    desc: '+10 Data center. +5 Firewall, gain 5 virus',
    type: 'crypto',
    cost: 15,
    image: '59_sanctuary.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +10);
      from.change('firewall', +5);
      from.change('virus', +5);
      return this;
		},
  },
  {
    id: 60,
    name: 'Lava Jewel',
    desc: '+12 Data center. 6 Damage to enemy',
    type: 'crypto',
    cost: 17,
    image: '60_lavaJewel.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +12);
      to.damage(6);
      return this;
		},
  },
  {
    id: 61,
    name: "Dragon's Eye",
    desc: '+20 Data center',
    type: 'crypto',
    cost: 21,
    image: '61_dragon_sEye.webp',
    special: {},
    effect: function effect(from) {
			from.change('dataCenter', +20);
			return this;
		},
  },
  {
    id: 62,
    name: 'Crystallize',
    desc: '+11 Data center. -6 Firewall',
    type: 'crypto',
    cost: 8,
    image: '62_crystallize.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('dataCenter', +11);
      from.change('firewall', -6);
      return this;
		},
  },
  {
    id: 63,
    name: 'Bag of Baubles',
    desc: 'If data center < enemy data center, +2 data center. Else +1 data center',
    type: 'crypto',
    cost: 0,
    image: '63_bagOfBaubles.webp',
    special: {},
    effect: function effect(from, to) {
      if (from.dataCenter < to.dataCenter) {
        from.change('dataCenter', +2);
      } else {
        from.change('dataCenter', +1);
      }
      return this;
		},
  },
  {
    id: 64,
    name: 'Rainbow',
    desc: '+1 Data center to all players. You gain 3 Crypto',
    type: 'crypto',
    cost: 0,
    image: '64_rainbow.webp',
    special: {},
    effect: function effect(from, to) {
			from.change('dataCenter', +1);
			from.change('crypto', +3);
			to.change('dataCenter', +1);
			return this;
		},
  },
  {
    id: 65,
    name: 'Apprentice',
    desc: '+4 Data center, you lose 3 virus, 2 damage to enemy data center',
    type: 'crypto',
    cost: 5,
    image: '65_apprentice.webp',
    special: {},
		effect: function effect(from, to) {
			from.change('dataCenter', +4);
			from.change('virus', -3);
			to.change('dataCenter', -2);
			return this;
		},
  },
  {
    id: 66,
    name: 'Lightning Shard',
    desc: 'If Data center > enemy Firewall, 8 damage to enemy Data center. Else 8 damage',
    type: 'crypto',
    cost: 11,
    image: '66_lighteningShard.webp',
    special: {},
    effect: function effect(from, to) {
      if (from.dataCenter > to.firewall) {
        to.change('dataCenter', -8);
      } else {
        to.damage(8);
      }
      return this;
		},
  },
  {
    id: 67,
    name: 'Phase Jewel',
    desc: '+13 Data center. +6 Virus. +6 Updates',
    type: 'crypto',
    cost: 18,
    image: '67_phaseJewel.webp',
    special: {},
        effect: function effect(from, to) {
			from.change('dataCenter', +13);
			from.change('virus', +6);
			from.change('update', +6);
			return this;
		},
  },
  {
    id: 68,
    name: 'Mad Cow Disease',
    desc: 'All players lose 6 virus',
    type: 'virus',
    cost: 0,
    image: '68_madCowDisease.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('virus', -6);
      to.change('virus', -6);
      return this;
		},
  },
  {
    id: 69,
    name: 'Faerie',
    desc: '2 Damage. Play again',
    type: 'virus',
    cost: 1,
    image: '69_faerie.webp',
    special: {
      playagain: true,
    },
    effect: function effect(from, to) {
      to.damage(2);
      return this;
		},
  },
  {
    id: 70,
    name: 'Moody Goblins',
    desc: '4 Damage. You lose 3 Crypto',
    type: 'virus',
    cost: 1,
    image: '70_moodyGoblins.webp',
    special: {},
		effect: function effect(from, to) {
			to.damage(4);
			from.change('crypto', -3);
			return this;
		},
  },
  {
    id: 71,
    name: 'Minotaur',
    desc: '+1 Hacker',
    type: 'virus',
    cost: 3,
    image: '71_minotaur.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('hacker', +1);
      return this;
		},
  },
  {
    id: 72,
    name: 'Elven Scout',
    desc: 'Draw 1 card. Discard 1 card. Play again',
    type: 'virus',
    cost: 2,
    image: '72_elvenScout.webp',
    special: {
      drawDiscardPlayagain: true,
    },
    effect: function effect(from, to) {
      return this;
		},
  },
  {
    id: 73,
    name: 'Goblin Mob',
    desc: '6 Damage. You take 3 damage',
    type: 'virus',
    cost: 3,
    image: '73_goblinMob.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(6);
      from.damage(3);
      return this;
		},
  },
  {
    id: 74,
    name: 'Goblin Archers',
    desc: '3 Damage to enemy data center. You take 1 damage',
    type: 'virus',
    cost: 4,
    image: '74_goblinArchers.webp',
    special: {},
    effect: function effect(from, to) {
      to.change('dataCenter', -3);
      from.damage(1);
      return this;
		},
  },
  {
    id: 75,
    name: 'Shadow Faerie',
    desc: '2 Damage to enemy data center. Play again',
    type: 'virus',
    cost: 6,
    image: '75_shadowFaerie.webp',
    special: {
      playagain: true,
    },
		effect: function effect(to) {
      to.change('dataCenter', -2);
      return this;
		},
  },
  {
    id: 76,
    name: 'Orc',
    desc: '5 Damage',
    type: 'virus',
    cost: 3,
    image: '76_orc.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(5);
      return this;
		},
  },
  {
    id: 77,
    name: 'Dwarves',
    desc: '4 Damage. +3 Firewall',
    type: 'virus',
    cost: 5,
    image: '77_dwarves .webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(4);
      from.change('firewall', +3);
      return this;
		},
  },
  {
    id: 78,
    name: 'Little Snakes',
    desc: '4 Damage to enemy data center',
    type: 'virus',
    cost: 6,
    image: '78_littleSnakes.webp',
    special: {},
		effect: function effect(to) {
      to.change('dataCenter', -4);
      return this;
		},
  },
  {
    id: 79,
    name: 'Troll Trainer',
    desc: '+2 Hacker',
    type: 'virus',
    cost: 7,
    image: '79_trollTrainer.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('hacker', +2);
      return this;
		},
  },
  {
    id: 80,
    name: 'Tower Gremlin',
    desc: '2 Damage. +4 Data center. +2 Firewall',
    type: 'virus',
    cost: 8,
    image: '80_towerGremlin.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(2);
      from.change('dataCenter', +4);
      from.change('firewall', +2);
      return this;
		},
  },
  {
    id: 81,
    name: 'Full Moon',
    desc: "+1 to all player's hacker. You gain 3 virus",
    type: 'virus',
    cost: 0,
    image: '81_fullMoon.webp',
    special: {},
		effect: function effect(from, to) {
      from.change('hacker', +1);
      to.change('hacker', +1);
      from.change('virus' +3);
      return this;
		},
  },
  {
    id: 82,
    name: 'Slasher',
    desc: '6 Damage',
    type: 'virus',
    cost: 5,
    image: '82_slasher.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(6);
      return this;
		},
  },
  {
    id: 83,
    name: 'Ogre',
    desc: '7 Damage',
    type: 'virus',
    cost: 6,
    image: '83_ogre.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(7);
      return this;
		},
  },
  {
    id: 84,
    name: 'Rabid Sheep',
    desc: '6 Damage. Enemy loses 3 virus',
    type: 'virus',
    cost: 6,
    image: '84_rabidSheep.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(6);
      to.change('virus', -3);
      return this;
		},
  },
  {
    id: 85,
    name: 'Imp',
    desc: '6 Damage. All players lose 5 updates, Crypto and Virus',
    type: 'virus',
    cost: 5,
    image: '85_imp.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(6);
      from.change('update', -5);
      from.change('crypto', -5);
      from.change('virus', -5);
      to.change('update', -5);
      to.change('crypto', -5);
      to.change('virus', -5);
      return this;
		},
  },
  {
    id: 86,
    name: 'Spizzer',
    desc: 'If enemy firewall = 0, 10 damage, else 6 damage',
    type: 'virus',
    cost: 8,
    image: '86_spizzer.webp',
    special: {},
    effect: function effect(from, to) {
			if (to.firewall === 0) {
				to.damage(10);
			} else {
				to.damage(6);
			}
      return this;
		},
  },
  {
    id: 87,
    name: 'Werewolf',
    desc: '9 Damage',
    type: 'virus',
    cost: 9,
    image: '87_werewolf.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(9);
      return this;
		},
  },
  {
    id: 88,
    name: 'Corrosion Cloud',
    desc: 'If enemy firewall > 0, 10 damage, else 7 damage',
    type: 'virus',
    cost: 11,
    image: '88_corrosionCloud.webp',
    special: {},
    effect: function effect(from, to) {
      if (to.firewall > 0) {
        to.damage(10);
      } else {
        to.damage(7);
      }
      return this;
		},
  },
  {
    id: 89,
    name: 'Unicorn',
    desc: 'If data miner > enemy data miner, 12 damage, else 8 damage',
    type: 'virus',
    cost: 9,
    image: '89_unicorn.webp',
    special: {},
    effect: function effect(from, to) {
			if (from.dataMiner > to.dataMiner) {
				to.damage(12)
			} else {
				to.damage(8);
			}
      return this;
		},
  },
  {
    id: 90,
    name: 'Elven Archers',
    desc: 'If firewall > enemy firewall, 6 damage to enemy data center, else 6 damage',
    type: 'virus',
    cost: 10,
    image: '90_elvenArchers.webp',
    special: {},
    effect: function effect(from, to) {
      if (from.firewall > to.firewall) {
        to.change('dataCenter', -6);
      } else {
        to.damage(6);
      }
      return this;
		},
  },
  {
    id: 91,
    name: 'Succubus',
    desc: '5 Damage to enemy data center, enemy loses 8 virus',
    type: 'virus',
    cost: 14,
    image: '91_succubus.webp',
    special: {},
    effect: function effect(from, to) {
      to.change('dataCenter', -5);
      to.change('virus', -8);
      return this;
		},
  },
  {
    id: 92,
    name: 'Rock Stompers',
    desc: '8 Damage, -1 enemy software',
    type: 'virus',
    cost: 11,
    image: '92_rockStompers.webp',
    special: {},
    effect: function effect(from, to) {
        to.damage(8);
        to.change('software', -1);
      return this;
		},
  },
  {
    id: 93,
    name: 'Thief',
    desc: 'Enemy loses 10 Crypto, 5 update, you gain 1/2 amt. round up',
    type: 'virus',
    cost: 12,
    image: '93_thief.webp',
    special: {},
    effect: function effect(from, to) {
      from.change('crypto', Math.ceil((to.crypto >= 10 ? 10 : to.crypto) / 2));
      from.change('update', Math.ceil((to.update >= 5 ? 5 : to.update) / 2));
      to.change('crypto', -10);
      to.change('update', -5);
      return this;
		},
  },
  {
    id: 94,
    name: 'Stone Giant',
    desc: '10 Damage. +4 Firewall',
    type: 'virus',
    cost: 15,
    image: '94_stoneGiant.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(10);
      from.change('firewall', +4);
      return this;
		},
	},
  {
    id: 95,
    name: 'Vampire',
    desc: '10 Damage. Enemy loses 5 Virus, -1 enemy hacker',
    type: 'virus',
    cost: 17,
    image: '95_vampire.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(10);
      to.change('virus', -5);
      to.change('hacker', -1);
      return this;
		},
  },
  {
    id: 96,
    name: 'Dragon',
    desc: '20 Damage. Enemy loses 10 Crypto, -1 enemy hacker',
    type: 'virus',
    cost: 25,
    image: '96_dragon.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(20);
      to.change('crypto', -10);
      to.change('hacker', -1);
      return this;
		},
  },
  {
    id: 97,
    name: 'Spearman',
    desc: 'If firewall > enemy firewall do 3 damage else do 2 damage',
    type: 'virus',
    cost: 2,
    image: '97_spearman.webp',
    special: {},
    effect: function effect(from, to) {
      if(from.firewall > to.firewall) {
        to.damage(3);
      } else {
        to.damage(2);
      }
      return this;
		},
  },
  {
    id: 98,
    name: 'Gnome',
    desc: '3 Damage. +1 Crypto',
    type: 'virus',
    cost: 2,
    image: '98_gnome.webp',
    special: {},
		effect: function effect(from, to) {
      to.damage(3);
      from.change('dataMiner', +1);
      return this;
		},
  },
  {
    id: 99,
    name: 'Berserker',
    desc: '8 Damage. 3 Damage to your data center',
    type: 'virus',
    cost: 4,
    image: '99_berserker.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(8);
      from.change('dataCenter', -3);
      return this;
		},
  },
  {
    id: 100,
    name: 'Warlord',
    desc: '13 Damage. You lose 3 Crypto',
    type: 'virus',
    cost: 13,
    image: '100_warlord.webp',
    special: {},
    effect: function effect(from, to) {
      to.damage(13);
      from.change('crypto', -3);
      return this;
		},
  },
  {
    id: 101,
    name: 'Pegasus Lancer',
    desc: '12 Damage to enemy Data center',
    type: 'virus',
    cost: 18,
    image: '101_pegasusLancer.webp',
    special: {},
    effect: function effect(from, to) {
      to.change('dataCenter', -12);
      return this;
		},
  },
];
