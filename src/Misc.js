const DBD_WIKI_PREFIX = 'https://deadbydaylight-es.gamepedia.com/';
const DBD_WIKI_SOS_PAGE = DBD_WIKI_PREFIX + 'Santuario_de_los_Secretos';
const DBD_WIKI_API = DBD_WIKI_PREFIX + 'api.php';
const REPORT_ISSUE_LINK = 'https://github.com/DalveenLeandor/discord-dbd-shrine-of-secrets';
const LOCALE_LINK = 'https://github.com/DalveenLeandor/discord-dbd-shrine-of-secrets/tree/master/locale';

function getWikiURL(pageName) {
    return DBD_WIKI_PREFIX + pageName.split(' ').join('_');
}

function hyperlinkMarkdown(text, link) {
    return '[ ' + text + ']' + '(' + link + ')';
}

module.exports = { DBD_WIKI_PREFIX, DBD_WIKI_SOS_PAGE, REPORT_ISSUE_LINK, LOCALE_LINK, DBD_WIKI_API, getWikiURL, hyperlinkMarkdown };
