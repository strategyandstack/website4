export const createValuePropCard = (title, description, icon) => {
    return `
        <div class="glass-card p-6 rounded-xl border-white/10 group hover:border-white/20 transition-all duration-500 section-reveal">
            <div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform">
                <i data-lucide="${icon}" class="w-5 h-5 text-white"></i>
            </div>
            <h3 class="text-lg font-bold mb-2 tracking-tight">${title}</h3>
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
    const maxHours = 200;
    const blueprintPercent = bp.comparison.blueprint_hours ? (bp.comparison.blueprint_hours / maxHours) * 100 : 0;
    const manualPercent = bp.comparison.manual_hours ? (bp.comparison.manual_hours / maxHours) * 100 : 0;
    
    const hoursHtml = bp.comparison.blueprint_hours && bp.comparison.manual_hours ? `
        <div class="hours-comparison">
            <div class="hours-row">
                <span class="hours-label">Our Blueprint</span>
                <div class="hours-bar-container">
                    <div class="hours-bar blueprint" style="width: 0%" data-width="${blueprintPercent}%"></div>
                </div>
                <span class="hours-value">${bp.comparison.blueprint_hours} hrs</span>
            </div>
            <div class="hours-row">
                <span class="hours-label">Manual</span>
                <div class="hours-bar-container">
                    <div class="hours-bar manual" style="width: 0%" data-width="${manualPercent}%"></div>
                </div>
                <span class="hours-value manual">${bp.comparison.manual_hours}+ hrs</span>
            </div>
        </div>
    ` : `
        <div class="hours-comparison">
            <div class="hours-row">
                <span class="hours-label">Time</span>
                <div class="hours-bar-container">
                    <div class="hours-bar blueprint" style="width: 100%"></div>
                </div>
                <span class="hours-value">Automated</span>
            </div>
        </div>
    `;
    
    return `
        <div class="blueprint-lightbar"></div>
        <div class="scan-line"></div>
        
        <div class="display-header">
            <h3 class="display-title">${bp.name.toUpperCase()} BLUEPRINT</h3>
            <p class="display-description">${bp.description}</p>
            ${bp.timeline ? `<p class="display-timeline"><strong>Timeline:</strong> ${bp.timeline}</p>` : ''}
        </div>
        
        ${hoursHtml}
        
        <ul class="feature-list">
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

export const createBlueprintAccordion = (blueprints) => {
    return `
        <div class="blueprint-accordion">
            ${blueprints.map((bp, index) => {
                const priceDisplay = bp.price === 'Custom' ? 'Custom' : bp.price;
                const hoursHtml = bp.comparison.blueprint_hours && bp.comparison.manual_hours ? `
                    <div class="mobile-hours">
                        <div class="mobile-hours-row">
                            <span class="text-xs text-white/40 uppercase tracking-wider font-bold">Our Blueprint</span>
                            <span class="text-sm font-bold">${bp.comparison.blueprint_hours} hrs</span>
                        </div>
                        <div class="mobile-hours-row">
                            <span class="text-xs text-white/40 uppercase tracking-wider font-bold">Manual Approach</span>
                            <span class="text-sm font-bold text-white/40">${bp.comparison.manual_hours}+ hrs</span>
                        </div>
                    </div>
                ` : '';
                
                return `
                    <div class="blueprint-accordion-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                        <div class="blueprint-accordion-header">
                            <div class="accordion-title-wrap">
                                <span class="accordion-number">${String(bp.number).padStart(2, '0')}</span>
                                <span class="accordion-title">${bp.name}</span>
                            </div>
                            <div class="accordion-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div class="blueprint-accordion-content">
                            <div class="accordion-inner">
                                <p class="text-sm text-white/50 mb-4 leading-relaxed">${bp.description}</p>
                                ${bp.timeline ? `<p class="text-xs text-white/40 mb-4"><strong class="text-white/50">Timeline:</strong> ${bp.timeline}</p>` : ''}
                                ${hoursHtml}
                                <ul class="space-y-2 mb-4">
                                    ${bp.deliverables.map(d => `
                                        <li class="flex items-start gap-2 text-xs text-white/50">
                                            <span class="text-white/30">→</span>
                                            ${d}
                                        </li>
                                    `).join('')}
                                </ul>
                                <div class="flex items-center justify-between pt-4 border-t border-white/5">
                                    <span class="text-lg font-bold">${priceDisplay}</span>
                                    <a href="https://app.apollo.io/#/meet/managed-meetings/eddie/hor-57g-ivh/start" target="_blank" rel="noopener noreferrer" class="bg-white text-black px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wide">
                                        Book Call
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
};

export const createPricingCard = (pkg) => {
    const isPopular = pkg.popular;
    const isCustom = pkg.price === 'Custom';
    
    return `
        <div class="pricing-card ${isPopular ? 'popular' : ''}">
            ${isPopular ? `
                <div class="popular-badge">
                    <span>Most Popular</span>
                </div>
            ` : '<div style="height: 38px;"></div>'}
            
            <div class="pricing-header">
                <div class="pricing-name">${pkg.name}</div>
                <div class="pricing-tagline">${pkg.tagline}</div>
            </div>
            
            <div class="pricing-price">${isCustom ? 'Custom' : pkg.price}</div>
            
            <p class="pricing-description">${pkg.description}</p>
            
            <div class="pricing-savings">${pkg.savings || ''}</div>
            
            <ul class="pricing-features">
                ${pkg.includes.map(inc => `
                    <li>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>${inc}</span>
                    </li>
                `).join('')}
            </ul>
            
            <a href="https://app.apollo.io/#/meet/managed-meetings/eddie/hor-57g-ivh/start" target="_blank" rel="noopener noreferrer" class="pricing-cta ${isPopular ? 'primary' : 'secondary'}">
                Book Strategy Call
            </a>
        </div>
    `;
};

export const createStatItem = (stat) => {
    return `
        <div class="stat-item text-center">
            <div class="text-3xl md:text-4xl font-black mb-1 tracking-tighter">
                ${stat.prefix || ''}<span class="stat-counter" data-target="${stat.value}">0</span>${stat.suffix || ''}
            </div>
            <div class="text-[9px] uppercase font-black tracking-[0.25em] text-white/40">${stat.metric}</div>
        </div>
    `;
};

export const createRoadmapItem = (step, idx) => {
    return `
        <div class="roadmap-item flex items-start md:items-center gap-5 group" data-index="${idx}">
            <div class="roadmap-number flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-black text-white text-base">
                ${idx + 1}
            </div>
            <div class="flex-grow glass-card p-5 md:p-6 rounded-xl border-white/5 group-hover:border-white/15 transition-all duration-500">
                <p class="text-sm font-bold tracking-tight">${step}</p>
            </div>
        </div>
    `;
};

export const createFaqItem = (item, index) => {
    return `
        <details class="faq-item" data-index="${index}">
            <summary class="faq-summary">
                <span>${item.question}</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </summary>
            <div class="faq-content">
                ${item.answer}
            </div>
        </details>
    `;
};
