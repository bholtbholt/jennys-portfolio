// This tab implementation considers everything with .js-tab a togglable tab
// .js-trigger-tab will make it _active

// Tabs will reset their state, apply the new state, and push it to the browser history

// Tab Trigger elements expect
// class: js-trigger-tab
//   - _active will be applied
// data-tab: the tab to make active
// data-path: the path to push to history.state
// data-title: the title of the path

// Tabs expect
// id: must correspond to trigger's data-tab
// class: js-tab
//   - _active will be applied

(() => {
  const tabs = Array.from(document.querySelectorAll('.js-tab'));
  const tabTriggers = Array.from(document.querySelectorAll('.js-trigger-tab'));

  function updateUrl(trigger) {
    const newPath = trigger.getAttribute('data-path');
    const pageTitle = trigger.getAttribute('data-title');

    window.history.pushState(newPath, pageTitle, newPath);
  }

  function activateTrigger(targetTrigger) {
    const activatingTrigger = tabTriggers.filter(trigger => trigger === targetTrigger)[0];
    activatingTrigger.classList.add('_active');
  }

  function activateTab(targetTab) {
    const activatingTab = tabs.filter(tab => tab.id === targetTab)[0];
    activatingTab.classList.add('_active');
  }

  function resetTabs() {
    tabs.forEach(tab => tab.classList.remove('_active'));
    tabTriggers.forEach(trigger => trigger.classList.remove('_active'));
  }

  function toggleActiveTab(e) {
    e.preventDefault();
    const trigger = e.target;
    const targetTab = trigger.getAttribute('data-tab');

    resetTabs();
    activateTab(targetTab);
    activateTrigger(trigger);
    updateUrl(trigger);
  }

  tabTriggers.forEach(trigger => trigger.addEventListener('click', toggleActiveTab));
  window.addEventListener('popstate', e => (window.location = e.state || '/'));
})();
