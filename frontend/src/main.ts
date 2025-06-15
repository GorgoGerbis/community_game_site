import './style.css'
import { hellDiversItems, tierColors, categories, type HellDiversItem } from './data.ts'

// main app container
const app = document.querySelector<HTMLDivElement>('#app')!

// current selected category
let currentCategory: string = 'primary'

// tier list component
function createTierList(items: HellDiversItem[]): string {
  const tiers = ['S', 'A', 'B', 'C', 'D', 'F'] as const
  
  return tiers.map(tier => {
    const tierItems = items.filter(item => item.tier === tier)
    
    return `
      <div class="tier-row flex flex-col md:flex-row items-start gap-4 p-4 border-b border-gray-700">
        <div class="tier-label w-16 h-16 ${tierColors[tier]} flex items-center justify-center rounded-lg flex-shrink-0">
          <span class="text-white font-bold text-xl">${tier}</span>
        </div>
        <div class="items-grid flex flex-wrap gap-2 flex-1 min-h-[4rem]">
          ${tierItems.map(item => `
            <div class="item-card bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-600 transition-colors cursor-pointer" style="padding: 16px 20px;">
              <div class="font-medium text-sm">${item.name}</div>
              <div class="text-xs text-gray-400 mt-1">${item.description || ''}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `
  }).join('')
}

// category selector
function createCategorySelector(): string {
  return `
    <div class="category-selector flex flex-wrap gap-2 mb-6">
      ${categories.map(category => `
        <button 
          class="category-btn px-4 py-2 rounded-lg font-medium transition-colors ${
            currentCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }"
          data-category="${category}"
        >
          ${category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      `).join('')}
    </div>
  `
}

// render the app
function render() {
  const filteredItems = hellDiversItems.filter(item => item.type === currentCategory)
  
  app.innerHTML = `
    <div class="hell-divers-tier-list">
      <header class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-2">Hell Divers 2</h1>
        <h2 class="text-2xl text-blue-400 mb-4">Community Tier List</h2>
        <p class="text-gray-400">Democracy's finest weapons and equipment, ranked by the community</p>
      </header>
      
      ${createCategorySelector()}
      
      <div class="tier-list bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-bold mb-4 capitalize">${currentCategory} Weapons</h3>
        ${createTierList(filteredItems)}
      </div>
      
      <footer class="text-center mt-8 text-gray-500">
        <p>🦅 For Super Earth! 🦅</p>
      </footer>
    </div>
  `
  
  // add event listeners
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.target as HTMLButtonElement
      currentCategory = target.dataset.category || 'primary'
      render()
    })
  })
}

// initial render
render()
