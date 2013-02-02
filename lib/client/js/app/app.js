window.App = window.App || {};

window.JST = {};
window.JST.escapeExpression = Handlebars.Utils.escapeExpression;

App.template = function (name, data) {
    return JST[name](data);
}