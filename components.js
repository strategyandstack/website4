export const createValuePropCard = (title, description, icon) => {
    return `
        <div class="glass-card p-8 rounded-[1rem] border-white/10 group hover:border-white/30 transition-all duration-500">
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
            <h3 class="display-title animate-element" data-animate="scramble">${bp.name.toUpperCase()} BLUEPRINT</h3>
            <p class="display-description animate-element" data-animate="fade">${bp.description}</p>
            ${bp.timeline ? `<p class="display-timeline animate-element" data-animate="fade"><strong>Timeline:</strong> ${bp.timeline}</p>` : ''}
        </div>
        
        <div class="hours-grid">
            <div class="hours-box animate-element" data-animate="slide">
                <div class="hours-label">Our Blueprint</div>
                <div class="hours-value" data-animate="count" data-value="${bp.comparison.blueprint_hours}">${bp.comparison.blueprint_hours} Hours</div>
            </div>
            <div class="hours-box animate-element" data-animate="slide">
                <div class="hours-label">Manual Approach</div>
                <div class="hours-value manual" data-animate="count" data-value="${bp.comparison.manual_hours}">${bp.comparison.manual_hours} Hours</div>
            </div>
        </div>
        
        <ul class="feature-list" id="blueprint-features">
            ${bp.deliverables.map((d, i) => `<li class="animate-element" data-animate="fade" style="animation-delay: ${i * 50}ms">${d}</li>`).join('')}
        </ul>
        
        <div class="display-footer animate-element" data-animate="fade">
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
        <div class="glass-card p-8 rounded-[1.25rem] flex flex-col h-full ${isPopular ? 'border-white/30 relative z-10' : 'border-white/10'}">
            <!-- Header section - fixed height -->
            <div class="mb-6" style="min-height: 90px;">
                ${isPopular ? '<div class="bg-white text-black text-[9px] font-black px-3 py-1 rounded-full uppercase inline-block mb-4 tracking-widest">Most Popular</div>' : '<div class="h-6 mb-4"></div>'}
                <h3 class="text-xl font-bold mb-1 tracking-tight">${pkg.name}</h3>
                <p class="text-xs text-white/40 font-black uppercase tracking-wider">${pkg.tagline}</p>
            </div>
            
            <!-- Price section -->
            <div class="mb-4">
                <span class="text-3xl font-black">${isCustom ? 'Custom' : pkg.price}</span>
            </div>
            
            <!-- Description -->
            <p class="text-gray-400 text-sm mb-4" style="min-height: 40px;">${pkg.description}</p>
            
            <!-- Savings badge -->
            <div class="mb-6" style="min-height: 20px;">
                ${pkg.savings ? `<p class="text-xs text-green-400 font-bold">${pkg.savings}</p>` : ''}
            </div>
            
            <!-- Features list - grows to fill space -->
            <ul class="space-y-3 mb-8 flex-grow">
                ${pkg.includes.map(inc => `
                    <li class="flex items-start gap-2 text-sm text-gray-300">
                        <i data-lucide="check" class="w-4 h-4 text-white shrink-0 mt-0.5"></i>
                        <span>${inc}</span>
                    </li>
                `).join('')}
            </ul>
            
            <!-- CTA button - always at bottom -->
            <a href="https://app.apollo.io/#/meet/managed-meetings/eddie/hor-57g-ivh/start" target="_blank" rel="noopener noreferrer" class="w-full py-4 rounded-lg ${isPopular ? 'bg-white text-black' : 'bg-white/5 border border-white/10 hover:bg-white/10'} font-black text-xs uppercase tracking-widest transition-all block text-center mt-auto">
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

export const createRoadmapItem = (step, idx) => {
    return `
        <div class="roadmap-item flex md:items-center gap-6 group relative" data-index="${idx}">
            <div class="roadmap-number flex-shrink-0 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-white text-lg">
                ${idx + 1}
            </div>
            <div class="flex-grow glass-card p-6 md:p-8 rounded-[1.25rem] border-white/5 group-hover:border-white/20 transition-all duration-500">
                <p class="text-base font-bold tracking-tight">${step}</p>
            </div>
        </div>
    `;
};
