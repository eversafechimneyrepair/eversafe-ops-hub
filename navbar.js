/**
 * EverSafe Hub - Dynamic Shared Navigation Component Matrix
 */
window.addEventListener('DOMContentLoaded', function() {
    var navContainer = document.querySelector('.fixed-bottom-nav-bar');
    if (!navContainer) return;

    // Detect the current file name from the URL path profile
    var currentFile = window.location.pathname.split("/").pop() || "index.html";

    var tabs = [
        { link: "proposals.html", icon: "📊", label: "Proposals" },
        { link: "contract-wo.html", icon: "🛠️", label: "Contract" },
        { link: "signatures.html", icon: "✍️", label: "Sign" },
        { link: "billing-invoice.html", icon: "🧾", label: "Billing" },
        { link: "inspection-l2.html", icon: "📋", label: "L2 Map" },
        { link: "dispatches.html", icon: "📁", label: "Vault" }
    ];

    var navHtml = '<div class="nav-tabs-scroll">';
    tabs.forEach(function(tab) {
        var isActive = (currentFile === tab.link) ? ' active-tab' : '';
        navHtml += '<a href="' + tab.link + '" class="nav-tab-btn' + isActive + '">' +
                   '<span>' + tab.icon + '</span>' + tab.label + '</a>';
    });
    navHtml += '</div>';

    navContainer.innerHTML = navHtml;
});
