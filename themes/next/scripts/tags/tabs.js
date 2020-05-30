/**
 * tabs.js | https://theme-next.js.org/docs/tag-plugins/tabs
 */

/* global hexo */

'use strict';

function postTabs(args, content) {
  const tabBlock = /<!--\s*tab (.*?)\s*-->\n([\w\W\s\S]*?)<!--\s*endtab\s*-->/g;

  args = args.join(' ').split(',');
  const tabName = args[0];
  const tabActive = Number(args[1]) || 0;

  const matches = [];
  let match;
  let tabId = 0;
  let tabNav = '';
  let tabContent = '';

  !tabName && hexo.log.warn('Tabs block must have unique name!');

  while ((match = tabBlock.exec(content)) !== null) {
    matches.push(match[1]);
    matches.push(match[2]);
  }

  for (let i = 0; i < matches.length; i += 2) {
    const tabParameters = matches[i].split('@');
    let postContent   = matches[i + 1];
    let tabCaption    = tabParameters[0] || '';
    let tabIcon       = tabParameters[1] || '';
    let tabHref       = '';

    postContent = hexo.render.renderSync({text: postContent, engine: 'markdown'}).trim();

    tabId++;
    tabHref = (tabName + ' ' + tabId).toLowerCase().split(' ').join('-');

    ((tabCaption.length === 0) && (tabIcon.length === 0)) && (tabCaption = tabName + ' ' + tabId);

    const isOnlyicon = tabIcon.length > 0 && tabCaption.length === 0 ? ' style="text-align: center;"' : '';
    let icon = tabIcon.trim();
    if (!icon.startsWith('fa')) icon = 'fa fa-' + icon;
    tabIcon.length > 0 && (tabIcon = `<i class="${icon}"${isOnlyicon}></i>`);

    const isActive = (tabActive > 0 && tabActive === tabId) || (tabActive === 0 && tabId === 1) ? ' active' : '';
    tabNav += `<li class="tab${isActive}"><a href="#${tabHref}">${tabIcon + tabCaption.trim()}</a></li>`;
    tabContent += `<div class="tab-pane${isActive}" id="${tabHref}">${postContent}</div>`;
  }

  tabNav = `<ul class="nav-tabs">${tabNav}</ul>`;
  tabContent = `<div class="tab-content">${tabContent}</div>`;

  return `<div class="tabs" id="${tabName.toLowerCase().split(' ').join('-')}">${tabNav + tabContent}</div>`;
}

hexo.extend.tag.register('tabs', postTabs, {ends: true});
hexo.extend.tag.register('subtabs', postTabs, {ends: true});
hexo.extend.tag.register('subsubtabs', postTabs, {ends: true});
