/**
 * Created by tudor on 13/03/15.
 */

var psiResults = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0.1417,
                "urlBlocks": [
                    {
                        "header": {
                            "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                            "args": [
                                {
                                    "type": "BYTES",
                                    "value": "1.3KiB"
                                },
                                {
                                    "type": "INT_LITERAL",
                                    "value": "0"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Minifying $1 could save $2 ($3% reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "value": "717B"
                                        },
                                        {
                                            "type": "INT_LITERAL",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying $1 could save $2 ($3% reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "value": "http://www.gmodules.com/ig/proxy?url=http%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "value": "258B"
                                        },
                                        {
                                            "type": "INT_LITERAL",
                                            "value": "0"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "SpriteImages": {
                "localizedRuleName": "Combine images into CSS sprites",
                "ruleImpact": 0
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 11
    }
};

function ruleList(results) {
    var rules = [];
    var keys = Object.keys(results.formattedResults.ruleResults);
    for (var key in keys) {
        var rule = results.formattedResults.ruleResults[keys[key]];
        rules.push(rule.localizedRuleName);
    }

    return rules;
}

function contains(string, substring) {
    return string.indexOf(substring) > 0;
}

function isNumber(num) {
    return !isNaN(num);
}

function totalBytes(results) {
    var total = 0;
    var keys = Object.keys(results.pageStats);
    for (var key in keys) {
        var keyName = keys[key];
        var value = results.pageStats[keys[key]];
        if (contains(keyName, "Bytes") && isNumber(value)) {
            total += +value;
        }
    }

    return total;
}

console.log(totalBytes(psiResults));