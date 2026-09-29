const sidebarToggle = document.querySelector('#sidebar-toggle');
const sidebar = document.querySelector('#guide-sidebar');

function setSidebarOpen(isOpen) {
    document.body.classList.toggle('sidebar-open', isOpen);
    sidebarToggle.setAttribute('aria-expanded', String(isOpen));
    sidebarToggle.textContent = isOpen ? 'Close guide menu' : 'Open guide menu';
}

sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebarToggle.getAttribute('aria-expanded') === 'true';
    setSidebarOpen(!isOpen);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('sidebar-open')) {
        setSidebarOpen(false);
    }
});

document.addEventListener('click', (event) => {
    if (document.body.classList.contains('sidebar-open') && !sidebar.contains(event.target) && event.target !== sidebarToggle) {
        setSidebarOpen(false);
    }
});