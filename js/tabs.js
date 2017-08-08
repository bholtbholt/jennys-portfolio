const tabs = Array.from(document.querySelectorAll('.js-tab'));
const tabTriggers = Array.from(document.querySelectorAll('.js-trigger-tab'));

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
  const trigger = e.target;
  const targetTab = trigger.getAttribute('data-tab');

  resetTabs();
  activateTab(targetTab);
  activateTrigger(trigger);
}

tabTriggers.forEach(trigger => trigger.addEventListener('click', toggleActiveTab));
