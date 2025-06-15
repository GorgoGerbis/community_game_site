export interface HellDiversItem {
  id: number;
  name: string;
  type: 'primary' | 'secondary' | 'grenade' | 'armor' | 'stratagem';
  tier: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  image?: string;
  description?: string;
}

export const hellDiversItems: HellDiversItem[] = [
  // Primary Weapons - S Tier
  { id: 1, name: "Breaker", type: "primary", tier: "S", description: "Devastating close-range shotgun" },
  { id: 2, name: "Railgun", type: "primary", tier: "S", description: "High-damage precision weapon" },
  
  // Primary Weapons - A Tier  
  { id: 3, name: "Liberator", type: "primary", tier: "A", description: "Reliable assault rifle" },
  { id: 4, name: "Slugger", type: "primary", tier: "A", description: "Heavy-hitting marksman rifle" },
  { id: 5, name: "Scorcher", type: "primary", tier: "A", description: "Plasma-based energy weapon" },
  
  // Primary Weapons - B Tier
  { id: 6, name: "Punisher", type: "primary", tier: "B", description: "Pump-action shotgun" },
  { id: 7, name: "Diligence", type: "primary", tier: "B", description: "Semi-automatic rifle" },
  
  // Primary Weapons - C Tier
  { id: 8, name: "Defender", type: "primary", tier: "C", description: "SMG with high mobility" },
  
  // Secondary Weapons - S Tier
  { id: 9, name: "Verdict", type: "secondary", tier: "S", description: "High-damage revolver" },
  
  // Secondary Weapons - A Tier
  { id: 10, name: "Senator", type: "secondary", tier: "A", description: "Reliable sidearm" },
  { id: 11, name: "Redeemer", type: "secondary", tier: "A", description: "Automatic pistol" },
  
  // Secondary Weapons - B Tier
  { id: 12, name: "Peacemaker", type: "secondary", tier: "B", description: "Standard-issue pistol" },
  
  // Grenades - S Tier
  { id: 13, name: "Impact Grenade", type: "grenade", tier: "S", description: "Explodes on contact" },
  
  // Grenades - A Tier
  { id: 14, name: "Frag Grenade", type: "grenade", tier: "A", description: "Standard explosive" },
  { id: 15, name: "Stun Grenade", type: "grenade", tier: "A", description: "Crowd control utility" },
  
  // Grenades - B Tier
  { id: 16, name: "Incendiary Grenade", type: "grenade", tier: "B", description: "Area denial fire damage" },
  
  // Armor - S Tier
  { id: 17, name: "Heavy Armor", type: "armor", tier: "S", description: "Maximum protection" },
  
  // Armor - A Tier
  { id: 18, name: "Medium Armor", type: "armor", tier: "A", description: "Balanced protection and mobility" },
  
  // Armor - B Tier
  { id: 19, name: "Light Armor", type: "armor", tier: "B", description: "High mobility, low protection" },
  
  // Stratagems - S Tier
  { id: 20, name: "Orbital Laser", type: "stratagem", tier: "S", description: "Devastating orbital strike" },
  { id: 21, name: "Reinforcements", type: "stratagem", tier: "S", description: "Call in backup divers" },
  
  // Stratagems - A Tier
  { id: 22, name: "Supply Drop", type: "stratagem", tier: "A", description: "Ammo and health resupply" },
  { id: 23, name: "Smoke Barrage", type: "stratagem", tier: "A", description: "Area concealment" },
  
  // Stratagems - B Tier
  { id: 24, name: "Cluster Bomb", type: "stratagem", tier: "B", description: "Wide area damage" },
  { id: 25, name: "Strafing Run", type: "stratagem", tier: "B", description: "Air support attack" },
];

export const tierColors = {
  S: 'bg-red-600',
  A: 'bg-orange-500', 
  B: 'bg-yellow-500',
  C: 'bg-green-500',
  D: 'bg-blue-500',
  F: 'bg-purple-600'
};

export const categories = ['primary', 'secondary', 'grenade', 'armor', 'stratagem'] as const; 