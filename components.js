export const createValuePropCard = (title, description, icon) => {
    return `
        <div class="glass-card p-8 rounded-[2rem] border-white/10 group hover:border-white/30 transition-all duration-500">
            <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <i data-lucide="${icon}" class="w-6 h-6 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 tracking-tight">${title}</h3>
            <p class="text-gray-400 leading-relaxed text-sm">${description}</p>
        </div>
    `;
};

export const createBlueprintNavItem = (bp, isActive = false) => {
    return `
        <div class="blueprint-nav-item ${isActive ? 'active' : ''}" data-blueprint-id="${bp.id}" data-blueprint-index="${bp.number - 1}">
            <span class="nav-number">${String(bp.number).padStart(2, '0')}</span>
            <span class="nav-title">${bp.name}</span>
            <span class="nav-tagline">${bp.tagline}</span>
        </div>
    `;
};

export const createBlueprintDisplay = (bp) => {
    const priceDisplay = bp.price === 'Custom' ? 'Custom Quote' : bp.price;
    return `
        <div class="scan-line"></div>
        
        <div class="display-header">
            <h3 class="display-title" id="blueprint-title">${bp.name.toUpperCase()} BLUEPRINT</h3>
            <p class="display-description">${bp.description}</p>
            ${bp.timeline ? `<p class="display-timeline"><strong>Timeline:</strong> ${bp.timeline}</p>` : ''}
        </div>
        
        <div class="hours-grid">
            <div class="hours-box">
                <div class="hours-label">Our Blueprint</div>
                <div class="hours-value">${bp.comparison.blueprint_hours} Hours</div>
            </div>
            <div class="hours-box">
                <div class="hours-label">Manual Approach</div>
                <div class="hours-value manual">${bp.comparison.manual_hours} Hours</div>
            </div>
        </div>
        
        <ul class="feature-list" id="blueprint-features">
            ${bp.deliverables.map(d => `<li>${d}</li>`).join('')}
        </ul>
        
        <div class="display-footer">
            <div class="display-price">${priceDisplay}</div>
            <a href="https://app.apollo.io/#/meet/managed-meetings/eddie/hor-57g-ivh/start" target="_blank" rel="noopener noreferrer" class="display-cta">
                Book Strategy Call
            </a>
        </div>
    `;
};

export const createPricingCard = (pkg) => {
    const isPopular = pkg.popular;
    const isCustom = pkg.price === 'Custom';
    return `
        <div class="glass-card p-8 rounded-[2.5rem] flex flex-col h-full ${isPopular ? 'border-white/30 scale-[1.02] z-10' : 'border-white/10'}">
            ${isPopular ? '<div class="bg-white text-black text-[9px] font-black px-3 py-1 rounded-full uppercase self-start mb-6 tracking-widest">Most Popular</div>' : ''}
            <h3 class="text-xl font-bold mb-1 tracking-tight">${pkg.name}</h3>
            <p class="text-xs text-white/40 font-black uppercase tracking-wider mb-3">${pkg.tagline}</p>
            <div class="mb-5">
                <span class="text-3xl font-black">${isCustom ? 'Custom' : pkg.price}</span>
            </div>
            <p class="text-gray-400 text-sm mb-5">${pkg.description}</p>
            ${pkg.savings ? `<p class="text-xs text-green-400 font-bold mb-5">${pkg.savings}</p>` : ''}
            <ul class="space-y-3 mb-8 flex-grow">
                ${pkg.includes.map(inc => `
                    <li class="flex items-start gap-2 text-sm text-gray-300">
                        <i data-lucide="check" class="w-4 h-4 text-white shrink-0 mt-0.5"></i>
                        <span>${inc}</span>
                    </li>
                `).join('')}
            </ul>
            <a href="https://app.apollo.io/#/meet/managed-meetings/eddie/hor-57g-ivh/start" target="_blank" rel="noopener noreferrer" class="w-full py-4 rounded-xl ${isPopular ? 'bg-white text-black' : 'bg-white/5 border border-white/10 hover:bg-white/10'} font-black text-xs uppercase tracking-widest transition-all block text-center">
                Book Strategy Call
            </a>
        </div>
    `;
};

export const createStatItem = (stat) => {
    return `
        <div class="text-center">
            <div class="text-4xl font-black mb-2 tracking-tighter">
                ${stat.prefix || ''}<span class="stat-counter" data-target="${stat.value}">0</span>${stat.suffix || ''}
            </div>
            <div class="text-[9px] uppercase font-black tracking-[0.3em] text-white/40">${stat.metric}</div>
        </div>
    `;
};
