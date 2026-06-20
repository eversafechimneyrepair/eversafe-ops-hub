/**
 * EverSafe Operations Hub - Universal Master Navigation Router
 * Architecture: Self-Styling Dynamic Component Engine
 * Configured with optimized mobile spacing using the "Jobs" layout parameter
 */
window.addEventListener('DOMContentLoaded', function() {
    
    // 1. INJECT MASTER ECOSYSTEM STYLESHEET
    if (!document.getElementById('eversafe-master-nav-styles')) {
        var styleElement = document.createElement('style');
        styleElement.id = 'eversafe-master-nav-styles';
        styleElement.textContent = `
            .fixed-bottom-nav-bar { 
                position: fixed !important; 
                bottom: 0 !important; 
                left: 0 !important; 
                right: 0 !important; 
                background-color: #0f172a !important; 
                box-shadow: 0 -4px 12px rgba(0,0,0,0.15) !important; 
                height: 68px !important; 
                border-top: 1px solid #1e293b !important; 
                z-index: 99999 !important; 
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            }
            .nav-tabs-scroll { 
                display: flex !important; 
                width: 100% !important; 
                height: 100% !important; 
                justify-content: space-around !important; 
                align-items: center !important; 
                margin: 0 !important;
                padding: 0 !important;
            }
            a.nav-tab-btn, .nav-tab-btn { 
                display: flex !important; 
                flex-direction: column !important; 
                align-items: center !important; 
                justify-content: center !important; 
                flex: 1 !important; 
                height: 100% !important; 
                background: transparent !important; 
                border: none !important; 
                color: #94a3b8 !important; 
                font-size: 9px !important; 
                font-weight: bold !important; 
                text-transform: uppercase !important; 
                cursor: pointer !important; 
                gap: 2px !important; 
                text-decoration: none !important; 
                outline: none !important;
                box-shadow: none !important;
                margin: 0 !important;
                padding: 0 !important;
                -webkit-tap-highlight-color: transparent !important;
            }
            a.nav-tab-btn:hover, a.nav-tab-btn:visited, a.nav-tab-btn:active, a.nav-tab-btn:focus {
                text-decoration: none !important;
                color: #94a3b8 !important;
                outline: none !important;
            }
            .nav-tab-btn span { 
                font-size: 15px !important; 
                display: block !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            a.nav-tab-btn.active-tab { 
                color: #F28C28 !important; 
                background-color: rgba(255,255,255,0.03) !important; 
                text-decoration: none !important;
            }
            a.nav-tab-btn.active-tab:hover, a.nav-tab-btn.active-tab:visited {
                color: #F28C28 !important;
            }
        `;
        document.head.appendChild(styleElement);
    }

    // 2. DOM TARGET CONTAINER HOOK
    var navContainer = document.querySelector('.fixed-bottom-nav-bar');
    if (!navContainer) return;

    // 3. RUNTIME ROUTE DETECTION
    var currentPath = window.location.pathname;
    var currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || "index.html";

    // 4. UNIFIED COMPONENT MATRIX ARRAY (Optimized Spacing Schema)
    var tabs = [
        { link: "jobs.html", icon: "💼", label: "Jobs" },
        { link: "proposals.html", icon: "📊", label: "Options" },
        { link: "contract-wo.html", icon: "🛠️", label: "Review" },
        { link: "signatures.html", icon: "✍️", label: "Sign" },
        { link: "billing-invoice.html", icon: "🧾", label: "Billing" },
        { link: "inspection-l2.html", icon: "📋", label: "L2 Map" },
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
});
