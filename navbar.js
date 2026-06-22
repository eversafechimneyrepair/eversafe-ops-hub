/**
 * EverSafe Operations Hub - Universal Slider Navigation Router
 * Version: 8.5.1 Production Complete (Sanitized)
 * Engineering Focus: Fluid Mobile Elastic Scroll with Even Desktop Distribution Overrides
 */
window.addEventListener('DOMContentLoaded', function() {
    
    // 1. INJECT HARDWARE-ACCELERATED DUAL-PROFILE STYLES
    if (!document.getElementById('eversafe-master-nav-styles')) {
        var styleElement = document.createElement('style');
        styleElement.id = 'eversafe-master-nav-styles';
        styleElement.textContent = 
            '.fixed-bottom-nav-bar { ' +
                'position: fixed !important; ' +
                'bottom: 0 !important; ' +
                'left: 0 !important; ' +
                'right: 0 !important; ' +
                'background-color: #0f172a !important; ' +
                'box-shadow: 0 -6px 20px rgba(0,0,0,0.25) !important; ' +
                'height: 68px !important; ' +
                'border-top: 1px solid #1e293b !important; ' +
                'z-index: 99999 !important; ' +
                'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;' +
            '}' +
            '.nav-tabs-scroll { ' +
                'display: flex !important; ' +
                'width: 100% !important; ' +
                'height: 100% !important; ' +
                'justify-content: flex-start !important; ' +
                'align-items: center !important; ' +
                'margin: 0 !important;' +
                'padding: 0 16px !important; ' +
                'overflow-x: auto !important; ' +
                'white-space: nowrap !important;' +
                '-webkit-overflow-scrolling: touch !important; ' +
                'scrollbar-width: none !important; ' +
            '}' +
            '.nav-tabs-scroll::-webkit-scrollbar { ' +
                'display: none !important; ' +
                'width: 0 !important;' +
                'height: 0 !important;' +
            '}' +
            'a.nav-tab-btn, .nav-tab-btn { ' +
                'display: flex !important; ' +
                'flex-direction: column !important; ' +
                'align-items: center !important; ' +
                'justify-content: center !important; ' +
                'flex: 0 0 76px !important; ' +
                'height: 100% !important; ' +
                'background: transparent !important; ' +
                'border: none !important; ' +
                'color: #94a3b8 !important; ' +
                'font-size: 9.5px !important; ' +
                'font-weight: bold !important; ' +
                'text-transform: uppercase !important; ' +
                'cursor: pointer !important; ' +
                'gap: 3px !important; ' +
                'text-decoration: none !important; ' +
                'outline: none !important;' +
                'box-shadow: none !important;' +
                'padding: 0 !important;' +
                '-webkit-tap-highlight-color: transparent !important;' +
            '}' +
            'a.nav-tab-btn:hover, a.nav-tab-btn:visited, a.nav-tab-btn:active, a.nav-tab-btn:focus { ' +
                'text-decoration: none !important;' +
                'color: #94a3b8 !important;' +
                'outline: none !important;' +
            '}' +
            '.nav-tab-btn span { ' +
                'font-size: 16px !important; ' +
                'display: block !important;' +
                'margin: 0 !important;' +
                'padding: 0 !important;' +
            '}' +
            'a.nav-tab-btn.active-tab { ' +
                'color: #F28C28 !important; ' +
                'background-color: rgba(255,255,255,0.02) !important; ' +
                'text-decoration: none !important;' +
            '}' +
            'a.nav-tab-btn.active-tab:hover, a.nav-tab-btn.active-tab:visited { ' +
                'color: #F28C28 !important;' +
            '}' +
            '@media (min-width: 850px) { ' +
                '.nav-tabs-scroll { ' +
                    'justify-content: space-around !important; ' +
                    'overflow-x: visible !important;' +
                    'max-width: 1200px !important;' +
                    'margin: 0 auto !important; ' +
                '}' +
                'a.nav-tab-btn, .nav-tab-btn { ' +
                    'flex: 1 1 auto !important; ' +
                    'max-width: 110px !important; ' +
                '}' +
            '}';
        document.head.appendChild(styleElement);
    }

    // 2. TARGET CONTAINER HOOK
    var navContainer = document.querySelector('.fixed-bottom-nav-bar');
    if (!navContainer) return;

    // 3. RUNTIME ROUTE DETECTION
    var currentPath = window.location.pathname;
    var currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || "index.html";

    // 4. UNIFIED 10-NODE PIPELINE MATRIX MAP
    var tabs = [
        { link: "jobs.html", icon: "💼", label: "Jobs" },
        { link: "inspection-l1.html", icon: "📑", label: "L1 Map" },
        { link: "inspection-l2.html", icon: "📋", label: "L2 Map" },
        { link: "proposals.html", icon: "📊", label: "Options" },
        { link: "estimate.html", icon: "🧮", label: "Estimate" },   
        { link: "contract-wo.html", icon: "📜", label: "Contract" },  
        { link: "signatures.html", icon: "✍️", label: "Sign" },
        { link: "billing-invoice.html", icon: "🧾", label: "Billing" },
        { link: "dispatches.html", icon: "📁", label: "Vault" },     
        { link: "vault-upload.html", icon: "📷", label: "Camera" }
    ];

    // 5. ASSEMBLE REFRACTORED DOM STRINGS
    var navHtml = '<div class="nav-tabs-scroll">';
    tabs.forEach(function(tab) {
        var isActive = (currentFile === tab.link) ? ' active-tab' : '';
        navHtml += '<a href="' + tab.link + '" class="nav-tab-btn' + isActive + '">' +
                   '<span>' + tab.icon + '</span>' + tab.label + '</a>';
    });
    navHtml += '</div>';

    // 6. EXECUTE GRAPHICAL INJECTION
    navContainer.innerHTML = navHtml;
    
    // 7. AUTO-CENTER SMART FOCUS (Mobile Viewports Only)
    if (window.innerWidth < 850) {
        setTimeout(function() {
            var activeElement = navContainer.querySelector('.active-tab');
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }, 120);
    }
});
