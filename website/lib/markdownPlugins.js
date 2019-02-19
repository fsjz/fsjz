'use strict';

const React= require('react');
const { markdownContainer, MarkdownBlock } = require('mdoc');
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;

function resumePlugins(md) {
    let image = '';
    md.use(markdownContainer, 'resume', {
        validate: function(params) {
            return params.trim().match(/^resume\s+(.*)$/);
        },
        content: function (tokens, idx) {
            const content = tokens[idx].markup;
            if (!image) {
                return renderToStaticMarkup(<MarkdownBlock>{content}</MarkdownBlock>);
            }
            return `
            <div class="resumeHeadContianer">
                <img src="${image}" class="resumeHeadLeft" />
                <div class="resumeHeadRight">
                    ${renderToStaticMarkup(<MarkdownBlock>{content}</MarkdownBlock>)}
                </div>
            </div>
            `;
        },
        render: function (tokens, idx) {
            const token = tokens[idx];
            image = '';
            if (token.nesting === 1) {
                let title = token.info.trim().match(/^resume\s+(.*)$/)[1];
                if (title.match(/.*!\(.*\)/)) {
                    image = title.replace(/.*!\((.*)\)/, '$1');
                    title = title.replace(/(.*)!\(.*\)/, '$1');
                }
                return `<dt><h5>${md.utils.escapeHtml(title)}</h5></dt><dd>`;
            } else {
                return `</dd>`;
            }
        },
    });
}

module.exports = [resumePlugins];
